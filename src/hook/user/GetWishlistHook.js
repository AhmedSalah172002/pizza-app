import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductWishList } from '../../redux/actions/wishListAction'
import { useState } from 'react'

const GetWishlistHook = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [favProd, setFavProd] = useState([])
    const res = useSelector(state => state.wishListReducer.allWishList)

    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getProductWishList())
            setLoading(false)
        }

        get();
    }, [])
    let items = [];
    try {
        if (res.data)
            items = res.data
        else
            items = []
    } catch (e) {
        console.log(e);
     }


    useEffect(() => {

        if (loading === false) {
            if (res.data.length >= 1) {
                setFavProd(res.data.map(item => item._id))
            } else setFavProd([])
        }

    }, [loading])

     return [favProd , items]
}

export default GetWishlistHook
