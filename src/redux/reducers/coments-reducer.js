const SET_LOADING = "SET_LOADING";
const SET_COMENTS = "SET_COMENTS";
const ADD_COMENT = "ADD_COMENT";
const CHANGE_INPUT_TEXT = "CHANGE_INPUT_TEXT";

let initialState = {
    isLoading: false,
    coments: [],
    comentsText: ''
}
 
const comentsReducer = (state = initialState, action) => { 
    switch (action.type){
        case SET_LOADING:{
            return{
                ...state,
                isLoading: action.isLoading
            }
        }
        case SET_COMENTS:{
            let sorted = action.coments.sort(function(a,b) {
                a  = a.published.split('.').reverse().join('');
                b  = b.published.split('.').reverse().join('');
                return a  > b  ? 1 : a < b ? -1 : 0;
              });
            return{
                ...state,
                coments: [
                    ...sorted
                ]
            }
        }
        case ADD_COMENT:{
            return{
                ...state,
                coments: [...state.coments, action.coment]
            }
        }
        case CHANGE_INPUT_TEXT:{
            return{
                ...state,
                comentsText: action.text
            }
        }
        default:{
            return {
                ...state 
            };}
     
}}


export const setLoadingActionCreator = (isLoading) => ({type: SET_LOADING,  isLoading: isLoading} );
export const setComentsActionCreator = (coments) => ({type: SET_COMENTS,  coments: coments} );
export const addCommentActionCreator = (coment) => ({type: ADD_COMENT,  coment: coment} );
export const changeInputTextActionCreator = (text) => ({type: CHANGE_INPUT_TEXT,  text: text} );


export default comentsReducer;