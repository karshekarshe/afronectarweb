import React, {useEffect, useState} from "react";
import '../App.css'
import ImgHeroSh from '../assets/images/hero-sh.png'
import ImgProductHero from '../assets/images/product_hero.png'
import ImgProductHeroSm from '../assets/images/product_hero_sm.png'
import instance from "../utils/Axios";
import * as url from "node:url";

export default function ProductsPage(){
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const fetchProduct = async  () => {
            const response = await instance.get(
                url='products/'
            )
            return response
        }
    }, []);

    return (
        <main>
            <section className=" bg-black relative md:pt-40 pt-[120px] md:pb-48 pb-[340px] product_bg">
                <img className="absolute left-0 top-20" src={ImgHeroSh} alt=""/>
                <div className="container md:px-[20px] px-[0]">
                    <div className="lg:flex grid">
                        <div className="xl:w-5/12 lg:w-6/12 w-[100%] relative z-10 md:px-[0px] px-[20px]">
                            <h1 className="heading-xl md:leading-[78px] leading-[normal]">We Capture <span
                                className="text-green">Coffee</span><br className="lg:block hidden"/>
                                At Its <span className="text-green">Brightest.</span></h1>

                            <p className="text-[#C5C5C5] pt-5 pb-7 pr-3 md:block hidden">Lorem ipsum dolor sit amet
                                consectetur. Nisl
                                tincidunt<br className="lg:block hidden"/>
                                venenatis sit mauris nibh venenatis. Sit adipiscing tempus arcu<br
                                    className="lg:block hidden"/>
                                sollicitudin ipsum urna
                                elementum rhoncus. Integer commodo<br className="lg:block hidden"/> adipiscing
                                sollicitudin massa
                                risus quis commodo. Dictum
                                sed.</p>
                            <p className="text-[#C5C5C5] pt-5 pb-7 pr-3 md:hidden block">Want to get in touch? We'd love
                                to hear from you.<br/> Here's how you can reach us.</p>

                            <a href="#" className="btn md:flex hidden">Explore More</a>

                        </div>
                        <div className="xl:w-7/12 lg:w-6/12 w-[100%]">
                            <img className="md:block hidden absolute top-0 right-0 h-full w-[100%] object-cover"
                                 src={ImgProductHero} alt=""/>
                            <img className="md:hidden block absolute top-0 right-0 h-full w-[100%] object-cover"
                                 src={ImgProductHeroSm} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}