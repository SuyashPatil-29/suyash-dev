import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavItem from "./NavItem";

const MobileNavbar = () => {
  return (
    <div className="md:hidden block text-white">
      <Sheet>
        <SheetTrigger>
          <Menu className="w-8 h-8" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col items-center justify-center gap-4"
        >
          <NavItem href="/archive">Archive</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/categories">Categories</NavItem>
          <NavItem href="/search">Search</NavItem>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
