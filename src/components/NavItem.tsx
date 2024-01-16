"use client";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface Props extends LinkProps {
  children?: ReactNode;
  className?: string;
};

const NavItem = ({...props}: Props) => {
  const url = usePathname();

  return (
    <Link className={cn("text-[rgb(195,194,194)] md:text-base text-xl", url===props.href && "border-b text-white")} {...props}>
      {props.children}
    </Link>
  );
};

export default NavItem;
