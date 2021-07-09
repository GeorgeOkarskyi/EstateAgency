import {createStore, combineReducers, applyMiddleware} from "redux";
import modalReducer from './reducers/modal-reducer';
import catalogReducer from './reducers/catalog-reducer';
import propertyReducer from './reducers/property-reducer';
import comentsReducer from './reducers/coments-reducer';
import addingPropertyReducer from './reducers/adding-property-reducer2';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk'



let reducers = combineReducers({
    modal: modalReducer,
    catalog: catalogReducer,
    propertyPage: propertyReducer,
    commentsPage: comentsReducer,
    addingPropertyPage : addingPropertyReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
