import { LOGIN_DETAILS } from "./actionTypes";


const initialState = {
    loading: false,
};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_DETAILS:
            return {
                ...state,
                loginDetails: action.payload
            };

        default:
            return state;
    }
};

export default authenticationReducer;
