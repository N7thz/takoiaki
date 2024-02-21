"use client"

import { ProductResponse } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { Heart } from "lucide-react"
import Image from "next/image"

export function AllProducts() {

    const { data: productResponse, isLoading } = useQuery({
        queryKey: ["get-products"],
        queryFn: async () => {

            const response = await fetch("http://localhost:3333/products?_page=1&_per_page=9")

            const data: ProductResponse = await response.json()

            return data
        }
    })

    if (isLoading) {

        return null
    }

    return (

        <div
            className="w-2/3 h-full p-3 m-12 rounded-xl flex flex-wrap justify-center gap-2"
        >
            {
                productResponse?.data.map(product => {

                    const { id, imageURL, isLiked, title } = product

                    return (

                        <div
                            key={id}
                            className="bg-red-300 w-[240px] h-[240px] relative overflow-hidden rounded-xl capitalize font-bold drop-shadow-2xl cursor-pointer duration-100 group hover:scale-95"
                        >
                            <Image
                                src={imageURL}
                                width={240}
                                height={240}
                                alt={title}
                                className="w-[240px] h-[240px]"
                            />
                            <div
                                className="absolute bottom-0 left-0 z-10 bg-zinc-50 p-2 rounded-tr-xl invisible group-hover:visible"
                            >
                                {title}
                            </div>
                            <Heart
                                className="absolute top-0 right-0 z-10 m-1 text-red-500 invisible group-hover:visible"
                            />
                        </div>
                    )
                })}
        </div>
    )
}
