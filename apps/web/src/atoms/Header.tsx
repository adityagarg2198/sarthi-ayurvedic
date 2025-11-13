import { Link, useLocation } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const RenderList = () => {
  const { pathname } = useLocation();

  return (
    <>
      <NavigationMenuItem
        className={cn(
          "hover:text-sarthi-green",
          pathname === "/" && "text-sarthi-green"
        )}
      >
        <NavigationMenuLink asChild>
          <Link to="/">Home</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem
        className={cn(
          "hover:text-sarthi-green",
          pathname === "/about" && "text-sarthi-green"
        )}
      >
        <NavigationMenuLink asChild>
          <Link to="/about">About</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem
        className={cn(
          "hover:text-sarthi-green",
          pathname === "/doctors" && "text-sarthi-green"
        )}
      >
        <NavigationMenuLink asChild>
          <Link to="/doctors">Doctors</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem
        className={cn(
          "hover:text-sarthi-green",
          pathname === "/contacts" && "text-sarthi-green"
        )}
      >
        <NavigationMenuLink asChild>
          <Link to="/contacts">Contacts</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem
        className={cn(
          "hover:text-sarthi-green",
          pathname === "/treatments" && "text-sarthi-green"
        )}
      >
        <NavigationMenuLink asChild>
          <Link to="/treatments">Treatments</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <Button className="cursor-pointer bg-sarthi-green text-white font-semibold text-base">
        <a
          target="_blank"
          href="https://wa.me/918481819393"
          className="flex items-center gap-1"
        >
          Let's Talk <ChevronRightIcon />
        </a>
      </Button>
    </>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavigationMenu className="px-8 py-4 w-full gap-10 fixed bg-white shadow-md shadow-black/20">
      <Logo />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="ml-auto">
          <Menu
            width={40}
            height={40}
            className="ml-auto md:hidden"
            onClick={() => setOpen(true)}
          />
        </SheetTrigger>
        <SheetContent className="bg-white py-20" onClick={() => setOpen(false)}>
          <NavigationMenuList className="flex flex-col gap-5">
            <RenderList />
          </NavigationMenuList>
        </SheetContent>
      </Sheet>
      <NavigationMenuList className="flex-wrap justify-start gap-4 md:flex hidden">
        <RenderList />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Header;
