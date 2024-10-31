import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import ProductForm from '../molecules/ProductForm'
import { ProductModal } from '../molecules/ProductModal'
import { ProductItem } from './ProductItem'
import { fetchProductsAction } from '../../features/products/actions'
import { Bounce, ToastContainer } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'

if (typeof window !== 'undefined') {
  injectStyle()
}

export const ProductsItemList = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const { data, loading, error } = useAppSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProductsAction())
  }, [dispatch])

  const handletoggleModal = () => {
    setShowModal(!showModal)
  }

  if (loading) console.log('loading')
  if (error) console.log(error)

  if (data.length === 0) return <div>Nothing</div>

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
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
