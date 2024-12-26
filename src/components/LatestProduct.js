import '../App.css'
import React, {useState} from "react";
import SidamoBundleCoffeeBeans from '../assets/images/sidamo-coffee-bundle-beans.png'


export default function LatestProduct(){
    return (
        <div className="container mx-auto  py-24">
            <div className="flex flex-col space-y-8  mx-auto items-start justify-start   max-w-2xl px-4">
                    <div className="space-y-2">
                        <h2 className="text-2xl md:text-4xl  capitalize leading-10 text-amber-950 font-black text-center">Une expérience riche, venue des hauts plateaux</h2>
                        <span className="text-sm text-amber-950 font-medium uppercase bg-amber-400 px-2 py-1 rounded-r-2xl text-center">origine Éthiopie</span>
                    </div>
                    <p className="text-justify leading-relaxed text-sm md:text-base w-full text-amber-950 font-bold leading-loose">Chez Bun, nous pensons qu'un bon café doit être simple, durable et significatif. Notre approche est ancrée dans l'idée que moins c'est plus : moins de distractions, plus d'attention à la qualité.</p>
                <a  href="http://localhost:3000/products"
                    className="inline-flex gap-2 uppercase justify-center items-center px-3 py-3 font-medium text-xs  md:text-sm lg:text-base  bg-green-700 text-white rounded-md place-self-center hover:scale-105">
                    Découvrez le café sidamo
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}


export function InputNumber({maxQantity}) {
    const [quantity, setQuantity] = useState(1)


    const increment = () => {
        if (quantity < maxQantity) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="relative flex items-center max-w-[10rem]">
            <button
                onClick={() => decrement()}
                type="button"
                className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-9 md:h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M1 1h16"/>
                    </svg>
            </button>
            <input type="text"
                   value={quantity}
                   className="bg-gray-50 border border-gray-300 h-9 md:h-11 text-center text-gray-900 text-sm  block w-full py-1.5 md:py-2.5"
                    required
            />
            <button type="button"
                     onClick={() => increment()}
                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-9 md:h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                    <svg className="w-2 h-2 text-gray-900 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 1v16M1 9h16"/>
                    </svg>
            </button>
        </div>
    )
}