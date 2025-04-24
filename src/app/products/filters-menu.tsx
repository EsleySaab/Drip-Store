import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import ProductsFilters from "./products-filters"

const FiltersMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-primary w-[60px] h-[60px] mt-4">
          <Filter className="text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="border-b border-gray-400 pb-4">
          <SheetTitle>Filtrar por</SheetTitle>
        </SheetHeader>
        <ProductsFilters />
      </SheetContent>
    </Sheet>
  )
}

export default FiltersMenu
