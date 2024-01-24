"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from '@/components/icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Circle, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./darkmode-toggle";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

import { Disclosure } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import Iphone from "../../public/iPhone.png";
import { useRouter } from "next/router";

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
    description:
      "As stewards of the planet, we are dedicated to promoting sustainable travel practices.",
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
    description: "Through philanthropic initiatives and community engagement",
  },
];

const Heading: React.FC = () => {
  const handleScrollToAbout = (event: any) => {
    event.preventDefault();

    // Scroll to the 'info' section
    const infoSection = document.getElementById("about");

    if (infoSection) {
      infoSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToServices = (event: any) => {
    event.preventDefault();

    // Scroll to the 'info' section
    const infoSection = document.getElementById("services");

    if (infoSection) {
      infoSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToInfo = (event: any) => {
    event.preventDefault();

    // Scroll to the 'info' section
    const infoSection = document.getElementById("info");

    if (infoSection) {
      infoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="relative h-auto pb-40 repeat-0"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="flex items-center justify-between p-4 lg:px-20">
          <div className="flex font-bold text-white">
            <Image
              src={"/logotravel.png"}
              width={200}
              height={40}
              alt={"Travelfun"}
            />
          </div>

          <div className="flex ">
            <div className="hidden md:block mx-40">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="#service" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        onClick={handleScrollToServices}
                      >
                        Services
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#info" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        onClick={handleScrollToAbout}
                      >
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/About" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        onClick={handleScrollToInfo}
                      >
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

          {/* <div className="md:hidden" style={{visibility:"hidden"}}>
      <Menu/>
    </div> */}

          {/* MOBILE VER */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side={"top"}>
                <div className="flex my-5">
                  <div className="md:hidden">
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>
                            Benefits
                          </NavigationMenuTrigger>
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
                                      Embark on a journey of relaxation and joy
                                      with our unparalleled holiday benefits
                                      designed exclusively for you.
                                    </p>
                                  </a>
                                </NavigationMenuLink>
                              </li>
                              <ListItem
                                href="/docs"
                                title="Tailored Vacation Packages"
                              >
                                Enjoy the flexibility of choosing from a variety
                                of tailored vacation packages, each crafted to
                                cater to different preferences and travel
                                styles.
                              </ListItem>
                              <ListItem
                                href="/docs/installation"
                                title="Exclusive Discounts and Offers"
                              >
                                As a valued member of our holiday community,
                                you&apos;ll have access to exclusive discounts
                                and special offers on accommodations, flights,
                                and various activities.
                              </ListItem>
                              <ListItem
                                href="/docs/primitives/typography"
                                title="Personalized Travel Assistance"
                              >
                                Our dedicated team of travel experts is
                                committed to providing you with personalized
                                assistance throughout your journey.
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
                          <Link href="/About" legacyBehavior passHref>
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                              onClick={handleScrollToInfo}
                            >
                              Info
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>
                  <div className="px-5 md:hidden">
                    <ModeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          {/* testing bawah */}
        </div>

        {/* DESKTOP VERSION */}
        <div className="hidden md:block">
          <div className="flex justify-evenly pt-10">
            <div className="flex items-center pl-40">
              <Image src={Iphone} alt={"wasd"} className="max-w-full" />
            </div>

            <div className="flex flex-col justify-center pl-5 pt-12 lg:px-32 md:pt-12">
              <div className="text-3xl md:text-5xl text-white">
                Welcome to <span className="font-bold">TravelFun</span>!
              </div>
              <div className="text-white text-lg md:text-xl font-bold">
                Explore the World with Excitement and Ease
              </div>
              <div className="text-white text-md md:text-lg py-4 ">
                Discover enchanting destinations, indulge in unique experiences,
                and create lasting memories with TravelFun. Whether you seek
                thrilling adventures or serene getaways, we&apos;ve got your
                journey covered.
              </div>

              <div className="flex  my-10">
                <div className="bg-black text-white flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                    className="w-7 md:w-8"
                  />
                  <div className="text-left ml-3">
                    <p className="text-xs text-gray-200">Download on </p>
                    <p className="text-sm md:text-base"> Google Play Store </p>
                  </div>
                </div>
                <div className="bg-black text-white flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                    className="w-7 md:w-8"
                  />
                  <div className="text-left ml-3">
                    <p className="text-xs text-gray-200">Download on </p>
                    <p className="text-sm md:text-base"> Apple Store </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE VERSION */}
        <div className="md:hidden">
          <div className="flex items-center justify-center pt-10">
            <div className="flex flex-col justify-center pt-12 lg:px-32 md:pt-12 text-center">
              <div className="text-3xl md:text-5xl text-white">
                Welcome to <span className="font-bold">TravelFun</span>!
              </div>
              <div className="text-white text-lg md:text-xl font-bold">
                Explore the World with Excitement and Ease
              </div>
              <div className="text-white text-md md:text-lg py-4">
                Discover enchanting destinations, indulge in unique experiences,
                and create lasting memories with TravelFun. Whether you seek
                thrilling adventures or serene getaways, we&apos;ve got your
                journey covered.
              </div>

              <div className="flex my-10">
                <div className="bg-black text-white flex items-center border w-auto rounded-lg px-4 py-2 ml-auto">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                    className="w-7 md:w-8"
                  />
                  <div className="text-left ml-3">
                    <p className="text-xs text-gray-200">Download on </p>
                    <p className="text-sm md:text-base"> Google Play Store </p>
                  </div>
                </div>
                <div className="bg-black text-white flex items-center border w-auto rounded-lg px-4 py-2  mr-auto ml-5">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                    className="w-7 md:w-8"
                  />
                  <div className="text-left ml-3">
                    <p className="text-xs text-gray-200">Download on </p>
                    <p className="text-sm md:text-base"> Apple Store </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

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
  );
});
ListItem.displayName = "ListItem";
