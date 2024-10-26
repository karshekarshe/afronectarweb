import React, { useEffect, useState } from "react";
import "../App.css";
import instance from "../utils/Axios";
import ImgHeroSh from "../assets/images/hero-sh.png";
import ImgProductHero from "../assets/images/product_hero.png";
import ImgProductHeroSm from "../assets/images/product_hero_sm.png";
import ProductFilter from "../components/ProductFilter";
import ProductsGrid from "../components/ProductsGrid";

export default function ProductsPage() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await instance.get("api/products/");
        return response.data;
      } catch (error) {
        return error;
      }
    };
    fetchProduct().then((value) => setProduct(value));
  }, []);

  const getShortText = (text, maxLength) => {
    if (!text || typeof text !== "string") {
      return "";
    }
    return text.length > 100 ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <main>
      <section className=" bg-black relative md:pt-40 pt-[120px] md:pb-48 pb-[340px]">
        <img className="absolute left-0 top-20" src={ImgHeroSh} alt="" />
        <div className="container mx-auto md:px-[20px] px-[0]">
          <div className="lg:flex grid">
            <div className="xl:w-5/12 lg:w-7/12 w-[100%] relative z-10 md:px-[0px] px-[20px]">
              <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold md:leading-[78px] leading-[90px]">
                Découvre toute la
                <span className="text-green-700"> splendeur </span>
                du
                <span className="text-green-700"> café.</span>
              </h1>

              <p className="text-[#C5C5C5] pt-5 pb-7 pr-3">
                {getShortText(product.description, 255)}
              </p>

              <div className="grid grid-cols-4 w-2/3">
                <span className="col-span-4 text-white uppercase px-1 py-1 bg-[#F26DCF] text-center">
                  Origine éthiopienne
                </span>
                <span className="col-span-2 text-white uppercase px-1 py-1 bg-[#7B44F2] text-center">
                  organique
                </span>
                <span className="col-span-2 text-white uppercase px-1 py-1 bg-[#CAF272] text-center">
                  région sidamo
                </span>
                <span className="col-span-2 text-gray-500 uppercase px-1 py-1 bg-[#F2F2DC] text-center">
                  100% arabica
                </span>
                <span className="col-span-2 text-white uppercase px-1 py-1 bg-[#D97C0B] text-center">
                  pour l'espresso
                </span>
                <span className="col-span-2 text-white uppercase px-1 py-1 bg-[#F2675C] text-center">
                  pour mocha
                </span>
                <span className="col-span-2 text-white uppercase px-1 py-1 bg-[#0C84EB] text-center">
                  pour le café turc
                </span>
              </div>
            </div>
            <div className="xl:w-7/12 lg:w-6/12 w-[100%]">
              <img
                className="md:block hidden absolute top-0 right-0 h-full w-[100%] object-cover"
                src={ImgProductHero}
                alt=""
              />
              <img
                className="md:hidden block absolute top-0 right-0 h-full w-[100%] object-cover"
                src={ImgProductHeroSm}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <ProductFilter setProduct={setProduct()} />
      <ProductsGrid product={product} />
    </main>
  );
}
