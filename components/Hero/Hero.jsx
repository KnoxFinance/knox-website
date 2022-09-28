import { useContext, useEffect, useState } from 'react'
import { ContentContext } from '../../pages'
import TopButton from '../Buttons/TopButton'
import TheMan from './TheMan'

const Hero = () => {
  const content = useContext(ContentContext)

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    })
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
      // Add event listener
      window.addEventListener('resize', handleResize)
      // Call handler right away so state gets updated with initial window size
      handleResize()
      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize)
    }, []) // Empty array ensures that effect is only run on mount
    return windowSize
  }

  const size = useWindowSize()

  useEffect(() => {
    const $el = document.body
    const doc = window.document
   
  }, [])

  useEffect(() => {
  
    const genRandomNumber = (min, max) => {
        return Math.random() * (max - min) + min
      }
      const genStar = () => {
        const star = document.createElement('div')
        star.classList.add('star')
  
        // Gen star coordinates relative to $el size
        let x = genRandomNumber(1,size.width)
        let y = genRandomNumber(1, 250)
  
        const { style } = star
  
        style.left = Math.floor(x) + 'px'
        style.top = Math.floor(y) + 'px'
  
        style.setProperty('--star-size', genRandomNumber(1, 3) + 'px')
  
        style.setProperty(
          '--twinkle-duration',
          Math.ceil(genRandomNumber(1, 5)) + 's',
        )
  
        style.setProperty(
          '--twinkle-delay',
          Math.ceil(genRandomNumber(1, 5)) + 's',
        )
  
        return star
      }
    
      const stars = []
      for (let index = 0; index < 50; index++) {
        stars.push(genStar())
      }
      document.getElementById('starfield').replaceChildren(...stars)
  }, [size.width])

  const goToAnchor = () => {
    window.location = (""+window.location).replace(/#[A-Za-z0-9_]*$/,'')+"#vaults";
  }
  

  return (
    <div className="flex min-h-screen text-white items-center w-full relative justify-center flex-col">
      <div
        id="starfield"
        className="absolute w-full  h-[250px] top-0 "
      ></div>
      <div className="  flex lg:w-full lg:px-48 ">
        <div className=" px-4 lg:px-0">
          <h1
            data-aos="fade-up"
            data-aos-easing="bounce-in-out"
            data-aos-delay="0"
            className=" text-5xl lg:text-7xl font-semibold uppercase"
          >
            {content[0]?.heroTitle || 'Simple'}
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="  text-5xl lg:text-7xl font-semibold uppercase"
          >
              {content[1]?.heroTitle || 'Sustainable'}
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay="600"
            className=" mb-8 text-5xl lg:text-7xl font-semibold uppercase"
          >
               {content[2]?.heroTitle || 'Yields'}
          </h1>
          <p data-aos="fade-right" data-aos-delay="900">
            {content[0]?.heroDesc || 'Generate sustainable yield in any market condition'}
          </p>
          <div className='flex justify-center lg:justify-start'>
          <div onClick={() => goToAnchor('vaults')} data-aos="fade-right" data-aos-delay="1100" className="rounded-lg cursor-pointer w-40 mt-12 lg:mt-12 px-4 text-center hover:scale-105 duration-300 py-4 font-medium leading-[1] text-sm text-white uppercase bg-gradient-to-r  from-knox-purple to-knox-yellow via-knox-orange">
            Go to Vaults
        </div>
        </div>
        </div>
      </div>

      <div className="absolute hidden lg:block right-0 opacity-80 floating-animation bottom-0 w-2/3">
        <img src="/images/hero.png" />
      </div>
    </div>
  )
}

export default Hero
