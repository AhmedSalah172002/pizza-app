import React from 'react'
import UserHead from '../../component/User/UserHead'
import UserDetails from '../../component/User/UserDetails'
import UserFeatures from '../../component/User/UserFeatures'
import UserWishlist from '../../component/User/UserWishlist'
import GetWishlistHook from '../../hook/user/GetWishlistHook'
import GetAllOrders from '../../hook/admin/GetAllOrders'

const UserWishlistPage = () => {
  const [favProd , items] = GetWishlistHook()
  const [orderData] =GetAllOrders()
  return (
    <>
     <UserHead title="الصفحة الشخصية"/>
    <UserDetails />
    <UserFeatures favProd={items} active="favourite"/>
    <UserWishlist prod={favProd} orderCount={orderData.length} items={items}/>
    </>
  )
}

export default UserWishlistPage
