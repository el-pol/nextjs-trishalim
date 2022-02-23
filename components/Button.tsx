import Link from "next/link";
import React, {ReactNode} from "react";

const Button = (props: {
    href: string
    target?: string
    children: ReactNode
}) => {
    const { href, target, children } = props

    return (
        <Link href={href} passHref>
            <a
                target={target}
                className="flex items-center font-semibold border-2 border-pink bg-primary hover:bg-white hover:text-primary text-white px-6 py-2 rounded transition">
                {children}
            </a>
        </Link>
    )
}

export default Button