"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const betaAccessURL = "https://forms.gle/EhXCzmP4tqpLSh547";

export function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <SheetClose asChild>
            <Link
              href="#features"
              className="text-lg font-medium hover:text-teal-600 transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              Features
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="#how-it-works"
              className="text-lg font-medium hover:text-teal-600 transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              How It Works
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="#use-cases"
              className="text-lg font-medium hover:text-teal-600 transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              Use Cases
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="#faq"
              className="text-lg font-medium hover:text-teal-600 transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              FAQ
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/blog"
              className="text-lg font-medium hover:text-teal-600 transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href={betaAccessURL} onClick={() => setOpen(false)}>
              <Button
                size="lg"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white mt-4"
              >
                Request Beta Access
              </Button>
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

