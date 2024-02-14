import React from 'react'
import "./navbar.css"
import logo from "../Assets/mylogo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        < div className='main'>

            <div className='left'>
                <img src={logo} alt="My Logo" className='logo' />
            </div>
            <div className='right'>

                <ul>

                    <Link to ="/" >
                    <li>ABOUT</li>

                    </Link>

                    <Link to="/skills">
                    <li>SKILLS</li>

                    </Link>

                    <Link to="/projects">
                    <li>PROJECTS</li>

                    </Link>

                </ul>

            </div>
        </div>
    )
}

export default Navbar