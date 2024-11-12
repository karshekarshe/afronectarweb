import React, {useEffect, useState} from "react";
import '../App.css'
import ImgRandomPersonFace from '../assets/images/random-person-face.jpg'
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
                    setArticles([...data,...data,...data,...data])
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
            <div className="container mx-auto py-20 space-y-10">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl md:text-3xl  font-semibold uppercase">nos dernier articles</h2>
                    <button className="px-4 py-4 bg-green-700 font-semibold text-xl text-white text-center rounded-2xl capitalize">les articles</button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start justify-between">
                    {articles && articles.map((article) => {
                        return (
                            <a onClick={handleClick}  id={article.slug} className="bg-amber-50 shadow-sm shadow-black col-span-2 md:col-span-1 px-2 space-y-6 space-x-3 m-4 rounded-2xl py-4 flex flex-row gap-2  justify-between items-center hover:border hover:border-amber-500 transition-all duration-300 ease-out">
                                <img className="max-w-[220px] max-h-[220px] object-cover rounded-2xl" src={`http://localhost:8000/${article.img}`}
                                     alt="coffee at the office"/>
                                <div className="space-y-4  mt-5 flex flex-col items-start  justify-between">
                                    <h3 className="text-base md:text-xl font-semibold capitalize">{article.title}</h3>
                                    <hr className="w-full shadow-2xl shadow-gray-100 border border-gray-100"/>
                                    <div className="flex flex-row items-center justify-between w-full px-2">
                                        <div className="flex flex-row gap-2 justify-between items-center">
                                            <img className="max-w-[50px] px-2 py-2 h-auto rounded-full"
                                                 src={ImgRandomPersonFace}
                                                 alt=""/>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium">{article.author}</span>
                                                <span className="text-sm font-light capitalize">{getArticleDateFormatted(article.updated_at)}</span>
                                            </div>
                                        </div>
                                        <span
                                            className="text-amber-950 text-xs md:text-sm font-medium uppercase bg-amber-400 rounded-r-2xl px-2 py-2 ">coffee</span>
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}