import { Dimensions } from "react-native";

export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;

export const BASE_URL = 'https://protimes.co.in/LE_API/';

export const REQUEST_METHOD = {
    GET: "GET",
    PUT: "PUT",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

export const RESPONSE_TYPE = {
    JSON: 'json',
    NULL: null,
    BLOB: 'blob'
}

export const RESPONSE_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
    INTERNAL_SERVER_ERROR: 500
}

export const DEFAULT_DATA = {
    count: 0,
    next: null,
    previous: null,
    results: []
}

export const LAYOUT_TYPE = {
    NULL: null,
    BASELAYOUT: `BASELAYOUT`
}