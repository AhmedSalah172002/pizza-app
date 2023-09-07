import React from 'react'
import AddUser from '../../component/Admin/AddUser'
import AdminSidebar from '../../component/Admin/AdminSidebar'
import AdminHeader from '../../component/Admin/AdminHeader'

const AdminAddUSerPage = () => {
  return (
  <>
<div dir='rtl'>
<AdminHeader title="لوحة التحكم" />
   
   <div className='d-flex'>
   <AdminSidebar active="add-user" />
   <AddUser />
   </div>
</div>
  </>
  )
}

export default AdminAddUSerPage
