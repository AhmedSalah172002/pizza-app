import React from 'react'
import icon from "../../images/User-Account-Person-PNG-File.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import ProfileHook from '../../hook/user/ProfileHook'
import AddAddressHook from '../../hook/address/AddAddressHook'
import { ToastContainer } from 'react-toastify'
import ChangeMyPasswordHook from '../../hook/user/ChangeMyPasswordHook'
import GetOrders from '../../hook/admin/GetOrders'
import GetAllOrders from '../../hook/admin/GetAllOrders'

const UserDetails = () => {
    let auth
  if(localStorage.getItem("user") !== null){
    auth = JSON.parse(localStorage.getItem("user"))
  }
    const [item] =ProfileHook()
    const [alias, detalis, phone,city, onChangeAlias,onChangeCity, onChangeDetalis, onChangePhone, onSubmit]=AddAddressHook()
    const [oldpassword, newpassword, confirmPassword, onChangeConfirmPassword,onChangePassword,onChangePrevPassword,OnSubmit]=ChangeMyPasswordHook()
    const [orderData] =GetAllOrders()
    let total=0
    const totalPaid = orderData ?  orderData.map((e)=> total+=e.totalOrderPrice) :0
    const dateString = orderData ? orderData[orderData.length-1] ? orderData[orderData.length-1].createdAt :new Date() : new Date()

    const date1 = new Date(dateString);
    console.log(date1);

    const currentDate = new Date();

    const timeDifference = currentDate - date1;

    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    let day=daysDifference.toFixed(0)
  return (
<>
<div dir='rtl' className="userDetails mt-5 mb-5">
    <div className="container">
        <h1 style={{color:"#fd9d3e"}} className='mb-3'>الصفحة الشخصية</h1>
      
        <div className="row">
            <div className="col-lg-8 col-md-12">
                <div className="user-details mb-5">
                    <div className="personal-details mb-5 d-flex align-items-center">
                        <div className="personal-image ms-3">
                            <img src={item.profileImg || icon} alt="icon" />
                        </div>
                        <div className="personal-text">
                            <h3>{item.name}</h3>
                            <p> انضم منذ {item.createdAt ? item.createdAt.split("T")[0] : "غير معلوم"}</p>
                        </div>
                    </div>
                    <div id='changePass'>
            <button style={{borderColor:"transparent",backgroundColor:"transparent",fontSize:"1.2em"}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <FontAwesomeIcon style={{color:"#999"}} icon={faKey}  /> 
            </button>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title " id="offcanvasExampleLabel">تغيير كلمة المرور</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body mt-5">
                   <div className='mb-3 '>
                   <label className='mb-2'>كلمة المرور الحالية</label>
                    <input onChange={(e)=>onChangePrevPassword(e)} value={oldpassword} style={{backgroundColor:"transparent",padding:"2px 10px",borderColor:"#cbd0dd",outlineColor:"#fd9d3e"}}
                     placeholder='اكتب كلمة المرور الحالية' type="password" className='mb-5 ' />
                   </div>

                   <div className='mb-3 '>
                   <label className='mb-2' >كلمة المرور الجديدة</label>
                    <input onChange={(e)=>onChangePassword(e)} value={newpassword} style={{backgroundColor:"transparent",padding:"2px 10px",borderColor:"#cbd0dd",outlineColor:"#fd9d3e"}}
                     placeholder='اكتب كلمة المرور الجديدة' type="password" className='mb-5 ' />
                   </div>

                   <div className='mb-3 '>
                   <label className='mb-2' htmlFor="alias">تأكيد كلمة المرور</label>
                    <input  onChange={(e)=>onChangeConfirmPassword(e)} value={confirmPassword} style={{backgroundColor:"transparent",padding:"2px 10px",borderColor:"#cbd0dd",outlineColor:"#fd9d3e"}}
                     placeholder='قم بتأكيد كلمة المرور'  type="password" className='mb-5 ' />
                   </div>
                    <button onClick={()=> OnSubmit()}  className='filter-btn'>حفظ التعديلات</button>
                </div>
            </div>
        </div>
                    <hr />
               {
                item.role ==="user" ? <div className="user-activity d-flex justify-content-between mt-3 mb-3">
                <div className="total">
                    <h5 >إجمالي الصرف</h5 >
                    <p className='text-center fs-5'>{totalPaid[totalPaid.length-1] || 0} جنية </p>
                </div>
                <div className="total">
                    <h5 >آخر طلب</h5 >
                    <p className='text-center fs-5'>{day == 1? "يوم واحد" : day == 2?"يومان" :day <= 10 ? `${day} أيام`:`${day} يوم`}</p>
                </div>
                <div className="total">
                    <h5 >إجمالي الطلبات</h5 >
                    <p className='text-center fs-5'>{orderData ? orderData.length :0}</p>
                </div>
            </div>:<div className='d-flex justify-content-between'>
                <h5>نوع المستخدم</h5>
                <p style={{color:"#fd9d3e"}}>أدمن</p>
            </div>
               }
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
            <div className="user-info">
                <div className="add d-flex justify-content-between align-items-center">
                <h3 style={{color:"#fd9d3e"}}>العناوين الرئيسية</h3>
            <div>
          {
            auth ? auth.role === "user" ?   <button style={{borderColor:"transparent",backgroundColor:"transparent",fontSize:"1.2em"}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample1" aria-controls="offcanvasExample1">
            <FontAwesomeIcon icon={faPenToSquare}  /> 
            </button> :null : null
          }

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample1" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title " id="offcanvasExampleLabel">إضافة عنوان جديد</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body mt-5">
                   <div className='mb-3 '>
                   <label className='mb-2' htmlFor="alias">اسم العنوان</label>
                    <input onChange={(e)=>onChangeAlias(e)} value={alias} style={{backgroundColor:"transparent",padding:"2px 10px",borderColor:"#cbd0dd",outlineColor:"#fd9d3e"}}
                     placeholder='اكتب اسم العنوان' type="text" className='mb-5 ' />
                   </div>

                   <div className='mb-3 '>
                   <label className='mb-2' htmlFor="alias">التفاصيل</label>
                    <input onChange={(e)=>onChangeDetalis(e)} value={detalis} style={{backgroundColor:"transparent",padding:"2px 10px",borderColor:"#cbd0dd",outlineColor:"#fd9d3e"}}
                     placeholder='اكتب التفاصيل' type="text" className='mb-5 ' />
                   </div>

                   <div className='mb-3 '>
                   <label className='mb-2' htmlFor="alias">رقم الهاتف</label>
                    <input  onChange={(e)=>onChangePhone(e)} value={phone} style={{backgroundColor:"transparent",padding:"2px 10px",borderColor:"#cbd0dd",outlineColor:"#fd9d3e"}}
                     placeholder='اكتب رقم الهاتف' type="text" className='mb-5 ' />
                   </div>

                   <div className='mb-3 '>
                   <label className='mb-2' htmlFor="alias">اسم المدينة</label>
                    <input onChange={(e)=>onChangeCity(e)} value={city} style={{backgroundColor:"transparent",padding:"2px 10px",borderColor:"#cbd0dd",outlineColor:"#fd9d3e"}}
                     placeholder='اكتب اسم المدينة' type="text" className='mb-5 ' />
                   </div>
                    
                    <button onClick={()=> onSubmit()}  className='filter-btn'>إضافة</button>
                </div>
            </div>
        </div>
                </div>
                <hr />
               {
                item.addresses ? <>
                <div className="address d-flex">
                    <h5 className='ms-3'>{item.addresses[0] ?`${item.addresses[0].alias} :`: "لا يوجد عناوين"}</h5 >
                    <p>{item.addresses[0] ?item.addresses[0].details : ""}</p>
                </div>
                <div className="address d-flex">
                <h5 className='ms-3'>{item.addresses[1] ? `${item.addresses[1].alias} :` ||"" : ""} </h5 >
                    <p>{item.addresses[1] ? item.addresses[1].details || "" : ""}</p>
                </div></> : <h3>لا يوجد عناوين</h3>
               }
                <hr />
                <div className="address d-flex justify-content-between">
                    <h5 >البريد الالكتروني :</h5 >
                    <p>{item.email || ""}</p>
                </div>
                <div className="address d-flex justify-content-between">
                    <h5 >الهاتف</h5 >
                    <p>{item.phone || ""}</p>
                </div>
            </div>
        </div>
        </div>
      
    </div>
    <ToastContainer />
</div>
</>
  )
}

export default UserDetails
