import React from 'react'
import GetUsersHook from '../../hook/admin/GetUsersHook'
import person from "../../images/images.jpg"
import Pagination from '../utils/Pagination'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { deletUser } from '../../redux/actions/userAction'
const AdminUsers = ({users ,pageCount,onPress}) => {

  const dispatch=useDispatch()


//Delete Product
  const deleteUserById=(userId,userName)=>{
    Swal.fire({
      title: 'هل أنت متأكد ؟',
      text: `أنت علي وشك أن تقوم بحذف ${userName}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'نعم قم بالحذف',
      cancelButtonText: "الغاء",
    }).then(async(result) => {
      if (result.isConfirmed) {
       await dispatch(deletUser(userId))
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
    <div dir='rtl' className="admin-users ">
    <div className="container">
    <h2 className='mb-4'>المستخدمون</h2>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">الصورة الشخصية</th>
      <th scope="col">الاسم</th>
      <th scope="col">الايميل</th>
      <th scope="col">رقم الهاتف</th>
      <th scope="col">نوع المستخدم</th>
      <th scope="col">الاعدادات</th>
    </tr>
  </thead>
  <tbody>
   {
    users ? users.map((e,i)=>{
      return (
        <tr key={i}>
        <th scope="row">{i+1}</th>
        <td><img style={{width:"50px"}} src={e.profileImg ||person} alt="img"  /></td>
        <td>{e.name || "لايوجد"}</td>
        <td>{e.email || "لايوجد"}</td>
        <td>{e.phone || "لايوجد"}</td>
        <td>{e.role || "لايوجد"}</td>
        <td>
          <button onClick={()=>deleteUserById(e._id,e.name)} className='del'>حذف</button>
          <Link onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} to={`/users/edit/${e._id}`} className='edit'>تعديل</Link>
        </td>
      </tr>
      )
    }): <h1>لايوجد مستخدمين</h1>
   }
  </tbody>
</table>
    </div>
    <Pagination pageCount={pageCount} onPress={onPress} />
   </div>
  )
}

export default AdminUsers
