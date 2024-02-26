import { ComponentProps, Dispatch, ReactNode, SetStateAction } from "react"

export interface ProviderProps {

    children: ReactNode
}

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

export interface History {
    id: string
    items_order: CartItem[]
    totalValue: number
    cep: Cep
    created_at: string
}

export interface CartItem {

    id?: string
    idProduct: string
    title: string
    category: string
    quantity: number
    price: number
    totalValue: number
    imageURL: string
}

export interface MyAvatarProps extends ComponentProps<"div"> { }

export interface FormItemProps extends ComponentProps<"form"> {

    product: Product
    isCreated: boolean
    setIsCreated: Dispatch<SetStateAction<boolean>>
}

export interface AlertModalProps extends ComponentProps<"div"> {

    title: string
    message: string
    variant: "default" | "destructive" | null | undefined
}

export interface DialogModalProps {

    id: string | undefined
    isRemoved: boolean
    setIsRemoved: Dispatch<SetStateAction<boolean>>
}

export interface Cep {

    cep: string
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string
    ibge: string
    gia: string
    ddd: string
    siafi: string
}

export interface ButtonFinishOrderProps {

    cep: Cep | null
    isCreated: boolean
    setIsCreated: Dispatch<SetStateAction<boolean>>
}