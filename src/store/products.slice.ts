import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export type ProductId = string

export type Product = {
  id: ProductId
  name: string
  imageUrls: string[]
  rank: number
  countReviews: number
  inStock: boolean
  price: number
  description: string
  colours: string[]
  size: string[]
  discount: number
  category: string
}

export const initialProductsList: Product[] = [
  {
    id: 'vdsaasd',
    name: 'Lenovo IdeaPad 1 15AMN7',
    imageUrls: [
      'https://content1.rozetka.com.ua/goods/images/big/317315598.jpg',
      'https://content.rozetka.com.ua/goods/images/big/4858383.jpg',
      'https://content2.rozetka.com.ua/goods/images/big/391885922.jpg',
      'https://content1.rozetka.com.ua/goods/images/big/425109323.jpg',
      'https://content1.rozetka.com.ua/goods/images/big/371465542.jpg',
      'https://content.rozetka.com.ua/goods/images/big/410768842.jpg',
      'https://content1.rozetka.com.ua/goods/images/big/144249716.jpg',
    ],
    rank: 1,
    countReviews: 1081,
    inStock: false,
    price: 699,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, exercitationem.',
    colours: ['black', 'gary', 'blue', 'green', 'white'],
    size: ['xs', 's', 'm', 'l', 'xl'],
    discount: 14,
    category: 'laptops',
  },
  {
    id: 'dfasafsdf',
    name: 'ASUS TUF Gaming A15 FA506NC-HN026',
    imageUrls: [
      'https://content1.rozetka.com.ua/goods/images/big/317315598.jpg',
      'https://content.rozetka.com.ua/goods/images/big/4858383.jpg',
      'https://content2.rozetka.com.ua/goods/images/big/391885922.jpg',
      'https://content1.rozetka.com.ua/goods/images/big/425109323.jpg',
      'https://content1.rozetka.com.ua/goods/images/big/371465542.jpg',
      'https://content.rozetka.com.ua/goods/images/big/410768842.jpg',
      'https://content1.rozetka.com.ua/goods/images/big/144249716.jpg',
    ],
    rank: 3,
    countReviews: 1254,
    inStock: true,
    price: 434,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, placeat! Ipsum quaerat quae possimus, perferendis eaque voluptates sunt consectetur soluta perspiciatis error voluptatibus, illum suscipit cumque dicta ducimus molestiae voluptatum inventore ratione, ea officia at. Quas voluptatum corrupti qui enim!',
    colours: ['black', 'gary', 'blue', 'green', 'white'],
    size: ['xs', 's', 'm', 'l', 'xl'],
    discount: 35,
    category: 'laptops',
  },
]

type ProductsState = {
  data: Product[]
}

const initialProductsState: ProductsState = {
  data: initialProductsList,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  //   selectors: {},
  reducers: {
    addProduct: (state, action) => {
      const newProduct = {
        id: uuidv4(),
        name: 'new name',
        imageUrls: ['jddjskfd', 'jdfnhjk'],
        rank: 2.2,
        countReviews: 120,
        inStock: true,
        price: 12.99,
        description: action.payload,
        colours: ['black', 'blue'],
        size: ['xs', 'l', 'm'],
        discount: 10,
        category: 'category',
      }
      return {
        ...state,
        data: [...state.data, newProduct],
      }
    },
    updateProduct: (
      state,
      action: PayloadAction<{ id: ProductId; desc: string }>,
    ) => {
      const { id, desc } = action.payload

      return {
        ...state,
        data: state.data.map(product =>
          product.id === id ? { ...product, description: desc } : product,
        ),
      }
    },
    deleteProduct: (state, action) => {
      return {
        ...state,
        data: state.data.filter(product => product.id !== action.payload),
      }
    },
  },
})

export const { addProduct, deleteProduct, updateProduct } =
  productsSlice.actions
