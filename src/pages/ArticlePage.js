import '../App.css'
import React, {useEffect, useState} from "react";
import {ArticleService} from "../services/ArticleService";
import {useParams} from "react-router-dom";
export default function ArticlePage(){
    const [article, setArticle] = useState(null)
    const parms = useParams()

    useEffect(() => {
        ArticleService
            .fetchArticleBySlug(parms.slug)
            .then((data) => {
                if (data) {
                    setArticle(data)
                }
            })
    }, []);

    return (
        <div>{article && <h2>{article.title}</h2>}</div>
    )
}