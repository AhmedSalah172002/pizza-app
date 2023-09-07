import React from 'react'
import { Link } from 'react-router-dom'
import AddWishlistHook from '../../hook/user/AddWishlistHook'
import { useDispatch } from 'react-redux'
import { removeProductToWishList } from '../../redux/actions/wishListAction'
import Swal from 'sweetalert2'

const UserWishlist = ({items ,prod}) => {
  const dispatch = useDispatch()
  const removeToWishList=(prodId,productName)=>{
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
       await dispatch(removeProductToWishList(prodId))
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
    <div dir='rtl' className="user-wishlist my-5">
    <div className="container">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">المنتج</th>
      <th scope="col">اسم المنتج</th>
      <th scope="col">تفاصيل المنتج</th>
      <th scope="col">سعر المنتج</th>
      <th scope="col">تقييمات المنتج</th>
      <th scope="col">الاعدادات</th>
    </tr>
  </thead>
  <tbody>
    {
      items ? items.map((product , i) => {
        return (
          <tr key={i}>
      <th scope="row">{i+1}</th>
      <td>
          <Link onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} to={`/products/${product._id}`}>
            <img style={{width:"50px"}} src={product.image} alt="image" />
          </Link>
        </td>
        <td>{product.name}</td>
        <td>{product.description.slice(0,20)}...</td>
        <td>{product.mediumPrice}</td>
        <td>{product.ratingsAverage || 0}</td>
        <td>
          <button onClick={()=>removeToWishList(product._id,product.name)}  className='del'>حذف</button>
        </td>
    </tr>
        )
      }) : null
    }
    
  </tbody>
</table>
    </div>
   </div>
  )
}

export default UserWishlist
