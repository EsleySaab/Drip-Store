export type Product = {
  name: string
  image: string
  price: number | undefined
  priceDiscount?: number 
  hasDiscountBadge: boolean 
}
