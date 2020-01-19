
 
const CHANGE_PRICE_FROM_TEXT = "CHANGE_PRICE_FROM_TEXT";
const CHANGE_PRICE_TO_TEXT = "CHANGE_PRICE_TO_TEXT";
const CHANGE_AREA_FROM_TEXT = "CHANGE_AREA_FROM_TEXT";
const CHANGE_AREA_TO_TEXT = "CHANGE_AREA_TO_TEXT";

let initialState = { 
        inputs:{
            areaSlider: {
                from: '20',
                to: '40'
            },
            priceSlider: {
                from: '30',
                to: '50'
            }
        }
}

const filterReducer = (state = initialState, action) => { 
    switch (action.type){
        case CHANGE_PRICE_FROM_TEXT:{
            let stateCopy = {
                ...state,
                inputs: {
                    priceSlider: {...state.inputs.priceSlider },
                    areaSlider: {...state.inputs.areaSlider}
                }
            } 
            stateCopy.inputs.priceSlider.from = action.priceFrom; 
            return stateCopy}
        case CHANGE_PRICE_TO_TEXT:{
            let stateCopy = {
                ...state,
                inputs: {
                    priceSlider: {...state.inputs.priceSlider},
                    areaSlider: {...state.inputs.areaSlider}
                }
            }
            stateCopy.inputs.priceSlider.to = action.priceTo; 
            return stateCopy}
        case CHANGE_AREA_FROM_TEXT:{
            let stateCopy = {
                ...state,
                inputs: {
                    areaSlider: {...state.inputs.areaSlider},
                    priceSlider: {...state.inputs.priceSlider }
                }
            }
            stateCopy.inputs.areaSlider.from = action.areaFrom; 
            return stateCopy}
        case CHANGE_AREA_TO_TEXT:{
            let stateCopy = {
                ...state,
                inputs: {
                    areaSlider: {...state.inputs.areaSlider},
                    priceSlider: {...state.inputs.priceSlider }
                }
            }
            stateCopy.inputs.areaSlider.to = action.areaTo; 
            return stateCopy}
        default:{
            let stateCopy = {
                ...state
            }
            return stateCopy;}
    }
}

export const changePriceFromTextActionCreator = (priceFrom) => ({
    type: CHANGE_PRICE_FROM_TEXT, 
    priceFrom: priceFrom}  
    );
export const changePriceToTextActionCreator = (priceTo) => ({
    type: CHANGE_PRICE_TO_TEXT, 
    priceTo: priceTo} 
    );
export const changeAreaFromTextActionCreator = (areaFrom) => ({
    type: CHANGE_AREA_FROM_TEXT, 
    areaFrom: areaFrom} );
export const changeAreaToTextActionCreator = (areaTo) => ({
    type: CHANGE_AREA_TO_TEXT, 
    areaTo: areaTo} );
 
 




export default filterReducer;