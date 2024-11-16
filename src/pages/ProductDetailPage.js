import React, {useEffect, useState} from "react";
import '../App.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useParams} from "react-router-dom";
import {VariantService} from "../services/VariantService";
import SvgFiveStarIcon from '../assets/svgs/five-star.svg'
import SVgHeartIcon from '../assets/svgs/heart.svg'
import SvgCoffeeBeansWashed from '../assets/svgs/noun-coffee-bean-washed.svg'
import SvgMountainIcon from '../assets/svgs/noun-mountain.svg'
import SvgCoffeeBeansIcon from '../assets/svgs/noun-coffee-beans.svg'


export default function ProductDetailPage(){
    const [variant,setVariant] = useState({})
    const parms = useParams()

    useEffect(() => {
       VariantService
           .fetchVarientBySlug(parms.slug)
           .then( result  => {
               if (result.success){
                   setVariant(result.data)
               }
           })
    }, []);

    return (
        <>
            <Header />
            <main className="container mx-auto py-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <div className="flex gap-x-[15px] sm:gap-x-[30px] ">
                            <div className="w-[18.9%] sm:w-[109px] md:w-[137px] lg:w-[99px] xl:w-[180px] shrink-0">
                                <a href="#slide1" className="block mb-[13px] sm:mb-[26px]">
                                    <img className="w-full" src={variant.img} alt=""/>
                                </a>
                                <a href="#slide2" className="block mb-[13px] sm:mb-[26px]">
                                    <img className="w-full" src={variant.img} alt=""/>
                                </a>
                            </div>
                            <div className="max-w-sm">
                                <img className="w-full" src={variant.img} alt=""/>
                            </div>

                        </div>

                    </div>
                    <div className="pt-6 lg:pt-0">
                        <div className="flex flex-col gap-2">
                        <div>
                                <h3 className="text-[30px] capitalize font-medium">{variant.title}</h3>
                                <p className="text-xs pt-1 sm:pt-3">Ethiopia</p>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <h3 className="text-2xl text-green-900 font-medium">CHF {variant.price}</h3>

                                <a href="#"
                                   className="inline-flex border border-black px-4 py-2 rounded-md gap-x-[10px] text-sm md:text-base font-medium text-green-700 hover:opacity-80">
                                    <img className="hover:fill-green-700" src={SVgHeartIcon} alt=""/>
                                    Ajouter aux favoris
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-5 pt-3 sm:pt-6 pb-3 sm:pb-7">
                            <img className="w-[105px] sm:w-[140px]" src={SvgFiveStarIcon} alt="five stars icon"/>
                            <span className="text-sm sm:text-lg text-[#8C8F97]">(9 Commentaires)</span>
                        </div>

                        <p className="font-light text-sm md:text-base text-justify leading-[1.3] sm:leading-[1.62]">{variant.description}</p>
                        <div className="flex flex-row items-center justify-between gap-2">

                        </div>
                        <div className="flex flex-row items-center justify-between gap-2 pt-6 sm:pt-[50px] pb-[25px]">

                            <div className="flex items-center flex-grow  justify-center py-4 px-4 border border-[#D1D2D5] rounded sm:rounded-[6px]">
                                <button type="button" className="text-[#13131A]" data-hs-input-number-decrement="">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg"
                                         width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                    </svg>
                                </button>
                                <input className="w-14 sm:w-20 border-none outline-none text-center text-[#13131A]"
                                       type="text" value="1" data-hs-input-number-input="" readOnly=""/>

                                <button type="button" className="text-[#13131A]" data-hs-input-number-increment="">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg"
                                         width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                    </svg>
                                </button>
                            </div>

                            <a href="#"
                               className="inline-flex items-center justify-center flex-grow  px-4 py-3  gap-2  bg-white text-green-700 border border-[#D1D2D5]  rounded sm:rounded-[6px] text-[14px] sm:text-lg  font-medium hover:bg-green-700 hover:text-white transition-all duration-500 ease-out">
                                <CaddyIcon className="w-6" />
                                Ajouter au panier
                            </a>
                            <a href="#"
                               className="inline-flex items-center justify-center flex-grow  px-4 py-3 bg-green-700 text-white  gap-2  border border-[#D1D2D5]  rounded sm:rounded-[6px] text-[14px] sm:text-lg  font-medium hover:bg-green-700 hover:text-white transition-all duration-500 ease-out">
                                <BankCartIcon className="w-6" />
                                Acheter
                            </a>
                        </div>

                    </div>
                </div>
                <section className="px-16 py-20 space-y-6 rounded-md">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium capitalize">What we are drinking ?</h2>
                    <p className="text-xl font-light leading-relaxed">Discover the essence of our coffee: an artisanal product, carefully selected and roasted to offer a unique experience in the cup. At Bun, we believe that each sip must capture the authenticity of the Ethiopian lands and Swiss know-how, for an exceptional drink.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 place-self-center gap-16">
                        <div className="flex flex-col items-center justify-between gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1}
                                 stroke="currentColor" className="w-20">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"/>
                            </svg>

                            <div className="flex flex-col gap-2 justify-between items-center">
                                <span className="font-bold text-xl">Origin</span>
                                <span className="font-light">Ethiopia</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-between gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1}
                                 stroke="currentColor" className="w-20">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                            </svg>


                            <div className="flex flex-col gap-2 justify-between items-center text-center">
                                <span className="font-bold text-xl">Producer</span>
                                <span className="font-light">Sidamo Union</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-between gap-4">
                            <img className="w-20 stroke-0" src={SvgCoffeeBeansIcon} alt="coffee process washed icon"/>

                            <div className="flex flex-col gap-2 text-center">
                                <span className="font-bold text-xl">Variety</span>
                                <span className="font-light">Sidamo</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-between gap-4">

                            <img className="w-20 stroke-0" src={SvgCoffeeBeansWashed} alt="coffee process washed icon"/>
                            <div className="flex flex-col gap-2 text-center">
                                <span className="font-bold text-xl">Process</span>
                                <span className="font-light">Washed</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-between gap-4">

                            <img className="w-20 stroke-0" src={SvgMountainIcon} alt="coffee process washed icon"/>
                            <div className="flex flex-col gap-2 text-center">
                                <span className="font-bold text-xl">Altitude</span>
                                <span className="font-light">1750-2300</span>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="text-center  px-16 py-20  bg-orange-50 space-y-20 rounded-md">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium capitalize">comment preparer le
                        bon {variant.tag} ?</h2>
                    <iframe
                        className="w-full rounded-md h-[300px] md:h-[400px]  lg:h-[600px]"
                        src="https://www.youtube.com/embed/jhlCWuK0V8s"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    >
                    </iframe>
                </section>
            </main>
            <Footer/>
        </>
    )


}

function CaddyIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             {...props}
        >
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
        </svg>
    )
}

function BankCartIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             {...props}
        >
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"/>
        </svg>

    )
}