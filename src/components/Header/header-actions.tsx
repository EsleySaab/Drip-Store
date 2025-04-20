"use client"

import { UserButton, useUser } from "@clerk/nextjs"
import { Search, ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { useState } from "react"
import Link from "next/link"

const HeaderActions = () => {
  const [showSearchMobile, setShowSearchMobile] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user, isSignedIn } = useUser()

  const toggleSearchMobile = () => {
    setShowSearchMobile(!showSearchMobile)
  }

  return (
    <>
      <div className="flex justify-end items-center md:gap-6">
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleSearchMobile}>
            <Search className="w-5 h-5 text-light-gray" />
          </Button>
        </div>

        {!isSignedIn ? (
          <>
            <div className="hidden md:block text-center underline decoration-dark-gray-2">
              <Link href="/login" className="cursor-pointer">
                <p className="text-dark-gray-2">Cadastre-se</p>
              </Link>
            </div>

            <div className="hidden md:flex text-center">
              <Link href="/login">
                <Button className="w-[114px] mr-5 cursor-pointer">
                  <p className="text-white font-bold">Entrar</p>
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="hidden md:flex items-center gap-2 mr-4">
            <UserButton showName />
          </div>
        )}

        <Button variant="ghost" className="relative cursor-pointer">
          <ShoppingCart className="w-5 h-5 text-primary" />
          <Badge className="absolute top-1 right-0 px-1 py-0">
            <span className="text-white text-xs">2</span>
          </Badge>
        </Button>
      </div>

      {showSearchMobile && (
        <div className="md:hidden w-screen mt-3">
          <div className="flex items-center bg-light-gray-3 px-4 py-3 rounded-md w-[300px]">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              className="bg-light-gray-3 w-full outline-0 text-gray-600"
            />
            <Search className="text-light-gray" />
          </div>
        </div>
      )}
    </>
  )
}

export default HeaderActions
