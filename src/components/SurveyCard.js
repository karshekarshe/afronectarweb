import '../App.css'
import React from "react";
import ImgPubliciter from '../assets/images/publiciter.png'

export default function SurveyCard(){
    return (
        <div className="py-10 bg-blue-50">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="">
                        <img className="rounded-2xl w-full md:max-w-md lg:max-w-lg xl:max-w-lg h-auto mx-auto  shadow-2xl shadow-amber-50"
                             src={ImgPubliciter} alt="coffee beans roasting"/>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-5 bg-gray-50 px-6 py-4 rounded-none">
                    <p className="text-sm font-light px-2 py-2 bg-gray-50 rounded-md">Faites notre test et trouvez votre saveur</p>
                        <h2 className="text-xl md:text-2xl font-bold uppercase">Donnez votre évaluation sur café
                            BUN&trade;</h2>
                        <p className="text-base lg:text-xl font-medium  text-amber-600">Découvrez le café
                            idéal pour vous ou pour votre machine à la maison en quelques clics !</p>
                        <button className="px-2 py-2  font-semibold text-lg bg-green-700 text-white rounded-md w-full md:w-1/2">
                            Participer à l'enquête
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}