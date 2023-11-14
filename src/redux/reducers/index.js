import {combineReducers} from 'redux';
import { selectedProductReducer,productReducer } from './productReducer';

const rootReducer = combineReducers({
    allProduct:productReducer,
    product: selectedProductReducer,
})

export default rootReducer;