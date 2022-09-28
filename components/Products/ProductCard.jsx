import { CheckCircleIcon } from '@heroicons/react/24/solid'

const ProductCard = ({name, icon, arrayOfThings, link, pairs, isMore}) => {
    return (
        <div className="relative flex flex-col   p-8 pb-4 rounded-xl z-10 gradient-border bg-primary text-white">
            {isMore && (
                <div className='absolute w-full h-full top-0 left-0 rounded-xl bg-white bg-opacity-10 font-semibold  text-2xl backdrop-blur-xl flex items-center justify-center'>More to come...</div>
            )}
            <div className="flex border-b border-opacity-30 border-white pb-8">
                <img src={icon} className="-ml-4 w-16 h-16" />
                <div className="ml-4">
                    <h1 className="font-semibold text-2xl ">{name}</h1>
                    
                </div>
            </div>
            <div className="flex flex-col mt-4">
                {arrayOfThings.map(thing => {
                    return (
                        <div className="flex justify-start py-5"> 
                            <CheckCircleIcon className='w-6 mr-4'/>
                            <span>{thing}</span>
                        </div>
                    )
                })}
                
            </div>
            <div className='w-full flex items-end justify-center'>
                <span className='bg-gradient-to-r from-knox-purple to-knox-orange w-48 duration-200 hover:scale-105 py-2 mt-4 text-center cursor-pointer uppercase rounded-xl'>Coming Soon</span>
            </div>
        </div>
    );
}

export default ProductCard;