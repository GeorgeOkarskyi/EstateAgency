const SET_PROPERTIES = "SET_PROPERTIES";
const SET_LOADING = "SET_LOADING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SORT_PROPERTIES = "SORT_PROPERTIES";
const SET_CHECKBOX = "SET_CHECKBOX";
const FILTER_PROPERTIES_BEDROOMS = "FILTER_PROPERTIES_BEDROOMS";
const FILTER_PROPERTIES_PRICE = "FILTER_PROPERTIES_PRICE";
const CHANGE_PRICE_FROM_TEXT = "CHANGE_PRICE_FROM_TEXT";
const CHANGE_PRICE_TO_TEXT = "CHANGE_PRICE_TO_TEXT";
const CHANGE_AREA_FROM_TEXT = "CHANGE_AREA_FROM_TEXT";
const CHANGE_AREA_TO_TEXT = "CHANGE_AREA_TO_TEXT";
const FILTER_PROPERTIES_AREA = "FILTER_PROPERTIES_AREA";
const RESET_FILTER = "RESET_FILTER";

let initialState = {
    current: [],
    filtered: [],
    isLoading: false,
    currentPage: 1,
    postsPerPage: 8,
    checkboxes: {
        numberOfBedrooms: {
            studio: false,
            "1 bedroom": false,
            "2 bedrooms": false,
            "3 bedrooms": false,
            "4 bedrooms": false,
            "5 bedrooms": false,
            "6 bedrooms": false,
            penthouse: false,
            townhouse: false
        },
        lastRenovation: {
            "Brand New": false,
            "1-2 years": false,
            "3-5 years": false,
            "5+ years": false
        },
        buildingType: {
            "2000's - up": false,
            "pre-1930's": false,
            "1930's-1950's": false,
            "1970's-1990's": false,
            "1960's-1970's": false,
            "1950's-1960's": false,
            "1990's - 2000's": false
        }
    },
    price: {
        from: '',
        to: ''
    },
    inputs: {
        areaSlider: {
            from: '20',
            to: '9000'
        },
        priceSlider: {
            from: '30',
            to: '9000'
        }
    }
}




