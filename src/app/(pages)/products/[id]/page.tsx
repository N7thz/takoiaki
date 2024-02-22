"use client"

import { Product } from "@/types"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"

export default function Product({ params }: { params: { id: string } }) {

    const id = params.id

    const { data: productResponse, isLoading } = useQuery({
        queryKey: ["get-only-product"],
        queryFn: async () => {

            const response = await
                fetch(`http://localhost:3333/products?id=${id}`)

            const data: Product[] = await response.json()

            console.log(data)

            return data
        }
    })

    if (!productResponse) {

        return
    }

    const { title } = productResponse[0]

    return (

        <div
            className="min-h-screen bg-zinc-100"
        >
            <h1>{title}</h1>
        </div>
    )
}