import { useState } from 'react'
import { deleteProduct, Product, ProductId } from '../../store/products.slice'
import { useAppDispatch } from '../../store/store'
import { ProductModal } from '../molecules/productModal'
import ProductForm from '../molecules/ProductForm'

export const ProductItem = ({ product }: { product: Product }) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const handletoggleModal = () => {
    setShowModal(!showModal)
  }

  const handleDeleteProduct = (id: ProductId) => {
    dispatch(deleteProduct(id))
  }

  return (
    <>
      <li>
        <div>
          <p>{product.id}</p>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <div>image urls</div>
          <p>{product.rank}</p>
          <p>{product.price}</p>
          <p>{product.countReviews}</p>
          <p>{product.inStock ? 'in Stock' : 'out of Stock'}</p>
          <div>colours</div>
          <div>
            {product.size.map(item => (
              <span key={item}>{item + '  '}</span>
            ))}
          </div>
          <p>{product.discount}</p>
          <p>{product.category}</p>
        </div>
        <div>
          <button onClick={handletoggleModal}>update</button>
          {showModal && (
            <ProductModal
              open={showModal}
              handleClose={handletoggleModal}
              children={<ProductForm type={'update'} product={product} />}
            />
          )}
          <button onClick={() => handleDeleteProduct(product.id)}>
            delete
          </button>
        </div>
      </li>
    </>
  )
}
