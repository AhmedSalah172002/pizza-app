import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToWishList, removeProductToWishList } from '../../redux/actions/wishListAction'
import notify from '../useNotifaction'
import favoff from '../../images/fav-off.png'
import favon from '../../images/fav-on.png'

const AddWishlistHook = (productId ,wishlist) => {
const dispatch = useDispatch()
const [favImg, setFavImg] = useState(favoff)
let Fav = wishlist.some(item => item === productId);
const [loadingAdd, setLoadingAdd] = useState(true)
const [loadingRemove, setLoadingRemove] = useState(true)
const [isFav, setIsFav] = useState(Fav)


useEffect(() => {
    setIsFav(wishlist.some(item => item === productId))
}, [wishlist])

const handelFav = () => {
    if (isFav) {
        removeToWishListData();
    } else {
        addToWishListData()
    }
}

useEffect(() => {

    if (isFav === true) {
        setFavImg(favon)
    }
    else {
        setFavImg(favoff)
    }

}, [isFav])

const resAdd = useSelector(state => state.wishListReducer.addWishList)
const resRemove = useSelector(state => state.wishListReducer.removeWishList)

const addToWishListData = async () => {
    setIsFav(true)
    setFavImg(favon)
    setLoadingAdd(true)
    await dispatch(addProductToWishList({
        productId
    }))
    setLoadingAdd(false)
}




const removeToWishListData = async () => {
    setIsFav(false)
    setFavImg(favoff)
    setLoadingRemove(true)
    await dispatch(removeProductToWishList(productId))
    setLoadingRemove(false)

}

useEffect(() => {
    if (loadingAdd === false) {
        console.log(resAdd)
        
        if (resAdd && resAdd.status === 200) {
            notify("تمت اضافة المنتج للمفضلة بنجاح", "success")
        } else if (resAdd && resAdd.status === 401) {
            notify("انتا غير مسجل", "error")
        }
    }
}, [loadingAdd])

useEffect(() => {


    if (loadingRemove === false) {
        console.log(resRemove)
        if (resRemove && resRemove.status === "success") {
            notify("تمت حذف المنتج من المفضلة بنجاح", "warn")
        } else if (resAdd && resAdd.status === 401) {
            notify("انتا غير مسجل", "error")
        }

    }
}, [loadingRemove])


return [removeToWishListData, addToWishListData, handelFav, favImg]

}

export default AddWishlistHook
