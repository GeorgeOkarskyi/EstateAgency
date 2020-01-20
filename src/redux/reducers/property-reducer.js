const SET_PROPERTY = "SET_PROPERTY";
const SET_LOADING = "SET_LOADING";
const SET_COMENTS = "SET_COMENTS";

let initialState = {
    property: {},
    isLoading: false,
    coments: []

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
        case SET_COMENTS:{
            let sorted = action.coments.sort(function(a,b) {
                a  = a.published.split('.').reverse().join('');
                b  = b.published.split('.').reverse().join('');
                // console.log(aPublished,a); 
                return a  > b  ? 1 : a < b ? -1 : 0;
              });
              
      
            //   console.log(sorted)
            return{
                ...state,
                coments: [
                    ...sorted
                ]
            }
        }
        default:{
            return {
                ...state 
            };}
     
}}

export const setPropertyActionCreator = (property) => ({type: SET_PROPERTY,  property: property} );
export const setLoadingActionCreator = (isLoading) => ({type: SET_LOADING,  isLoading: isLoading} );
export const setComentsActionCreator = (coments) => ({type: SET_COMENTS,  coments: coments} );


export default propertyReducer;