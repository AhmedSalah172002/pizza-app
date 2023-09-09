import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import { createOrderCARD, createOrderCash } from '../../redux/actions/checkoutAction';
import notify from '../useNotifaction';
import GetLoggedCartHook from '../cart/GetLoggedCartHook';



const OrderPayCardHook = (addressDetalis) => {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [, , , , , cartID] = GetLoggedCartHook()

    //when user click
    const handelCreateOrderCARD = async () => {
        if (cartID === '0') {
            notify("من فضلك اضف منتجات الى العربه اولا", "warn")
            return
        }
        if (addressDetalis.length <= 0) {
            notify("من فضلك اختر عنوان اولا", "warn")
            return
        }
        setLoading(true)
        await dispatch(createOrderCARD(cartID, {
            shippingAddress: {
                details: addressDetalis.details,
                phone: addressDetalis.phone,
                city: addressDetalis.city,
            }
        }))
        setLoading(false)
    }



    const resOrderCard = useSelector(state => state.checkoutReducer.createOrderCard)
    useEffect(() => {
        if (loading === false) {
            if (resOrderCard && resOrderCard.status === "success") {
                if (resOrderCard.session.url) {
                    window.open(resOrderCard.session.url)
                }
            } else {
                notify("فشل فى اكمال الطلب من فضلك حاول مره اخرى", "warn")
            }
        }
    }, [loading])


    return [handelCreateOrderCARD]


}

export default OrderPayCardHook