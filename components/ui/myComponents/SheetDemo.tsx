import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuRoundedIcon
          className="rounded-md border-[1px] border-border p-1 hover:cursor-pointer hover:bg-secondary"
          style={{ height: "36px", width: "36px" }}
        />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Welcome to Arcline Designs</SheetTitle>
          <SheetDescription>
            Feel free to navigate on any page you like
          </SheetDescription>
        </SheetHeader>
        <div className="my-10">
          <div className="flex justify-center flex-col gap-4 ">
            <SheetClose asChild>
              <Link href="/">
                <p className="">Home</p>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/category">
                <p className="">Category</p>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/about-us">
                <p className="">About Us</p>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/contact-us">
                <p className="">Contact Us</p>
              </Link>
            </SheetClose>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
