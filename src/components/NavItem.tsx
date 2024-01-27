"use client";


import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import { cn } from "../lib/utils";

interface Props extends LinkProps {
  children?: ReactNode;
  className?: string;
  linkto?: string;
}

const NavItem = ({ ...props }: Props) => {
  const url = usePathname();

  return (
    <Link
      className={cn(
        "text-[rgb(195,194,194)] md:text-base text-xl",
        url.includes(props.linkto!) && "border-b text-white"
      )}
      {...props}
    >
      {props.children}
    </Link>
  );
};

export default NavItem;
