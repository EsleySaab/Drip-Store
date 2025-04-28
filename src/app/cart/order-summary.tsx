import { Button } from "@/components/ui/button"

const OrderSummary = () => {
  return (
    <div className="w-[334px] h-[364px] bg-white rounded-sm p-7 space-y-4">
      <h4 className="uppercase font-semibold border-b border-gray-300 pb-4">
        Resumo
      </h4>
      <div className="flex items-center justify-between">
        <p className="text-gray-400">Subtotal:</p>
        <p>R$ 249,00</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-400">Frete:</p>
        <p>R$ 0,00</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-400">Desconto:</p>
        <p>R$ 30,00</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg">Total</p>
        <div className="flex flex-col">
          <p className="text-primary font-semibold text-lg">R$ 219,00</p>
        </div>
      </div>
      <p className="text-sm text-gray-400 text-right">
        ou 10x de R$ 21,00 sem juros
      </p>
      <Button className="bg-yellow-500 text-white cursor-pointer w-full font-semibold">
        <p>Continuar</p>
      </Button>
    </div>
  )
}

export default OrderSummary
