const Integrate = () => {
  const integrations = [
    {
      title: 'Github',
      description:
        'Learn how to integrate Knox Vault into your project.',
      link: 'https://github.com/KnoxFinance/',
      logo: '',
    },
    {
      title: 'Contact us',
      description:
        'Get in touch with us if you want more information',
      link: 'https://calendly.com/caesar-15/15min',
      logo: '',
    },
  ]
  return (
    <div className="clipped z-10">
    <div className="bg-primary-dark  -mt-48 z-10 flex flex-col justify-center items-center">
      <div className="w-full flex justify-center">
        <div className="limited ">
          <div className="flex flex-col py-24 items-center">
            <h1 className="xl:text-4xl text-3xl text-center xl:text-left font-semibold">
              Interested in integrating Knox ?
            </h1>
            <div className="flex flex-col xl:flex-row xl:py-24 py-12 gap-12 xl:gap-32 px-12 xl:px-24">
            {integrations.map((integration) => {
              return (
                <div className="bg-white text-primary rounded-xl  px-4 py-3 flex flex-col">
                  <div className="flex items-center mb-4">
                    
                    <h3 className="font-semibold">{integration.title}</h3>
                  </div>
                  <p className="text-sm mb-2">{integration.description}</p>
                  <a href={integration.link} target='_blank' className="text-right hover:underline text-sm  text-primary">Learn More</a>
                </div>
              )
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Integrate
