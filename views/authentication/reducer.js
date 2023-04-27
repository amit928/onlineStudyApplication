import { CLASS_LIST, LOADING_END, LOADING_START, LOGIN_DETAILS, SCHOOL_LIST } from "./actionTypes";


const initialState = {
    loading: false,
    loginDetails: {},
    schoolList: [],
    classList: []
};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_START:
            return {
                ...state,
                loading: true
            };
        case LOADING_END:
            return {
                ...state,
                loading: false
            };
        case LOGIN_DETAILS:
            return {
                ...state,
                loginDetails: action.payload
            };
        case SCHOOL_LIST:
            return {
                ...state,
                schoolList: action.payload
            };

        case CLASS_LIST:
            return {
                ...state,
                classList: action.payload
            };

        default:
            return state;
    }
};

export default authenticationReducer;
