import React, { useEffect, useState } from 'react'
import {  getAllProductsSearch } from '../../redux/actions/productsAction';
import { useDispatch, useSelector } from 'react-redux';

const GetAllProducts = (limitProducts) => {
    const limit=limitProducts||5
    const [sortType, setSortType] = useState("")
    const [search, setSearch]=useState("")
    const [priceFilter , setPriceFilter]=useState(0)
    const [filterButton, setFilterButton]=useState(false)
    let SearchWord=localStorage.getItem("SearchWord")
    let SortWord=localStorage.getItem("SortWord") !==null ? localStorage.getItem("SortWord"):"sort="
    let FilterWord=localStorage.getItem("FilterWord") !==null ? localStorage.getItem("FilterWord") : 0
    const dispatch = useDispatch();

    const getProductsFunc= async()=>{
        await dispatch(getAllProductsSearch(`${SortWord}&limit=${limit}&keyword=${SearchWord}&mediumPrice[gte]=${FilterWord}`))
        
    }
    useEffect(() => {
        getProductsFunc()
    }, [sortType,search,filterButton])


    const allProducts = useSelector((state) => state.allproducts.allProducts);
    let items = [];let pageCount = []; let results = 0;
    try {
        if (allProducts.data)
            items = allProducts.data;
        else
            items = []
    } catch (e) {
        console.log(e);
     }
     try {
        if (allProducts.paginationResult)
            pageCount= allProducts.paginationResult.numberOfPages;
        else
            pageCount = []
    } catch (e) { 
        console.log(e);
    }
    try {
        if (allProducts.results)
            results = allProducts.results;
        else
            results = 0
    } catch (e) { 
        console.log(e);
    }





     const onPress = async (page) => {      
        await dispatch(getAllProductsSearch(`${SortWord}&limit=${limit}&page=${page}&keyword=${SearchWord}&mediumPrice[gte]=${FilterWord}`))
    
    }

    return [items,sortType, setSortType ,search, setSearch,priceFilter , setPriceFilter ,filterButton, setFilterButton,onPress,pageCount,results]
}

export default GetAllProducts
