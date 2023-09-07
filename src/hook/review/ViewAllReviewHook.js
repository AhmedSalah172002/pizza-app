import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser, forgetPassword, loginUser } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom'
import notify from '../useNotifaction';
import { allReviewProduct, createReview } from './../../redux/actions/reviewAction';

const ViewAllReviewHook = (id) => {
    const dispatch = useDispatch();


    const [loading, setLoading] = useState(true)

    const allReview = useSelector((state) => state.reviewReducer.allReviewProduct)

    let items = [];let pageCount = []; let results = 0;
    try {
        if (allReview.data)
            items = allReview.data;
        else
            items = []
    } catch (e) {
        console.log(e);
     }
     try {
        if (allReview.paginationResult)
            pageCount= allReview.paginationResult.numberOfPages;
        else
            pageCount = []
    } catch (e) { 
        console.log(e);
    }
    try {
        if (allReview.results)
            results = allReview.results;
        else
            results = 0
    } catch (e) { 
        console.log(e);
    }


    useEffect(() => {
        setLoading(true)
        dispatch(allReviewProduct(id, 1, 3))
        setLoading(false)
    }, [])

    const onPress = async (page) => {
        await dispatch(allReviewProduct(id, page, 3))
    }

    return [allReview, onPress ,pageCount]
}

export default ViewAllReviewHook