import React, { useEffect, useState } from "react";
import {ProductService} from '../services/ProductService'
import "../App.css";
import BgCoffeeCupArabica from '../assets/images/bg-coffee-variety-arabica.jpg'
import BgCoffeeCupRobusta from '../assets/images/bg-coffee-variety-robusta.jpg'
import ImgSocial1 from '../assets/images/social-1.jpg'
import ImgSocial2 from '../assets/images/social-2.jpg'
import ImgSocial3 from '../assets/images/social-3.jpg'
import ImgSocial4 from '../assets/images/social-4.jpg'
import ImgSocial5 from '../assets/images/social-5.jpg'
import ImgSocial6 from '../assets/images/social-6.jpg'
import ProductFilter from "../components/ProductFilter";
import ProductsGrid from "../components/ProductsGrid";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProductsPage() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
      ProductService
          .fetchLatestProduct()
          .then( (result) => {
            if (result.success){
              setProduct(result.data)
            }
      }
      )
  }, []);

  const getShortText = (text, maxLength) => {
    if (!text || typeof text !== "string") {
      return "";
    }
    return text.length > 100 ? text.substring(0, maxLength) + "..." : text;
  };

  return (
      <>
        <Header />
        <main>
            <section className="w-full flex flex-row  gap-0">
                <a href="" className="relative text-center max-h-[680px] w-1/2">
                    <picture className="overflow-hidden block h-full">
                        <img className="w-full h-full object-fill object-top hover:scale-110 ease-in duration-200"
                             src={BgCoffeeCupArabica} alt="coffee cupe arabica type"/>
                    </picture>
                    <h2 className="absolute bottom-[10%] text-white left-0 right-0  lg:text-[32px] md:text-[22px] text-[18px] font-black leading-[normal]">
                        Variété Arabica
                    </h2>
                </a>
                <a href="" className="relative text-center max-h-[680px] w-1/2">
                    <picture className="overflow-hidden block h-full">
                        <img className="w-full h-full object-fill hover:scale-110 ease-in duration-200"
                             src={BgCoffeeCupRobusta} alt="coffee cupe arabica type"/>
                    </picture>
                    <h2 className="absolute bottom-[10%] text-white left-0 right-0   lg:text-[32px] md:text-[22px] text-[18px]  font-black leading-[normal]">
                        Variété Robusta
                    </h2>
                </a>
            </section>
            <hr/>
            <ProductFilter setProduct={setProduct}/>
            <ProductsGrid product={product}/>
            <hr/>
            <section className="container mx-auto py-20">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col col-span-1 bg-amber-100 border  px-4 py-2 h-[170px]  md:h-[250px] w-full justify-between items-start">
                        <div className="space-y-2">
                            <span className="text-gray-400 font-medium">[01]</span>
                            <h4 className="text-xl md:text-3xl lg:text-4xl font-medium">livraison gratuite</h4>
                        </div>
                        <div className="flex flex-row gap-2 justify-between items-end">
                            <span className="text-2xl md:text-4xl lg:text-6xl font-medium text-green-700">2-4</span>
                            <span
                                className="text-sm md:text-base lg:text-xl font-light text-gray-700">jours de livraison</span>
                        </div>
                    </div>
                    <div className="flex flex-col col-span-1 bg-amber-50 border px-4 py-2 h-[170px] md:h-[250px] w-full justify-between items-start">
                        <div className="space-y-2">
                            <span className="text-gray-400 font-medium">[02]</span>
                            <h4 className="text-xl md:text-3xl lg:text-4xl font-medium">retours gratuits</h4>
                        </div>
                        <div className="flex flex-row gap-2 justify-between items-end">
                            <span className="text-2xl md:text-4xl lg:text-6xl font-medium text-green-700">4.8</span>
                            <span
                                className="text-sm md:text-base lg:text-xl font-light text-gray-700">basé sur 100 avis</span>
                        </div>
                    </div>
                    <div className="flex flex-col col-span-2 bg-amber-50 border px-4 py-2 h-[170px] md:h-[250px] w-full justify-between items-start">
                        <div className="space-y-2">
                            <span className="text-gray-400 font-medium">[03]</span>
                            <h4 className="text-xl md:text-3xl lg:text-4xl font-medium">notre promesse d'égalisation des prix</h4>
                        </div>
                        <div className="flex flex-row gap-2 justify-between items-end">
                            <span className="text-2xl md:text-4xl lg:text-6xl font-medium text-green-700">15</span>
                            <span
                                className="text-sm md:text-base lg:text-xl font-light text-gray-700">jours pour retourner le product (*conditions)</span>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
            <section className="container mx-auto py-20 space-y-8 px-4">
                <div className="space-y-6">
                    <h2 className="md:text-[32px] text-[22px] text-[#13131A] font-semibold leading-[normal]">
                        <span className="text-gray-500"> Regardez comment ils </span>consomment pour avoir une idée
                    </h2>
                    <span className="text-green-700 mt-10 font-black text-base md:text-xl lg:text-2xl">@buncoffee.store</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full"
                                 src={ImgSocial1} alt=""/>
                        </div>
                        <div>
                        <img className="h-auto max-w-full"
                                 src={ImgSocial2} alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full"
                                 src={ImgSocial3} alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full"
                                 src={ImgSocial4} alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full"
                                 src={ImgSocial5} alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full"
                                 src={ImgSocial6} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
      </>
  );
}
