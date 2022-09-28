import Discord from './icons/Discord'
import Twitter from './icons/Twitter'
import KnoxLogo from './KnoxLogo'

const links = [
  {
    name: 'Documentation',
    link: 'https://knox-finance.gitbook.io/knox-finance-docs/77tuA89xI3jzFpPPCKPe/',
  },
  {
    name: 'Blog',
    link: 'https://knoxfinance.substack.com/',
  },
  {
    name: 'Contact',
    link: 'https://calendly.com/caesar-15/15min',
  },
]

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary-dark w-screen text-white py-16 flex justify-center pt-24">
        <div className="limited w-full px-4 xl:px-0">
          <div className="mb-8 xl:mb-4 flex items-center justify-center xl:block">
            <KnoxLogo />
          </div>
          <div className="xl:grid flex flex-col text-center xl:text-left  w-full  justify-center items-center grid-cols-4 xl:h-[90px] ">
            <div className='xl:block flex justify-between  w-full'>
              <h4 className="mb-10">Copyright © 2022</h4>
              <span className="xl:text-sm">Sustainable yields for All</span>
            </div>
            <ul className="flex flex-col items-start w-full xl:grid grid-cols-2 text-sm gap-y-10 gap-x-12">
              {links.map((link) => {
                return (
                  <a
                  key={link}
                    href={link.link}
                    className="border-l flex items-center leading-[1] border-white border-opacity-80 pl-2  "
                  >
                    {link.name}
                  </a>
                )
              })}
            </ul>
            <div className="flex items-center  justify-start w-full my-8 xl:my-0 text-white fill-white">
              <Discord className={'w-6 mr-8 fill-white text-white'} />
              <Twitter className={'w-6 fill-white text-white'} />
            </div>
            <div className="flex justify-end items-center">
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
