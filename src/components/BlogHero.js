import React, {useEffect, useState} from "react";
import '../App.css'
import {ArticleService} from "../services/ArticleService";
import {HeroLayoutWithFigure} from "../elements/HeroLayout";
import {useNavigate, useNavigation} from "react-router-dom";


export default function  BlogHero(){
    const [articles, setArticles] = useState(null)
    const navigate = useNavigate()
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        ArticleService
            .fetchLatestArticles()
            .then((data) => {
                if (data) {
                    console.log(data)
                    setArticles([...data])
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

    const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
    };

    const handlePrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
    };

    return (
        <div className="container mx-auto py-20" >
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-10 w-[40%]  justify-between items-start">
                    <div className="space-y-16">
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-semibold uppercase">Nos
                                derniers <span className="text-green-700">articles</span></h2>
                            <p className="text-sm md:text-xl  text-justify leading-relaxed font-light">Bienvenue
                                dans notre section blog, où la connaissance rencontre l'inspiration. Explorez des
                                articles perspicaces, des conseils d'experts et les dernières tendances dans notre
                                domaine.</p>
                        </div>
                        <a  href="http://localhost:3000/blog/articles"
                            className="py-2 px-2 text-sm block text-center md:text-base lg:text-xl font-semibold capitalize bg-green-700 hover:bg-green-600 text-white w-[200px] rounded-md  shadow-md">
                            nos articles
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-3 space-x-2 w-full rounded-box gap-2 py-2">
                    {articles && articles.map((article, index) => {
                        return (
                            <div id={index} className="carousel-item   max-w-[360px]  card bg-amber-50  shadow-xl">
                                <div className="card hover:scale-105">
                                    <img className="w-full px-4 py-4 max-h-[260px] rounded-2xl object-cover"
                                         src={`http://localhost:8000${article.img}`} alt="article image"/>
                                    <div className="card-body">
                                        <h3 className="card-title text-center">{article.title}</h3>
                                        <span>🕗 {article.reading_time} minutes</span>
                                        <p className="text-base md:text-sm lg:text-base text-justify leading-relaxed font-light">{article.content.substring(0, 150)}</p>
                                        <a href={`blog/article/${article.slug}`}
                                           className="py-2 flex flex-row gap-1 items-center text-green-700  w-[200px] text-left  text-sm md:text-base font-semibold">
                                            En savoir plus
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                            </svg>
                                        </a>
                                    </div>


                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}