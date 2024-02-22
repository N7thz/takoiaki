"use client"

import { useSession } from "next-auth/react"
import { MyAvatar } from "./my-avatar"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "./mode-toggle"

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
                <ModeToggle />
            </SheetContent>
        </Sheet>
    )
}
