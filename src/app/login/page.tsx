import { Button } from "@/components/ui/button"
import background from "../../../public/home-slide-7.jpeg"
import { SignInButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const Login = async () => {
  const { userId } = await auth()

  if (userId) {
    redirect("/")
  }

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center md:px-20 md:items-start bg-cover bg-center h-screen relative"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="absolute z-10 bg-gray-200 p-8 rounded-md shadow-lg">
          <div className="p-5">
            <h1 className="text-2xl text-center md:text-start md:text-3xl font-bold">
              Bem vindo à Drip Store
            </h1>
            <SignInButton>
              <Button className="bg-green-600 w-full mt-4 p-5">
                <h2 className="text-xl font-semibold">Faça seu login</h2>
              </Button>
            </SignInButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
