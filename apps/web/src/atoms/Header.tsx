import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";

const Header = () => {

  return (
    <NavigationMenu className="px-8 py-4 w-full fixed bg-white shadow-md shadow-black/20">
      <Logo />
      <NavigationMenuList className="flex-wrap gap-4">
        <NavigationMenuItem className="hover:text-sarthi-green">
          <NavigationMenuLink asChild>
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:text-sarthi-green">
          <NavigationMenuLink asChild>
            <Link to="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:text-sarthi-green">
          <NavigationMenuLink asChild>
            <Link to="/doctors">Doctors</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:text-sarthi-green">
          <NavigationMenuLink asChild>
            <Link to="/contacts">Contacts</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:text-sarthi-green">
          <NavigationMenuLink asChild>
            <Link to="/treatments">Treatments</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <Button className="cursor-pointer bg-sarthi-green text-white font-semibold text-base">
          Let's Talk <ChevronRightIcon />
        </Button>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Header;
