import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet"
import { navigationLinks } from "@/utils/navigationLinks"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useUser, useClerk } from "@clerk/nextjs"
import { Button } from "../ui/button"
import Image from "next/image"

const MenuMobile = () => {
  const pathname = usePathname()
  const navLinks = navigationLinks

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "text-primary border-b-2 border-primary"
      : "text-gray-700"
  }

  const { user, isSignedIn } = useUser()
  const clerk = useClerk()

  const handleSignOut = () => {
    clerk.signOut()
  }

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="w-6 h-6 mt-2" />
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col h-full">
          <SheetTitle className="text-foreground mb-4">Páginas</SheetTitle>

          {/* Links de navegação */}
          <div className="flex flex-col space-y-4 flex-grow border-b border-gray-300">
            {navLinks.map((link) => (
              <li key={link.href} className="list-none">
                <Link
                  href={link.href}
                  className={`hover:text-primary ${getLinkClass(
                    link.href
                  )} inline-block`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </div>

          {/* Ações de autenticação */}
          <div className="mt-auto">
            {!isSignedIn ? (
              <>
                <div className="block md:hidden text-center mb-4">
                  <Link href="/login">
                    <Button className="w-full cursor-pointer">
                      <p className="text-white font-bold">Entrar</p>
                    </Button>
                  </Link>
                </div>

                <div className="block md:hidden text-center mb-2">
                  <Link href="/login" className="cursor-pointer">
                    <p className="text-dark-gray-2 underline">Cadastre-se</p>
                  </Link>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex items-center justify-center gap-2">
                  {user.fullName}
                  <Image
                    src={user.imageUrl}
                    alt="Imagem do usuário"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
                <Button
                  variant="ghost"
                  onClick={handleSignOut}
                  className="text-red-600 w-full border border-red-600"
                >
                  Sair
                </Button>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MenuMobile
