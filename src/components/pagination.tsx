"use client"

import { ProductResponse } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { Button } from "./ui/button"
import {
    ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight
} from "lucide-react"

export const Pagination = () => {

    const { data: productResponse } = useQuery({
        queryKey: ["get-products"],
        queryFn: async () => {

            const response = await fetch("http://localhost:3333/products?_page=1&_per_page=9")

            const data: ProductResponse = await response.json()

            return data
        }
    })

    if (!productResponse) {

        return
    }

    function handleFirstPage() {

        localStorage.setItem("page", "1")

        window.location.reload()
    }

    function handlePrevPage() {

        const prevPage = localStorage.getItem("page")

        if (!prevPage || (Number(prevPage) - 1) <= 0) {

            return
        }

        const value = (Number(prevPage) - 1).toString()

        localStorage.setItem("page", value)

        window.location.reload()
    }

    function handleNextPage() {

        const prevPage = localStorage.getItem("page")

        if (!prevPage || (Number(prevPage) + 1) > last) {

            return
        }

        const value = (Number(prevPage) + 1).toString()

        localStorage.setItem("page", value)

        window.location.reload()
    }

    function handleLastPage() {

        localStorage.setItem("page", String(last))

        window.location.reload()
    }

    const { last, next, prev } = productResponse

    return (

        <div
            className="m-2 flex gap-1 items-center mb-8"
        >
            <Button
                size="icon"
                onClick={handleFirstPage}
                disabled={prev === null}
                className="bg-gradient-to-r from-indigo-400 to-cyan-400  drop-shadow-2xl hover:scale-90 duration-75"
            >
                <ChevronsLeft />
            </Button>

            <Button
                size="icon"
                onClick={handlePrevPage}
                disabled={prev === null}
                className="bg-gradient-to-r from-indigo-400 to-cyan-400  drop-shadow-2xl hover:scale-90 duration-75"
            >
                <ChevronLeft />
            </Button>

            <span className="mx-4">
                Página {
                    next !== null
                        ? next - 1
                        : last
                } de {last}
            </span>

            <Button
                size="icon"
                onClick={handleNextPage}
                disabled={next === null}
                className="bg-gradient-to-l from-indigo-400 to-cyan-400  drop-shadow-2xl hover:scale-90 duration-75"
            >
                <ChevronRight />
            </Button>

            <Button
                size="icon"
                onClick={handleLastPage}
                disabled={next === null}
                className="bg-gradient-to-l from-indigo-400 to-cyan-400  drop-shadow-2xl hover:scale-90 duration-75"
            >
                <ChevronsRight />
            </Button>
        </div>
    )
}
