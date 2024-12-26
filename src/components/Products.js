import '../App.css'
import React, {useEffect, useState} from "react";
import {VariantService} from '../services/VariantService'
import SidamoExpressoBeans from '../assets/images/sidamo-expresso-coffee-beans.png'

export default function Product(){
    const [products, setProducts] = useState(null)

    useEffect(() => {
        VariantService
            .fetchAllVariants()
            .then((data) => {
              if(data){
                  setProducts(data)
              }
              console.log(data)
        })
    }, []);
    return (
        <div className="container mx-auto py-20 space-y-20">
            <h2 className="text-2xl md:text-3xl font-semibold uppercase text-center">nos selection de café</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 gap-5">
                {products && products.map((product) => {
                    return (
                        <div className="product_item relative grid gap-2 py-2 justify-center text-center transition-[0.5s] hover:bg-amber-100 bg-amber-50">
                            <div className="flex flex-row items-center justify-between py-2 px-2 w-full gap-2">
                                <span
                                    className="inline-flex items-center gap-2 bg-orange-100 text-orange-500 font-semibold px-2 py-2 rounded-2xl text-xs md:text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                    </svg>
                                        4.8
                                </span>
                                <button
                                    className="inline-flex items-center px-2 py-2 text-xs md:text-sm  bg-white rounded-full gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"/>
                                    </svg>
                                    in stock {product.quantity}
                                </button>
                            </div>
                            <img
                                src={product.img}
                                className="mx-auto max-w-[150px] md:max-w-[180px] h-auto"
                                alt="product_img"
                            />
                            <div className="space-y-2">
                                <p className="md:pb-[10px] pb-[4px] md:text-[16px] text-[10px] text-[#8C8F97] md:leading-[15.498px] leading-[9.058px] font-medium">
                                    Éthiopie
                                </p>
                                <h3 className="md:pb-[10px] text-left px-2 pb-[4px] capitalize text-[#13131A] text-sm  md:text-base lg:text-lg md:leading-relaxed leading-normal font-semibold">
                                    {product.title}
                                </h3>
                                <h4 className="md:text-base text-left px-2 text-sm text-green-700 leading-[normal] font-bold">
                                    CHF {product.price}
                                </h4>
                                <div className="flex flex-row items-center justify-between gap-2 w-full">
                                    <button
                                        className="group flex flex-row items-center justify-center gap-2 mx-auto text-sm md:text-base py-2 px-2 border border-gray-900 text-green-700 hover:border-0 hover:bg-green-700 hover:text-white transition-all ease-out duration-300 w-[70%] rounded-md  font-semibold">
                                        <CaddyIcon className="fill-green-700 w-6 group-hover:fill-white"/>
                                        Ajouter
                                    </button>
                                    <a
                                        href={`http://localhost:3000/products/${product.slug}`}
                                        className="mx-auto text-sm md:text-base py-2 px-2 text-white bg-green-700 hover:bg-green-600 w-[70%] rounded-md  font-semibold">Acheter
                                    </a>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>

    )
}

export function CaddyIcon({className}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className={className}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
        </svg>

    )
}