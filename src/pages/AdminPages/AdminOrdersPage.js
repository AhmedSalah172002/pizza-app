import React from 'react'
import AdminHeader from '../../component/Admin/AdminHeader'
import AdminSidebar from '../../component/Admin/AdminSidebar'
import AdminOrders from '../../component/Admin/AdminOrders'

const AdminOrdersPage = () => {
  return (
    <>
    <div dir='rtl'>
    <AdminHeader title="لوحة التحكم" />
   
   <div className='d-flex'>
   <AdminSidebar active="orders" />
   <AdminOrders />
   </div>
    </div>
      
    </>
  )
}

export default AdminOrdersPage
