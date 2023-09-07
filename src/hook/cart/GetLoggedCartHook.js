import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserCartItems } from '../../redux/actions/cartAction';

const GetLoggedCartHook = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const [itemsNum, setItemsNum] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [couponNameRes, setCouponName] = useState('')
    const [totalCartPrice, setTotalCartPrice] = useState(0)
    const [cartID, setCartID] = useState('0')
    const [totalCartPriceAfterDiscount, setTotalCartPriceAfterDiscount] = useState(0)

    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getAllUserCartItems())
            setLoading(false)
        }
        get()
    }, [])
    const res = useSelector(state => state.cartReducer.getAllUserCart)
    useEffect(() => {
        if (loading === false) {
            if (res && res.status === "success") {
                setItemsNum(res.numOfCartItems)
                setCartItems(res.data.cartItems)
                setTotalCartPrice(res.data.totalCartPrice)
                setCartID(res.data._id)
                if (res.data.coupon) {
                    setCouponName(res.data.coupon)
                } else {
                    setCouponName('')
                }
                if (res.data.totalPriceAfterDiscount) {
                    setTotalCartPriceAfterDiscount(res.data.totalPriceAfterDiscount)
                } else {
                    setTotalCartPriceAfterDiscount('')
                }

            } else {
                setCartID('0')
                setCouponName('')
                setTotalCartPriceAfterDiscount('')
                setItemsNum(0)
                setCartItems([])
                setTotalCartPrice(0)
            }

        }
    }, [loading])

    return [itemsNum, cartItems, totalCartPrice, couponNameRes, totalCartPriceAfterDiscount, cartID]
}

export default GetLoggedCartHook
