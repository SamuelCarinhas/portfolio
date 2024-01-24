import { ReactNode } from "react"

export default interface ISection {
    className?: string
    id?: string
    title: string
    image?: string
    children?: ReactNode
}