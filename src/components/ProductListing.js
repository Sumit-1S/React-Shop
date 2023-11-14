import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { fetchProducts, setProducts } from '../redux/actions/productAction';


function ProductListing(props) {

    const products = useSelector(state=>state)
    const dispatch = useDispatch()
    // const fetchProducts = async() =>{
    //     const response = await axios.get('https://fakestoreapi.com/products')
    //     dispatch(setProducts(response.data))
    // }
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    console.log(products)
    // console.log(products);
    return (
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    );
}

export default ProductListing;