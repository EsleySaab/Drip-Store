import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"

const MenuMobile = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="w-6 h-6 mt-2" />
        </SheetTrigger>
        <SheetContent>
          <div>Links do menu</div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MenuMobile
