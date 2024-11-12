import '../App.css'
import React from "react";
import ImgPubliciter from '../assets/images/coffee-survey-4.jpg'

export default function SurveyCard(){
    return (
        <div className="py-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0  shadow-2xl shadow-amber-50">
                    <img className="rounded-none w-full h-[450px] object-cover object-center shadow-2xl accent-amber-500 bg-amber-100"
                             src={ImgPubliciter} alt="coffee beans roasting"/>

                    <div className="flex flex-col items-center justify-center gap-8 bg-amber-50 px-4 py-4 rounded-none">
                        <p className="text-sm font-extralight px-2 py-2 bg-amber-100 rounded-md uppercase">sondage</p>
                            <h2 className="text-xl md:text-2xl font-bold uppercase">Donnez votre évaluation sur café
                                BUN&trade;</h2>
                            <p className="text-base lg:text-xl font-medium text-center  text-amber-600">Découvrez le café éthiopien parfait pour votre palais et votre machine! Grâce à notre quiz rapide et personnalisé.</p>
                            <button className="px-2 py-2  font-semibold text-lg bg-green-700 text-white rounded-md w-full md:w-1/2">
                            Participer à l'enquête
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}