import { z } from 'zod'

const baseUrl = 'http://localhost:3000'

const ProductDtoShema = z.object({
  id: z.string(),
  name: z.string(),
  imageUrls: z.array(z.string()),
  rank: z.number(),
  countReviews: z.number(),
  inStock: z.boolean(),
  price: z.number(),
  description: z.string(),
  colours: z.string(),
  sizes: z.array(z.string()),
  discount: z.number(),
  category: z.string(),
})

export const api = {
  getProducts: () => {
    return fetch(`${baseUrl}/products`)
      .then(res => res.json())
      .then(result => ProductDtoShema.array().parse(result))
  },
  getProduct: (productId: string) => {
    return fetch(`${baseUrl}/products/${productId}`)
      .then(res => res.json())
      .then(result => ProductDtoShema.parse(result))
  },
  deleteProduct: (productId: string) => {
    return fetch(`${baseUrl}/products/${productId}`, { method: 'DELETE' }).then(
      res => res.json(),
    )
  },
}
