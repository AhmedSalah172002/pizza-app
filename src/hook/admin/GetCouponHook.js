import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCoupons } from '../../redux/actions/couponAction'

const GetCouponHook = (limit) => {
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getAllCoupons(`limit=${limit}`))
    },[])

    const res =useSelector(state => state.allcoupons.allcoupons)
    
    let coupons = [];let pageCount = []; let results = 0;
    try {
        if (res.data)
            coupons = res.data
        else
            coupons = []
    } catch (e) {
        console.log(e);
     }
     try {
         if (res.paginationResult)
             pageCount= res.paginationResult.numberOfPages;
         else
             pageCount = []
     } catch (e) { 
         console.log(e);
     }
     try {
         if (res.results)
             results = res.results;
         else
             results = 0
     } catch (e) { 
         console.log(e);
     }
 
 
 
 
 
      const onPress = async (page) => {      
         await dispatch(getAllCoupons(`limit=${limit}&page=${page}`))
     
     }
 





    return [coupons ,pageCount ,onPress]
}

export default GetCouponHook
