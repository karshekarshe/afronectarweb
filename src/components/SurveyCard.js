import '../App.css'
import React from "react";
import {HeroLayoutWithFigure} from "../elements/HeroLayout";
import ImgPubliciter from '../assets/images/coffee-survey-4.jpg'

export default function SurveyCard(){
    return (
        <div className="container mx-auto py-20">
            <div className="card lg:card-side bg-base-100 shadow-2xl">
                <img
                    className="rounded-none w-full h-[450px] object-cover object-center shadow-2xl accent-amber-500 bg-amber-100"
                    src={ImgPubliciter} alt="coffee beans roasting"
                />

                <div className="flex flex-col justify-center items-center gap-8 px-2 py-2 bg-amber-50">
                    <h2 className="card-title">Donnez votre évaluation sur café
                        BUN&trade;</h2>
                    <p className="text-base lg:text-xl text-center font-medium  text-amber-600">Découvrez le café
                        éthiopien
                        parfait pour votre palais et votre machine! Grâce à notre quiz rapide et personnalisé.</p>
                    <button className="btn btn-lg btn-success text-white">
                        Participer à l'enquête
                    </button>

                </div>
            </div>
        </div>
    )
}