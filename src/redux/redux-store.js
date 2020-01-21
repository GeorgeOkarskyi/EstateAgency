import { createStore, combineReducers } from "redux";
import modalReducer from './reducers/modal-reducer';
import filterReducer from './reducers/filter-reducer';
import catalogReducer from './reducers/catalog-reducer';
import propertyReducer from './reducers/property-reducer';
import comentsReducer from './reducers/coments-reducer'


let reducers = combineReducers({
    modal: modalReducer,
    filter: filterReducer,
    catalog: catalogReducer,
    propertyPage: propertyReducer,
    commentsPage: comentsReducer
});

let store = createStore(reducers);
window.store = store;
export default store;