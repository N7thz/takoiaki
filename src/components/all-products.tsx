"use client"

import { ProductResponse } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const AllProducts = () => {

    const page = localStorage.getItem("page") ?? "1"

    const { data: productResponse, isLoading } = useQuery({
        queryKey: ["get-products"],
        queryFn: async () => {

            const response = await
                fetch(`http://localhost:3333/products?_page=${page}&_per_page=9`)

            const data: ProductResponse = await response.json()

            return data
        }
    })

    if (isLoading) {

        return (

            <div
                className="w-2/3 h-full p-3 mt-12 rounded-xl flex flex-wrap justify-center gap-2 border-4 border-indigo-400"
            >
                {
                    Array.from({ length: 9 }).map((value, index) =>

                        <div
                            key={index}
                            className="bg-zinc-500 w-[240px] h-[240px] rounded-xl animate-pulse"
                        />
                    )
                }
            </div>
        )
    }

    return (

        <div
            className="w-2/3 h-full p-3 m-12 rounded-xl flex flex-wrap justify-center gap-2 bg-zinc-300 border-4 border-indigo-400"
        >
            {
                productResponse?.data.map(product => {

                    const { id, imageURL, title } = product

                    return (

                        <Link
                            href={`/products/${id}`}
                            key={id}
                        >
                            <div
                                className="w-[240px] h-[240px] relative overflow-hidden rounded-xl capitalize font-bold drop-shadow-2xl cursor-pointer duration-100 group hover:scale-95"
                            >
                                <Image
                                    src={imageURL}
                                    width={240}
                                    height={240}
                                    alt={title}
                                    className="w-[240px] h-[240px]"
                                />
                                <div
                                    className="w-11/12 bg-gradient-to-r from-indigo-400 to-cyan-400 invisible absolute bottom-0 left-0 z-10  p-1 rounded-tr-xl rounded-bl-xl group-hover:visible"
                                >
                                    <div
                                        className="w-full bg-zinc-50 p-2 rounded-lg text-center"
                                    >
                                        {title}
                                    </div>
                                </div>
                                <Heart
                                    className="absolute top-0 right-0 z-10 m-1 text-red-500 invisible group-hover:visible"
                                />
                            </div>
                        </Link>
                    )
                })}
        </div>
    )
}
