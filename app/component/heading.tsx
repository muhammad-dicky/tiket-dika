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
    title: "Founding Principles",
    href: "/docs/primitives/alert-dialog",
    description:
      "Our journey started with a commitment to curate unique and meaningful experiences that go beyond the ordinary.",
  },
  {
    title: "Exceptional Service",
    href: "/docs/primitives/hover-card",
    description:
      "Central to our story is the unwavering commitment to providing exceptional service.",
  },
  {
    title: "Global Inspiration, Local Expertise",
    href: "/docs/primitives/progress",
    description:
      "Drawing inspiration from the diversity of cultures around the world",
  },
  {
    title: "Sustainable Travel",
    href: "/docs/primitives/scroll-area",
    description: "As stewards of the planet, we are dedicated to promoting sustainable travel practices.",
  },
  {
    title: "Innovation and Adaptability",
    href: "/docs/primitives/tabs",
    description:
      "Our story is one of continuous innovation and adaptability. In a rapidly changing world.",
  },
  {
    title: "Community Engagement",
    href: "/docs/primitives/tooltip",
    description:
      "Through philanthropic initiatives and community engagement",
  },
]




const Heading: React.FC = () => {
  return (
    <>
    <div className="relative h-screen" style={{backgroundImage: "url('/bg.jpg')"}}>

    <div className="flex items-center justify-between p-4 lg:px-20" >
    <div className="flex font-bold text-white">Travel <Circle color="yellow"/> fun</div>


    <div className="flex ">
    
    <div className="hidden md:block">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Benefits</NavigationMenuTrigger>
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
                    Unwind with Our Exclusive Holiday Benefits
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Embark on a journey of relaxation and joy with our unparalleled holiday benefits designed exclusively for you.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Tailored Vacation Packages">
              Enjoy the flexibility of choosing from a variety of tailored vacation packages, each crafted to cater to different preferences and travel styles.
              </ListItem>
              <ListItem href="/docs/installation" title="Exclusive Discounts and Offers">
              As a valued member of our holiday community, you&apos;ll have access to exclusive discounts and special offers on accommodations, flights, and various activities.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Personalized Travel Assistance">
              Our dedicated team of travel experts is committed to providing you with personalized assistance throughout your journey.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
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
              Info
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

    <div className="" style={{visibility:'hidden'}}>
      <Button>Download Now!</Button>
    </div>

    </div>


<div className="flex flex-col items-center justify-center pt-60">

    {/* <div className="flex">Hey there, <div className="font-bold">going anywhere?</div></div> */}
    <div className="flex text-5xl text-white">Hey there, <div className="font-bold">going anywhere?</div></div>
    <div className="text-white text-xl p-5">Embark on Unforgettable Journeys</div>
    <div className="" >
      <Button>Download Our App!</Button>
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
