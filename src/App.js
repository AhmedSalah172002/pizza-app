import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import  Navbar  from '../src/component/utils/Navbar';
import HomePage from './pages/HomePage';
import Footer from "./component/utils/Footer";
import ProductsPage from "./pages/ProductsPages/ProductsPage";
import ProductDetails from "./pages/ProductsPages/ProductDetailsPage";
import LoginPage from "./pages/authPages/LoginPage";
import SignupPage from "./pages/authPages/SignupPage";
import AddProfileImage from "./pages/userPage/AddProfileImagePage";
import ForgetPasswordPage from "./pages/authPages/ForgetPasswordPage";
import ResetPassword from "./pages/authPages/ResetPassword";
import NewPasswordPage from "./pages/authPages/NewPasswordPage";
import UserProfilePage from "./pages/userPage/UserProfilePage";
import UserWishlistPage from "./pages/userPage/UserWishlistPage";
import UserInfoPage from "./pages/userPage/UserInfoPage";
import UserAddressPage from "./pages/userPage/UserAddressPage";
import AdminPage from "./pages/AdminPages/AdminPage";
import AdminProductsPage from "./pages/AdminPages/AdminProductsPage";
import AdminAddUSerPage from "./pages/AdminPages/AdminAddUSerPage";
import AdminUsersPage from "./pages/AdminPages/AdminUsersPage";
import AdminAddCouponPage from "./pages/AdminPages/AdminAddCouponPage";
import AdminCouponsPage from "./pages/AdminPages/AdminCouponsPage";
import AdminOrdersPage from "./pages/AdminPages/AdminOrdersPage";
import AdminEditProductPage from "./pages/AdminPages/AdminEditProductPage";
import AdminEditUsersPage from "./pages/AdminPages/AdminEditUsersPage";
import AdminEditCouponPage from "./pages/AdminPages/AdminEditCouponPage";
import CartPage from "./pages/CartPage/CartPage";
import PaymentMethoudPage from "./pages/CartPage/PaymentMethoudPage";
import OrderPage from "./pages/CartPage/OrderPage";
import ProtectedRouteHook from "./hook/auth/ProtectedRouteHook";
import ProtectedRoute from "./component/utils/ProtectedRoute";



function App() {
  const [isUser, isAdmin, userData] = ProtectedRouteHook()

  return (
   <>
   <BrowserRouter>
   <Navbar />
    <Routes>


      <Route path="/" element={<HomePage /> } />
      <Route path="products" element={<ProductsPage /> } />
      <Route path="products/:ProductId" element={<ProductDetails />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="add-profile-image" element={<AddProfileImage />} />
      <Route path="forgetpassword" element={<ForgetPasswordPage />} />
      <Route path="resetcode" element={<ResetPassword />} />
      <Route path="newpassword" element={<NewPasswordPage />} />


      <Route element={<ProtectedRoute auth={isUser} />}>
      <Route path="Myprofile" element={<UserProfilePage />} />
            <Route path="Myprofile/wishlist" element={<UserWishlistPage />} />
            <Route path="Myprofile/address" element={<UserAddressPage/>} />
            <Route path="cart" element={<CartPage/>} />
            <Route path="order/paymet" element={<PaymentMethoudPage/>} />
          </Route>

  



      <Route element={<ProtectedRoute auth={isAdmin} />}>
          <Route path="admin/add-product" element={<AdminPage/>} />
          <Route path="admin/products" element={<AdminProductsPage/>} />
          <Route path="products/edit/:ProductId" element={<AdminEditProductPage  />} />
          <Route path="admin/add-user" element={<AdminAddUSerPage/>} />
          <Route path="admin/users" element={<AdminUsersPage/>} />
          <Route path="users/edit/:userId" element={<AdminEditUsersPage  />} />
          <Route path="admin/add-coupon" element={<AdminAddCouponPage/>} />
          <Route path="coupons/edit/:couponId" element={<AdminEditCouponPage/>} />
          <Route path="admin/coupons" element={<AdminCouponsPage/>} />
          <Route path="admin/orders" element={<AdminOrdersPage/>} />
        </Route>
          
          
            <Route path="Myprofile/info" element={<UserInfoPage />} />
             <Route path="orders/:orderId" element={<OrderPage/>} />


    </Routes>
   <Footer />
   </BrowserRouter>
   
   
   </>
  );
}

export default App;
