import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import authenticationReducer from '../authentication/reducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const reducer = combineReducers({
    authenticationReducer
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);

export default configureStore;
