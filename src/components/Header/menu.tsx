import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet"

const MenuMobile = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="w-6 h-6 mt-2" />
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>Menu Mobile</SheetTitle>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MenuMobile
