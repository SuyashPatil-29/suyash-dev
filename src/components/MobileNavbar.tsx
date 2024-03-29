
"use client"
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import NavItem from "./NavItem";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden block text-white">
      <Sheet open={isOpen}>
        <SheetTrigger onClick={toggleSheet}>
          <Menu className="w-8 h-8" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col items-center justify-center gap-4"
        >
          <X className="absolute top-5 right-5 w-8 h-8 cursor-pointer text-white" onClick={toggleSheet} />
          <NavItem href="/" onClick={toggleSheet}>Home</NavItem>
          <NavItem href="/archive" onClick={toggleSheet}>Archive</NavItem>
          <NavItem href="/projects" onClick={toggleSheet}>Projects</NavItem>
          <NavItem href="/achievements" onClick={toggleSheet}>Achievements</NavItem>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;

