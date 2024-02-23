"use client"

import { FC } from "react"
import { SessionProvider } from "next-auth/react"
import { ProviderProps } from "@/types"

export const AuthProvider: FC<ProviderProps> = ({ children }) => {

    return (

        <SessionProvider>
            {children}
        </SessionProvider>
    )
}
