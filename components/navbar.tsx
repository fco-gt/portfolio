import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Switch,
} from "@nextui-org/react";

import { ThemeSwitch } from "./ThemeSwitch";
import { title, subtitle } from "@/components/primitives";

import {
  House,
  User,
  BracketsAngle,
  Book,
} from "@phosphor-icons/react/dist/ssr";

export function MainNavbar() {
  const menuItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
  ];

  return (
    <Navbar shouldHideOnScroll className="navbar">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <a className="font-bold text-xl" href="/">
            <h1 className={title()}>FCO-GT</h1>
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <a className="font-bold text-inherit" href="/">
            FCO-GT
          </a>
        </NavbarBrand>
        <NavbarItem className="navItem">
          <Link color="foreground" href="/">
            <House size={29} className="nav-icon" /> <h2>Home</h2>
          </Link>
        </NavbarItem>
        <NavbarItem className="navItem">
          <Link color="foreground" href="/about">
            <User size={29} className="nav-icon" /> <h2>About</h2>
          </Link>
        </NavbarItem>
        <NavbarItem className="navItem">
          <Link color="foreground" href="/projects">
            <BracketsAngle size={29} className="nav-icon" /> <h2>Projects</h2>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={"foreground"}
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
