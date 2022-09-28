import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { ContentContext } from "../../pages"

const Partners = () => {
  const [content] = useContext(ContentContext)
  const partners = [
    {
      image: '/images/premia.svg',
      link: 'https://premia.finance/',
      name: 'Premia',
    },
    {
      image: '/images/sherlock-logo.svg',
      link: 'https://sherlock.xyz/',
      name: 'Sherlock',
    },
    {
      image: '/images/genesis.png',
      link: 'https://genesisvolatility.io/',
      name: 'Genesis',
    },
  ]
  return (
    <div className="bg-primary-dark flex flex-col items-center text-white pb-12">
      <h1 className="text-6xl limited pb-8 font-semibold text-center w-full border-b border-opacity-10 border-white mb-16 mx-3 xl:px-0">{content.partnersTitle || 'They Trust Us'}</h1>
      <div className="flex xl:flex-row justify-between gap-32 limited flex-col">
        {partners.map((partner) => {
          return (
            <div className="flex flex-col items-center justify-center">
              <img src={partner.image} className="h-16 mb-6" />
              <a target="_blank" href={partner.link} className="flex items-center w-full justify-end cursor-pointer hover:underline"><span>Learn more about {partner.name}</span><ChevronRightIcon className="ml-2 w-4 h-4" /></a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Partners
