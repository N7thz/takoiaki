"use client"

import { signIn, useSession } from "next-auth/react"
import { Button } from "./ui/button"
import { FcGoogle, } from "react-icons/fc"
import { VscGithub } from "react-icons/vsc"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export const ButtonsLogin = () => {

    const { status } = useSession()
    const { push } = useRouter()

    useEffect(() => {

        status === "authenticated" &&
            push("/home")

    }, [push, status])

    return (

        <div
            className="w-full flex justify-around gap-2"
        >
            <Button
                onClick={() => signIn("google")}
                className="border-indigo-400 w-full"
                variant="outline"
            >
                <FcGoogle />
            </Button>

            <Button
                onClick={() => signIn("github")}
                className="border-indigo-400 w-full"
                variant="outline"
            >
                <VscGithub />
            </Button>
        </div>
    )
}
