"use client"

import { usePathname } from "next/navigation"
import Logo from "../Logo"
import HeaderActions from "./header-actions"
import SearchInput from "./search-input"
import MenuMobile from "./menu"
import Link from "next/link"

const Header = () => {
  const pathname = usePathname()

  // Rotas em que o header deve ser escondido
  const hideHeaderOn = ["/login"]

  if (hideHeaderOn.includes(pathname)) return null

  return (
    <header className="w-full relative flex flex-col md:px-20">
      <div className="w-full px-4 py-8 grid grid-cols-3 items-center md:flex space-x-6 max-w-full md:max-w-[100%]">
        {/* Menu (only mobile) */}
        <MenuMobile />

        {/* Logo */}
        <div className="justify-self-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* Pesquisa */}
        <SearchInput />

        {/* Ações */}
        <HeaderActions />
      </div>
      <div className="hidden md:flex gap-10 mb-5 px-30 text-gray-700">
        <Link href="/">Home</Link>
        <Link href="/products">Produtos</Link>
        <Link href="/">Categorias</Link>
        <Link href="/">Meus pedidos</Link>
      </div>
    </header>
  )
}

export default Header
