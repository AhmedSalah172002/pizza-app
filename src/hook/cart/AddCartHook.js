import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../../redux/actions/cartAction'
import notify from '../useNotifaction'

const AddCartHook = (productId,size) => {
 const dispatch = useDispatch()
 const [quantity ,setQuantity]=useState(1)
 const [loading, setLoading] = useState(true)

 const onchangeQuantity=(e)=>{
    setQuantity(e.target.value)
 }


 const addToCartHandel = async () => {
    
    setLoading(true)
    await dispatch(addProductToCart({
        productId,
        size,
        quantity
    }))
    setLoading(false)
}

const res = useSelector(state => state.cartReducer.addToCart)

useEffect(() => {

    if (loading === false) {
        if (res && res.status === 200) {
            notify("تمت اضافة المنتج للعربه بنجاح", "success")
            setTimeout(() => {
                window.location.reload(false)
            }, 1000);
        } else {
            notify("قم بتسجيل الدخول اولا", "warn")
        }
    }
}, [loading])

return [quantity,onchangeQuantity , addToCartHandel]

}

export default AddCartHook
