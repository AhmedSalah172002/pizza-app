import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/actions/userAction'

const GetUsersHook = (limit) => {

    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(getAllUsers(`limit=${limit}`))
    },[])

    const res =useSelector(state => state.allUsers.allusers)
    
    let users = [];let pageCount = []; let results = 0;
    try {
        if (res.data)
            users = res.data
        else
            users = []
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
         await dispatch(getAllUsers(`limit=${limit}&page=${page}`))
     
     }
 





    return [users ,pageCount ,onPress]
    

}

export default GetUsersHook
