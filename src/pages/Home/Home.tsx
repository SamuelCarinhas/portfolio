import { IoIosArrowDown } from 'react-icons/io'
import Section from '../../components/Section/Section'
import './Home.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Home() {
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
                        <IoIosArrowDown />
                    </div>
                    <div className='bottom right'>
                        <div className='line' />
                        <FaLinkedin />
                        <FaGithub />
                    </div>
                </div>
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