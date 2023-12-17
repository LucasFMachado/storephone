'use client'

import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-scroll'

import { headerLinks } from '@/utils/constants'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => setMenuOpen(!menuOpen)

  const handleCloseMenu = () => setMenuOpen(false)

  return (
    <div className="w-full fixed z-10 text-white">
      <div>
        <div className="flex flex-row justify-between p-5 px-5 lg:px32 bg-background-color shadow-[rgba(0,0,0,0.24)_0px_3px_8px]">
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="home" spy smooth duration={500}>
              <h1 className="text-2xl font-semibold">StorePhone</h1>
            </Link>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-4">
            {headerLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                spy
                smooth
                duration={500}
                className=" hover:text-bright-color transition-all cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            {menuOpen ? (
              <AiOutlineClose
                size={25}
                onClick={handleToggleMenu}
                className="cursor-pointer"
              />
            ) : (
              <AiOutlineMenu
                size={25}
                onClick={handleToggleMenu}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
        <div
          className={`${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden flex flex-col absolute bg-background-color text-white left-0 top-12 font-semibold text-xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          {headerLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              spy
              smooth
              duration={500}
              onClick={handleCloseMenu}
              className=" hover:text-bright-color transition-all cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
