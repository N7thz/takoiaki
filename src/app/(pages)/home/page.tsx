"use client"

import { AllProducts } from "@/components/all-products"
import { Pagination } from "@/components/pagination"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useSession } from "next-auth/react"

export default function HomePage() {

    useSession({

        required: true
    })

    return (

        <div
            className="min-h-screen bg-zinc-100 dark:bg-zinc-900 flex flex-col justify-around gap-[80px]"
        >
            <div
                className="drop-shadow-2xl flex flex-col items-center justify-betwee min-h-[700px]"
            >
                <div className="w-1/2 p-2 relative">
                    <Input
                        className="p-1 bg-transparent border-2 border-indigo-400 focus:border-none focus:bg-zinc-50"
                        placeholder="o que está procurando?"
                    />
                    <Search
                        className="absolute top-4 right-4 text-zinc-400"
                        size={24}
                    />
                </div>

                <AllProducts />
                <Pagination />
            </div>
        </div>
    )
}
