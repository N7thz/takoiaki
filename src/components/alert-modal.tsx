import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertModalProps } from "@/types"
import { FC } from "react"

export const AlertModal: FC<AlertModalProps> = ({
    title, message, variant, className
}) => {

    return (

        <Alert
            variant={variant}
            className={className}
        >
            <AlertTitle
                className="text-left text-2xl text-indigo-400"
            >
                {title}
            </AlertTitle>
            <AlertDescription
                className="text-lg text-indigo-400/80 italic drop-shadow-2xl"
            >
                {message}
            </AlertDescription>
        </Alert>
    )
}
