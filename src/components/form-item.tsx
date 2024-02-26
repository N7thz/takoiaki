import { FC, FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { CartItem, FormItemProps } from "@/types"
import { Plus, Minus } from "lucide-react"

export const FormItem: FC<FormItemProps> = ({ product, setIsCreated }) => {

    const { id, title, category, qtStock, price, imageURL } = product

    const { push } = useRouter()

    const [quantity, setQuantity] = useState<number>(1)

    function decreaseQuantity() {

        if (quantity <= 1) {

            return
        }

        setQuantity(oldValue => oldValue - 1)
    }

    function increaseQuantity() {

        if (quantity >= qtStock) {

            return
        }

        setQuantity(oldValue => oldValue + 1)
    }

    async function addShoppingCart(e: FormEvent) {

        e.preventDefault()

        const totalValue = Number((price * quantity).toFixed(2))

        const cartItem: CartItem = {

            idProduct: id.toString(),
            title,
            category,
            quantity,
            price,
            totalValue,
            imageURL
        }

        const response = await fetch("http://localhost:3333/shopping-cart", {
            method: "POST",
            body: JSON.stringify(cartItem)
        })

        if (response.status == 201) {

            setIsCreated(true)

            setTimeout(() => {

                setIsCreated(false)

                push("/home")
            }, 2000)
        }
    }

    return (

        <form
            onSubmit={addShoppingCart}
            className="w-full flex flex-col gap-4 items-center"
        >
            <div
                className="flex w-full justify-center gap-1"
            >
                <Button
                    type="button"
                    onClick={decreaseQuantity}
                    size={"icon"}
                    className="bg-indigo-400"
                >
                    <Minus />
                </Button>
                <Input
                    readOnly
                    value={quantity}
                    type="number"
                    min={1}
                    max={qtStock}
                    className="w-2/5 text-center border-2"
                />
                <Button
                    type="button"
                    onClick={increaseQuantity}
                    size={"icon"}
                    className="bg-indigo-400"
                >
                    <Plus />
                </Button>
            </div>
            <Button
                className="w-2/3 bg-indigo-400 drop-shadow-2xl"
                type="submit"
            >
                Adicionar ao carrinho
            </Button>
        </form>
    )
}
