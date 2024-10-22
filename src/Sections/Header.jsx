import { useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'


const Header = () => {
    
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 z-50 w-full py-10">
            <div className="container flex h-14 items-center max-lg:ps-5">
                <a className="lg:hidden  flex-1 cursor-pointer z-2">
                    <img src="./images/xora.svg" width={115} height={55} alt="" />
                </a>
                <div className={`w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-${isOpen ? "1" : "0"}`}>

                    <div className="w-tull max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:kpx-4 ">
                        <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                            <ul className="flex max-lg:block max-lg:px-12">
                                <li className="nav-li">
                                    <Navlink title="features" />
                                    <div className="dot"></div>
                                    <Navlink title="pricing" />
                                </li>
                                <li className='nav-logo'>
                                    <LinkScroll>
                                        <img src="./images/xora.svg" width={160} height={55} alt="" />
                                    </LinkScroll>
                                </li>
                                <li className="nav-li">
                                    <Navlink title="faq" />
                                    <div className="dot"></div>
                                    <Navlink title="download" />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <button onClick={() => setIsOpen((prevState) => !prevState)} className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center">
                    <img src={`./images/${isOpen? "close" : "magic"}.svg`} className='size-1/2 object-contain' alt="" />
                </button>
            </div>
        </header>
    )
}



const Navlink = ({ title }) => (
    <LinkScroll className='base-bold text-p4 uppercase transition-colors duration-500 corsor-pointer hover:text-p1 max-lg:my-4 max-lg:h5'>
        {title}
    </LinkScroll>
)

export default Header