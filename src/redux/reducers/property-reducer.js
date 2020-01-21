const SET_PROPERTY = "SET_PROPERTY";
const SET_LOADING = "SET_LOADING"; 

let initialState = {
    property: {},
    isLoading: false 

} 
 
const propertyReducer = (state = initialState, action) => { 
    switch (action.type){
        case SET_PROPERTY:{ 
            return {
                ...state,
                property: action.property[0]
        }}
        case SET_LOADING:{
            return{
                ...state,
                isLoading: action.isLoading
            }
        }
 
        default:{
            return {
                ...state 
            };}
     
}}

export const setPropertyActionCreator = (property) => ({type: SET_PROPERTY,  property: property} );
export const setLoadingActionCreator = (isLoading) => ({type: SET_LOADING,  isLoading: isLoading} );
 

export default propertyReducer;