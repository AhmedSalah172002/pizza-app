
import { CREATE_NEW_ADMIN_USER,GET_ALL_USERS,GET_SPECIFIC_USER,UPDATE_USER_ADMIN,DELETE_USER } from '../type'

// import { useGetData, useGetDataToken } from './../../hooks/useGetData';
import { useInsUpdateData } from '../../hooks/useUpdateData';
import { useInsertData, useInsertDataWithImage } from '../../hooks/useInsertData';
import { useGetData, useGetDataToken } from '../../hooks/useGetData';
import useDeleteData from '../../hooks/useDeleteData';

//create new user 
export const createNewUserByAdmin = (data) => async (dispatch) => {
    try {
        const response = await useInsertDataWithImage(`/api/v1/users`, data);
        dispatch({
            type: CREATE_NEW_ADMIN_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: CREATE_NEW_ADMIN_USER,
            payload: e.response,
        })
    }
}

//get all users
export const getAllUsers = (query) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/users?${query}`);
        dispatch({
            type: GET_ALL_USERS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ALL_USERS,
            payload: e.response,
        })
    }
}

//delete user by id
export const deletUser = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/users/${id}`);
        dispatch({
            type: DELETE_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: DELETE_USER,
            payload: e.response,
        })
    }
}


//delete user by id
export const getOneUser = (id) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/users/${id}`);
        dispatch({
            type: GET_SPECIFIC_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_SPECIFIC_USER,
            payload: e.response,
        })
    }
}

//delete user by id
export const editOneUser = (id,Data) => async (dispatch) => {
    try {
        const response = await useInsUpdateData(`/api/v1/users/${id}`,Data);
        dispatch({
            type: UPDATE_USER_ADMIN,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: UPDATE_USER_ADMIN,
            payload: e.response,
        })
    }
}

