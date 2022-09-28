import { useEffect, useState } from 'react'
import TopButton from './Buttons/TopButton'
import Discord from './icons/Discord'
import Twitter from './icons/Twitter'
import KnoxLogo from './KnoxLogo'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    const header = document.getElementById('header')
    const discord = document.getElementById('discord-head')

    discord.classList.add("fill-white")
    function checkScroll() {

      if (window.scrollY !== 0) {
        setIsScrolled(true)
        header.classList.remove("bg-transparent")
        header.classList.remove("text-white")
        header.classList.add("bg-white")
        header.classList.add("text-black")
        setIsDark(true)
        
      } else {
        setIsScrolled(false)
        header.classList.remove("bg-white")
        header.classList.remove("text-black")
        header.classList.add("text-white")
        setIsDark(false)

      }
    }

    window.addEventListener('scroll', checkScroll)
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  return (
    <div id="header" className="flex fixed justify-between py-4 text-white fill-white top-0 w-full z-50  items-center xl:px-48 px-4">
      <div>
        <KnoxLogo reversed={isScrolled} />
      </div>
      <div className="flex justify-end space-x-12  items-center">
        <a href="https://knoxfinance.substack.com/" target="_blank">Blog</a>
        <Twitter dark={isDark} className="w-6"  />
        <Discord  dark={isDark} className="w-6" id="discord-head" />
        <div className="hidden xl:block">
          <TopButton />
        </div>
      </div>
    </div>
  )
}

export default Header
