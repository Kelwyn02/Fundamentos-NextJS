import { ShoppingBagIcon, User2Icon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export function Header() {
    return (
        <header className="bg-teal-950 flex justify-between text-teal-50 p-4 items-center">
            <div className="flex items-center gap-4">
                <Image
                src="/logo.svg"
                alt="Logo do Projeto"
                width={60}
                height={60}
                />
                <span className="font-medium text-2xl">Router Fundamentals</span>
            </div>

            <div className="flex gap-4">
                <Link href="/">
                    <Button className="bg-teal-800 text-teal-50 hover:bg-teal-900 cursor-pointer">
                        <User2Icon />
                    </Button>
                </Link>


                <Link href="/">
                    <Button className="bg-teal-800 text-teal-50 hover:bg-teal-900 cursor-pointer">
                        <ShoppingBagIcon />
                    </Button>
                </Link>
            </div>
        </header>
    )
}