import './Clickable.css'

import IClickable from "./IClickable";

export default function Clickable(props: IClickable) {

    return (
        <div className="clickable" onClick={ props.onClick }>
            { props.children }
        </div>
    )
}