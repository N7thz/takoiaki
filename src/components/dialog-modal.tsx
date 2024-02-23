import { Button } from "./ui/button"
import { Trash } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FC } from "react"
import { DialogModalProps } from "@/types"

export const DialogModal: FC<DialogModalProps> = ({
    id, setIsRemoved
}) => {

    async function removeItem() {

        const response =
            await fetch(`http://localhost:3333/shopping-cart/${id}`, {
                method: "DELETE"
            })

        if (response.status == 200) {

            setIsRemoved(true)

            setTimeout(() => {

                setIsRemoved(false)

                window.location.reload()
            }, 2000)
        }

        console.log(response)
    }

    return (

        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="flex items-center gap-2 bg-indigo-400"
                >
                    <Trash />
                    Remover do carrinho
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle
                        className="text-2xl"
                    >
                        Remover item?
                    </DialogTitle>
                    <DialogDescription className="text-lg">
                        O item será removido do carrihno, você tem certeza que deseja continuar?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        type="button"
                        onClick={removeItem}
                        className="flex items-center gap-2 bg-indigo-400"
                    >
                        <Trash />
                        remover item
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
