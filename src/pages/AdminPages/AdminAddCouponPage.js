import React from 'react'
import AdminHeader from '../../component/Admin/AdminHeader'
import AdminSidebar from '../../component/Admin/AdminSidebar'
import AddCoupon from '../../component/Admin/AddCoupon'

const AdminAddCouponPage = () => {
  return (
    <>
    <div dir='rtl'>
    <AdminHeader title="لوحة التحكم" />
 
 <div className='d-flex'>
 <AdminSidebar active="add-coupon" />
 <AddCoupon />
 </div>
    </div>
</>
  )
}

export default AdminAddCouponPage
