import React from 'react'
import AdminHeader from '../../component/Admin/AdminHeader'
import AdminSidebar from '../../component/Admin/AdminSidebar'
import AdminCoupons from '../../component/Admin/AdminCoupons'
import GetCouponHook from '../../hook/admin/GetCouponHook'

const AdminCouponsPage = () => {
  const [coupons ,pageCount ,onPress]=GetCouponHook(8)
  return (
    <>
  <div dir='rtl'>
  <AdminHeader title="لوحة التحكم" />
 
 <div className='d-flex'>
 <AdminSidebar active="coupons" />
 <AdminCoupons coupons={coupons} pageCount={pageCount} onPress={onPress}  />
 </div>
  </div>
</>
  )
}

export default AdminCouponsPage
