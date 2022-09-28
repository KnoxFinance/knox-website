import { useContext } from "react";
import { ContentContext } from "../../pages";

const Description = () => {
    const [content] = useContext(ContentContext)
    return (
        <div className=" flex items-center lg:flex-row flex-col  relative justify-center ">
             <div data-aos="fade-in" data-aos-delay="0" className="xl:hidden absolute lg:-top-24 md:-top-64 -top-72  bottom-0 flex flex-col  items-center justify-center right-0 w-full h-48 bg-gradient-to-l from-knox-yellow/30 via-knox-purple/30 to-knox-purple/30 ">
             <h2 className="text-2xl text-center">Earn Up To</h2>
             <h1 className="text-[55px] flex items-center leading-[1] mt-4 font-semibold">{content.descApy || '20.4'}% <span className="text-2xl ml-2">(APY)</span></h1>
               
            </div>
            
            <div className="flex  limited">
           
                <div className="xl:w-1/2 lg:mt-48">
                    <h1 data-aos="fade-right" className="xl:text-6xl text-5xl xl:text-left text-center font-semibold mb-8">{content.descTitle || 'Grow Your Assets'}
                    </h1>
                    <p data-aos="fade-right " className="text-center xl:text-left xl:px-0 px-12" data-aos-delay={400}>
                        {content.descParagraph || 'At Knox, we build structured products anchored around providing safer, more predictable yields for our users. Each strategy utilizes derivatives products like options to achieve the predicted returns. Users deposit assets into the vault and the strategies continuously deploy capital on a weekly basis.'} </p>
                </div>
            </div>
            <div data-aos="fade-in" data-aos-delay="300" className="xl:flex absolute bottom-0 hidden flex-col  items-center justify-center right-0 w-[640px] h-48 bg-gradient-to-l from-knox-yellow/30 via-knox-purple/30 to-knox-purple/30 rounded-l-full">
            <h2 className="text-2xl text-center">Earn Up To</h2>
                <h1 className="text-[55px] flex items-center leading-[1] mt-4 font-semibold">{content.descApy || '20.4'}% <span className="text-2xl ml-2">(APY)</span></h1>
                
            </div>
       
        </div>
    );
}

export default Description;