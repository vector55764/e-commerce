import {
  FormControl,
  Stack,
  TextField,
  InputLabel,
  SelectChangeEvent,
  Select,
  MenuItem,
  Checkbox,
  Button,
} from '@mui/material'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { Product } from '../../features/products/products.slice'
import {
  addNewProduct,
  updateProduct,
} from '../../features/products/createActions'

interface FormProps {
  type: string
  product?: Product
}

const ProductForm = ({ type, product }: FormProps) => {
  const [name, setName] = useState(product?.name ?? '')
  const [inStock, setInStock] = useState(product?.inStock ?? false)
  const [price, setPrice] = useState(product?.price ?? 0)
  const [description, setDescription] = useState(product?.description ?? '')
  const [discount, setDiscount] = useState(product?.discount ?? 0)
  const [category, setCategory] = useState(product?.category ?? '')

  const dispatch = useAppDispatch()

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newProduct: Product = {
      id: '',
      name: name,
      imageUrls: [],
      rank: 0,
      countReviews: 0,
      inStock: inStock,
      price: price,
      description: description,
      colours: [],
      sizes: [],
      discount: discount,
      category: category,
    }

    if (type === 'add') dispatch(addNewProduct(newProduct)).unwrap()

    if (type === 'update' && product !== undefined) {
      const p = { ...newProduct, id: product.id }
      dispatch(updateProduct(p)).unwrap()
    }
  }
  const handleChangeSelect = (e: SelectChangeEvent) => {
    setCategory(e.target.value as string)
  }
  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setInStock(e.target.checked)
  }

  return (
    <>
      <h3>{type} new product</h3>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="column" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Products name"
            onChange={e => setName(e.target.value)}
            value={name}
            fullWidth
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Products description"
            onChange={e => setDescription(e.target.value)}
            value={description}
            fullWidth
            required
          />
          <TextField
            type="number"
            variant="outlined"
            color="secondary"
            label="Product price"
            onChange={e => setPrice(+e.target.value)}
            value={price}
            fullWidth
            required
          />
          <TextField
            type="number"
            variant="outlined"
            color="secondary"
            label="Product discount"
            onChange={e => setDiscount(+e.target.value)}
            value={discount}
            fullWidth
            required
          />
          <FormControl fullWidth>
            <InputLabel id="categories-label">Category</InputLabel>
            <Select
              labelId="categories-label"
              id="categories-select"
              value={category}
              label="Category"
              onChange={handleChangeSelect}
            >
              <MenuItem value="laptops">laptops</MenuItem>
              <MenuItem value="phones">phones</MenuItem>
              <MenuItem value="shoes">shoes</MenuItem>
              <MenuItem value="clothes">clothes</MenuItem>
            </Select>
          </FormControl>
          <Checkbox checked={inStock} onChange={handleChangeCheckbox} />
        </Stack>
        <Button
          variant="outlined"
          color="secondary"
          type="submit"
          sx={{ mx: 'auto', width: 400 }}
        >
          {type}
        </Button>
      </form>
    </>
  )
}

export default ProductForm
