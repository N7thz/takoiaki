import { FC } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { MyAvatarProps } from "@/types"
import { useSession } from "next-auth/react"

export const MyAvatar: FC<MyAvatarProps> = ({ className }) => {

    const { data: session } = useSession()

    if (!session) {

        return
    }

    const { user } = session

    if (!user || !user.image || !user.name) {

        return
    }

    return (

        <Avatar className={className}>
            <AvatarImage
                src={user.image}
                alt={user.name}
            />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}
