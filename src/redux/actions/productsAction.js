
import { useInsertDataWithImage } from '../../hooks/useInsertData';
import { DELETE_PRODUCTS,  UPDATE_PRODUCTS, CREATE_PRODUCTS, GET_ALL_PRODUCTS, GET_PRODUCT_DETALIS } from '../type'
import {useGetData} from '../../hooks/useGetData';
import useDeleteData from '../../hooks/useDeleteData';

import { useInUpdateDataWithImage } from '../../hooks/useUpdateData';


//create products with pagination
export const createProduct = (formatData) => async (dispatch) => {
    try {
        const response = await useInsertDataWithImage("/api/v1/products", formatData);
        
        dispatch({
            type: CREATE_PRODUCTS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: CREATE_PRODUCTS,
            payload: e.response,
        })
    }
}

//get all products with pagination
export const getAllProducts = (limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products?limit=${limit}`);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: e.response,
        })
    }
}




//get all products with pagination with pages number
export const getAllProductsPage = (page, limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products?page=${page}&limit=${limit}`);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: e.response,
        })
    }
}

//get all products with query string
export const getAllProductsSearch = (queryString) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products?${queryString}`);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: e.response,
        })
    }
}



//get one product with id
export const getOneProduct = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products/${id}`);
        dispatch({
            type: GET_PRODUCT_DETALIS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_PRODUCT_DETALIS,
            payload: e.response,
        })
    }
}



//delete prooduct with id
export const deleteProducts = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/products/${id}`);

        dispatch({
            type: DELETE_PRODUCTS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: DELETE_PRODUCTS,
            payload: e.response,
        })
    }
}

//update prooduct with id
export const updateProducts = (id, data) => async (dispatch) => {
    try {
        const response = await useInUpdateDataWithImage(`/api/v1/products/${id}`, data);
        dispatch({
            type: UPDATE_PRODUCTS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: UPDATE_PRODUCTS,
            payload: e.response,
        })
    }
}


