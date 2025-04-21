"use client"

import { usePathname } from "next/navigation"
import Logo from "../Logo"
import HeaderActions from "./header-actions"
import SearchInput from "./search-input"
import MenuMobile from "./menu"
import Link from "next/link"
import { navigationLinks } from "@/utils/navigationLinks"

const Header = () => {
  const pathname = usePathname()

  // Header escondido na página de login
  const hideHeaderOn = ["/login"]

  if (hideHeaderOn.includes(pathname)) return null

  const navLinks = navigationLinks

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "text-primary border-b-2 border-primary"
      : "text-gray-700"
  }

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

      {/* Navegação */}
      <div className="hidden md:flex gap-10 mb-5 mx-auto">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-primary ${getLinkClass(link.href)}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Header
