import Data from "./catalog-data/properties.json";   
let initialState = {
    current: Data
} 
 
const catalogReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        current: [...state.current]
    }
    return stateCopy;
}

export default catalogReducer;