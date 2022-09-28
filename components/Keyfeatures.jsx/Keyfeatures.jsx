import { useContext } from "react"
import { ContentContext } from "../../pages"

const Keyfeatures = () => {
  const [content] = useContext(ContentContext)
  const features = [
    {
      title: content.keyOneTitle || 'Better Pricing',
      description: content.keyOneDesc || `Knox has improved trade execution of the dutch auctions to execute strategies that give users the best possible yields.`,
      logo: '/images/wallet.png',
    },
    {
      title: content.keyTwoTitle ||'Instant Withdrawal',
      description: content.keyTwoDesc || `Control your portfolio risk at any moment. Users can exit the weekly strategy at any point during the week. Making it easier to manage market volatility.`,
      logo: '/images/shield.png',
    },
    {
      title: content.keyThreeTitle || 'Capital Efficient',
      description:
      content.keyThreeDesc || 
        'Risk-Adjusted Vaults are composable with other DeFi legos. Unlock the ability to create a leveraged position with vault tokens.',
      logo: '/images/money.png',
    },
  ]
  return (
    <div className="bg-black mt-24 text-white py-12 xl:py-24 flex justify-center items-center">
      <div className="max-w-6xl flex items-center justify-between xl:gap-0 gap-12 flex-col xl:flex-row">
        {features.map((feature) => {
          return (
            <div key={feature.title} className="flex flex-col first:mt-0 first:mx-0 last:mx-0 mx-8  xl:max-w-[33%] xl:min-w-[33%] text-center xl:text-left relative xl:h-48 ">
              <div className="xl:absolute w-full xl:-top-40  flex justify-center">
                <img className=" w-32 h-32" src={feature.logo} />
              </div>
              <h1 className="text-3xl text-center px-4 mb-8 font-semibold">{feature.title}</h1>
              <p className="px-4 text-center whitespace-pre-wrap">{feature.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Keyfeatures
