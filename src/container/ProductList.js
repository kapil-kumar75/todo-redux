import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'
import axios from 'axios'
import { setProducts } from '../redux/actions/productActions'

const ProductList = () => {
  const products = useSelector((state) => state)
  const dispatch = useDispatch()
  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Err', err)
      })
    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  console.log('products', products)
  return (
    <div className="ui grid container">
      <Product />
    </div>
  )
}

export default ProductList
