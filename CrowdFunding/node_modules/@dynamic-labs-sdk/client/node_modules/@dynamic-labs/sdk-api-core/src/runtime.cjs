'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.cjs');

/* tslint:disable */
const BASE_PATH = "https://app.dynamicauth.com/api/v0".replace(/\/+$/, "");
const isBlob = (value) => typeof Blob !== 'undefined' && value instanceof Blob;
/**
 * This is the base class for all generated API classes.
 */
class BaseAPI {
    constructor(configuration = new Configuration()) {
        this.configuration = configuration;
        this.fetchApi = (url, init) => _tslib.__awaiter(this, void 0, void 0, function* () {
            let fetchParams = { url, init };
            for (const middleware of this.middleware) {
                if (middleware.pre) {
                    fetchParams = (yield middleware.pre(Object.assign({ fetch: this.fetchApi }, fetchParams))) || fetchParams;
                }
            }
            let response = yield (this.configuration.fetchApi || fetch)(fetchParams.url, fetchParams.init);
            for (const middleware of this.middleware) {
                if (middleware.post) {
                    response = (yield middleware.post({
                        fetch: this.fetchApi,
                        url: fetchParams.url,
                        init: fetchParams.init,
                        response: response.clone(),
                    })) || response;
                }
            }
            return response;
        });
        this.middleware = configuration.middleware;
    }
    withMiddleware(...middlewares) {
        const next = this.clone();
        next.middleware = next.middleware.concat(...middlewares);
        return next;
    }
    withPreMiddleware(...preMiddlewares) {
        const middlewares = preMiddlewares.map((pre) => ({ pre }));
        return this.withMiddleware(...middlewares);
    }
    withPostMiddleware(...postMiddlewares) {
        const middlewares = postMiddlewares.map((post) => ({ post }));
        return this.withMiddleware(...middlewares);
    }
    request(context, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const { url, init } = this.createFetchParams(context, initOverrides);
            const response = yield this.fetchApi(url, init);
            if (response.status >= 200 && response.status < 300) {
                return response;
            }
            throw response;
        });
    }
    createFetchParams(context, initOverrides) {
        let url = this.configuration.basePath + context.path;
        if (context.query !== undefined && Object.keys(context.query).length !== 0) {
            // only add the querystring to the URL if there are query parameters.
            // this is done to avoid urls ending with a "?" character which buggy webservers
            // do not handle correctly sometimes.
            url += '?' + this.configuration.queryParamsStringify(context.query);
        }
        const body = ((typeof FormData !== "undefined" && context.body instanceof FormData) || context.body instanceof URLSearchParams || isBlob(context.body))
            ? context.body
            : JSON.stringify(context.body);
        const headers = Object.assign({}, this.configuration.headers, context.headers);
        const init = Object.assign({ method: context.method, headers: headers, body, credentials: this.configuration.credentials }, initOverrides);
        return { url, init };
    }
    /**
     * Create a shallow clone of `this` by constructing a new instance
     * and then shallow cloning data members.
     */
    clone() {
        const constructor = this.constructor;
        const next = new constructor(this.configuration);
        next.middleware = this.middleware.slice();
        return next;
    }
}
class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = "RequiredError";
    }
}
const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
class Configuration {
    constructor(configuration = {}) {
        this.configuration = configuration;
    }
    get basePath() {
        return this.configuration.basePath != null ? this.configuration.basePath : BASE_PATH;
    }
    get fetchApi() {
        return this.configuration.fetchApi;
    }
    get middleware() {
        return this.configuration.middleware || [];
    }
    get queryParamsStringify() {
        return this.configuration.queryParamsStringify || querystring;
    }
    get username() {
        return this.configuration.username;
    }
    get password() {
        return this.configuration.password;
    }
    get apiKey() {
        const apiKey = this.configuration.apiKey;
        if (apiKey) {
            return typeof apiKey === 'function' ? apiKey : () => apiKey;
        }
        return undefined;
    }
    get accessToken() {
        const accessToken = this.configuration.accessToken;
        if (accessToken) {
            return typeof accessToken === 'function' ? accessToken : () => _tslib.__awaiter(this, void 0, void 0, function* () { return accessToken; });
        }
        return undefined;
    }
    get headers() {
        return this.configuration.headers;
    }
    get credentials() {
        return this.configuration.credentials;
    }
}
function exists(json, key) {
    const value = json[key];
    return value !== null && value !== undefined;
}
function querystring(params, prefix = '') {
    return Object.keys(params)
        .map((key) => {
        const fullKey = prefix + (prefix.length ? `[${key}]` : key);
        const value = params[key];
        if (value instanceof Array) {
            const multiValue = value.map(singleValue => encodeURIComponent(String(singleValue)))
                .join(`&${encodeURIComponent(fullKey)}=`);
            return `${encodeURIComponent(fullKey)}=${multiValue}`;
        }
        if (value instanceof Date) {
            return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`;
        }
        if (value instanceof Object) {
            return querystring(value, fullKey);
        }
        return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
    })
        .filter(part => part.length > 0)
        .join('&');
}
function mapValues(data, fn) {
    return Object.keys(data).reduce((acc, key) => (Object.assign(Object.assign({}, acc), { [key]: fn(data[key]) })), {});
}
function canConsumeForm(consumes) {
    for (const consume of consumes) {
        if ('multipart/form-data' === consume.contentType) {
            return true;
        }
    }
    return false;
}
class JSONApiResponse {
    constructor(raw, transformer = (jsonValue) => jsonValue) {
        this.raw = raw;
        this.transformer = transformer;
    }
    value() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return this.transformer(yield this.raw.json());
        });
    }
}
class VoidApiResponse {
    constructor(raw) {
        this.raw = raw;
    }
    value() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
}
class BlobApiResponse {
    constructor(raw) {
        this.raw = raw;
    }
    value() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return yield this.raw.blob();
        });
    }
    ;
}
class TextApiResponse {
    constructor(raw) {
        this.raw = raw;
    }
    value() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return yield this.raw.text();
        });
    }
    ;
}

exports.BASE_PATH = BASE_PATH;
exports.BaseAPI = BaseAPI;
exports.BlobApiResponse = BlobApiResponse;
exports.COLLECTION_FORMATS = COLLECTION_FORMATS;
exports.Configuration = Configuration;
exports.JSONApiResponse = JSONApiResponse;
exports.RequiredError = RequiredError;
exports.TextApiResponse = TextApiResponse;
exports.VoidApiResponse = VoidApiResponse;
exports.canConsumeForm = canConsumeForm;
exports.exists = exists;
exports.mapValues = mapValues;
exports.querystring = querystring;
