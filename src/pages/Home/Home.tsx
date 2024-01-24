import Section from '../../components/Section/Section'
import './Home.css'

export default function Home() {
    return (
        <div className='home'>
            <Section className='hero' title=''>
            </Section>
            <Section className='left about' title='About' image='/about_icon.png'>
            </Section>
            <Section className='right skills' title='Skills' image='/skills_icon.png'>
            </Section>
            <Section className='left projects' title='Projects' image='/projects_icon.png'>
            </Section>
        </div>
    )
}