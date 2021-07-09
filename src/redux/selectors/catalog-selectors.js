import {createSelector} from "reselect";

export const getFilteredProperties = (state) => {
    return state.catalog.filtered
}
export const getFilteredPropertiesSuperSelector = createSelector(getFilteredProperties, (properties) => {
    return properties.filter(p => true)
})
export const getIsLoading = (state) => {
    return state.catalog.isLoading
}
export const getCurrentPage = (state) => {
    return state.catalog.currentPage
}
export const getPostsPerPageData = (state) => {
    return state.catalog.postsPerPage
}
export const getCheckboxesData = (state) => {
    return state.catalog.checkboxes
}
export const getPriceSliderData = (state) => {
    return state.catalog.inputs.priceSlider
}
export const getAreaSliderData = (state) => {
    return state.catalog.inputs.areaSlider
}
