import '../App.css'
import React, {useEffect, useState} from "react";
import {ArticleService} from "../services/ArticleService";
import {useParams} from "react-router-dom";
import Header from "../components/Header";
import {HeroLayoutCentered} from "../elements/HeroLayout";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Footer from "../components/Footer";
import ArticlesGrid from "../components/ArticlesGrid";



export default function ArticlePage(){
    const [article, setArticle] = useState(null)
    const [headerBackgroundColour, setHeaderBackgroundColour] = useState(null)
    const parms = useParams()
    const backgroundColours = ['bg-[#264653]', 'bg-[#2a9d8f]', 'bg-[#e9c46a]', 'bg-[#f4a261]', 'bg-[#e76f51]']

    useEffect(() => {
        ArticleService
            .fetchArticleBySlug(parms.slug)
            .then((data) => {
                if (data) {
                    setArticle(data)
                }
            })

        const length = backgroundColours.length
        const randomBgColour =  backgroundColours[Math.random() * length | 0]
        setHeaderBackgroundColour(randomBgColour)
    }, []);

    return (
        <>
            <header className={`${headerBackgroundColour}`}>
                <Header className="border border-white text-white"/>
                <HeroLayoutCentered className="bg-inherit ">
                    {article ? (
                        <div className="space-y-16 text-white">
                            <h1 className="text-xl md:text-2xl lg:text-4xl text-left font-black">{article.title}</h1>
                            <div className="w-full flex flex-col md:flex-row items-start gap-6 md:items-center justify-between">
                                <div className="text-left">
                                    <p className="text-sm md:text-base lg:text-xl font-light">Publié par</p>
                                    <p className="text-base md:text-xl uppercase font-semibold">{article.author}</p>
                                </div>
                                <div className="flex flex-row items-center justify-between gap-4">
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                             className="w-6 md:w-10 fill-white"
                                             viewBox="0 0 50 50">
                                            <path
                                                d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                                        </svg>
                                    </a>
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                             className="w-6 md:w-10 fill-white"
                                             viewBox="0 0 50 50">
                                            <path
                                                d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                                        </svg>
                                    </a>
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                             className="w-6 md:w-10 fill-white"
                                             viewBox="0 0 50 50">
                                            <path
                                                d="M 8 3.0117188 C 6.3126093 3.0117188 4.8354789 3.4916328 3.7539062 4.3652344 C 2.6723337 5.238836 2.0117188 6.533218 2.0117188 7.9472656 C 2.0117188 10.690836 4.4687078 12.814467 7.7167969 12.941406 A 0.98809878 0.98809878 0 0 0 8 12.988281 C 9.753566 12.988281 11.246191 12.474267 12.3125 11.564453 C 13.378809 10.654639 13.988281 9.3429353 13.988281 7.9472656 A 0.98809878 0.98809878 0 0 0 13.986328 7.8925781 C 13.832307 5.1316834 11.374781 3.0117187 8 3.0117188 z M 8 4.9882812 C 10.60907 4.9882812 11.895883 6.2693448 12.005859 7.9726562 C 11.998759 8.8049335 11.676559 9.5118991 11.03125 10.0625 C 10.378809 10.619186 9.371434 11.011719 8 11.011719 C 5.3980542 11.011719 3.9882813 9.5991704 3.9882812 7.9472656 C 3.9882812 7.1213132 4.3276663 6.4422421 4.9960938 5.9023438 C 5.6645211 5.3624454 6.6873907 4.9882813 8 4.9882812 z M 3 15 A 1.0001 1.0001 0 0 0 2 16 L 2 45 A 1.0001 1.0001 0 0 0 3 46 L 13 46 A 1.0001 1.0001 0 0 0 14 45 L 14 35.664062 L 14 16 A 1.0001 1.0001 0 0 0 13 15 L 3 15 z M 18 15 A 1.0001 1.0001 0 0 0 17 16 L 17 45 A 1.0001 1.0001 0 0 0 18 46 L 28 46 A 1.0001 1.0001 0 0 0 29 45 L 29 29 L 29 28.75 L 29 28.5 C 29 26.555577 30.555577 25 32.5 25 C 34.444423 25 36 26.555577 36 28.5 L 36 45 A 1.0001 1.0001 0 0 0 37 46 L 47 46 A 1.0001 1.0001 0 0 0 48 45 L 48 28 C 48 23.873476 46.787888 20.604454 44.744141 18.375 C 42.700394 16.145546 39.849212 15 36.787109 15 C 32.882872 15 30.521631 16.426076 29 17.601562 L 29 16 A 1.0001 1.0001 0 0 0 28 15 L 18 15 z M 4 17 L 12 17 L 12 35.664062 L 12 44 L 4 44 L 4 17 z M 19 17 L 27 17 L 27 19.638672 A 1.0001 1.0001 0 0 0 28.744141 20.306641 C 28.744141 20.306641 31.709841 17 36.787109 17 C 39.360007 17 41.615528 17.922268 43.269531 19.726562 C 44.923534 21.530858 46 24.261524 46 28 L 46 44 L 38 44 L 38 28.5 A 1.0001 1.0001 0 0 0 37.916016 28.089844 C 37.694061 25.26411 35.38033 23 32.5 23 C 29.474423 23 27 25.474423 27 28.5 L 27 28.75 L 27 29 L 27 44 L 19 44 L 19 17 z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) : (<h2 className="text-3xl font-bold text-red-500">Error fetching article from server</h2>)}
                </HeroLayoutCentered>
            </header>
            <section className="py-20">
                <div className="max-w-4xl mx-auto">
                    {article && (
                        <div className="px-4 space-y-6">
                            <h2 className="text-base md:text-xl md:text-2xl lg:text-3xl text-left font-bold">{article.subtitle}</h2>
                            <span className="text-sm font-extralight  inline-flex gap-2 ">Temps de lecture -<ClockIcon
                                className="w-6 stroke-green-700 stroke-2"/> <span
                                className="font-normal">{article.reading} minutes</span></span>
                            <img className="w-full max-h-[250px] md:max-h-[300px] lg:max-h-[380px] rounded-2xl shadow-lg shadow-black object-cover  object-center"
                                src={article.img} alt=""/>
                            <div className="markdown space-y-6">
                                <Markdown rehypePlugins={rehypeRaw}>
                                    {article.content}
                                </Markdown>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <ArticlesGrid article={article} />
            <Footer/>
        </>
    )
}

function ClockIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
    )
}

