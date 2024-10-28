import { deleteProduct, Product, ProductId } from '../../store/products.slice'
import { useAppDispatch } from '../../store/store'

export const ProductItem = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch()
  const handleUpdateProduct = (id: ProductId) => {
    console.log(id)
    //   dispatch(updateProduct({id}))
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
          <button onClick={() => handleUpdateProduct(product.id)}>
            update
          </button>
          <button onClick={() => handleDeleteProduct(product.id)}>
            delete
          </button>
        </div>
      </li>
    </>
  )
}
