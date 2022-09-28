import React from 'react'
import Description from '../components/Description/Description'
import Hero from '../components/Hero/Hero'
import Instructions from '../components/Instructions/Instructions'
import Integrate from '../components/Integrate/Integrate'
import Keyfeatures from '../components/Keyfeatures.jsx/Keyfeatures'
import Partners from '../components/Partners/Partners'
import Products from '../components/Products/Products'
export const ContentContext = React.createContext([])

const Home = ({ data }) => {
  return (
    <ContentContext.Provider value={data}>
      <div className="flex min-h-screen text-white  w-full flex-col">
        {/* Hero */}
        <Hero />
        <div className=" mb-8 xl:mb-24 xl:mt-0 mt-36">
          <Description />
        </div>
        <Keyfeatures />
        <Products />
        <Instructions />
        <Integrate />
        <Partners />
        {/*  */}
      </div>
    </ContentContext.Provider>
  )
}

export default Home

export async function getStaticProps(context) {
  const res = await fetch(
    'https://api.sheety.co/9e0f45fd7bdfa0c881165b577bf3e912/knoxCms/sheet1',
  ).then((res) => res.json())
  console.log('res', res)

  return {
    props: {
      data: res.sheet1,
    }, // will be passed to the page component as props
  }
}
