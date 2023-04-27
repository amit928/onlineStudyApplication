import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL, DEFAULT_DATA, REQUEST_METHOD, RESPONSE_CODE, RESPONSE_TYPE } from "./Constants";

export function getRequestHeader() {
    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    };
    return headers;
}

export const fetchApi = (endPoint, method, successCallBack, errorCallBack, body = null, responseType = RESPONSE_TYPE.JSON) => {
    let options = {
        method: method,
        headers: getRequestHeader()
    };

    let requestUrl = `${BASE_URL}${endPoint}`;


    if (method === REQUEST_METHOD.GET && body !== null) {
        alert("GET request does not support body")
        return null
    } else if (method !== REQUEST_METHOD.GET) {
        options["body"] = JSON.stringify(body)
    }

    fetch(requestUrl, options)
        .then(response => {
            if (response.status >= 400) {
                return response
            } else {
                switch (responseType) {
                    case RESPONSE_TYPE.JSON:
                        return response.json();
                    case RESPONSE_TYPE.BLOB:
                        return response.blob();
                    case RESPONSE_TYPE.NULL:
                        return DEFAULT_DATA
                }
            }
        })
        .then(responseJson => {
            if (responseJson.type === 'cors') {
                apiErrorHandler(responseJson, errorCallBack)
            } else {
                successCallBack(responseJson)
            }
        }).catch(error => {
            alert(`Something Went Wrong. error : ${error}`)
        })
}

export function apiErrorHandler(response, errorCallBack) {
    switch (response.status) {
        case RESPONSE_CODE.INTERNAL_SERVER_ERROR:
            alert(`Something Went Wrong, please try again later.`);
            errorCallBack(response)
            break;
        case RESPONSE_CODE.FORBIDDEN:
            alert(`You do not have permission to perform this action. Please Login and try Again`);
            errorCallBack(response)
            break;
        case RESPONSE_CODE.UNAUTHORIZED:
            errorCallBack(response)
            break;
        case RESPONSE_CODE.NOT_FOUND:
            errorCallBack(response)
            break;
        default:
            alert("Error");
            break;
    }
}


export const _storeData = async (key, data) => {
    try {
        await AsyncStorage.setItem(
            key,
            JSON.stringify(data)
        );
    } catch (error) {
        // Error saving data
    }
};

export const _retrieveData = async (key, returnedValue) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            returnedValue(value)
        }
        else {
            returnedValue('null')
        }
    } catch (error) {
        // Error retrieving data
    }
}

export const handleSchoolValue = (list) => {
    var data = []
    list.map((item, index) => {
        data.push({
            label: item.SCHOOL_NAME, value: item.SCHOOL_SL
        })
    })
    return data
}


export const handleClassValue = (list) => {
    var data = []
    list.map((item, index) => {
        data.push({
            label: item.CLASS_NAME, value: item.CLASS_SL
        })
    })
    return data
}