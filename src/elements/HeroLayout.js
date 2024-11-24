import React from "react";
import '../App.css'

export  function HeroLayoutCentered({children}){
    return (
        <div className="hero h-[400px]">
            <div className="hero-content text-center">
                <div className="max-w-2xl">
                    {children}
                </div>
            </div>
        </div>
    )
}

export  function HeroLayoutWithFigure({children, className}){

    return (
        <div className={`hero bg-white min-h-screen ${className} `}>
            <div className="hero-content  flex-col lg:flex-row">
                {children}
            </div>
        </div>
    )
}

export  function HeroLayoutWithOverlay({children, backgroundImg}){

    return (
        <div className="hero min-h-screen"
            style={{
                backgroundImage: `${backgroundImg}`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    {children}
                </div>
            </div>
        </div>
    )
}