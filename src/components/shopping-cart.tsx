import Image from "next/image"
import { CartItem } from "@/types"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card"
import { useQuery } from "@tanstack/react-query"
import { DialogModal } from "./dialog-modal"
import { useState } from "react"
import { AlertModal } from "./alert-modal"

export const ShoppingCart = () => {

    const [isRemoved, setIsRemoved] = useState<boolean>(false)

    const { data: shoppingCart } = useQuery({
        queryKey: ["get-shopping-cart"],
        queryFn: async () => {

            const response = await
                fetch("http://localhost:3333/shopping-cart")

            const data: CartItem[] = await response.json()

            return data
        }
    })

    if (!shoppingCart) {

        return
    }

    return (

        <>
            <CardContent
                className="flex flex-col gap-3"
            >
                {
                    shoppingCart.length === 0
                        ? <span>
                            O carrinho está vazio
                        </span>
                        : shoppingCart.map(item => {

                            const { id, title, imageURL, quantity, totalValue } = item

                            return (

                                <Card
                                    key={id}
                                >
                                    <CardHeader
                                        className="flex flex-row justify-between gap-3 p-2"
                                    >
                                        <Image
                                            src={imageURL}
                                            width={50}
                                            height={50}
                                            alt={title}
                                            className="h-16 w-16 rounded-lg"
                                        />
                                        <CardTitle
                                            className="text-xl"
                                        >
                                            {title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div
                                            className="flex flex-col"
                                        >
                                            <span>quantidade: {quantity}</span>
                                            <span>preço: {totalValue}</span>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <DialogModal
                                            id={id}
                                            isRemoved={isRemoved}
                                            setIsRemoved={setIsRemoved}
                                        />
                                    </CardFooter>
                                </Card>
                            )
                        })
                }
            </CardContent>
            {
                isRemoved &&
                <AlertModal
                    title="Sucesso"
                    message="O item foi adicionado ao carrinho"
                    variant={"default"}
                    className="w-full text-center border border-indigo-400 text-indigo-900 absolute top-2 -left-[400px] z-[100] animate-jump-in"
                />
            }
        </>
    )
}
