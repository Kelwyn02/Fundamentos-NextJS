import Image from "next/image";
import { Button } from "../ui/button";

export function LoginForm() {
    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-center">
                <div className="w-full md:w-8/12 lg:w-6/12 mt-[75px] bg-teal-950 text-center shadow-lg rounded-lg">
                    <div className="p-8 md:p-12">

                        <div className="h-25 text-7xl leading-25 bg-gradient-to-r bg-clip-text text-transparent flex items-center justify-center">
                            <Image
                                src="/logo.svg"
                                alt="Logo do Projeto"
                                width={80}
                                height={80}
                            />
                        </div>

                        <h1 className="mt-4 text-3xl font-bold text-teal-50">
                            NEXT FUNDAMENTALS
                        </h1>

                        <form className="mt-6 text-left">
                            <div className="mb-10">
                                <label className="block text-base font-bold text-teal-50 tracking-wider mb-2">Email</label>
                                <input type="text" className="w-full bg-transparent border-0 border-b-2 border-teal-800 text-teal-50 font-bold p-0 focus:outline-none focus:ring-0" />
                            </div>

                            <div className="mb-10">
                                <label className="block text-base  font-bold text-teal-50 tracking-wider mb-2">Senha</label>
                                <input type="password" className="w-full bg-transparent border-0 border-b-2 border-teal-800 text-teal-50 font-bold p-0 focus:outline-none focus:ring-0" />
                            </div>

                            <div className="flex items-center justify-between mb-6">
                                <div className="text-left text-teal-50">
                                </div>
                                <div className="text-right">
                                    <Button className="bg-teal-800 text-teal-50 hover:bg-teal-900 cursor-pointer text-base">
                                        Login
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}