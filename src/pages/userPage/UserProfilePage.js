import React from 'react'
import UserHead from '../../component/User/UserHead'
import UserDetails from '../../component/User/UserDetails'
import UserFeatures from '../../component/User/UserFeatures'
import UserOrder from '../../component/User/UserOrder'
import GetWishlistHook from '../../hook/user/GetWishlistHook'
import GetAllOrders from '../../hook/admin/GetAllOrders'

const UserProfilePage = () => {
  const [favProd , items] = GetWishlistHook()
  const [orderData] =GetAllOrders()
  return (
  <>
    <UserHead title="الصفحة الشخصية"/>
    <UserDetails />
    <UserFeatures favProd={items} orderCount={orderData.length} active="order"/>
    <UserOrder />
  </>
  )
}

export default UserProfilePage
