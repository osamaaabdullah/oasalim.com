import { useState } from "react"
import { NavLink } from "react-router-dom"
import { XIcon, MenuIcon } from "lucide-react"

interface NavLinkType {
    name: string
    path: string
}

const navLinks: NavLinkType[] = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'}
]

const NavBar = () => {
    const[isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="bg-white rounded-2xl p-3 mx-auto mb-8">
            <nav className="flex flex-wrap relative">
                
                <ul className="lg:flex hidden gap-1">
                    {navLinks.map((link) => (
                        <li key = {link.name} className="hover:bg-[#F2F2F2] hover:text-black rounded-full px-3 py-1">
                            <NavLink to={link.path}>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                
                {isOpen ? 
                <div className="h-svh w-svw fixed left-0 top-0 backdrop-blur-sm" onClick={handleClick}></div>
                :
                null
                }
                <button className="m-0 my-auto lg:hidden z-10 " onClick={handleClick}>{isOpen? <XIcon/> : <MenuIcon/>}</button>
                {isOpen ? <div className="bg-white w-1/2 absolute top-10 rounded-2xl lg:hidden">
                    <ul className="my-4">
                    {navLinks.map((link) => (
                        <li key = {link.name} onClick={handleClick} className="m-2">
                            <NavLink to={link.path}>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                    </ul>
                </div>
                : 
                null}
            </nav>
        </header>
    )
}

export default NavBar
