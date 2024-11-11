import { ReactNode } from "react"

interface ExperienceProps {
    date: string
    title: string
    company: string
    companyRef: string
    body: ReactNode
}

export default function Experience(props: ExperienceProps) {

    return (
        <>
            <div className='flex flex-row items-center gap-5'>
                <div className='bg-gray p-2 w-28 rounded-lg flex justify-center items-center'>
                    <span>{ props.date }</span>
                </div>
                <div className='w-6 h-6 bg-gold rounded-full shadow-gold'></div>
                <span className='text-2xl'>{ props.title }</span>
            </div>
            <div className='flex flex-col gap-1 pb-5 pt-5 text-justify ml-36 border-l-gold border-l-2 pl-8'>
                <a className='text-xl text-gold text-glow-gold' href={ props.companyRef }> { props.company } </a>
                <span className='text-lg'>
                    { props.body }
                </span>
            </div>
        </>
    )
}