import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch , faArrowCircleDown ,faFilter } from '@fortawesome/free-solid-svg-icons'
import UnopDropdown from 'unop-react-dropdown'
import GetAllProducts from '../../hook/products/GetAllProducts'




const ProductFeatures = () => {
    const [ , , setSortType ,search, setSearch,priceFilter , setPriceFilter ,filterButton, setFilterButton]=GetAllProducts()
    const SearchProduct=(word)=>{
        localStorage.setItem("SearchWord",word)
        setSearch(word)
    }
    const SortProduct=(sort)=>{
        localStorage.setItem("SortWord",sort)
        setSortType(sort)
    }
    const FilterProduct=(filter)=>{
        localStorage.setItem("FilterWord",filter)
        setPriceFilter(filter)
    }
  return (
    
   <>
   <div className="ProductFeatures mt-5 mb-5">
    <div className="container">
       <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="sort mb-5">
        <UnopDropdown trigger={<button className='sort-btn'><FontAwesomeIcon icon={faArrowCircleDown} className='me-2' /> رتب حسب </button>}>
            <ul>
                <li onClick={()=>SortProduct("sort=")}>بدون ترتيب</li>
                <li onClick={()=>SortProduct("sort=+mediumPrice")}>الأقل سعراً</li>
                <li onClick={()=>SortProduct("sort=-mediumPrice")}>الأعلي سعراً</li>
                <li onClick={()=>SortProduct("sort=-sold")}>الأكثر بيعاً</li>
            </ul>
        </UnopDropdown>
        </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="search mb-5">
            <input onChange={(e)=>SearchProduct(e.target.value)} value={localStorage.getItem("SearchWord")} type="search" name="search" id="search" placeholder='ابحث عن وجبتك المفضلة' />
            <button className='search-btn'> <FontAwesomeIcon icon={faSearch} /></button>
        </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="filter">
        <div>
            <button className="filter-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <FontAwesomeIcon icon={faFilter} className='me-2' /> تحديد السعر
            </button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title " id="offcanvasExampleLabel">تحديد السعر</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body mt-5">
                    <input onChange={(e)=>FilterProduct(e.target.value)} type="range" min="0" value={localStorage.getItem("FilterWord")} step="1" max="400" name="range" className='mb-5 ' />
                    <h4 className='text-end mb-5'> السعر من: <span style={{color:"#fd9d3e"}}> {localStorage.getItem("FilterWord") || 0} جنية</span>  الي  <span style={{color:"#fd9d3e"}}> 400 جنية</span></h4>
                    <button onClick={()=> setFilterButton(!filterButton)} className='filter-btn'>حدد</button>
                </div>
            </div>
        </div>
        </div>
        </div>
       </div>
    </div>
   </div>
   </>
  )
}

export default ProductFeatures
