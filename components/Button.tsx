import Link from "next/link"
import React, {ReactNode} from "react"

const Button = (props: {
    href: string
    target?: string
    children: ReactNode
    className?: string
}) => {
    const { href, target, children, className = '' } = props

    return (
        <Link href={href} passHref>
            <a
                target={target}
                className={`text-center inline-flex items-center justify-center font-semibold border-2 border-pink bg-primary hover:bg-white hover:text-primary text-white px-6 py-2 rounded transition ${className}`}>
                {children}
            </a>
        </Link>
    )
}

export default Button