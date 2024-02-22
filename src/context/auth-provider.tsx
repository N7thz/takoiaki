"use client"

import { FC, ReactNode } from "react"
import { SessionProvider } from "next-auth/react"

interface ProviderProps {

    children: ReactNode
}

export const AuthProvider: FC<ProviderProps> = ({ children }) => {

    return (

        <SessionProvider>
            {children}
        </SessionProvider>
    )
}
