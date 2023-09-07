import React from 'react'
import GetOrders from '../../hook/admin/GetOrders'
import Pagination from '../utils/Pagination';
import { Link } from 'react-router-dom';

const AdminOrders = () => {
  const [userName, results, paginate, orderData, onPress] =GetOrders()
  return (
    <div dir='rtl' className="admin-orders ">
    <div className="container">
    <h2 className='mb-4'>الطلبات</h2>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">رقم الطلب</th>
      <th scope="col">ايميل العميل</th>
      <th scope="col">اسم العميل</th>
      <th scope="col">قيمة الطلب</th>
      <th scope="col">طريقة الطلب</th>
      <th scope='col'>حالة الطلب</th>
    </tr>
  </thead>
  <tbody>
  {
    orderData ?orderData.map((e,i)=>{
      return(
        <tr key={i}>
        <th scope="row">{i+1}</th>
        <td><Link onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} style={{textDecoration:"none"}} to={`/orders/${e._id}`}>{e._id}</Link> </td>
        <td>{e.user.email}</td>
        <td>{e.user.name}</td>
        <td>{e.totalOrderPrice}</td>
        <td>{e.paymentMethodType}</td>
        <td>{e.isDelivered ? "تم التوصيل": "لم يتم التوصيل"}</td>
      </tr>
      )
    }) :null
   }
   
  </tbody>
</table>
<Pagination pageCount={paginate} onPress={onPress} />
    </div>
   </div>
  )
}

export default AdminOrders
