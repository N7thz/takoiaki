/* eslint-disable @next/next/no-img-element */
import { FC } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

interface EmailTemplateProps {

    firstName: string
}

export const EmailTemplate: FC<EmailTemplateProps> = ({ firstName }) => {

    return (

        <Card>
            <CardHeader>
                <CardTitle>
                    Bem vindo {firstName}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <img
                    src="https://static.wikia.nocookie.net/serieben10/images/6/67/Massa_Cinzenta.png/revision/latest/scale-to-width-down/200?cb=20101009000532&path-prefix=pt-br"
                    width={300}
                    height={300}
                    alt="imagem massa cinzenta"
                />
            </CardContent>
        </Card>
    )
}
