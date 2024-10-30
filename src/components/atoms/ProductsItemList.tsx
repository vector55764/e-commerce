import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import ProductForm from '../molecules/ProductForm'
import { ProductModal } from '../molecules/ProductModal'
import { ProductItem } from './ProductItem'
import { fetchProducts } from '../../features/products/createActions'

export const ProductsItemList = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const { data, loading, error } = useAppSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const handletoggleModal = () => {
    setShowModal(!showModal)
  }

  if (loading) console.log('loading')
  if (error) console.log(error)

  if (data.length === 0) return <div>Nothing</div>

  return (
    <>
      <button onClick={handletoggleModal}>add</button>
      {showModal && (
        <ProductModal
          open={showModal}
          handleClose={handletoggleModal}
          children={<ProductForm type={'add'} />}
        />
      )}
      <ul>
        {data.length > 0 &&
          data.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
      </ul>
    </>
  )
}
