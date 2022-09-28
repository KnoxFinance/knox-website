import { useContext } from "react";
import { ContentContext } from "../../pages";
import ProductCard from "./ProductCard";

const Products = () => {
    const content = useContext(ContentContext)
    const products = [
       
        {
            icon: '/images/ethereum.svg',
            name: content[0].productTwoTitle || 'Covered Calls',
            arrayOfThings: [
                content[0].productTwoKeys || 'Earn up to 19% APY',
                content[1].productTwoKeys || 'Stack ETH in any market',
                content[2].productTwoKeys || 'Institutional Grade Strategies',
                content[3].productTwoKeys || 'Algorithmic Strike selection',
                content[4].productTwoKeys || 'Anytime withdrawal',
                
            ],
            link: 'https://www.prima.finance/',
            pairs: 132

        },
        {
            icon: '/images/ethereum.svg',
            name: content[0].productOneTitle || 'Put Selling',
            arrayOfThings: [
                content[0].productOneKeys || 'Earn up to 20% APY',
                content[1].productOneKeys || 'Collected weekly',
                content[2].productOneKeys ||'Cash Settled',
                content[3].productOneKeys ||'Algorithmic Strike selection',
                content[4].productOneKeys ||'Anytime withdrawal'
                
            ],
            link: 'https://www.prima.finance/',
            pairs: 132

        },
        {
            icon: '/images/ethereum.svg',
            name: 'Put Selling',
            arrayOfThings: [
                'Delta Optimized Strategies',
                'Withdraw Funds',
                'Collect Fees',
                'Secured On Prima',
                'Anytime withdrawal',
                
            ],
            link: 'https://www.prima.finance/',
            pairs: 132,
            isMore: true
        },
    ]
    return (
        <div className="flex flex-col mb-24 items-center justify-center " id="vaults">
            <div className="limited">
                <h1 className="text-center  text-4xl xl:text-6xl font-semibold my-24">{content[0].productsTitle || 'Raves are Knox Finances native product'}</h1>
                <div className="flex flex-col justify-between xl:flex-row px-4 xl:px-0 gap-12 xl:gap-24">
                    {products.map((product, index)=> {
                        const delay = 100 * (index + 1)
                        return (
                            <div data-aos="zoom-in" className="xl:min-w-[350px]" data-aos-delay={delay}> 
                                <ProductCard {...product} />
                            </div>
                        )
                    })}
                </div>
                <h2 className="text-center italic text-opacity-70 text-white mt-8">Vaults Hosted by Premia</h2>
            </div>
        </div>
    );
}

export default Products;