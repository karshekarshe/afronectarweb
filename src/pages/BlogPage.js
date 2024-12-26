import '../App.css'
import React, {useEffect, useState} from "react";
import useFetch from "react-fetch-hook";
import Header from "../components/Header";
import {HeroLayoutCentered} from "../elements/HeroLayout";
import {Endpoints} from '../utils/Constants'
import {getPassedDays} from "../utils/Utility.py";
import Footer from "../components/Footer";




export default function BlogPage(){
    const endpoint = Endpoints.getLatestArticlesEnpoint()
    const {isLoading, data , error} = useFetch(endpoint)
    const [headerBackgroundColour, setHeaderBackgroundColour] = useState('')
    const backgroundColours = ['bg-[#264653]', 'bg-[#2a9d8f]', 'bg-[#e9c46a]', 'bg-[#f4a261]', 'bg-[#e76f51]']

    useEffect(() => {
        const length = backgroundColours.length
        const randomBgColour =  backgroundColours[Math.random() * length | 0]
        setHeaderBackgroundColour(randomBgColour)
    }, []);



    return (
        <>
            <header className={`${headerBackgroundColour}`}>
                <Header />
                <HeroLayoutCentered className="bg-inherit h-[550px]">
                    <div className="space-y-16 text-white">
                        <h1 className="text-xl text-center md:text-2xl lg:text-4xl text-left font-black">Visitez notre
                            blog sur le café pour trouver de l’inspiration.</h1>
                        <div className="space-y-6">
                            <p className="text-sm md:text-base text-justify leading-relaxed font-semibold">Do you enjoy
                                coffee yet have cravings for anything else than your usual cup? For coffee lovers like
                                you,
                                our blog offers the ideal fusion of anecdotes, advice, and observations. We cover
                                everything
                                you need to improve your coffee experience, from the craft of making the ideal espresso
                                to
                                the fascinating history of your favourite beans.</p>
                            <p className="text-sm md:text-base text-justify leading-relaxed font-semibold">
                                Our articles are created to inspire, regardless of your level of experience behind the
                                bar
                                or your enthusiasm for the aroma of a freshly brewed beverage. There are always more
                                reasons
                                to enjoy coffee, so pour yourself a cup and read on!
                            </p>
                        </div>

                    </div>
                </HeroLayoutCentered>
            </header>
            <section className="py-20">
                <div className="container mx-auto space-y-6">
                    <div className="space-y-6 text-center">
                        <h1 className="text-xl  md:text-2xl lg:text-4xl  font-black">Nos derniers
                            articles</h1>
                        <p className="ext-sm md:text-base font-normal">Explorez nos idées pour connaître les dernières tendances, analyses et points de vue d'experts.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 px-4 mx-auto">
                        {data && data.map((article, index) => {
                            return (
                                <a
                                    key={index}
                                    href={`http://localhost:3000/blog/article/${article.slug}`}
                                    className={"group cursor-pointer w-full  md:max-w-lg border border-gray-300 rounded-2xl p-5"}>
                                    <div className="flex items-center mb-6">
                                        <img src={`http://localhost:8000/${article.img}`} alt="article image"
                                             className="w-full max-h-[250px] md:max-h-[300px] rounded-2xl shadow-lg shadow-black object-cover  object-center"/>
                                    </div>
                                    <div className="block space-y-6">
                                        <h4 className="font-medium leading-8 mb-9">{article.title}</h4>
                                        <p className="text-sm md:text-base font-normal text-justify leading-relaxed">{article.content.substring(0, 100)}</p>
                                        <div className="flex items-center justify-between  font-medium">
                                            <div>
                                                <span className="text-sm font-normal capitalize">publié par </span>
                                                <h6 className="text-sm font-medium capitalize">{article.author}</h6>
                                            </div>
                                            <div>
                                                <p className="text-sm font-normal">Il y
                                                    a {getPassedDays(article.updated_at)} jours</p>
                                                <p className="text-sm text-green-700">{article.reading} minutes</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}