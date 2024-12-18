import '../App.css'
import React, {useEffect, useState} from "react";
import AnnouncementBannier from './AnnouncementBannier'
import LogoIcon from '../assets/svgs/logo.svg'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import useSignOut from 'react-auth-kit/hooks/useSignOut'
import {useNavigate} from "react-router-dom";



export default function Header({className}){
    const isAuthenticated = useIsAuthenticated()
    return (
        <header className={`"py-2" ${className}`}>
            <div className="container mx-auto">
                <nav className="flex flex-row items-center justify-between py-2 px-4">
                    <img className="w-14 md:w-20" src={LogoIcon} alt="logo"/>
                    <ul className="hidden lg:flex flex-row items-center justify-between gap-5 text-[18px] font-medium">
                        <li className="hover:text-gray-700"><a href="/products/">Nos cafés</a></li>
                        <li className="hover:text-gray-700">A propos de nous</li>
                        <li className="hover:text-gray-700"><a href="/blog/articles">Articles</a></li>
                        <li className="hover:text-gray-700"><a href="/contact/">Contact</a></li>
                    </ul>
                    <div className="flex flex-row items-center justify-between gap-4">
                        {isAuthenticated ? <UserLoggedDrowpdownButton /> : <UserNotLoggedButtonGroup />}
                        <button className="group relative">
                            <span className="bg-amber-300 h-4 w-4 text-xs font-medium inset-y-0 px-2 py-2 absolute inline-flex items-center justify-center top-0 rounded-full">0</span>
                            <CaddyIcon className="w-8 fill-green-500 stroke-green-900"/>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}


function UserNotLoggedButtonGroup(){
    return (
        <>
            <a href="/account/login" className="inline-flex items-center  group  py-2 px-2">
                <UserIcon
                    className="w-7 group-hover:stroke-green-700 group-hover:fill-green-700"/>
                <span className="hidden md:block font-medium group-hover:text-green-700">Connexion</span>
            </a>
            <a href="/account/registration" className="inline-flex items-center gap-1 group  py-2 px-2">
                <UserNewIcon
                    className="w-7 group-hover:stroke-green-700 group-hover:fill-green-700"/>
                <span className="hidden md:block font-medium group-hover:text-green-700">Inscription</span>
            </a>
        </>
    )
}

function UserLoggedDrowpdownButton(){
    const [isCollapse, setIsCollapse] = useState(false)
    const navigate = useNavigate()
    const signOut = useSignOut()

    function handleSignOut(){
        signOut()
        navigate('/account/login/')
    }

    return (
        <button className="relative group  bg-green-50 rounded-2xl">
            <div role="button" onClick={()=> setIsCollapse(!isCollapse)} className="inline-flex items-center cursor-pointer px-2 py-2">
                <UserIcon className="w-5 stroke-green-700 fill-green-700"  />
                <span className="text-green-700 text-xs md:text-sm font-medium">AM</span>
            </div>
            {isCollapse && (
                <div className="absolute mt-2 max-w-md flex flex-col items-start justify-between bg-amber-50 px-4 py-2 right-0 rounded-2xl">
                    <ul>
                        <li className="">Profile</li>
                        <li>Order History</li>
                        <li>Password reset</li>
                        <li><a onClick={handleSignOut}>Log out</a></li>
                    </ul>
                </div>
            )}
        </button>
    )
}

function UserIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             {...props}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
        </svg>
    )
}

function UserNewIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             {...props}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"/>
        </svg>
    )
}

function CaddyIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            {...props}
        >
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
        </svg>

    )
}