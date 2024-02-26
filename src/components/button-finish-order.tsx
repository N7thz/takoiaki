import { FC } from "react"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import { ButtonFinishOrderProps, CartItem } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

export const ButtonFinishOrder: FC<ButtonFinishOrderProps> = ({
    setIsCreated, cep
}) => {

    const { data: session } = useSession()
    const { push } = useRouter()

    let totalValue = 0

    const { data: shoppingCart } = useQuery({
        queryKey: ["get-shopping-cart"],
        queryFn: async () => {

            const response = await
                fetch("http://localhost:3333/shopping-cart")

            const data: CartItem[] = await response.json()

            return data
        }
    })

    if (!shoppingCart || !session) {
        return
    }

    shoppingCart.map(item => {

        totalValue = totalValue + item.totalValue
    })

    async function finishOrder() {

        const order = {

            items_order: shoppingCart,
            totalValue,
            cep,
            created_at: Date()
        }

        console.log(order)

        const response = await fetch("http://localhost:3333/history", {

            method: "POST",
            body: JSON.stringify(order)
        })

        if (response.status === 201) {

            ponte()

            setIsCreated(true)

            setTimeout(() => {

                setIsCreated(false)

                push("/home")
            }, 2000)
        }
    }

    async function ponte() {

        await Promise.all([
            deleteShoppingCart(),
            sendEmail()
        ])
    }

    function deleteShoppingCart() {

        if (!shoppingCart) return

        shoppingCart.map(async item => {

            const { id } = item

            await fetch(`http://localhost:3333/shopping-cart/${id}`, {
                method: "DELETE"
            })       
        })
    }

    async function sendEmail() {

        const response = await fetch("/api/send", {
            method: "POST"
        })

        const data = await response.json()

        console.log(data)
    }

    return (

        <Button
            onClick={finishOrder}
        >
            Finalizar Pedido
        </Button>
    )
}
