import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const ProductInformations = () => {
  return (
    <>
      <div className="flex-1 h-[352px] bg-white p-7 space-y-4 rounded-sm hidden md:block">
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
          <h4 className="uppercase font-semibold">Meu Carrinho</h4>
          <div className="flex space-x-18 items-center">
            <p className="uppercase text-sm">Quantidade</p>
            <p className="uppercase text-sm">Unitário</p>
            <p className="uppercase text-sm">Total</p>
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-gray-300 pb-4 md:flex-row flex-col">
          <div className="flex gap-5">
            <Image
              width={128}
              height={104}
              alt="Tênis Nike Revolution 6 Next Nature Masculino"
              src="/product-image-1.jpeg"
              className="rounded-sm"
            />
            <div className="flex flex-col gap-3">
              <p className="text-sm font-bold">
                Tênis Nike Revolution 6 Next <br />
                Nature Masculino
              </p>
              <div className="flex gap-3">
                <p className="text-gray-400 text-sm">Cor:</p>
                <p className="text-sm">Vermelho / Branco</p>
              </div>

              <div className="flex gap-3">
                <p className="text-gray-400 text-sm">Tamanho:</p>
                <p className="text-sm">42</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-14">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Button className="w-[35px] h-[35px] border border-gray-400 bg-white cursor-pointer">
                  <p className="text-lg">-</p>
                </Button>
                <p>1</p>
                <Button className="w-[35px] h-[35px] border border-gray-400 bg-white cursor-pointer">
                  <p className="text-lg">+</p>
                </Button>
              </div>
              <p className="text-xs underline ml-2 cursor-pointer">
                Remover item
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-400 line-through">R$ 249,00</p>
              <p className="font-semibold text-sm">R$ 219,00</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-400 line-through">R$ 249,00</p>
              <p className="font-semibold text-sm">R$ 219,00</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <h4>Cupom de desconto</h4>
            <div className="flex gap-2">
              <Input
                placeholder="Insira seu código"
                className="w-full h-[60px] border-none bg-gray-100 placeholder:text-gray-500 text-gray-600"
              />
              <Button className="bg-gray-100 w-[114px] h-[60px] cursor-pointer hover:text-white text-primary">
                <p>OK</p>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4>Calcular frete</h4>
            <div className="flex gap-2">
              <Input
                placeholder="Insira seu CEP"
                className="w-full h-[60px] border-none bg-gray-100 placeholder:text-gray-500 text-gray-600"
              />
              <Button className="bg-gray-100 w-[114px] h-[60px] cursor-pointer hover:text-white text-primary">
                <p>OK</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden flex flex-col mx-auto w-[315px] space-y-3">
        <div className="bg-white rounded-sm p-5">
          <div className="border-b border-gray-300 pb-4">
            <h3 className="uppercase text-lg font-semibold">Meu Carrinho</h3>
          </div>
          <div className="flex gap-5 mt-5 items-start">
            <Image
              width={80}
              height={58}
              alt="Tênis Nike Revolution 6 Next Nature Masculino"
              src="/product-image-1.jpeg"
              className="rounded-sm shrink-0"
            />
            <div className="flex flex-col space-y-1">
              <h4 className="font-bold mb-2">
                Tênis Nike Revolution 6 Next Nature <br /> Masculino
              </h4>
              <div className="flex gap-3">
                <p className="text-gray-400">Cor:</p>
                <p>Vermelho / Branco</p>
              </div>
              <div className="flex gap-3">
                <p className="text-gray-400">Tamanho:</p>
                <p>42</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="uppercase">Quantidade</h3>

            <div className="flex items-center space-x-14 mt-2">
              <Button className="font-bold text-2xl w-[80px] h-[35px] bg-white border border-gray-400 cursor-pointer">
                -
              </Button>

              <p className="font-semibold">1</p>

              <Button className="font-bold text-2xl w-[80px] h-[35px] bg-white border border-gray-400 cursor-pointer">
                +
              </Button>
            </div>
            <p className="underline text-center">Remover item</p>
          </div>
          <div>
            <div className="flex space-x-7 mt-5">
              <h3 className="uppercase">Unitário</h3>
              <div className="flex gap-2">
                <p className="text-gray-400 text-sm line-through">R$ 249,00</p>
                <p className="font-semibold">R$ 219,00 </p>
              </div>
            </div>

            <div className="flex space-x-13 mt-5">
              <h3 className="uppercase">Total</h3>
              <div className="flex gap-2">
                <p className="text-gray-400 text-sm line-through">R$ 249,00</p>
                <p className="font-semibold">R$ 219,00 </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-sm p-5 space-y-3">
          <h3 className="font-semibold">Cupom de desconto</h3>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <Input
                placeholder="Insira seu código"
                className="w-full h-[60px] border-none bg-gray-100 placeholder:text-gray-500 text-gray-600"
              />
              <Button className="bg-gray-100 w-full h-[60px] cursor-pointer hover:text-white text-primary">
                <p>OK</p>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-sm p-5 space-y-3">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold">Calcular frete</h4>
            <div className="flex flex-col gap-2">
              <Input
                placeholder="Insira seu CEP"
                className="w-full h-[60px] border-none bg-gray-100 placeholder:text-gray-500 text-gray-600"
              />
              <Button className="bg-gray-100 w-full h-[60px] cursor-pointer hover:text-white text-primary">
                <p>OK</p>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-sm p-5">
          <div className="border-b border-gray-400 pb-4">
            <h3 className="uppercase font-semibold">Resumo</h3>
          </div>
          <div className="flex flex-col space-y-4 mt-4">
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
            <p className="text-sm text-gray-500 text-right">
              ou 10x de R$ 21,00 sem juros
            </p>
          </div>
        </div>
        <div className="bg-white w-full h-[160px] flex flex-col px-5">
          <div className="flex items-center justify-between mt-6">
            <p className="font-semibold text-lg">Total</p>
            <div className="flex flex-col">
              <p className="text-primary font-semibold text-lg">R$ 219,00</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-right mb-5">
            ou 10x de R$ 21,00 sem juros
          </p>
          <Button className="bg-yellow-500 text-white cursor-pointer w-full font-semibold">
            <p>Continuar</p>
          </Button>
        </div>
      </div>
    </>
  )
}

export default ProductInformations
