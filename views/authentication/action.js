
import { CLASS_LIST, LOADING_END, LOADING_START, SCHOOL_LIST } from "./actionTypes";
import { REQUEST_METHOD } from "../common/Constants";
import { _storeData, fetchApi } from "../common/Utils";
import * as Rootnavigation from '../common/Rootnavigation';

export function onStudentRegistration(requestBody) {
    return function (dispatch) {
        dispatch({ type: LOADING_START })
        fetchApi(`api/StudentRegister`,
            REQUEST_METHOD.POST,
            (successResponse) => {

                if (successResponse.Code == 200) {
                    _storeData('loginDetails', successResponse.data_value)
                    Rootnavigation.navigate('login');
                }
                else {
                    alert(successResponse.msg)
                }
                dispatch({ type: LOADING_END })
            },
            (failureResponse) => {
                dispatch({ type: LOADING_END })
            },
            requestBody)
    }
}

export function onStudentLogin(requestBody) {
    console.log("requestBody", requestBody)
    return function (dispatch) {
        dispatch({ type: LOADING_START })
        fetchApi(`api/StudentLogin`,
            REQUEST_METHOD.POST,
            (successResponse) => {
                console.log("successResponse", successResponse)
                if (successResponse.Code == 200) {
                    Rootnavigation.navigate('home', 'dashboard');
                }
                else {
                    alert(successResponse.msg)
                }
                dispatch({ type: LOADING_END })
            },
            (failureResponse) => {
                dispatch({ type: LOADING_END })
            },
            requestBody)
    }
}


export function getSchools() {
    return function (dispatch) {
        dispatch({ type: LOADING_START })
        fetchApi(`api/GetSchoolList`,
            REQUEST_METHOD.GET,
            (successResponse) => {
                if (successResponse.Code == 200) {
                    dispatch({ type: SCHOOL_LIST, payload: successResponse.data_value })
                }
                // else {
                //     alert(successResponse.msg)
                // }
                dispatch({ type: LOADING_END })
            },
            (failureResponse) => {
                dispatch({ type: LOADING_END })
            })
    }
}

export function getClasses() {
    return function (dispatch) {
        dispatch({ type: LOADING_START })
        fetchApi(`api/GetClassList`,
            REQUEST_METHOD.GET,
            (successResponse) => {
                if (successResponse.Code == 200) {
                    dispatch({ type: CLASS_LIST, payload: successResponse.data_value })
                }
                // else {
                //     alert(successResponse.msg)
                // }
                dispatch({ type: LOADING_END })
            },
            (failureResponse) => {
                dispatch({ type: LOADING_END })
            })
    }
}