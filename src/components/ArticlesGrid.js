import '../App.css'
import React from "react";
import useFetch from "react-fetch-hook";
import {Endpoints} from "../utils/Constants";
import {getPassedDays} from "../utils/Utility.py";

export default function ArticlesGrid({article}){
    const endpoint = Endpoints.getLatestArticlesEnpoint()
    const { isLoading, data, error } = useFetch(endpoint)



    if (isLoading){
        return <h2>...loading</h2>
    }

    if (error){
        return <h2>{error}</h2>
    }

    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl md:text-2xl lg:text-4xl  font-black text-center py-16">Nos articles les plus
                    lus</h2>
                <div
                    className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                    {data
                        .filter((item) => {

                            return item?.id !== article?.id
                        }).map((item, index) => {
                            return (
                                <a
                                    key={index}
                                    href={`http://localhost:3000/blog/article/${item.slug}`}
                                    className="group cursor-pointer w-full max-lg:max-w-md lg:w-1/3 border border-gray-300 rounded-2xl p-5">
                                    <div className="flex items-center mb-6">
                                        <img src={`http://localhost:8000/${item.img}`} alt="article image"
                                             className="w-full max-h-[250px] md:max-h-[300px] lg:max-h-[380px] rounded-2xl shadow-lg shadow-black object-cover  object-center"/>
                                    </div>
                                    <div className="block">
                                        <h4 className="font-medium leading-8 mb-9">{item.title}</h4>
                                        <div className="flex items-center justify-between  font-medium">
                                            <div>
                                                <span className="text-sm font-normal capitalize">publié par </span>
                                                <h6 className="text-sm font-medium capitalize">{item.author}</h6>
                                            </div>
                                            <div>
                                                <p className="text-sm font-normal">Il y a {getPassedDays(item.updated_at)} jours</p>
                                                <p className="text-sm text-green-700">{item.reading} minutes</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                            )
                        })
                    }
                </div>
                <button
                    className="border capitalize border-green-700 bg-white text-green-700 shadow-md hover:text-white hover:bg-green-700 rounded-full py-3.5 px-7 w-52 flex justify-center items-center font-semibold mx-auto transition-all duration-300">
                    charger plus articles
                </button>
            </div>
        </section>
    )
}