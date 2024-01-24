import { ReactNode } from "react"

export default interface IClickable {
    onClick: React.MouseEventHandler<HTMLDivElement>
    children: ReactNode
}
