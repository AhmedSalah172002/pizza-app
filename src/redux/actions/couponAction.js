
import { CREATE_NEW_COUPON,GET_ALL_COUPONS,GET_SPECIFIC_COUPON,UPDATE_COUPON,DELETE_COUPON } from '../type'

import { useInsUpdateData } from '../../hooks/useUpdateData';
import { useInsertData, useInsertDataWithImage } from '../../hooks/useInsertData';
import { useGetData, useGetDataToken } from '../../hooks/useGetData';
import useDeleteData from '../../hooks/useDeleteData';

//create new coupon 
export const createNewCoupon = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/coupons`, data);
        dispatch({
            type: CREATE_NEW_COUPON,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: CREATE_NEW_COUPON,
            payload: e.response,
        })
    }
}

//get all Coupons
export const getAllCoupons = (query) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/coupons?${query}`);
        dispatch({
            type: GET_ALL_COUPONS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ALL_COUPONS,
            payload: e.response,
        })
    }
}

//delete Coupon by id
export const deletCoupon = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/coupons/${id}`);
        dispatch({
            type: DELETE_COUPON,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: DELETE_COUPON,
            payload: e.response,
        })
    }
}


//delete Coupon by id
export const getOneCoupon = (id) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/coupons/${id}`);
        dispatch({
            type: GET_SPECIFIC_COUPON,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_SPECIFIC_COUPON,
            payload: e.response,
        })
    }
}

//delete Coupon by id
export const editOneCoupon = (id,Data) => async (dispatch) => {
    try {
        const response = await useInsUpdateData(`/api/v1/coupons/${id}`,Data);
        dispatch({
            type: UPDATE_COUPON,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: UPDATE_COUPON,
            payload: e.response,
        })
    }
}

