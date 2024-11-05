import '../App.css'
import React from "react";
import Header from "../components/Header";
import LatestProduct from "../components/LatestProduct";
import SurveyCard from "../components/SurveyCard";
import BlogHero from "../components/BlogHero";
import Products from "../components/Products";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Customers from "../components/Customers";



export default function IndexPage(){
    return (
        <>
            <div className="rotated-bg">
                <Header/>
                <LatestProduct />
            </div>
            <Customers />
            <AboutUs />
            <Products />
            <BlogHero />
            <Footer />
        </>
    )
}
