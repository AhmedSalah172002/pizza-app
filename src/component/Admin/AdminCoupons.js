import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deletCoupon } from '../../redux/actions/couponAction'
import Pagination from '../utils/Pagination'

const AdminCoupons = ({coupons ,pageCount ,onPress}) => {

  const dispatch=useDispatch()

  const deleteCouponById=( couponId,coupontName)=>{
    Swal.fire({
      title: 'هل أنت متأكد ؟',
      text: `أنت علي وشك أن تقوم بحذف ${coupontName}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'نعم قم بالحذف',
      cancelButtonText: "الغاء",
    }).then(async(result) => {
      if (result.isConfirmed) {
       await dispatch(deletCoupon(couponId))
        Swal.fire(
          'تمت!',
          'لقد قمت بحذف المنتج',
          'success'
        ).then((result)=>{
          if (result.isConfirmed !==false){
            window.location.reload()
          }
        })
        
      }
    })
  }
  return (
    <div dir='rtl' className="admin-coupons ">
    <div className="container">
    <h2 className='mb-4'>الكوبونات</h2>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">اسم الكوبون</th>
      <th scope="col">تاريخ الانتهاء</th>
      <th scope="col">النسبة</th>
      <th scope="col">الاعدادات</th>
    </tr>
  </thead>
  <tbody>
   {
    coupons ? coupons.map((e,i)=>{
      return(
        <tr key={i}>
        <th scope="row">{i+1}</th>
        <td>{e.name}</td>
        <td>{e.expire.split("T")[0]}</td>
        <td>{e.discount}</td>
        <td>
          <button onClick={()=>deleteCouponById(e._id,e.name)} className='del'>حذف</button>
          <Link onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} to={`/coupons/edit/${e._id}`} className='edit'>تعديل</Link>
        </td>
        
      </tr>
      )
    }): <h1>لايوجد كوبونات حتي الان </h1>
   }
  
  </tbody>
</table>
<Pagination pageCount={pageCount} onPress={onPress} />
    </div>
   </div>
  )
}

export default AdminCoupons
