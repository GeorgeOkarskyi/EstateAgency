import { createStore, combineReducers } from "redux";
import modalReducer from './reducers/modal-reducer';
import filterReducer from './reducers/filter-reducer';
import catalogReducer from './reducers/catalog-reducer';


let reducers = combineReducers({
    modal: modalReducer,
    filter: filterReducer,
    catalog: catalogReducer
});

let store = createStore(reducers);
window.store = store;
export default store;