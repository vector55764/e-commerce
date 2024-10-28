import React, { useState } from 'react'
import { addProduct } from '../../store/products.slice'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { ProductItem } from './ProductItem'

export const ProductsItemList = () => {
  const [desc, setDesc] = useState('')
  const products = useAppSelector(state => state.products.data)
  const dispatch = useAppDispatch()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value)
  }

  const handleAddProduct = () => {
    if (desc) {
      dispatch(addProduct(desc))
      setDesc('')
    }
  }

  return (
    <>
      <input type="text" value={desc} onChange={handleInputChange} />
      <button onClick={handleAddProduct}>add</button>
      <ul>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </>
  )
}
