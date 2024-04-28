import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../static/data.jsx'
import styles from '../../styles/styles'

const Navbar = ({ active }) => {
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
      {navItems.map((item, index) => (
        <div key={index} className="flex" >
          <Link
            to={item.url}
            className={`${active === index + 1 ? "text-[#17dd1f]" : "text-black 800px:text-[#fff]"} pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer`}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Navbar
