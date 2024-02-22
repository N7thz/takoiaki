import Link from "next/link"
import { MenuHeader } from "./menu-header"

export const Header = () => {

    const options: string[] = [
        "home", "populares", "categorias", "carrinho"
    ]

    return (

        <div
            className="w-full flex justify-between items-center pb-12 bg-zinc-100"
        >
            <div
                className="w-2/3 bg-gradient-to-r from-indigo-400 to-cyan-400 p-[0_4px_4px_0] rounded-br-2xl"
            >
                <ul
                    className="h-12 w-full bg-zinc-100 drop-shadow-2xl flex items-center justify-around capitalize font-bold rounded-br-xl dark:bg-zinc-900 dark:text-white"
                >
                    {
                        options.map((option, index) =>
                            <li
                                key={index}
                                className="hover:scale-110 hover:underline duration-150 cursor-pointer "
                            >
                                <Link href={`/${option}`}>
                                    {option}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>

            <MenuHeader />
        </div>
    )
}
