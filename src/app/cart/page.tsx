import OrderSummary from "./order-summary"
import ProductInformations from "./product-informations"
import RelatedProducts from "./related-products."

const Cart = () => {
  return (
    <div className="max-w-[1440px] mx-auto space-y-5 h-full flex flex-col pt-20">
      <div className="flex gap-4">
        <ProductInformations />
        <OrderSummary />
      </div>
      <RelatedProducts />
    </div>
  )
}

export default Cart
