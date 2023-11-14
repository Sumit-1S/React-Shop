import axios from "axios";
import { ActionTypes } from "../constants/action-type"
import fakeStoreApi from "../../APIs/fakeStoreApi";

export const fetchProducts = () => async(dispatch) =>{
    // return async function (dispatch,getState){
        const response = await fakeStoreApi('/products')
        dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})
    // }
}
export const setProducts = (products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}
export const selectedProducts = (product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}