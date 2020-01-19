const SET_PROPERTIES = "SET_PROPERTIES";
const SET_LOADING = "SET_LOADING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
    current: [],
    isLoading: false,
    currentPage: 1,
    postsPerPage: 8
} 
 
const catalogReducer = (state = initialState, action) => {
 

    switch (action.type){
        case SET_PROPERTIES:{ 
            return {
                ...state,
                current: [ ...action.properties]
        }}
        case SET_LOADING:{
            return{
                ...state,
                isLoading: action.isLoading
            }
        }
        case SET_CURRENT_PAGE:{
            return{
                ...state,
                currentPage: action.currentPage
            }
        }
        default:{
            return {
                ...state,
                current: [...state.current]
            };}
     
}}

export const setPropertiesActionCreator = (properties) => ({type: SET_PROPERTIES,  properties: properties} );
export const setLoadingActionCreator = (isLoading) => ({type: SET_LOADING,  isLoading: isLoading} );
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE,  currentPage: currentPage} );


export default catalogReducer;