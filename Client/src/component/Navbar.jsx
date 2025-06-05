import React , { useState } from 'react';
import { Link, useNavigation } from 'react-router-dom';

import { CustomButton, customButton } from './';
import { logo, menu, search, thirdweb} from '../assets';
import { navlinks} from '../constants' ;

const Navbar = () => {
    const navigate = useNavigation();
    const [isActive , setIsActive] = useState('dashboard');
    const [toggleDrawer , setToggleDrawer] = useState(false);

    const address = "0xabc";

    return (
        <div className= "flex md:flex-rowflex-col-reverse justify-between mb-[35px] gap-6">
            <div className= "lg:flex-1 flex flex-row max-w-[458px] py-2 px-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
            
                <input type="text" placeholder= "Search for Campaigns"  className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" />


                <div className= "w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
                    <img src={search} alt="search" className="w-[15px] h-[15px] object-contain" />
                </div>
            </div>
            <div className= "sm:flex hidden flex-row justify-end gap-4">
                <CustomButton
                    btnType="button"
                    title={address ? "Create a Campaign" : "Connect"}
                    styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
                    handleClick={() => {
                        if (address) 
                            navigate('/create-campaign');
                        else navigate('/connect-wallet');
                    }} 
                     />
                <Link to="/profile">
                <div className= "w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
                    <img src= {thirdweb} alt="profile" className="w-[52px] h-[52px] rounded-full" />
                    </div>
                </Link>

            </div>
        </div>
    )
}
