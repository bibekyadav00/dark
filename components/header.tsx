"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">HALL-12</span>{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text">Canteen</span>
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/menu" className="text-sm font-medium transition-colors hover:text-primary">
            Menu
          </Link>
          {/* <Link href="/offers" className="text-sm font-medium transition-colors hover:text-primary">
            Offers
          </Link> */}
          <Link href="/offers" className="text-sm font-medium transition-colors hover:text-primary">
            Collection
          </Link>
          <Link href="/feedback" className="text-sm font-medium transition-colors hover:text-primary">
            Feedback
          </Link>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0">
            <div className="px-7">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <span className="text-lg font-bold">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                    HALL-12
                  </span>{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text">
                    Canteen
                  </span>
                </span>
              </Link>
            </div>
            <nav className="flex flex-col gap-4 px-7 mt-8">
              <Link
                href="/"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/offers"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Offers
              </Link>
              <Link
                href="/feedback"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Feedback
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
