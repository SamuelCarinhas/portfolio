import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profile from './assets/images/perfil.png'
import TypeWriter from './components/TypeWriter/TypeWriter'

export default function App() {
    
    return (
        <div className="flex flex-col bg-black text-white font-outfit pl-20 pr-20">
            <div className="flex flex-col w-full min-h-100dvh justify-between h-100dvh">
                <div className="flex flex-row box-border w-full justify-between items-center text-xl h-20">
                    <div className="text-3xl">
                        Samuel
                    </div>
                    <div className="flex flex-row gap-10">
                        <span className="hover:text-gold hover:cursor-pointer text-gold">Home</span>
                        <span className="hover:text-gold hover:cursor-pointer">About</span>
                        <span className="hover:text-gold hover:cursor-pointer">Portfolio</span>
                        <span className="hover:text-gold hover:cursor-pointer">Contact</span>
                    </div>
                </div>
                <div className="flex flex-row justify-between w-full h-full">
                    <div className='flex flex-col gap-10 w-50% justify-center'>
                        <div className='flex flex-col gap-1'>
                            <span className='text-4xl'>Hello there,</span>
                            <span className='text-5xl'>I'm <span className='font-semibold'>Samuel Carinhas</span>,</span>
                            <span className='text-4xl'>And I'm a
                                <span className='text-gold text-glow-gold'>
                                    <TypeWriter texts={['Backend Developer', 'Frontend Developer', 'Competitive Programmer', 'Linux Lover']} />
                                </span>
                            </span>
                        </div>
                        <div className='flex flex-row text-lg gap-5 text-gold'>
                            <a href='https://www.linkedin.com/in/samuel-carinhas-247325187/'>
                                <div className='aspect-square border rounded-full p-3 box-border border-gold shadow-gold-small hover:bg-gold hover:text-black'>
                                    <FaLinkedin />
                                </div>
                            </a>
                            <a href='https://github.com/SamuelCarinhas/'>
                                <div className='aspect-square border rounded-full p-3 box-border border-gold shadow-gold-small hover:bg-gold hover:text-black'>
                                    <FaGithub />
                                </div>
                            </a>
                        </div>
                        <div className='flex flex-col text-lg text-black font-semibold'>
                            <a href='#contact-me'>
                                <div className='border rounded-lg p-3 box-border border-gold shadow-gold-small w-fit bg-gold hover:text-gold hover:bg-transparent'>
                                    Contact Me
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-50%'>
                        <img src={profile} className='w-50 h-50 aspect-square object-cover rounded-full border-gold border shadow-gold'/>
                    </div>
                </div>
            </div>
        </div>
    )
}