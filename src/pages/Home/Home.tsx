import { IoIosArrowDown } from 'react-icons/io'
import Section from '../../components/Section/Section'
import './Home.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Clickable from '../../components/Clickable/Clickable'

export default function Home() {

    const openInNewTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className='home'>
            <Section className='hero' title=''>
                <div className='center'>
                    <div className='image'>
                        <img src='/profile.png'></img>
                    </div>
                    <div className='name'>
                        <span>I'm </span>
                        <span className='gold'>Samuel Carinhas</span>
                    </div>
                    <div className='job'>
                        Software Developer
                    </div>
                    <div className='bottom'>
                        <Clickable onClick={ () => document.getElementById("first")?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }) }>
                            <IoIosArrowDown />
                        </Clickable>
                    </div>
                    <div className='bottom right'>
                        <div className='line' />
                        <Clickable onClick={ () => openInNewTab("https://www.linkedin.com/in/samuel-carinhas-247325187/") }>
                            <FaLinkedin />
                        </Clickable>
                        <Clickable onClick={ () => openInNewTab("https://github.com/SamuelCarinhas") }>
                            <FaGithub />
                        </Clickable>
                    </div>
                </div>
            </Section>
            <Section id="first" className='left about' title='About' image='/about_icon.png'>
            </Section>
            <Section className='right skills' title='Skills' image='/skills_icon.png'>
            </Section>
            <Section className='left projects' title='Projects' image='/projects_icon.png'>
            </Section>
        </div>
    )
}