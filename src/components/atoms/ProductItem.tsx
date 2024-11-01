import { useState } from 'react'
import { Product, ProductId } from '../../features/products/products.slice.ts'
import { useAppDispatch } from '../../app/hooks.ts'
import { ProductModal } from '../molecules/ProductModal'
import ProductForm from '../molecules/ProductForm'
import { deleteProductAction } from '../../features/products/actions.ts'

export const ProductItem = ({ product }: { product: Product }) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const handletoggleModal = () => {
    setShowModal(!showModal)
  }

  const handleDeleteProduct = (id: ProductId) => {
    dispatch(deleteProductAction(id))
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
            {product.sizes.map(item => (
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
