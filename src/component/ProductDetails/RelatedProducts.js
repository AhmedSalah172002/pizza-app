import React from 'react'
import Products from '../Home/Products'

const RelatedProducts = () => {
  const reloaded=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
   setTimeout(() => {
    window.location.reload(false)
   }, 1000);
  }
  return (
    <div  className="RelatedProducts mt-5 mb-5">
        <Products reloaded={reloaded} title="منتجات قد تعجبك"/>
    </div>
   
  )
}

export default RelatedProducts
