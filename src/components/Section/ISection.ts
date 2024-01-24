import { ReactNode } from "react"

export default interface ISection {
    className?: string
    title: string
    image?: string
    children?: ReactNode
}