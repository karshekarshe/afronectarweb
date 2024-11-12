import '../App.css'
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ImgAccountCreation from '../assets/images/account-creation-illustration.png'
import Logo from "../assets/svgs/logo.svg";


export default function ActiveAccountEmailConfirmation(){
    const [email, setEmail] = useState('')
    const parms = useParams()

    useEffect(() => {
        const emailValue = parms.email
        setEmail(emailValue)
    }, []);

    return (
        <div className="h-screen w-screen">
            <nav className="container mx-auto py-4 flex  flex-row-reverse items-center justify-evenly ">
                <button className="bg-gray-100 px-2 py-2 rounded-2xl">Retour accueil</button>
                <img className="w-28" src={Logo} alt="logo"/>
            </nav>
            <div className="container mx-auto  flex flex-col gap-1 justify items-center center h-full w-full">
                <img className="max-w-[300px] h-auto mt-20" src={ImgAccountCreation} alt="bun's logo"/>
                <div className="text-center w-2/3">
                    <p className="text-lg place-self-center">Félicitations , votre compte a été créé et un e-mail à l'adresse
                        suivante <span className="font-medium">{email}</span> a été envoyé.</p>
                    <p className="text-lg">Veuillez vérifier votre e-mail et cliquer sur le lien fourni pour activer le
                        compte.</p>
                </div>
            </div>
        </div>
    )
}