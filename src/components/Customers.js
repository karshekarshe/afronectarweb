import '../App.css'
import React from "react";
import ImgCustomer1 from '../assets/images/1.png'
import ImgCustomer2 from '../assets/images/2.png'
import ImgCustomer3 from '../assets/images/3.png'
import ImgCustomer4 from '../assets/images/4.png'
import ImgCustomer5 from '../assets/images/5.png'
import ImgCustomer6 from '../assets/images/6.png'

export default function Customers(){
    return (
        <div className="bg-white">
            <div className="container mx-auto py-20 space-y-2">
            <div className="space-y-4 px-4">
                <h2 className="text-2xl md:text-3xl font-semibold uppercase">Nos fidèle clients</h2>
                <p className="font-light text-base md:text-xl w-full md:w-1/2 text-justify leading-relaxed">Nous travaillons en partenariat avec les cafés locaux, et ils apprécient énormément nos variétés de café Sidamo.</p>
            </div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 py-2 px-4">
                    <img
                        className="max-w-[90px] md:max-w-[120px] h-auto shadow-md shadow-amber-100 bg-amber-50 rounded-2xl px-2 py-2"
                        src={ImgCustomer1} alt="customer image 1"/>
                    <img
                        className="max-w-[90px] md:max-w-[120px] h-auto shadow-md shadow-amber-100 bg-amber-50 rounded-2xl px-2 py-2"
                        src={ImgCustomer2} alt="customer image 2"/>
                    <img
                        className="max-w-[90px] md:max-w-[120px] h-auto shadow-md shadow-amber-100 bg-amber-50 rounded-2xl px-2 py-2"
                        src={ImgCustomer3} alt="customer image 3"/>
                    <img
                        className="max-w-[90px] md:max-w-[120px] h-auto shadow-md shadow-amber-100 bg-amber-50 rounded-2xl px-2 py-2"
                        src={ImgCustomer4} alt="customer image 4"/>
                    <img
                        className="max-w-[90px] md:max-w-[120px] h-auto shadow-md shadow-amber-100 bg-amber-50 rounded-2xl px-2 py-2"
                        src={ImgCustomer5} alt="customer image 5"/>
                    <img className="max-w-[90px] md:max-w-[120px] h-auto shadow-md shadow-amber-100 bg-amber-50 rounded-2xl px-2 py-2"
                        src={ImgCustomer6} alt="customer image 6"/>


                </div>
            </div>
        </div>
    )
}