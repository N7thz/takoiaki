"use client"

import { 
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card"
import { History } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { format } from "date-fns"

export default function Teste() {

    const { data: session } = useSession()

    const { data: lastOrder } = useQuery({
        queryKey: ["get-history"],
        queryFn: async () => {

            const response = await
                fetch(`http://localhost:3333/history`)

            const data: History[] = await response.json()

            const lastIndex = data.length - 1

            console.log(data[lastIndex])

            return data[lastIndex]
        }
    })

    if (!session?.user?.name || !lastOrder) return

    const {
        id,
        items_order,
        created_at,
        totalValue,
        cep: { bairro, localidade, uf }
    } = lastOrder

    return (

        <div
            className="min-h-screen flex items-center justify-center"
        >
            <Card
                className="border border-indigo-400 m-3"
            >
                <CardHeader>
                    <CardTitle>
                        Olá , {session.user.name}
                    </CardTitle>
                    <CardDescription>
                        Seu pedido de numero {id} foi efetuado com sucesso.
                    </CardDescription>
                </CardHeader>
                <CardContent
                    className="flex flex-col gap-3"
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

                    <h4
                        className="text-lg"
                    >
                        <span
                            className="font-bold italic capitalize"
                        >
                            data da compra:
                        </span>
                        {format(created_at, "dd/MM/yyyy")}
                    </h4>
                    <h4
                        className="text-lg"
                    >
                        <span
                            className="font-bold italic capitalize"
                        >
                            Valor da compra:
                        </span>
                        R$ {totalValue}
                    </h4>
                    <h4
                        className="text-lg"
                    >
                        <span
                            className="font-bold italic capitalize"
                        >
                            Endereço:
                        </span>
                        {localidade},{bairro}-{uf}
                    </h4>
                </CardFooter>
            </Card>
        </div>
    )
}