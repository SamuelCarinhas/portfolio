import { FaGithub, FaLinkedin, FaRegSmile } from 'react-icons/fa'
import profile from './assets/images/perfil.png'
import logo from './assets/images/logo.png'
import TypeWriter from './components/TypeWriter/TypeWriter'
import { LuDot } from 'react-icons/lu'
import { MdEmail } from 'react-icons/md'
import { useEffect, useState } from 'react'

export default function App() {

    const [activeSection, setActiveSection] = useState<string>('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'portfolio', 'contact'];
            let currentSection = 'home';
            
            sections.forEach((section) => {
                const element = document.getElementById(section);
                const rect = element?.getBoundingClientRect();
                
                if (rect && rect.top <= window.innerHeight / 2 && rect.top + rect.height >= window.innerHeight / 2) {
                    currentSection = section;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div className="flex flex-col bg-black text-white font-outfit pb-10 pt-5">
            <div id='home' className="flex flex-col w-full min-h-100dvh justify-between h-100dvh md:pl-20 md:pr-20 pl-5 pr-5">
                <div className="flex flex-row box-border w-full justify-between items-center text-xl h-20 fixed bg-black z-50 left-0 top-0 pl-20 pr-20 border-b-2 border-b-gold">
                    <div className="text-3xl">
                        <img src={logo} className='h-20 md:h-64shadow-gold' />
                    </div>
                    <div className="flex-row gap-10 hidden md:flex">
                        <a href='#home' className={`hover:text-gold hover:cursor-pointer ${activeSection === 'home' ? 'text-gold' : ''}`}>Home</a>
                        <a href='#about' className={`hover:text-gold hover:cursor-pointer ${activeSection === 'about' ? 'text-gold' : ''}`}>About</a>
                        <a href='#portfolio' className={`hover:text-gold hover:cursor-pointer ${activeSection === 'portfolio' ? 'text-gold' : ''}`}>Portfolio</a>
                        <a href='#contact' className={`hover:text-gold hover:cursor-pointer ${activeSection === 'contact' ? 'text-gold' : ''}`}>Contact</a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-around gap-10 w-full h-full mt-10 mb-10">
                    <div className='flex flex-col gap-10 w-full md:w-1/2 justify-center items-center md:items-start'>
                        <div className='flex flex-col gap-1 items-center md:items-start'>
                            <span className='text-3xl md:text-4xl text-center md:text-start'>Hello there,</span>
                            <span className='text-4xl md:text-5xl text-center md:text-start'>I'm <span className='font-semibold'>Samuel Carinhas</span>,</span>
                            <span className='text-3xl md:text-4xl text-center md:text-start'>And I'm a
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
                    <div className='flex justify-center items-center md:w-1/2 w-full'>
                        <img src={profile} className='h-40 md:h-64 aspect-square object-cover rounded-full border-gold border shadow-gold md:animate-float' />
                    </div>
                </div>
            </div>
            <div id='about' className="flex flex-col w-full bg-black md:pl-20 md:pr-20 pt-20 pb-20 pl-5 pr-5 gap-20 box-border">
                <div className='flex flex-col w-full gap-10'>
                    <h1 className='text-5xl'>About</h1>
                    <span className='text-lg text-justify border-l-4 border-l-gold pl-10 box-border'>
                        My journey in programming began in high school, where I joined a <a href="http://prode.brotero.com/" className='text-gold text-glow-gold'>Programming and Robotics Club</a> and competed
                        in several major programming competitions across Portugal. This early exposure ignited my passion for coding
                        and problem-solving, leading me to pursue a degree at the <a href="https://www.uc.pt/" className='text-gold text-glow-gold'>University of Coimbra</a>. During my time at university,
                        I continued to compete in programming contests and became an active member of the <a href="https://www.uc.pt/fctuc/dei/agenda-dei/9-torneio-de-programacao-topdei/" className='text-gold text-glow-gold'>TOPDEI</a> competitive programming
                        group. Beyond my love for competitive programming, I have a strong affinity for teamwork and collaboration.
                        I was actively involved in the <a href="https://nei.dei.uc.pt/" className='text-gold text-glow-gold'>NEI</a> (Núcleo de Estudantes de Informática), where I played a key role in organizing
                        and coordinating events, websites development, and programming contests. In my final year, I had the privilege of
                        leading the development of <a href="https://shiftappens.com/" className='text-gold text-glow-gold'>Shift Appens</a>, one of Portugal's largest hackathons, and launching the new edition of
                        the <a href="https://shiftappens.com/faq" className='text-gold text-glow-gold'>Shift Appens Academy</a>, an initiative aimed at introducing high school students to programming.
                    </span>
                </div>
                <div className='flex flex-col w-full gap-10'>

                    <h1 className='text-3xl'>Experience</h1>
                    <div className='flex flex-col'>
                        <div className='flex flex-row items-center gap-5'>
                            <div className='bg-gray p-2 w-28 rounded-lg flex justify-center items-center'>
                                <span>2021 - 2021</span>
                            </div>
                            <div className='w-6 h-6 bg-gold rounded-full shadow-gold'></div>
                            <span className='text-2xl'>Summer Internship</span>
                        </div>
                        <div className='flex flex-col gap-1 pb-5 pt-5 text-justify ml-36 border-l-gold border-l-2 pl-8'>
                            <a className='text-xl text-gold text-glow-gold' href='https://www.ipn.pt/'>Instituto Pedro Nunes</a>
                            <span className='text-lg'>
                                During a summer internship, I developed a project management
                                website using Angular and Entity Framework. This platform
                                enabled users to create, organize, and manage projects
                                efficiently. It provided features for tracking project
                                progress, managing team members, assigning roles, and
                                overseeing tasks. The system also allowed users to contro
                                project timelines, allocate resources, and collaborat
                                effectively. My work involved integrating front-end Angular
                                components with a robust back-end powered by Entity Framework,
                                ensuring seamless data handling and a user-friendly experience.
                                This project honed my skills in full stack development and
                                team collaboration.
                            </span>
                        </div>
                        <div className='flex flex-row items-center gap-5'>
                            <div className='bg-gray p-2 w-28 rounded-lg flex justify-center items-center'>
                                <span>2021 - 2022</span>
                            </div>
                            <div className='w-6 h-6 bg-gold rounded-full shadow-gold'></div>
                            <span className='text-2xl'>Python Software Developer</span>
                        </div>
                        <div className='flex flex-col gap-1 pb-5 pt-5 text-justify ml-36 border-l-gold border-l-2 pl-8'>
                            <a className='text-xl text-gold text-glow-gold' href='https://videntai.com/'>ZEGAMI / DCSL</a>
                            <span className='text-lg'>
                                Four months job working as a python engineer for <a className='text-gold text-glow-gold' href='https://videntai.com/'>Zegami</a>,
                                consulting <a className='text-gold text-glow-gold' href='https://www.one-beyond.com/'>DCSL</a>.
                                During this time, I focused on developing and maintaining Python components, streamlining CI/CD
                                pipelines, and ensuring smooth deployment processes. The role involved close collaboration within
                                an agile team environment, where I contributed to iterative development cycles, regular code
                                reviews, and cross-functional teamwork.
                            </span>
                        </div>
                        <div className='flex flex-row items-center gap-5'>
                            <div className='bg-gray p-2 w-28 rounded-lg flex justify-center items-center'>
                                <span>2022 - 2022</span>
                            </div>
                            <div className='w-6 h-6 bg-gold rounded-full shadow-gold'></div>
                            <span className='text-2xl'>Instructor</span>
                        </div>
                        <div className='flex flex-col gap-1 pb-5 pt-5 text-justify ml-36 border-l-gold border-l-2 pl-8'>
                            <a className='text-xl text-gold text-glow-gold' href='https://treetree2.school/'>After School</a>
                            <span className='text-lg'>
                            I provided guidance to young children in the Computer Architecture I course,
                            organized by <a className='text-gold text-glow-gold' href='https://www.treetree2.org/'>treetree2</a> as part of the <a className='text-gold text-glow-gold' href='https://treetree2.school/'>After School</a> program. In this course,
                            I worked closely with students, helping them understand fundamental concepts
                            such as Boolean algebra, logic gates, and basic digital circuits. I taught
                            them how to design simple circuits and explained the significance of these
                            concepts in computer hardware. Through this experience, I honed my teaching
                            and communication skills by simplifying complex topics for younger students.
                            I also deepened my understanding of Boolean algebra and circuit design, gaining
                            practical insights into how these principles underpin modern computing systems.
                            Additionally, working with young learners improved my patience and ability to adapt
                            explanations to different learning paces.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div id='portfolio' className="flex h-100dvh flex-col w-full bg-black md:pl-20 md:pr-20 pt-20 pb-20 pl-5 pr-5 gap-20 box-border">
                <div className='flex flex-col w-full gap-10'>
                    <h1 className='text-5xl'>Portfolio</h1>
                    <div className='flex flex-row flex-wrap gap-10'>
                        <a href='https://pixel-judge.samuelcarinhas.com'>
                            <div className='flex bg-gray w-96 h-96 p-4 box-border rounded-lg'>
                                <div className='flex flex-col justify-between'>
                                    <span className='text-2xl text-gold'>Portfolio</span>
                                    <span className='h-full pt-5 pb-5 text-justify'>
                                        <span className='flex flex-row gap-1 items-center'>
                                            This amazing website <FaRegSmile className='text-gold' />
                                        </span>
                                    </span>
                                    <div className='flex flex-row gap-1 text-gray-10 text-center items-center flex-wrap text-gold'>
                                        <span>ReactJS</span>
                                        <span><LuDot  /></span>
                                        <span>Tailwind</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href='https://pixel-judge.samuelcarinhas.com'>
                            <div className='flex bg-gray w-96 h-96 p-4 box-border rounded-lg'>
                                <div className='flex flex-col justify-between'>
                                    <span className='text-2xl text-gold'>Pixel Judge</span>
                                    <span className='h-full pt-5 pb-5 text-justify'>
                                    Pixel Judge is an online judge with real-time notifications that allows users to solve programming problems. It also features an admin interface that enables administrators to create and manage problems, users, and other related tasks, ensuring a smooth and efficient experience for all participants.
                                    </span>
                                    <div className='flex flex-row gap-1 text-gray-10 text-center items-center flex-wrap text-gold'>
                                        <span>ReactJS</span>
                                        <span><LuDot  /></span>
                                        <span>NodeJS</span>
                                        <span><LuDot  /></span>
                                        <span>Redis</span>
                                        <span><LuDot  /></span>
                                        <span>Postgres</span>
                                        <span><LuDot  /></span>
                                        <span>Socket.io</span>
                                        <span><LuDot  /></span>
                                        <span>Linux</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div id='contact' className="flex flex-col items-center w-full bg-black md:pl-20 md:pr-20 pt-20 pb-20 pl-5 pr-5 gap-5 box-border border-t-gold border-t-2 border-b-gold border-b-2">
                <h1 className='absolute text-5xl -mt-28 bg-black w-fit pl-4 pr-4 box-border rounded-full'>Contact Me</h1>
                <div className='flex flex-row bg-gray p-4 rounded-lg'>
                    <span className='flex flex-row gap-2 text-center items-center'><MdEmail />samuelsantos.c.2001@gmail.com</span>
                </div>
            </div>
            <div className='flex h-80 items-end w-full justify-center'>
                <span>Copyright &copy; 2024 samuelcarinhas.com</span>
            </div>
        </div>
    )
}