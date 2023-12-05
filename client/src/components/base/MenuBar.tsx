"use client";
import React, { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type MenuListProps = {
  isVertical?: boolean;
};

const Logo = () => (
  <div className="font-extrabold text-xl dark:text-white">
    Gwala<span className="text-blue-500"> demo/&gt;</span>
  </div>
);

const MenuItems: FC<MenuListProps> = ({ isVertical }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className={cn("flex items-start space-x-0", { "flex-col": isVertical })}>
        <NavigationMenuItem className="flex items-start">
          <Link legacyBehavior passHref href={"#"}>
            <NavigationMenuLink className={buttonVariants({ variant: "outline" })}>Sign out</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const MenuItemsMobile = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">
        <HamburgerMenuIcon />
      </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <MenuItems isVertical />
    </SheetContent>
  </Sheet>
);

export default function MenuBar() {
  return (
    <div className="bg-white border-b-2 top-0 w-full shadow-gray-800 bg-opacity-60 backdrop-blur-[1rem] dark:bg-black dark:bg-opacity-50 dark:backdrop-blur-[1rem]">
      <nav className="container mx-auto px-6 py-2">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="hidden lg:flex items-center space-x-4">
            <MenuItems />
          </div>
          <div className="lg:hidden flex items-center">
            <MenuItemsMobile />
          </div>
        </div>
      </nav>
    </div>
  );
}
