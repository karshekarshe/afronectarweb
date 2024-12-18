import '../App.css'
import React from "react";
import useFetch from "react-fetch-hook";

export default function BlogPage(){
    const [isLoading, data , error] = useFetch(
        'http://localhost:8000/api/blog/articles/latest?limit=10'
    )

}