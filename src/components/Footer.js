import '../App.css'
import Logo from '../assets/svgs/logo.svg'
import SocialIcon1 from '../assets/svgs/social-icon1.svg'
import SocialIcon2 from '../assets/svgs/social-icon2.svg'
import SocialIcon3 from '../assets/svgs/social-icon3.svg'
import SocialIcon4 from '../assets/svgs/social-icon4.svg'
import SocialIcon5 from '../assets/svgs/social-icon5.svg'
import PinIcon from '../assets/svgs/pin.svg'
import CallIcon from '../assets/svgs/call.svg'
import MailIcon from '../assets/svgs/mail.svg'

export default function Footer() {
    return (
        <footer className="bg-[#1C1A1A] text-white pt-10 sm:pt-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap sm:gap-y-10 xl:gap-x-10 xl:flex-nowrap">
                    <div className="w-full xl:w-3/12">

                        <a href="index.html">
                            <img src={Logo} alt="Footer logo"/>
                        </a>

                        <p className="text-white py-5 sm:pt-6 sm:pb-9">Sophisticated simplicity for the<br/>
                            independent mind.</p>

                        <div className="flex items-center gap-x-[18px]">
                            <a href="#" className="hover:transition-all hover:opacity-70"><img
                                className="hover:bg-green-600" src={SocialIcon1} alt=""/></a>
                            <a href="#" className="hover:transition-all hover:opacity-70"><img
                                src={SocialIcon2} alt=""/></a>
                            <a href="#" className="hover:transition-all hover:opacity-70"><img
                               src={SocialIcon3} alt=""/></a>
                            <a href="#" className="hover:transition-all hover:opacity-70"><img
                                src={SocialIcon4} alt=""/></a>
                            <a href="#" className="hover:transition-all hover:opacity-70"><img
                               src={SocialIcon5} alt=""/></a>
                        </div>

                    </div>
                    <div className="w-6/12 lg:w-4/12 xl:w-3/12 mt-10 sm:mt-0">
                        <h3 className="heading-md text-white text-lg sm:text-xl pb-4 sm:pb-8">Produits</h3>
                        <ul>
                            <li>
                                <a href="#"
                                   className="text-white leading-[2.25] hover:transition-all hover:text-[#d1d5db]">Café</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="text-white leading-[2.25] hover:transition-all hover:text-[#d1d5db]">Thé</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="text-white leading-[2.25] hover:transition-all hover:text-[#d1d5db]">Miels</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="text-white leading-[2.25] hover:transition-all hover:text-[#d1d5db]">Accessoires</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-6/12 lg:w-4/12 xl:w-3/12 mt-10 sm:mt-0">
                        <h3 className="heading-md text-white text-lg sm:text-xl pb-4 sm:pb-8">Aide &amp; Infomation</h3>
                        <ul>
                            <li>
                                <a href="#"
                                   className="text-white leading-[2.25] hover:transition-all hover:text-[#d1d5db]">Politique de confidentialité</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="text-white leading-[2.25] hover:transition-all hover:text-[#d1d5db]">Conditions générales</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="text-white leading-[2.25] hover:transition-all hover:text-[#d1d5db]">Retour de produits</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-4/12 xl:w-3/12 mt-2 sm:mt-0">
                        <h3 className="heading-md text-white text-lg sm:text-xl pb-4 sm:pb-8">Contactez-nous</h3>
                        <ul>
                            <li>
                                <a href="mailto:contact@example.com"
                                   className="flex items-center gap-x-4 text-white leading-[2.25] hover:transition-all hover:text-[#d1d5db]">
                                    <img src={MailIcon} alt=""/>
                                    info@afronectar.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+000 000-000-000"
                                   className="flex items-center gap-x-4 text-white leading-[2.25] hover:transition-all hover:text-[#d1d5db]">
                                    <img src={CallIcon} alt=""/>
                                    +41 79 600 37 46
                                </a>
                            </li>
                            <li>
                                <a href="https://www.google.com/maps/place/afronectar/@46.2184524,6.1040834,17z/data=!4m6!3m5!1s0x478c6578768f2231:0xfe20a1e678640875!8m2!3d46.2184524!4d6.1040834!16s%2Fg%2F11w1q4p7bk!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                                   className="flex items-center gap-x-4 text-white leading-[2.25] hover:transition-all hover:text-[#d1d5db]">
                                    <img src={PinIcon} alt=""/>
                                    Voir sur Google map
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="text-center mt-8 py-3 border-t border-white">
                    <p className="text-[10px] sm:text-sm">COPYRIGHT © 2023. All Rights Reserved By BUN</p>
                </div>
            </div>
        </footer>
    )
}