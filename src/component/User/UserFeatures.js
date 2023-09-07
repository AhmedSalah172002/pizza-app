import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,  faStar,faHeart, faUser, faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const UserFeatures = ({active , favProd ,orderCount}) => {
  const user =JSON.parse(localStorage.getItem("user"))
  if(user.role ==="admin")
  active="info"
  
  return (
    <>
    <div dir='rtl' id='UserFeatures' className="UserFeatures mt-5 mb-5">
        <div className="container">
            <div className=" user-features d-flex">
              {
                user ? user.role === "user" ? <>
                
                <Link onClick={()=> document.getElementById("UserFeatures").scrollIntoView(false,{behavior: 'smooth'})} to="/Myprofile" >
               <div style={active ==="order"?{color:"#3874ff",borderBottom:"2px solid #3874ff"}:null} className="user-fea d-flex ms-5">
                <FontAwesomeIcon icon={faCartShopping} />
                <h6 className='me-2'> ({orderCount || 0}) الطلبات  </h6>
                </div>
               </Link>
               
               <Link onClick={()=> document.getElementById("UserFeatures").scrollIntoView(false,{behavior: 'smooth'})} to="/Myprofile/wishlist" >
               <div style={active ==="favourite"?{color:"#3874ff",borderBottom:"2px solid #3874ff"}:null} className="user-fea d-flex ms-5">
                <FontAwesomeIcon icon={faHeart} />
                <h6 className='me-2'> ({favProd.length}) المفضلة</h6>
                </div>
               </Link>
               
                <Link onClick={()=> document.getElementById("UserFeatures").scrollIntoView(false,{behavior: 'smooth'})} to="/Myprofile/info" >
                <div style={active ==="info"?{color:"#3874ff",borderBottom:"2px solid #3874ff"}:null} className="user-fea d-flex ms-5">
                <FontAwesomeIcon icon={faUser} />
                <h6 className='me-2'>معلوماتك الشخصية</h6>
                </div>
                </Link>
                <Link onClick={()=> document.getElementById("UserFeatures").scrollIntoView(false,{behavior: 'smooth'})} to="/Myprofile/address" >
                <div style={active ==="address"?{color:"#3874ff",borderBottom:"2px solid #3874ff"}:null} className="user-fea d-flex ms-5">
                <FontAwesomeIcon icon={faMapLocation} />
                <h6 className='me-2'>العناوين الشخصية</h6>
                </div>
                </Link>
                </> :      <Link onClick={()=> document.getElementById("UserFeatures").scrollIntoView(false,{behavior: 'smooth'})} to="/Myprofile/info" >
                <div style={active ==="info"?{color:"#3874ff",borderBottom:"2px solid #3874ff"}:null} className="user-fea d-flex ms-5">
                <FontAwesomeIcon icon={faUser} />
                <h6 className='me-2'>معلوماتك الشخصية</h6>
                </div>
                </Link>  :null
              }

              
                
            </div>
        </div>
    </div>
    </>
  )
}

export default UserFeatures
