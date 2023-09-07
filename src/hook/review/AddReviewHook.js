import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createReview } from '../../redux/actions/reviewAction'
import notify from '../useNotifaction'

const AddReviewHook = (id) => {
    const dispatch = useDispatch()
    const [name,setName] = useState("")
    const [ratings , setRatings] = useState(0)
    const [loading, setLoading] = useState(true)


    const OnChangeRateText = (e) => {
        setName(e.target.value)
    }
    const OnChangeRateValue = (val) => {
        console.log(val);
        setRatings(val)
    }

    var user = ""
    if (localStorage.getItem("user") != null)
        user = JSON.parse(localStorage.getItem("user"))


    ///when save rate 
    const onSubmit = async () => {
        setLoading(true)
        await dispatch(createReview({
            name,
            ratings,
            product: id,
            user : user._id
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.reviewReducer.createView)

    useEffect(() => {
        if (loading === false) {
            if (res) {
                if (res.status && res.status === 403) {
                    notify("غير مسموح للادمن بالتقييم", "error")
                } else if (res.data.errors) {
                    notify(res.data.errors[0].msg, "error")
                } else if (res.status && res.status === 201) {
                    notify("تمت اضافة التقييم بنجاح", "success")
                    setTimeout(() => {
                        window.location.reload(false)
                    }, 1000);
                }
            }
        }
    }, [loading])

    return [name ,ratings ,user ,onSubmit ,OnChangeRateText ,OnChangeRateValue]
}

export default AddReviewHook
