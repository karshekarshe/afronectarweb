import React, {useEffect, useState} from "react";
import '../App.css'
import {ArticleService} from "../services/ArticleService";
import {useNavigate, useNavigation} from "react-router-dom";


export default function  BlogHero(){
    const [articles, setArticles] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        ArticleService
            .fetchLatestArticles()
            .then((data) => {
                if (data) {
                    console.log(data)
                    setArticles([...data,...data])
                }
            })
    }, []);

    const getArticleDateFormatted = (date) => {
        const options = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };
        const newDate = new Date(date)
        return newDate.toLocaleDateString('fr-CH', options)
    }

    const handleClick = (event) => {
        const articleId = event.currentTarget.id;
        navigate(`/blog/article/${articleId}`);
    }

    return (
        <div className="bg-white">
            <div className="container mx-auto py-32 space-y-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-8">
                    <div className="flex flex-col gap-10">
                        <h2 className="text-2xl md:text-3xl font-semibold uppercase text-center md:text-left">Nos
                            derniers <span className="text-green-700">articles</span></h2>
                        <p className="text-sm md:text-base lg:text-xl text-justify leading-relaxed font-light">Bienvenue dans notre section blog, où la connaissance rencontre l'inspiration. Explorez des
                            articles perspicaces, des conseils d'experts et les dernières tendances dans notre
                            domaine.</p>
                        <button className="py-2 px-2 text-sm md:text-base font-semibold capitalize bg-green-700 hover:bg-green-600 text-white w-[200px] rounded-md  shadow-md" >nos articles</button>

                    </div>
                    {articles && articles.map((article) => {
                        return(
                            <div className="flex flex-col gap-3">
                                <img className="w-full max-h-[260px] rounded-2xl object-cover bg-amber-50 px-6 py-6"
                                     src={`http://localhost:8000${article.img}`} alt="article image"/>
                                <h3 className="text-base md:text-base lg:text-xl font-medium">{article.title}</h3>
                                <p className="text-base md:text-sm lg:text-base text-justify leading-relaxed font-light">{article.content.substring(0, 150)}</p>
                                <button className="py-2 flex flex-row gap-1 items-center text-green-700  w-[200px] text-left  text-sm md:text-base font-semibold">
                                    En savoir plus
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-8">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
                                    </svg>
                                </button>

                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}