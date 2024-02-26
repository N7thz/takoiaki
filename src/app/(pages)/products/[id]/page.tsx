"use client"

import { useState } from "react"
import Image from "next/image"

import {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card"
import { useQuery } from "@tanstack/react-query"
import { Product } from "@/types"
import { FormItem } from "@/components/form-item"
import { AlertModal } from "@/components/alert-modal"
import { useSession } from "next-auth/react"

export default function Product({ params }: { params: { id: string } }) {

    const id = params.id
    
    useSession({

        required: true
    })

    const [isCreated, setIsCreated] = useState<boolean>(false)

    const { data: productResponse } = useQuery({
        queryKey: ["get-only-product"],
        queryFn: async () => {

            const response = await
                fetch(`http://localhost:3333/products?id=${id}`)

            const data: Product[] = await response.json()

            return data[0]
        }
    })

    if (!productResponse) return

    const { title, description, category, qtStock, price, imageURL } = productResponse

    return (

        <div
            className="min-h-screen bg-zinc-100 dark:bg-zinc-900 flex justify-center items-center"
        >
            <div
                className="bg-gradient-to-t from-indigo-400 to-cyan-300 rounded-lg drop-shadow-2xl flex p-2 gap-2"
            >
                <Image
                    src={imageURL}
                    width={300}
                    height={600}
                    alt={title}
                />
                <Card
                    className="capitalize"
                >
                    <CardHeader>
                        <CardTitle>
                            {title}
                        </CardTitle>
                        <CardDescription>
                            {description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                        <div
                            className="flex flex-col"
                        >
                            <span>categoria: {category}</span>
                            <span>em estoque: {qtStock} unidades</span>
                        </div>
                        <CardTitle
                            className=" flex flex-col gap-2 p-2"
                        >
                            <span
                                className="italic text-lg line-through"
                            >
                                R$ {(price * 1.3).toFixed(2)}
                            </span>
                            <span>
                                R$ {price}
                            </span>
                        </CardTitle>
                    </CardContent>
                    <CardFooter
                        className="flex flex-col justify-center gap-4 p-5"
                    >
                        <FormItem
                            product={productResponse}
                            isCreated={isCreated}
                            setIsCreated={setIsCreated}
                        />

                    </CardFooter>
                </Card>
            </div>
            {
                isCreated &&
                <AlertModal 
                    title="Sucesso"
                    message="O item foi adicionado ao carrinho"
                    variant={"default"}
                    className="w-1/3 border border-indigo-400 absolute top-16 z-50 animate-jump-in"
                />
            }
        </div>
    )
}