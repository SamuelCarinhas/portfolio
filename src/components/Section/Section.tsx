import './Section.css'

import ISection from "./ISection";

export default function Section(props: ISection) {
    return (
        <section className={props.className}>
            {props.title.length > 0 &&
                <div className='header'>
                    <div className='title'>
                        {props.title}
                    </div>
                    <div className='image'>
                        <img src={props.image}></img>
                    </div>
                </div>
            }
        </section>
    )
}