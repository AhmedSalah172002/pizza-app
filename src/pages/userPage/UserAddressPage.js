import React from 'react'
import UserHead from '../../component/User/UserHead'
import UserDetails from '../../component/User/UserDetails'
import UserFeatures from '../../component/User/UserFeatures'
import UserAddress from '../../component/User/UserAddress'
import GetWishlistHook from '../../hook/user/GetWishlistHook'
import GetAllOrders from '../../hook/admin/GetAllOrders'

const UserAddressPage = () => {
  const [favProd , items] = GetWishlistHook()
  const [orderData] =GetAllOrders()
  return (
    <>
      <UserHead title="الصفحة الشخصية"/>
    <UserDetails />
    <UserFeatures favProd={items} orderCount={orderData.length} active="address"/>
    <UserAddress />
    
    </>
  )
}

export default UserAddressPage
