import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { LinkedinIcon, GitHubIcon } from './Icons'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`
        h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
        `}>&nbsp;</span>
    </Link>
  )
}

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className='mr-4 text-sm' />
        <CustomLink href="/about" title="About" className='mx-4 text-sm' />
        <CustomLink href="/projects" title="Projects" className='mx-4 text-sm' />
        <CustomLink href="/articles" title="Articles" className='ml-4 text-sm' />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="https://www.linkedin.com/in/yong-yung-jun-8468b01a8/" target="_blank"
          whileHover={{ y: -4 }} whileTap={{scale:0.85}} className="w-6 mr-2">
          <LinkedinIcon />
        </motion.a>

        <motion.a href="https://github.com/YungJun0112" target="_blank"
        whileHover={{ y: -4 }} whileTap={{scale:0.85}} className="w-6 mx-2">
          <GitHubIcon />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}

export default NavBar