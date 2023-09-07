import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import authReducer from './authReducer'
import usersReducer from './userReducer'
import couponsReducer from './couponReducer'
import reviewReducer from './reviewReducer'
import addToWishListReducer from './wishListReducer'
import userAddressesReducer from './addressReducer'
import cartReducer from './cartReducer'
import checkoutReducer from './checkoutReducer'
import orderReducer from './orderReducer'


export default combineReducers({
    allproducts: productsReducer,
    authReducer: authReducer,
    allUsers: usersReducer,
    allcoupons: couponsReducer,
    reviewReducer: reviewReducer,
    wishListReducer: addToWishListReducer,
    userAddressesReducer: userAddressesReducer,
    cartReducer: cartReducer,
    checkoutReducer: checkoutReducer,
    orderReducer: orderReducer,
})