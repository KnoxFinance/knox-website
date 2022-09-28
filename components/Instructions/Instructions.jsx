import { useContext } from 'react'
import { ContentContext } from '../../pages'

const Instructions = () => {
  const [content] = useContext(ContentContext)
  const instructions = [
    {
      logo: '/images/lock.png',
      title: content.instructionOneTitle || 'Deposit',
      desc:
        content.instructionOneDesc ||
        'The vault receives deposits and invests capital is used as collateral on Premia to execute a weekly options strategy.',
    },
    {
      logo: '/images/lock.png',
      title: content.instructionTwoTitle || 'Calculate',
      desc:
        content.instructionTwoDesc ||
        'Every Friday, the vault determines strike selection and the American options are sold via a dutch auction.',
    },
    {
      logo: '/images/lock.png',
      title: content.instructionThreeTitle || 'Earn',
      desc:
        content.instructionThreeDesc ||
        'The deposits are used to mint options which are sold via a dutch auction. The fees collected from the dutch auction represent the weekly yield.',
    },
    {
      logo: '/images/lock.png',
      title: content.instructionFourTitle || 'Repeat',
      desc:
        content.instructionFourDesc ||
        `When the option expires the yield is sent back to the vault and distributed to users. The weekly strategy will start again and put depositors' capital to work continuously earning juicy yields.`,
    },
  ]
  return (
    <div className="xl:min-h-[44rem] min-h-[88rem] pt-12 w-full flex flex-col items-center  relative">
      <div className="limited flex z-10 items-center justify-center ">
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-y-24 justify-between px-12 xl:px-0">
          {instructions.map((instruction, index) => {
            const delay = 100 * (index + 1)
            const padding = index % 2 === 0 ? 'xl:pr-48' : 'xl:pl-48 '
            return (
              <div
                className={padding}
                data-aos="fade-in"
                data-aos-delay={delay}
              >
                <div className="flex items-center mb-4">
                  <h2 className="text-2xl font-semibold">
                    {instruction.title}
                  </h2>
                  <div className="h-[1px] ml-8 mr-8 w-full opacity-40 border-dashed bg-white">
                    {' '}
                  </div>
                </div>
                <p>{instruction.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="absolute top-0 left-0 z-[1] w-full h-full opacity-5 bg-[url('/images/bg-dancefloor.png')] bg-cover bg-no-repeat"></div>
    </div>
  )
}

export default Instructions
