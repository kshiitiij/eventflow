import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Image from "next/image"
  import NavItems from "./NavItems"
import { AlignRightIcon } from "lucide-react"
import { Separator } from "../ui/separator"
  
  
  const MobileNav = () => {
    return (
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <AlignRightIcon/>
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
            <div className="flex items-center">
                <Image 
                src="/assets/images/logo.png"
                alt="logo"
                width={38}
                height={8}
                className="rounded"
                />
                <h5 className="font-bold ml-2">Event<span className="text-blue-600">Flow</span></h5>
            </div>
            <Separator className="border border-gray-50" />
            <NavItems />
          </SheetContent>
        </Sheet>
      </nav>
    )
  }
  
  export default MobileNav