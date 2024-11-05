import '../App.css'
import React from "react";
import BgBunAd from '../assets/images/bg-bun-advertisement.png'

export default  function AboutUs(){
    return (
        <div className="bg-white px-2">
            <div className="container mx-auto py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="space-y-4 px-4">
                    <h2 className="text-2xl md:text-3xl font-semibold uppercase">chez BUN&trade; café</h2>
                    <p className="font-light text-base  md:text-xl text-justify leading-relaxed">En tant que fournisseur de café de confiance, nous sélectionnons soigneusement les meilleurs grains, en veillant à ce que chaque torréfaction fasse ressortir des saveurs riches et une grande pureté. Chaque étape de notre processus suit des principes épurés et minimalistes, de l'approvisionnement écologique à l'emballage durable.
                        <br/> <br /> Que vous prépariez votre café à la maison ou que vous dirigiez une entreprise de café, BUN vous offre l'expérience ultime du café sans les extras inutiles. Juste un café propre et magnifiquement préparé qui s'intègre parfaitement à votre style de vie minimaliste.</p>
                </div>
                <img className="rounded-none  w-full h-[85%] object-cover  shadow-2xl shadow-black" src={BgBunAd} alt="product hero"/>
            </div>
        </div>
        </div>
    )
}