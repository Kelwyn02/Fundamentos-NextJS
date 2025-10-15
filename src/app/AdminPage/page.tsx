import { Button } from "@/components/ui/button";
import { BarcodeIcon, CirclePlusIcon, LayoutDashboardIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <main className="mt-16 container justify-center mx-auto">
            <div className="bg-teal-950 m-4 p-8 md:w-8/12 shadow-lg rounded-lg md:mx-auto">

                <div className="h-25 text-7xl leading-25 bg-gradient-to-r bg-clip-text text-transparent flex items-center justify-center">
                    <Image
                        src="/logo.svg"
                        alt="Logo do Projeto"
                        width={80}
                        height={80}
                    />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 mt-8">
                    <Link href="/">
                        <Button className="bg-teal-800 text-teal-50 hover:bg-teal-900 cursor-pointer text-base w-48 h-12 justify-start">
                            <CirclePlusIcon />
                            Cadastrar produtos
                        </Button>
                    </Link>

                    <Link href="/">
                        <Button className="bg-teal-800 text-teal-50 hover:bg-teal-900 cursor-pointer text-base w-48 h-12 justify-start">
                            <BarcodeIcon />
                            Listar produtos
                        </Button>
                    </Link>

                    <Link href="/">

                        <Button className="bg-teal-800 text-teal-50 hover:bg-teal-900 cursor-pointer text-base w-48 h-12 justify-start">
                            <LayoutDashboardIcon />
                            Dashboard
                        </Button>
                    </Link>
                </div>

            </div>
        </main >
    )
}