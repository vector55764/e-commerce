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

const ProductForm = () => {
  const [name, setName] = useState('')
  const [inStock, setInStock] = useState(true)
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [discount, setDiscount] = useState(0)
  const [category, setCategory] = useState('')

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    console.log(e)
  }
  const handleChangeSelect = (e: SelectChangeEvent) => {
    setCategory(e.target.value as string)
  }
  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setInStock(e.target.checked)
  }

  return (
    <>
      <h3>Add new product</h3>
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
          Add
        </Button>
      </form>
    </>
  )
}

export default ProductForm
