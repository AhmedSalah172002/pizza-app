import React from 'react'

import { Link } from 'react-router-dom'
import addProduct from "../../images/5333018.png"
import Products from "../../images/products.png"
import addUser from "../../images/add-user.png"
import users from "../../images/users.png"
import addCoupon from "../../images/add-coupon.png"
import coupon from "../../images/coupon.png"
import orders from "../../images/orders.png"
const AdminSidebar = ({active}) => {
  return (
<div className=" admin-sidebar d-flex flex-column">


<Link to="/admin/add-product" >
<div style={active ==="add-product"?{color:"#3874ff",borderBottom:"2px solid #3874ff"}:null} className="admin-fea pb-2  d-flex align-items-center ">
 <img src={addProduct} alt="addProduct" style={{width:"50px"}} />
 <h6 className='me-2'>إضافة منتج  </h6>
 </div>
</Link>

<Link to="/admin/products" >
<div style={active ==="products"?{color:"#3874ff",borderBottom:"2px solid #3874ff"}:null} className="admin-fea pb-2 d-flex align-items-center ">
<img src={Products} alt="addProduct" style={{width:"50px"}} />
 <h6 className='me-2'>المنتجات </h6>
 </div>
</Link>


<Link to="/admin/add-user" >
<div style={active ==="add-user"?{color:"#3874ff",borderBottom:"2px solid #3874ff"}:null} className="admin-fea pb-2 d-flex align-items-center ">
 <img src={addUser} alt="addProduct" style={{width:"50px"}} />
 <h6 className='me-2'> إضافة مستخدم جديد</h6>
 </div>
</Link>

<Link to="/admin/users" >
<div style={active ==="user"?{color:"#3874ff",borderBottom:"2px solid #3874ff"}:null} className="admin-fea pb-2 d-flex align-items-center ">
 <img src={users} alt="addProduct" style={{width:"50px"}} />
 <h6 className='me-2'> المستخدمين</h6>
 </div>
</Link>


<Link to="/admin/add-coupon" >
<div style={active ==="add-coupon"?{color:"#3874ff",borderBottom:"2px solid #3874ff"}:null} className="admin-fea pb-2 d-flex align-items-center ">
 <img src={addCoupon} alt="addProduct" style={{width:"50px"}} />
 <h6 className='me-2'> إضافة كوبون</h6>
 </div>
</Link>

<Link to="/admin/coupons" >
<div style={active ==="coupons"?{color:"#3874ff",borderBottom:"2px solid #3874ff"}:null} className="admin-fea pb-2 d-flex align-items-center ">
 <img src={coupon} alt="addProduct" style={{width:"50px"}} />
 <h6 className='me-2'> الكوبونات</h6>
 </div>
</Link>

<Link to="/admin/orders" >
<div style={active ==="orders"?{color:"#3874ff",borderBottom:"2px solid #3874ff"}:null} className="admin-fea pb-2 d-flex align-items-center ">
 <img src={orders} alt="addProduct" style={{width:"50px"}} />
 <h6 className='me-2'> الطلبات</h6>
 </div>
</Link>
 
</div>
  
  )
}

export default AdminSidebar
