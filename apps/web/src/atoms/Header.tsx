import { Link, useLocation } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <NavigationMenu className="px-8 py-4 w-full fixed bg-white shadow-md shadow-black/20">
      <Logo />
      <NavigationMenuList className="flex-wrap gap-4">
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
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Header;