const catalogReducer = (state = initialState, action) => {

    let resetFilters = () => {
        let resetedCheckboxes = new Object;
        for (const sections in state.checkboxes) {
            resetedCheckboxes[sections] = new Object;
            for (const checkbox in state.checkboxes[sections]) {
                resetedCheckboxes[sections][checkbox] = false
            }
        }
        return resetedCheckboxes;
    }


    let getArrayOfCheckedCheckboxes = (object) => {
        let arrayOfCheckedCheckboxes = new Array;
        for (const key in object) {
            if (object[key]) {
                arrayOfCheckedCheckboxes.push(key)
            }
        }
        return arrayOfCheckedCheckboxes;
    }
    let isCoincide = (propertyData, arrayToCompare) => {
        if (arrayToCompare.length == 0) {
            return true
        }
        for (let index = 0; index < arrayToCompare.length; index++) {
            if (propertyData == arrayToCompare[index]) {
                return true
            }
        }
        return false
    }
    let isInRange = (firstNumber, keyOfInputObject) => {
        if (Number(firstNumber) > Number(state.inputs[keyOfInputObject].from) && Number(firstNumber) < Number(state.inputs[keyOfInputObject].to)) {
            return true
        }
        return false
    }
    let sortArray = (objectOfCheckedCheckboxes) => {
        let arrayOfSortedProperties = new Array;
        state.current.map((property) => {

            if (isCoincide(property.layoutType, objectOfCheckedCheckboxes.numberOfBedrooms) &&
                isCoincide(property.renovation, objectOfCheckedCheckboxes.lastRenovation) &&
                isCoincide(property.building, objectOfCheckedCheckboxes.buildingType) &&
                isInRange(property.price, "priceSlider") &&
                isInRange(property.area.totalArea, "areaSlider")
            ) {
                arrayOfSortedProperties.push(property)
            }
        })
        return arrayOfSortedProperties
    }
    let makeFilteredArray = () => {
        let objectOfCheckedCheckboxes = {
            numberOfBedrooms: getArrayOfCheckedCheckboxes(state.checkboxes.numberOfBedrooms),
            lastRenovation: getArrayOfCheckedCheckboxes(state.checkboxes.lastRenovation),
            buildingType: getArrayOfCheckedCheckboxes(state.checkboxes.buildingType)
        }
        return sortArray(objectOfCheckedCheckboxes);
    }


    switch (action.type) {
        case SET_PROPERTIES:
            {
                return {
                    ...state,
                    current: [...action.properties],
                    filtered: [...action.properties]
                }
            }
        case SET_LOADING:
            {
                return {
                    ...state,
                    isLoading: action.isLoading
                }
            }
        case SET_CURRENT_PAGE:
            {
                return {
                    ...state,
                    currentPage: action.currentPage
                }
            }
        case SORT_PROPERTIES:
            {
                let sortedProperties;
                if (action.selectedOption == "priceMinMax") {
                    sortedProperties = state.filtered.sort((a, b) => { return a.price - b.price });
                } else if (action.selectedOption == "priceMaxMin") {
                    sortedProperties = state.filtered.sort((a, b) => { return b.price - a.price });
                } else {
                    sortedProperties = [...state.filtered];
                }
                return {
                    ...state,
                    filtered: [...sortedProperties]
                }
            }
        case SET_CHECKBOX:
            {
                return {
                    ...state,
                    checkboxes: {
                        ...state.checkboxes,
                        [action.section]: {
                            ...state.checkboxes[action.section],
                            [action.name]: action.value
                        }
                    }

                };
            }
        case FILTER_PROPERTIES_BEDROOMS:
            {
                return {
                    ...state,
                    filtered: [...makeFilteredArray()]
                }
            }

        case FILTER_PROPERTIES_PRICE:
            {
                return {
                    ...state,
                    filtered: [...makeFilteredArray()],
                    price: {
                        from: action.from,
                        to: action.to
                    }
                }
            }
        case FILTER_PROPERTIES_AREA:
            {
                return {
                    ...state,
                    filtered: [...makeFilteredArray()],
                    price: {
                        from: action.from,
                        to: action.to
                    }
                }
            }
        case RESET_FILTER:
            {
                return {
                    ...state,
                    filtered: [...state.current],
                    checkboxes: resetFilters()
                }
            }
        case CHANGE_PRICE_FROM_TEXT:
            {
                return {
                    ...state,
                    inputs: {
                        priceSlider: {
                            ...state.inputs.priceSlider,
                            from: action.priceFrom
                        },
                        areaSlider: {...state.inputs.areaSlider }
                    }
                }
            }
        case CHANGE_PRICE_TO_TEXT:
            {
                return {
                    ...state,
                    inputs: {
                        priceSlider: {
                            ...state.inputs.priceSlider,
                            to: action.priceTo
                        },
                        areaSlider: {...state.inputs.areaSlider }
                    }
                }
            }
        case CHANGE_AREA_FROM_TEXT:
            {
                return {
                    ...state,
                    inputs: {
                        areaSlider: {
                            ...state.inputs.areaSlider,
                            from: action.areaFrom
                        },
                        priceSlider: {...state.inputs.priceSlider }
                    }
                }
            }
        case CHANGE_AREA_TO_TEXT:
            {
                return {
                    ...state,
                    inputs: {
                        areaSlider: {
                            ...state.inputs.areaSlider,
                            to: action.areaTo
                        },
                        priceSlider: {...state.inputs.priceSlider }
                    }
                }
            }
        default:
            {
                return {
                    ...state,
                    current: [...state.current]
                };
            }

    }
}

export const setPropertiesActionCreator = (properties) => ({ type: SET_PROPERTIES, properties: properties });
export const setLoadingActionCreator = (isLoading) => ({ type: SET_LOADING, isLoading: isLoading });
export const setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const sortingPropertiesActionCreator = (selectedOption) => ({ type: SORT_PROPERTIES, selectedOption: selectedOption });
export const setCheckboxActionCreator = (name, value, section) => ({ type: SET_CHECKBOX, name: name, value: value, section: section });
export const filterPropertiesBedroomsActionCreator = () => ({ type: FILTER_PROPERTIES_BEDROOMS });
export const filterByPriceActionCreator = (from, to) => ({ type: FILTER_PROPERTIES_PRICE, from, to });
export const filterByAreaActionCreator = (from, to) => ({ type: FILTER_PROPERTIES_AREA, from, to });
export const resetFilterActionCreator = () => ({ type: RESET_FILTER });


export const changePriceFromTextActionCreator = (priceFrom) => ({
    type: CHANGE_PRICE_FROM_TEXT,
    priceFrom: priceFrom
});
export const changePriceToTextActionCreator = (priceTo) => ({
    type: CHANGE_PRICE_TO_TEXT,
    priceTo: priceTo
});
export const changeAreaFromTextActionCreator = (areaFrom) => ({
    type: CHANGE_AREA_FROM_TEXT,
    areaFrom: areaFrom
});
export const changeAreaToTextActionCreator = (areaTo) => ({
    type: CHANGE_AREA_TO_TEXT,
    areaTo: areaTo
});


export default catalogReducer;