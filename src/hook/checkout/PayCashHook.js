import React from 'react'
import GetLoggedCartHook from '../cart/GetLoggedCartHook';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getOneUserAddress } from '../../redux/actions/addressAction';
import { useEffect } from 'react';
import notify from '../useNotifaction';
import { createOrderCash } from '../../redux/actions/checkoutAction';

const PayCashHook = () => {
    const [loading, setLoading] = useState(true);
    const [loadingCreate, setLoadingCreate] = useState(true);
    const [addressDetalis, setAddressDetalis] = useState([]);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [, , , , , cartID] = GetLoggedCartHook()
    //when change address bu user
    const handelChooseAddress = (e) => {
        setAddressDetalis([])
        if (e.target.value != '0')
            get(e.target.value);
    }

    const get = async (id) => {
        setLoading(true)
        await dispatch(getOneUserAddress(id))
        setLoading(false)
    }

    //get address detalis for user
    const resAddress = useSelector(state => state.userAddressesReducer.oneAddress)
    useEffect(() => {
        if (loading === false) {
            if (resAddress && resAddress.status === "success") {
                setAddressDetalis(resAddress.data)
            } else
                setAddressDetalis([])
        }
    }, [loading])



    //when user click
    const handelCreateOrderCash = async () => {
        if (cartID === '0') {
            notify("من فضلك اضف منتجات الى العربه اولا", "warn")
            return
        }
        if (addressDetalis.length <= 0) {
            console.log(addressDetalis);
            notify("من فضلك اختر عنوان اولا", "warn")
            return
        }
        setLoadingCreate(true)
        await dispatch(createOrderCash(cartID, {
            shippingAddress: {
                details: addressDetalis[0].alias,
                phone: addressDetalis[0].phone,
                city: addressDetalis[0].city,
                
            }
        }))
        setLoadingCreate(false)
    }
console.log( addressDetalis);

    //get response for create orser cash
    const resOrserCash = useSelector(state => state.checkoutReducer.createOrderCash)
    useEffect(() => {
        if (loadingCreate === false) {
            if (resOrserCash && resOrserCash.status === 201) {
                notify("تم انشاء طلبك بنجاح", "success")
                setTimeout(() => {
                    navigate('/Myprofile')
                }, 1500);
            } else {
                notify("فشل فى اكمال الطلب من فضلك حاول مره اخرى", "warn")
            }
        }
    }, [loadingCreate])


    return [handelChooseAddress, addressDetalis, handelCreateOrderCash]
}

export default PayCashHook
