'use client'

import { Link } from 'react-scroll'

import { headerLinks } from '@/utils/constants'

export function Footer() {
  return (
    <div className="bg-background-color text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 px-5 md:px-32">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">StorePhone</h1>
          <p className="text-sm">
            Step into a world of so0nic excellence. Our headsets combine sleek
            design with advanced technology for a truly auditory journey.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            {headerLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                spy
                smooth
                duration={500}
                className="hover:text-bright-color transition-all cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Features</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="features"
              spy
              smooth
              duration={500}
              className="hover:text-bright-color transition-all cursor-pointer"
            >
              User friendly
            </Link>
            <Link
              to="features"
              spy
              smooth
              duration={500}
              className="hover:text-bright-color transition-all cursor-pointer"
            >
              Latest technology
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact us</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="contact"
              spy
              smooth
              duration={500}
              className="hover:text-bright-color transition-all cursor-pointer"
            >
              contact@storephone.com
            </Link>
            <Link
              to="contact"
              spy
              smooth
              duration={500}
              className="hover:text-bright-color transition-all cursor-pointer"
            >
              (+111) 111 111 111
            </Link>
            <Link
              to="contact"
              spy
              smooth
              duration={500}
              className="hover:text-bright-color transition-all cursor-pointer"
            >
              Social media
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          @copyright developed by
          <span className="text-bright-color"> Lucas Machado</span>.
        </p>
      </div>
    </div>
  )
}
