import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-full h-20 px-2' >
        <ul>
        <li>
            <Link to={"/"} >Home</Link>
        </li>
        <li>
            <Link to={"/hooks"} >Hooks</Link>
        </li>
        </ul>
    </header>
  )
}

export default Header