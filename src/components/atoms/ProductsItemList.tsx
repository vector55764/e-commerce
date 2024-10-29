import { useState } from 'react'
import { useAppSelector } from '../../store/store'
import ProductForm from '../molecules/ProductForm'
import { ProductModal } from '../molecules/productModal'
import { ProductItem } from './ProductItem'

export const ProductsItemList = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const products = useAppSelector(state => state.products.data)

  const handletoggleModal = () => {
    setShowModal(!showModal)
  }

  if (products.length === 0) return <div>Nothing</div>

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
        {products.length > 0 &&
          products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
      </ul>
    </>
  )
}
