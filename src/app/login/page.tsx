import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

import tenis1 from "../../../public/tenis1.png"
import tenis2 from "../../../public/tenis2.png"
import Image from "next/image"
import Link from "next/link"

const Login = async () => {
  const { userId } = await auth()

  if (userId) {
    redirect("/")
  }

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center md:px-40 md:items-start h-screen relative overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, #B5AFFF 0%, #D3CCFF 60%, #ffffff 100%)",
        }}
      >
        {/* Tênis esquerdo */}
        <Image
          src={tenis1.src}
          width={256}
          height={483}
          alt="Tênis 1"
          className="absolute right-[300px] top-[120px] w-[280px] rotate-[12deg] z-0"
        />

        {/* Tênis direito */}
        <Image
          src={tenis2.src}
          width={256}
          height={483}
          alt="Tênis 2"
          className="absolute right-[120px] top-[300px] w-[280px] rotate-[25deg] z-0"
        />

        {/* Card de login */}
        <div className="absolute z-10 bg-gray-200 p-8 rounded-md shadow-lg">
          <div className="p-5">
            <h1 className="text-2xl text-center md:text-start md:text-3xl font-bold">
              Boas vindas à Drip Store
            </h1>
            <SignInButton>
              <Button className="bg-primary w-full mt-4 p-5 cursor-pointer mb-3">
                <h2 className="text-xl font-semibold text-gray-100">
                  Faça seu login
                </h2>
              </Button>
            </SignInButton>
            <p className="text-center text-xl">Ou</p>
            <Link href="/">
              <Button className="bg-primary w-full mt-4 p-5 cursor-pointer">
                <h2 className="text-xl font-semibold text-gray-100">
                  Acesse como visitante
                </h2>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
