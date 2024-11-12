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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-0  gap-5">
                {products && products.map((product) => {
                    return (
                        <div id={product.id}
                           className="flex flex-col items-start justify-between gap-2  py-4 bg-amber-50 border border-gray-200 rounded-md w-[360px] mx-auto md:w-[300px] px-2 hover:scale-105 shadow-xs shadow-black">
                            <div className="inline-flex justify-between py-2 px-2 w-full">
                                <span
                                    className="inline-flex gap-2 bg-orange-100 text-orange-500 font-semibold px-2 py-2 rounded-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                    </svg>
                                        4.8
                                </span>
                                <button className="inline-flex px-2 py-2 bg-white rounded-full gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"/>
                                    </svg>
                                    60 en stock
                                </button>
                            </div>

                            <h4 className="text-2xl md:text-xl place-self-center font-[400] capitalize">{product.title}</h4>

                            <img className="max-w-[200px] rounded-2xl md:max-w-[200px]  h-full mx-auto"
                                 src={product.img}
                                 alt="sidmao expresso beans"/>
                            <span className="text-xl md:text-base font-bold text-amber-700  px-2 place-self-center">{product.price} CHF / 0.25 kg</span>
                            <button className="mx-auto text-sm md:text-base py-2 px-2 text-white bg-amber-900 w-[70%] rounded-md hover:bg-amber-950 font-semibold">Acheter</button>
                        </div> )
                })}
            </div>
        </div>
    )
}