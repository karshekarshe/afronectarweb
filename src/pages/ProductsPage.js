import React, {useEffect, useState} from "react";
import '../App.css'
import instance from "../utils/Axios";
import ImgHeroSh from "../assets/images/hero-sh.png";
import ImgProductHero from "../assets/images/product_hero.png";
import ImgProductHeroSm from "../assets/images/product_hero_sm.png";

export default function ProductsPage(){
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProduct = async  () => {
            const response = await instance.get('api/products/')
            return response.data
        }
        fetchProduct().then((data) => setProduct(data))
    }, []);

    return (
        <main>
            <section className=" bg-black relative md:pt-40 pt-[120px] md:pb-48 pb-[340px] product_bg">
                <img className="absolute left-0 top-20" src={ImgHeroSh} alt=""/>
                <div className="container mx-auto md:px-[20px] px-[0]">
                    <div className="lg:flex grid">
                        <div className="xl:w-5/12 lg:w-6/12 w-[100%] relative z-10 md:px-[0px] px-[20px]">
                            <h1 className="text-xl md:text-3xl lg:text-4xl text-white font-bold md:leading-[78px] leading-[90px]gh capitalize">Nous capturons <span
                                className="text-green-700">le café </span><br className="lg:block hidden"/>
                                dans toute <span className="text-green-700"> sa splendeur.</span></h1>

                            <p className="text-[#C5C5C5] pt-5 pb-7 pr-3">{product.description}</p>

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