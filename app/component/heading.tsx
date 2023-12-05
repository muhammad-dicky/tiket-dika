"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Circle, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./darkmode-toggle"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]




const Heading: React.FC = () => {
  return (
    <>
    <div className="relative h-screen" style={{backgroundImage: "url('/bg.jpg')"}}>

    <div className="flex items-center justify-between p-4 lg:px-20" >
    <div className="flex font-bold text-white">tiket <Circle color="yellow"/> com</div>


    <div className="flex ">
    
    <div className="hidden md:block">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    
    </div>
    <div className="px-5 hidden md:block">
    <ModeToggle />

    </div>





    </div>

    <div>
      <Button>Download Now!</Button>
    </div>

    </div>


<div className="flex flex-col items-center justify-center pt-60">

    {/* <div className="flex">Hey there, <div className="font-bold">going anywhere?</div></div> */}
    <div className="flex text-5xl text-white">Hey there, <div className="font-bold">going anywhere?</div></div>

    <div className="w-full px-60 lg:px-96 ">
    <div className="relative mx-auto my-10 max-w-md">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    {/* Gunakan ikon dari shadcn */}
    <Search className="h-5 w-5 text-gray-400" />

    {/* atau gunakan ikon dari lucide */}
    {/* <MagnifyingGlass className="h-5 w-5 text-gray-400" /> */}
  </div>
  <input
    type="text"
    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    placeholder="Search"
  />
</div>
    </div>


{/* ICON */}
<div className="flex space-x-10">

<div className="flex flex-col items-center justify-center">
  <div className="border-white border-2 p-1 rounded-full hover:border-gray-800">
    <Image
      src="/flight.png"
      alt="wasd"
      width={48} // Adjust the width as needed
      height={48} // Adjust the height as needed
      className="rounded-full"
    />
  </div>
  <p className="font-bold text-white">Flights</p>
</div>

<div className="flex flex-col items-center justify-center">
  <div className="border-white border-2 p-1 rounded-full hover:border-gray-800">
    <Image
      src="/hotel.png"
      alt="wasd"
      width={48} // Adjust the width as needed
      height={48} // Adjust the height as needed
      className="rounded-full"
    />
  </div>
  <p className="font-bold text-white">Hotels</p>
</div>

<div className="flex flex-col items-center justify-center">
  <div className="border-white border-2 p-1 rounded-full hover:border-gray-800">
    <Image
      src="/todos.png"
      alt="wasd"
      width={48} // Adjust the width as needed
      height={48} // Adjust the height as needed
      className="rounded-full"
    />
  </div>
  <p className="font-bold text-white">To Dos</p>
</div>

<div className="flex flex-col items-center justify-center">
  <div className="border-white border-2 p-1 rounded-full hover:border-gray-800">
    <Image
      src="/train.png"
      alt="wasd"
      width={48} // Adjust the width as needed
      height={48} // Adjust the height as needed
      className="rounded-full"
    />
  </div>
  <p className="font-bold text-white">Trains</p>
</div>

<div className="flex flex-col items-center justify-center">
  <div className="border-white border-2 p-1 rounded-full hover:border-gray-800">
    <Image
      src="/ticket.png"
      alt="wasd"
      width={48} // Adjust the width as needed
      height={48} // Adjust the height as needed
      className="rounded-full"
    />
  </div>
  <p className="font-bold text-white">Events</p>
</div>

</div>

    </div>






    </div>


    </>
  )
}

export default Heading;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
