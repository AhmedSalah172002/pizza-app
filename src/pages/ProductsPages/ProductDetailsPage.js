import React from 'react'
import ProductDetailsHead from '../../component/ProductDetails/ProductDetailsHead'
import ProductDetailsBody from '../../component/ProductDetails/ProductDetailsBody'
import Review from '../../component/ProductDetails/Review'
import RelatedProducts from '../../component/ProductDetails/RelatedProducts'

const ProductDetails = () => {
  return (
    <>
    <ProductDetailsHead />
    <ProductDetailsBody />
    <Review />
    <RelatedProducts />
    </>
  )
}

export default ProductDetails
