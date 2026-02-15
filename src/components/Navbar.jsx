import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '/img/react-logo.png'
import { FaBars } from "react-icons/fa";
import ThemeToggleButton from './ThemeToggleButton';

function Navbar() {

    const [toggle,setToggle] = useState(false)
    const handleToggle = () =>{
        setToggle(!toggle) //false + false = true
    }

    console.log(toggle)

  return (
    <nav className='shadow-lg py-5 md:p-0 relative dark:bg-zinc-900 dark:text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
            <Link to="/" className='flex items-center'>
                <img src={Logo} alt="reactdev logo" />ReactDev
            </Link>

            <FaBars onClick={handleToggle} className='absolute top-10 right-5 cursor-pointer md:hidden'/>

            <ul className={`flex flex-col md:flex md:flex-row ${toggle ?'block' : 'hidden'}`}>
                <li className='mx-3'><Link to="/">Home</Link></li>
                <li className='mx-3'><Link to="/about">About</Link></li>
                <li className='mx-3'><Link to="/service">Service</Link></li>
                <li className='mx-3'><Link to="blog">Blog</Link></li>
                <li className='mx-3'><Link to="contact">Contact</Link></li>
                <li className='mx-3'><ThemeToggleButton/></li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
