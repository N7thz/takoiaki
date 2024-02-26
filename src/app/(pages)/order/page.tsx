"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { RadioButtons } from "@/components/radio-buttons"
import { ShoppingCart } from "@/components/shopping-cart"
import { useSession } from "next-auth/react"
import { Cep } from "@/types"
import { Check } from "lucide-react"
import { ButtonFinishOrder } from "@/components/button-finish-order"
import { AlertModal } from "@/components/alert-modal"

export default function Order() {

    const [cepText, setCepText] = useState<string>("")
    const [cep, setCep] = useState<Cep | null>(null)
    const [isCreated, setIsCreated] = useState<boolean>(false)

    useSession({

        required: true
    })

    async function getCep() {

        const response = await
            fetch(`https://viacep.com.br/ws/${cepText}/json/`)

        const data: Cep = await response.json()

        setCep(data)
    }

    return (

        <div
            className="min-h-screen bg-zinc-100 dark:bg-zinc-900 flex justify-center items-center"
        >
            <ScrollArea
                className="w-2/3 h-[660px] bg-gradient-to-b from-indigo-400 to-cyan-300 rounded-lg drop-shadow-2xl flex p-1"
            >
                <Card
                    className="w-full flex flex-col"
                >
                    <CardHeader>
                        <CardTitle>
                            Finalizar Pedido
                        </CardTitle>
                    </CardHeader>
                    <div
                        className="w-1/2 m-auto"
                    >
                        <ShoppingCart />
                    </div>
                    <CardFooter
                        className="flex flex-col gap-8 pt-8"
                    >
                        <div
                            className="flex flex-col w-full gap-5"
                        >
                            <h1 className="text-2xl">
                                Endereço:
                            </h1>
                            <div
                                className="flex gap-2 items-center"
                            >
                                <Input
                                    type="number"
                                    maxLength={8}
                                    className="w-1/2 border border-indigo-400"
                                    placeholder="Digite o cep (apenas números)"
                                    onChange={e => setCepText(e.target.value)}
                                />
                                <Check
                                    onClick={getCep}
                                    className="border border-indigo-400 p-1 rounded-md text-indigo-800 cursor-pointer"
                                    size={40}
                                />
                            </div>
                            <div>
                                {
                                    cep &&
                                    <div>
                                        <span>
                                            {cep.localidade}
                                        </span>,
                                        <span>
                                            {cep.bairro}
                                        </span> -
                                        <span>
                                            {cep.uf}
                                        </span>
                                    </div>
                                }
                            </div>
                        </div>
                        <div
                            className="flex flex-col w-full gap-5"
                        >
                            <h1 className="text-2xl">
                                Metodos de pagamento:
                            </h1>
                            <RadioButtons />
                        </div>
                        <div
                            className="flex flex-col w-full gap-3"
                        >
                            <h1 className="text-2xl">
                                Cupon de desconto:
                            </h1>
                            <div className="flex gap-2 items-center">
                                <Input
                                    className="w-1/2 border border-indigo-400"
                                    placeholder="digite o código do cupom"
                                />
                                <Check
                                    className="border border-indigo-400 p-1 rounded-md text-indigo-800 cursor-pointer"
                                    size={40}
                                />
                            </div>
                        </div>
                        <div
                            className="w-full flex justify-end"
                        >
                            <ButtonFinishOrder
                                cep={cep}
                                isCreated={isCreated}
                                setIsCreated={setIsCreated}
                            />
                        </div>
                    </CardFooter>
                </Card>
            </ScrollArea>
            {
                isCreated &&
                <AlertModal
                    title="Sucesso"
                    message="O pedido foi finalizado com sucesso"
                    variant={"default"}
                    className="w-1/3 border border-indigo-400 absolute top-16 z-50 animate-jump-in"
                />
            }
        </div>
    )
}