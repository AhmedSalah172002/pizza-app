import { CREATE_NEW_COUPON,GET_ALL_COUPONS,GET_SPECIFIC_COUPON,UPDATE_COUPON,DELETE_COUPON,GET_ERROR } from '../type'
const inital = {
    coupons: [],
    allcoupons: [],
    onecoupon: [],
    deletecoupons: [],
    updatecoupons: [],
    loading: true,
}
const couponsReducer = (state = inital, action) => {
    switch (action.type) {
        case CREATE_NEW_COUPON:
            return {
                ...state,
                coupons: action.payload,
                loading: false,
            }
        case GET_ALL_COUPONS:
            return {
                ...state,
                allcoupons: action.payload,
                loading: false,
            }
        case GET_SPECIFIC_COUPON:
            return {
                onecoupon: action.payload,
                loading: false,
            }
        
        case DELETE_COUPON:
            return {
                ...state,
                deletecoupons: action.payload,
                loading: false,
            }
        case UPDATE_COUPON:
            return {
                ...state,
                updatecoupons: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                loading: true,
                coupons: action.payload,
            }
        default:
            return state;
    }
}
export default couponsReducer