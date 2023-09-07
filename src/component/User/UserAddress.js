import React, { useState } from 'react'
import GetAddressHook from '../../hook/address/GetAddressHook'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { deleteUserAddress } from '../../redux/actions/addressAction'

const UserAddress = () => {
  const [res]=GetAddressHook()
  
  const dispatch=useDispatch()
  const deleteAddressById=(productId,productName)=>{
    Swal.fire({
      title: 'هل أنت متأكد ؟',
      text: `أنت علي وشك أن تقوم بحذف ${productName}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'نعم قم بالحذف',
      cancelButtonText: "الغاء",
    }).then(async(result) => {
      if (result.isConfirmed) {
       await dispatch(deleteUserAddress(productId))
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
    <div dir='rtl' className="user-address my-5">
    <div className="container">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">اسم العنوان</th>
      <th scope="col">التفاصيل</th>
      <th scope="col">رقم الهاتف</th>
      <th scope="col">المدينة</th>
      <th scope="col">الاعدادات</th>
    </tr>
  </thead>
  <tbody>
   {
    res ? res.data ? res.data.map((e,i)=>{
      return(
        <tr key={i}>
        <th scope="row">{i+1}</th>
        <td>{e.alias}</td>
        <td>{e.details}</td>
        <td>{e.phone}</td>
        <td>{e.city}</td>
        <td>
        <button onClick={()=>deleteAddressById(e._id,e.alias)} className='del'>حذف</button>
        </td>
      </tr>
      )
    }) :null :null
   }
  </tbody>
</table>
    </div>
   </div>
  )
}

export default UserAddress
