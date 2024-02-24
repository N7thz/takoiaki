"use client"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import { MyAvatar } from "./my-avatar"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet"
import {
    Card, CardFooter, CardHeader, CardTitle
} from "./ui/card"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import { ShoppingCart } from "./shopping-cart"

export const MenuHeader = () => {

    const { data: session } = useSession()

    if (!session || !session.user?.name) {

        return
    }

    const { user: { name } } = session

    return (

        <Sheet>
            <SheetTrigger asChild>
                <div
                    className="drop-shadow-2xl"
                >
                    <MyAvatar
                        className="mr-4 cursor-pointer duration-200 hover:scale-110"
                    />
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        Olá, {name}
                    </SheetTitle>
                </SheetHeader>
                <div
                    className="flex flex-col gap-4 p-2 items-center"
                >
                    <ModeToggle />
                    <Button
                        onClick={() => signOut()}
                        className="bg-indigo-400"
                    >
                        Sair
                    </Button>
                </div>
                <Card
                    className="boredr border-indigo-400"
                >
                    <CardHeader>
                        <CardTitle>
                            Meu Carrinho
                        </CardTitle>
                    </CardHeader>

                    <ShoppingCart />

                    <CardFooter
                        className="flex items-center justify-end drop-shadow-2xl pt-8"
                    >
                        <Link
                            href={"/order"}
                        >
                            <Button
                                variant={"outline"}
                                className="border-2 border-indigo-400"
                            >
                                Finalizar compra
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </SheetContent>
        </Sheet>
    )
}
