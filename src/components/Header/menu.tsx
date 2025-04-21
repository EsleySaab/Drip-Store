import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet"
import { navigationLinks } from "@/utils/navigationLinks"
import { usePathname } from "next/navigation"
import Link from "next/link"

const MenuMobile = () => {
  const pathname = usePathname()
  const navLinks = navigationLinks

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "text-primary border-b-2 border-primary"
      : "text-gray-700"
  }

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="w-6 h-6 mt-2" />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle className="text-foreground mb-4">Páginas</SheetTitle>
          <div className="flex flex-col space-y-4">
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
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MenuMobile
