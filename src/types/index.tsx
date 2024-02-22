import { ComponentProps, FC, ReactNode } from "react"

export interface ProductResponse {
    first: number
    prev: number | null
    next: number
    last: number
    pages: number
    items: number
    data: Product[]
}

export interface Product {

    id: number
    title: string
    description: string
    category: string
    price: number
    imageURL: string
    qtStock: number
    isLiked: boolean
}

export interface MyAvatarProps extends ComponentProps<"div"> {}
