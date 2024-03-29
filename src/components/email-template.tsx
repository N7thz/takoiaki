/* eslint-disable @next/next/no-img-element */
import { FC } from "react"
import {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card"
import { History } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { format } from "date-fns"

interface EmailTemplateProps {

    firstName: string
}

export const EmailTemplate: FC<EmailTemplateProps> = async ({ firstName }) => {

    const response = await fetch("http://localhost:3333/history")

    const lastOrder: History[] = await response.json()

    const lastIndex = lastOrder.length - 1

    console.log(lastOrder[lastIndex])

    if (!lastOrder) return

    const {
        id,
        items_order,
        created_at,
        totalValue,
        cep: { bairro, localidade, uf }
    } = lastOrder[lastIndex]

    return (

        <div
            className="min-h-screen flex items-center justify-center"
        >
            <Card
                className="border border-indigo-400 bg-indigo-400 m-3"
            >
                <CardHeader>
                    <CardTitle>
                        Olá, {firstName}
                    </CardTitle>
                    <CardDescription>
                        Seu pedido de numero {id} foi efetuado com sucesso.
                    </CardDescription>
                </CardHeader>
                <CardContent
                    className="flex flex-col gap-3 bg-zinc-50"
                >
                    {
                        items_order.map(item => {

                            const {
                                id, title, imageURL, quantity, totalValue
                            } = item

                            return (

                                <Card
                                    key={id}
                                    className="border border-indigo-400"
                                >
                                    <CardHeader
                                        className="flex flex-row justify-between gap-3 p-2"
                                    >
                                        <img
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
                                </Card>
                            )
                        })
                    }
                </CardContent>
                <CardFooter
                    className="flex flex-col gap-2 items-start"
                >
                    <span>
                        <h4
                            className="font-bold italic capitalize"
                        >
                            data da compra:
                        </h4>
                        {format(created_at, "dd/MM/yyyy")}
                    </span>
                    <span>
                        <h4
                            className="font-bold italic capitalize"
                        >
                            Valor da compra:
                        </h4>
                        R$ {totalValue}
                    </span>
                    <span>
                        <h4
                            className="font-bold italic capitalize"
                        >
                            Endereço:
                        </h4>
                        {localidade},{bairro}-{uf}
                    </span>
                </CardFooter>
            </Card>
        </div>
    )
}
