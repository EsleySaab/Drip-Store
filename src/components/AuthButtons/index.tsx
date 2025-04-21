"use client"

import Link from "next/link"
import { Button } from "../ui/button"

const AuthButtons = () => {
  return (
    <>
      {/* Desktop */}
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
  )
}

export default AuthButtons
