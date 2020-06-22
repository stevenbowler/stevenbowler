//@ts-check
/**@module */

import * as actions from './actions';
import { cloneDeep } from 'lodash';

const initialState = {
    value: { something: "something" },
    username: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    token: localStorage.getItem("token"),
    loggedIn: localStorage.getItem("loggedIn"),
    isOpenNavbar: false,
    isOpenExtraModal: false,
    isOpenLoginModal: false,
    isOpenRegisterModal: false
}


export const todoReducer = (state = initialState, action) => {
    const newState = cloneDeep(state);
    switch (action.type) {

        case actions.LOGIN_USER:
            newState.username = action.user.username;
            newState.email = action.user.email;
            newState.token = action.user.token;
            newState.loggedIn = "true";
            localStorage.setItem("token", newState.token);
            localStorage.setItem("email", newState.email);
            localStorage.setItem("name", newState.username);
            localStorage.setItem("loggedIn", newState.loggedIn);
            newState.errorMessage = null;
            console.log("LOGIN_USER: ", newState.username);
            return newState;

        case actions.REGISTER_USER:
            newState.username = "Registered...OK";
            newState.email = "";
            // newState.token = action.token;
            newState.loggedIn = "true";
            console.log("REGISTER_USER: ", newState.username);
            return newState;

        case actions.LOGIN_ERROR:
            newState.username = "wrong email or pswd";
            newState.email = "";
            newState.token = "";
            newState.loggedIn = "false";
            newState.errorMessage = action.message;
            console.log("LOGIN_ERROR: ", newState.errorMessage);
            return newState;

        case actions.LOGOUT_USER:
        case actions.RESET_USER:
            console.log("RESET_USER, was: ", state.username);
            newState.username = "Guest...Login";
            newState.email = "";
            newState.token = "";
            newState.loggedIn = "false";
            localStorage.setItem("name", newState.username);
            localStorage.setItem("email", newState.email);
            localStorage.setItem("token", newState.token);
            localStorage.setItem("loggedIn", "false");
            console.log("RESET_USER, is: ", newState.username);
            return newState;

        case actions.TOGGLE_NAVBAR:
            newState.isOpenNavbar = !state.isOpenNavbar;
            // console.log("TOGGLE_NAVBAR: ", newState.isOpenNavbar);
            return newState;

        case actions.TOGGLE_EXTRAMODAL:
            newState.isOpenExtraModal = !state.isOpenExtraModal;
            // console.log("TOGGLE_EXTRAMODAL: ", newState.isOpenExtraModal);
            return newState;

        case actions.TOGGLE_LOGINMODAL:
            newState.isOpenLoginModal = !state.isOpenLoginModal;
            // console.log("TOGGLE_LOGINMODAL: ", newState.isOpenLoginModal);
            return newState;

        case actions.TOGGLE_REGISTERMODAL:
            newState.isOpenRegisterModal = !state.isOpenRegisterModal;
            // console.log("TOGGLE_REGISTER: ", newState.isOpenRegisterModal);
            return newState;

        case actions.SAVES_CAMPGROUNDS:
            newState.campGrounds = action.campGrounds;
            return newState;
        default:
            return state;
    }
} 