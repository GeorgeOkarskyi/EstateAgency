
const SHOW_MODAL = "SHOW_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";
const ADD_USER = "ADD_USER";
const CHANGE_NAME_TEXT = "CHANGE_NAME_TEXT";
const CHANGE_EMAIL_TEXT = "CHANGE_EMAIL_TEXT";
const CHANGE_PASSWORD_TEXT = "CHANGE_PASSWORD_TEXT";


const modalReducer = (state, action) => {
    switch (action.type){
        case SHOW_MODAL:
            state.show = true; 
            return state
        case CLOSE_MODAL:
            state.show = false; 
            return state;
        case ADD_USER:
            state.users.push(action.user);
            return state;
        case CHANGE_NAME_TEXT:
            state.input.name = action.name;
            return state;
        case CHANGE_EMAIL_TEXT:
            state.input.email = action.email;
            return state;
        case CHANGE_PASSWORD_TEXT:
            state.input.password = action.password;
            return state;
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




export default modalReducer;