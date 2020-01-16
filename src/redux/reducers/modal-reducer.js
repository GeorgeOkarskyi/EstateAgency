
const SHOW_MODAL = "SHOW_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";
const ADD_USER = "ADD_USER";
const CHANGE_NAME_TEXT = "CHANGE_NAME_TEXT";
const CHANGE_EMAIL_TEXT = "CHANGE_EMAIL_TEXT";
const CHANGE_PASSWORD_TEXT = "CHANGE_PASSWORD_TEXT";
const SHOW_LOGIN = "SHOW_LOGIN";
const SHOW_REGISTRATION = "SHOW_REGISTRATION";
const PASSWORS_CHECK = "PASSWORS_CHECK";


let initialState = {
        show: false,
        login: true,
        regiastation: false,
        users: [
            {
                name: "Petro Ivanov",
                email: "petro.ivanov@gmail.com",
                password: "petro1202"
            }
        ],
        input: {
            name: '',
            email: '',
            password: ''
        },
        infoWindow: ''
}

const modalReducer = (state = initialState, action) => {
    switch (action.type){
        case SHOW_MODAL:{
            let stateCopy = {
                ...state
            }
            stateCopy.show = true; 
            return stateCopy
        }
        case CLOSE_MODAL:{
            let stateCopy = {
                ...state
            }
            stateCopy.show = false; 
            return stateCopy;}
        case ADD_USER:{
            let stateCopy = {
                ...state,
                users: [...state.users, action.user]
            }
            
            return stateCopy;}
        case CHANGE_NAME_TEXT:{
                        let stateCopy = {
                ...state,
                input: {...state.input}
            }
            stateCopy.input.name = action.name;
            return stateCopy;}
        case CHANGE_EMAIL_TEXT:{
            let stateCopy = {
                ...state,
                input: {...state.input}
            }
            stateCopy.input.email = action.email;
            return stateCopy;}
        case CHANGE_PASSWORD_TEXT:{
            let stateCopy = {
                ...state,
                input: {...state.input}
            }
            stateCopy.input.password = action.password;
            return stateCopy;}
        case SHOW_LOGIN:{
            let stateCopy = {
                ...state
            }
            stateCopy.login = true;
            stateCopy.regiastation = false;
            return stateCopy;}
        case SHOW_REGISTRATION:{
            let stateCopy = {
                ...state
            }
            stateCopy.login = false;
            stateCopy.regiastation = true;
            return stateCopy;}
        case PASSWORS_CHECK:{ 
            let stateCopy = {
                ...state
            }
            if(stateCopy.input.password === action.passwordCheck){
                stateCopy.infoWindow = '';
            }else {
                stateCopy.infoWindow = '*passwords do not match';
            }
            return stateCopy;}
        default:
            return state;
    }
}

export const showModalActionCreator = () => ({type: SHOW_MODAL});
export const closeModalActionCreator = () => ({type: CLOSE_MODAL});
export const addUserActionCreator = (user) => ({type: ADD_USER, user: user});
export const changeNameTextActionCreator = (name) => ({type: CHANGE_NAME_TEXT, name: name});
export const changeEmailTextActionCreator = (email) => ({type: CHANGE_EMAIL_TEXT, email: email});
export const changePasswordTextActionCreator = (password) => ({type: CHANGE_PASSWORD_TEXT, password: password});
export const showLoginActionCreator = () => ({type: SHOW_LOGIN});
export const showRegistActionCreator = () => ({type: SHOW_REGISTRATION});
export const passwordCheckActionCreator = (passwordCheck) => ({type: PASSWORS_CHECK, passwordCheck: passwordCheck});


 

export default modalReducer;