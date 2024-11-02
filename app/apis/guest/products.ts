import { basicGet } from '../base'

export const getAllProductsPaged = async () => {
  console.log('getAllProduct')
  const body = await basicGet('products/sorted')
  return body
}

export const getproductsDetails = async (id: number) => {
  console.log(`getProduct idx=${id}`)
  const body = await basicGet(`products/${id}`)
  return body
}
