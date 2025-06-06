'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactInternationalPhone = require('react-international-phone');
var utils = require('@dynamic-labs/utils');
var useThrottle = require('../../../shared/utils/hooks/useThrottle/useThrottle.cjs');
var localStorage = require('../../../utils/constants/localStorage.cjs');
var modulo = require('../../../utils/functions/modulo/modulo.cjs');
var parseDefaultCountry = require('../utils/parseDefaultCountry/parseDefaultCountry.cjs');

const MENU_DISPLAY_THROTTLE = 50;
const COUNTRY_INPUT_SCROLL_DELAY = 20;
const usePhoneInputLogic = ({ countryInputRef, setCountryDropdownOpen, setInvalidNumberMessage, onUpdate, initialPhone, countries, defaultIso2, }) => {
    const onUpdateRef = React.useRef(onUpdate);
    onUpdateRef.current = onUpdate;
    const defaultCountry = React.useMemo(() => parseDefaultCountry.parseDefaultCountry({
        countries,
        defaultIso2,
        initialPhone,
    }), [countries, defaultIso2, initialPhone]);
    const { inputValue: formattedPhone, phone, country: currentCountry, setCountry: setSelectedCountry, handlePhoneValueChange: handlePhoneInput, inputRef, } = reactInternationalPhone.usePhoneInput({
        countries,
        defaultCountry: defaultCountry.iso2,
        disableDialCodeAndPrefix: true,
        value: initialPhone,
    });
    /** What is currently displayed on the country input */
    const [countryInput, setCountryInput] = React.useState(defaultCountry.dialCode);
    /**
     * This is the same value as phone, except for the following scenario:
     * Since the phone number field hides the "+" char and the country code, when the field
     * looks empty, it actually still has these values in there. But we want the user to be able to
     * set the phone value to the actual empty ("") string.
     * So when the phone has nothing but the "+" char and the country code, this value will be empty.
     */
    const phoneOrEmptyString = React.useMemo(() => phone.length === ('+' + currentCountry.dialCode).length ? '' : phone, [currentCountry.dialCode, phone]);
    // Justification for effect:
    // Since the library controls the states, we can't call this callback inside the setters.
    // We could wrap setCountry and handlePhoneInput, but that only accounts for
    // country and phone, not formattedPhone.
    React.useEffect(() => {
        var _a;
        (_a = onUpdateRef.current) === null || _a === void 0 ? void 0 : _a.call(onUpdateRef, {
            country: currentCountry,
            formattedPhone,
            phone: phoneOrEmptyString,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentCountry.iso2, formattedPhone, phoneOrEmptyString]);
    // =================================================================
    // DROPDOWN
    // =================================================================
    /** String to filter the countries with */
    // Even though this value is similar to countryInput, it needs to differ for a specific scenario:
    // The user inputs a value (say 55) and then starts cycling with the arrow keys.
    // If we were using the countryInput to filter the list, that filter would change with each new country.
    const [filterQuery, setFilterQuery] = React.useState('');
    /** List of countries, but filtered by the current input */
    const filteredCountries = React.useMemo(() => {
        if (!filterQuery)
            return countries;
        // If input is a country name
        if (isNaN(parseInt(filterQuery)))
            return countries.filter((countryData) => {
                const { name, iso2 } = reactInternationalPhone.parseCountry(countryData);
                return (name.toLowerCase().includes(filterQuery.toLowerCase()) ||
                    iso2 === filterQuery.toLowerCase() ||
                    currentCountry.iso2 === iso2);
            });
        return countries.filter((countryData) => {
            const { dialCode, iso2 } = reactInternationalPhone.parseCountry(countryData);
            return dialCode.includes(filterQuery) || currentCountry.iso2 === iso2;
        });
    }, [countries, currentCountry.iso2, filterQuery]);
    const openDropdown = () => {
        // Don't filter on open, wait for input
        setFilterQuery('');
        setCountryDropdownOpen(true);
    };
    const closeDropdown = React.useCallback(() => {
        setCountryDropdownOpen(false);
    }, [setCountryDropdownOpen]);
    // =================================================================
    // COUNTRY INPUT
    // =================================================================
    /** The last inputted value for country that was valid */
    const lastValidCountry = React.useRef(defaultCountry);
    const handleCountryInput = ({ target, }) => {
        const value = target.value.slice(0, 4);
        setCountryInput(value);
        // Start filtering as soon as there is any input
        setFilterQuery(value);
        // Check which country this dial code corresponds to
        const { country: guessedCountry } = reactInternationalPhone.guessCountryByPartialPhoneNumber({
            countries,
            currentCountryIso2: currentCountry.iso2,
            phone: value,
        });
        if (!guessedCountry)
            return;
        lastValidCountry.current = guessedCountry;
        setSelectedCountry(guessedCountry.iso2);
        utils.StorageService.setItem(localStorage.PHONE_INPUT_DEFAULT_COUNTRY, guessedCountry.iso2);
        setTimeout(() => scrollCountryIntoView(guessedCountry.iso2), COUNTRY_INPUT_SCROLL_DELAY);
    };
    const resetToLastValidCountry = () => {
        if (!lastValidCountry.current ||
            countryInput === lastValidCountry.current.dialCode)
            return;
        setSelectedCountry(lastValidCountry.current.iso2);
        utils.StorageService.setItem(localStorage.PHONE_INPUT_DEFAULT_COUNTRY, lastValidCountry.current.iso2);
        setCountryInput(lastValidCountry.current.dialCode);
        // Changing country resets the phone number, so we must also reset any errors
        setInvalidNumberMessage(undefined);
    };
    /** Handles up and down arrow input */
    const handleArrowInput = React.useCallback((event) => {
        event.preventDefault();
        const currentIndex = filteredCountries.findIndex((countryData) => reactInternationalPhone.parseCountry(countryData).iso2 === currentCountry.iso2);
        const direction = event.key === 'ArrowUp' ? -1 : 1;
        const newCountry = reactInternationalPhone.parseCountry(filteredCountries[modulo.modulo(currentIndex + direction, filteredCountries.length)]);
        scrollCountryIntoView(newCountry.iso2);
        // We don't set filterQuery here because we don't want to change
        // the filter while the user is cycling through the list
        setCountryInput(newCountry.dialCode);
        setSelectedCountry(newCountry.iso2);
        lastValidCountry.current = newCountry;
        utils.StorageService.setItem(localStorage.PHONE_INPUT_DEFAULT_COUNTRY, newCountry.iso2);
        // Changing country resets the phone number, so we must also reset any errors
        setInvalidNumberMessage(undefined);
    }, [
        currentCountry.iso2,
        filteredCountries,
        setInvalidNumberMessage,
        setSelectedCountry,
    ]);
    const handleEnterInput = React.useCallback(() => {
        var _a;
        closeDropdown();
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.select();
    }, [closeDropdown, inputRef]);
    const handleCountryKeyDown = React.useCallback((event) => {
        // When navigating away, close dropdown but don't prevent navigation
        if (event.key === 'Tab')
            return closeDropdown();
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown')
            return handleArrowInput(event);
        if (event.key === 'Enter')
            return handleEnterInput(event);
    }, [closeDropdown, handleArrowInput, handleEnterInput]);
    // =================================================================
    // UTILITIES
    // =================================================================
    // Due to the way react-international-phone works, numberInput always has a value (the dial code),
    // even if it's not visible in the input itself.
    /** Tells whether the phone input has any characters typed into it */
    const hasInput = React.useMemo(() => reactInternationalPhone.removeDialCode({
        charAfterDialCode: '+',
        dialCode: currentCountry.dialCode,
        phone,
    }).length > 0, [currentCountry.dialCode, phone]);
    /** Ref of the entire form */
    const countriesContainer = React.useRef(null);
    const scrollCountryIntoView = (iso2) => {
        var _a;
        const selectedItem = (_a = countriesContainer.current) === null || _a === void 0 ? void 0 : _a.querySelector('#' + iso2);
        selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.scrollIntoView({
            behavior: 'instant',
            block: 'center',
            inline: 'center',
        });
    };
    // We pass this as a ref to the countries dropdown. React fires it multiple times, so we throttle
    const onMenuDisplayToggle = useThrottle.useThrottle((menu) => {
        var _a;
        const wasOpen = Boolean(countriesContainer.current);
        const isOpen = Boolean(menu);
        countriesContainer.current = menu;
        // If we receive null that means the menu was closed
        // The rest on the code should only execute when going from hidden to shown
        if (wasOpen || !isOpen)
            return;
        (_a = countryInputRef.current) === null || _a === void 0 ? void 0 : _a.select();
        scrollCountryIntoView(currentCountry.iso2);
    }, MENU_DISPLAY_THROTTLE);
    /** Sets all the state related to country */
    const setCountry = (newCountry) => {
        setCountryInput(newCountry.dialCode);
        setSelectedCountry(newCountry.iso2);
        utils.StorageService.setItem(localStorage.PHONE_INPUT_DEFAULT_COUNTRY, newCountry.iso2);
        lastValidCountry.current = newCountry;
        // Changing country resets the phone number, so we must also reset any errors
        setInvalidNumberMessage(undefined);
    };
    /** Override fontsize of country code for larger inputs */
    const countryFontSize = React.useMemo(() => {
        if (countryInput.length > 3)
            return 'var(--dynamic-text-size-body-mini)';
        if (countryInput.length > 2)
            return 'var(--dynamic-text-size-body-small)';
        return 'var(--dynamic-text-size-body-normal)';
    }, [countryInput.length]);
    return {
        closeDropdown,
        countryFontSize,
        countryInput,
        currentCountry,
        filteredCountries,
        formattedPhone,
        handleCountryInput,
        handleCountryKeyDown,
        handlePhoneInput,
        hasInput,
        inputRef,
        onBlurCountry: resetToLastValidCountry,
        onFocusCountry: openDropdown,
        onMenuDisplayToggle,
        openDropdown,
        setCountry,
    };
};

exports.usePhoneInputLogic = usePhoneInputLogic;
