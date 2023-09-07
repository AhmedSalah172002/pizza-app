import React from 'react'
import ProfileImgHeader from '../../component/auth/ProfileImgHeader'
import GetLoggedCartHook from '../../hook/cart/GetLoggedCartHook';
import CartItems from '../../component/User/CartItems';

const CartPage = () => {
  const [itemsNum, cartItems, totalCartPrice, couponNameRes, totalCartPriceAfterDiscount] = GetLoggedCartHook()
    
  return (
<>
<ProfileImgHeader title="سلة المشتريات"/>
<CartItems cartItems={cartItems} totalCartPrice={totalCartPrice} totalCartPriceAfterDiscount={totalCartPriceAfterDiscount} />
</>
  )
}

export default CartPage
