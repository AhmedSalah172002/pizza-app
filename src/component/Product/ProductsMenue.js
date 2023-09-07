import React from 'react'
import ProductCard from '../Home/ProductCard'

import GetAllProducts from '../../hook/products/GetAllProducts'
import  Pagination  from '../utils/Pagination'
import GetWishlistHook from '../../hook/user/GetWishlistHook'
const ProductsMenue = () => {
  const [items,sortType, setSortType ,search, setSearch,priceFilter , setPriceFilter ,filterButton, setFilterButton,onPress,pageCount,results]=GetAllProducts()
  const [favProd]=GetWishlistHook()
  return (
   <div dir='rtl' className="products-menue mt-5 mb-5">
        <div className="container">
           <div className="row">
           {
            items ? items.map((product ,i)=>{
              return(
                <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                <ProductCard productId={product._id}  image={product.image}
                    title={product.name} description={product.description}
                      smallPrice={product.smallPrice} mediumPrice={product.mediumPrice} largePrice={product.largePrice} ratingAvg={product.ratingsAverage} favProd={favProd} />
                </div>
              )
            }) : <h1>لا يوجد منتجات حتي الأن</h1> 
           }
           
           </div>
           <Pagination pageCount={pageCount} onPress={onPress} />
        </div>
   </div>
  )
}

export default ProductsMenue
