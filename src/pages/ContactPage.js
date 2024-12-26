import '../App.css'
import React from "react";
import Header from "../components/Header";
import SvgContactHeader from '../assets/images/contact_header_svg.png'
import ImgContactHeader from '../assets/images/contact_header_img.png'
import ImgPhoneIcon from  '../assets/images/phone_icon.svg'
import ImgChatIcon from  '../assets/images/chat_icon.svg'
import MailIcon from  '../assets/svgs/mail.svg'
import ImgContactInfoBg from '../assets/images/contact_info_bg.png'
import Footer from "../components/Footer";

export default function ContactPage(){
    return (
        <>
            <Header/>.
            <section className="bg-black relative  mt-0 md:py-[100px] pt-[75px] pb-[56px]">
                <img className="absolute left-0 top-20" src="" alt=""/>
                <div className="container mx-auto p-0">

                    <div className="lg:flex grid">

                        <div className="lg:w-7/12 w-12/12 relative z-10 px-[20px]">

                            <h1 className="text-6xl font-bold text-white ">Prendre <span
                                className="text-green-500"> contact</span></h1>

                            <p className="text-[#C5C5C5] text-xl md:pt-5 pt-2 md:pb-7 pb-[20px] pr-3">
                                Vous souhaitez nous contacter ? Nous serions ravis de vous entendre. Voici comment vous
                                pouvez nous joindre.
                            </p>
                        </div>

                        <div className="lg:w-5/12 w-12/12">
                            <div
                                className="contact_hero lg:absolute relative top-0 right-0 md:h-full h-[228px] lg:w-[50.8%] w-[100%] lg:ml-[0px] ml-[20px]">
                                <img src={SvgContactHeader} className="absolute left-0 h-full w-[auto]"
                                     alt="contact_header_svg"/>
                                <img className="w-[100%] h-full object-cover" src={ImgContactHeader}
                                     alt="contact_header_img"/>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
            <section className="md:h-auto h-[195px]" style={{backgroundImage: `url(${ImgContactInfoBg})`}}>
                <div className="container  mx-auto flex align-middle md:gap-[20px] gap-[15px] md:px-[45px] px-[20px]">
                    <div className="w-[50%]">
                        <div
                            className="grid text-center xl:h-[399px] lg:h-[440px] md:h-[440px] h-[225px] md:pt-[32px] pt-[15px] md:pb-[32px] pb-[15px] px-[10px] border-[1px] border-solid border-[#EAF0F6] bg-[#fff] relative md:top-[-45px] top-[-70px]">
                            <img src={ImgPhoneIcon}
                                 className="md:pb-[23px] pb-[13px] md:w-[50px] w-[30px] mx-[auto]" alt="phone_icon"/>
                            <p className="text-[#009368] md:pb-[23px] pb-[10px] md:text-[15px] text-[12px] font-semibold">
                                Contactez-nous</p>
                            <p className="md:text-[18px] text-[14px] md:pb-[23px] pb-[10px] font-light md:leading-[28px] leading-[normal]">
                                Vous êtes intéressé par nos produits de café ? Il vous suffit de prendre le téléphone pour discuter avec un membre de notre équipe commerciale.
                            </p>
                            <a href="#"
                               className="text-[#13131A] md:mb-[23px] mb-[10px] md:text-[16px] text-[10px] font-medium underline md:h-[52px] leading-[normal] h-auto flex items-center justify-center hover:opacity-[0.7]">
                                +41 076 483 33 17
                            </a>
                            <ArrowDownIcon
                                className="md:mt-[10px] mt-[15px] mx-auto md:w-[50px] md:h-[30px] w-[12px] h-[6.2px]"/>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <div
                            className="grid text-center xl:h-[399px] lg:h-[440px] md:h-[440px] h-[225px] md:px-[40px] px-[10px] md:pt-[32px] md:pb-[70px] pt-[15px] pb-[15px] border-[1px] border-solid border-[#EAF0F6] bg-[#fff] relative md:top-[-45px] top-[-70px]">
                            <img src={ImgChatIcon}
                                 className="md:pb-[23px] pb-[15px] md:w-[50px] w-[30px] mx-[auto]" alt="chat_icon"/>
                            <a href="#"
                               className="text-[#13131A] md:pb-[28px] pb-[10px] md:text-[16px] text-[12px] font-semibold hover:opacity-[0.7] md:leading-[28px] leading-[normal]">Contactez nos services par email</a>
                            <p className="text-[#49321B] md:pb-[67px] pb-[19px] md:text-[18px] text-[14px]  font-light md:leading-[28px] leading-[normal]">
                                Parfois, vous avez besoin d'un peu d'aide de la part de vos amis. Ou d'un représentant du support HubSpot. Ne vous inquiétez pas, nous sommes là pour vous.</p>
                            <a href="#" className="bg-green-700 gap-2 text-white inline-flex items-center md:text-[16px] text-[14px] hover:bg-green-500 font-medium md:h-[51px] h-[28px] py-0 md:px-[20px] px-0 mx-[auto] md:w-[auto] w-[85%] rounded-[6px]">
                                <img src={MailIcon} alt=""/>
                                support@afronectar.ch
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white md:pt-[60px] pt-10">
                <div className="container mx-auto py-10">
                    <h2 className="md:pb-[60px] pb-[43px] text-center md:text-[32px] text-[24px] text-[#213343] md:leading-[44.16px] leading-[normal] font-semibold">
                        Contactez l'un de nos agents commerciaux
                    </h2>

                    <div className="grid grid-cols-1  md:grid-cols-2 place-items-start md:gap-8 gap-6">
                        <div id="info_saler" className="pt-[15px] justify-self-center translate-x-1/3 space-y-4">
                            <p className="text-[#009368] md:pb-[7px] pb-[6px] md:text-[15px] text-[12px] font-semibold md:leading-[19.5px] leading-[normal]">Parler
                                aux Vendeur</p>
                            <h3 className="md:text-[24px] text-[18px] text-[#213430] leading-[34.08px] font-medium">Abdulahi Maxamed</h3>
                            <p className="text-[#6F7775] md:pb-[23px] pb-[20px] text-[18px] w-1/2 font-light leading-[16.5px]">
                                Parlez à notre vendeur pour obtenir des conseils sur notre marque de café BUN&trade;.
                            </p>
                            <div className="flex align-middle gap-[15px] pb-[18px]">
                                <div className="bg-[#006838] md:w-[52.5px] w-[36px] md:h-[52.5px] h-[36px] rounded-[100%] flex align-middle items-center justify-center">
                                    <PhoneIcon  className="w-6 stroke-white fill-white h-[30px]" />
                                </div>
                                <div className="block h-[fit-content] my-[auto]">
                                    <h3 className="md:text-[15px] text-[12px] font-semibold md:leading-[19.5px] leading-[normal] text-[#213430] md:pb-[3.5px] pb-[4px]">
                                        Appelez-moi</h3>
                                    <a href="tel:+41-076-483-3317" className="text-[#6F7775] block md:text-[12px] text-[10px] font-light md:leading-[16.5px] leading-[normal]">
                                        +41-076-483-3317
                                    </a>
                                </div>
                            </div>
                            <div className="flex align-middle gap-[15px] pb-[18px]">
                                <div className="bg-[#006838] md:w-[52.5px] w-[36px] md:h-[52.5px] h-[36px] rounded-[100%] flex align-middle items-center justify-center">
                                  <EmailIcon  className="w-6 stroke-white fill-white h-[30px]" />
                                </div>
                                <div className="block h-[fit-content] my-[auto]">
                                    <h3 className="md:text-[15px] text-[12px] font-semibold md:leading-[19.5px] leading-[normal] text-[#213430] md:pb-[3.5px] pb-[4px]">
                                        Envoyez-nous un mail
                                    </h3>
                                    <a href="mailto:info@yourgmail.com" className="text-[#6F7775] block md:text-[12px] text-[10px] font-light md:leading-[16.5px] leading-[normal]">abdulahi.maxamed@afronectar.ch</a>
                                </div>
                            </div>
                            <div className="flex align-middle gap-[15px]">
                                <div className="bg-[#006838] md:w-[52.5px] w-[36px] md:h-[52.5px] h-[36px] rounded-[100%] flex align-middle items-center justify-center">
                                    <MapIcon  className="w-6 stroke-white fill-white h-[30px]" />
                                </div>
                                <div className="block h-[fit-content] my-[auto]">
                                    <h3 className="md:text-[15px] text-[12px] font-semibold md:leading-[19.5px]  leading-[normal] text-[#213430] md:pb-[3.5px] pb-[4px]">Visitez-nous</h3>
                                    <a className="text-[#6F7775] block md:text-[12px] text-[10px] font-light md:leading-[16.5px] leading-[normal]">
                                        Maisonneuve 12A, 1219 Chatelaine, Geneve , Suisse
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white  w-[600px] shadow-sm shadow-black  rounded-none md:p-[37.5px] p-[27px] relative z-[1]">
                            <h2 className="text-[#213430] md:text-[20.25px] text-[14px] md:pb-[15.5px] pb-[12.4px] font-semibold md:leading-[24px] leading-[normal]">
                                Remplissez le formulaire ci-dessous
                            </h2>

                            <form action="#" className="grid md:gap-[15px] gap-[11px]">
                                <div className="flex align-middle md:gap-[15px] gap-[11px]">
                                    <div className="form_group w-[100%]">
                                        <label htmlFor="Name"
                                               className="flex pb-[7px] md:text-[12px] text-[10px] font-medium text-[#213430]">Nom</label>
                                        <input type="text"
                                               className="text-[#6F7775] md:text-[12px] text-[10px] w-[100%] md:leading-[16.5px] leading-[normal] font-normal md:py-[13px] py-[10px] md:px-[15px] px-[11px] outline-none border border-[#DDD] rounded-[3.7px]"
                                               id="name" name="name" placeholder="Your Name" required=""/>
                                    </div>
                                    <div className="form_group w-[100%]">
                                        <label htmlFor="Email"
                                               className="flex pb-[7px] md:text-[12px] text-[10px] font-medium text-[#213430]">Email</label>
                                        <input type="text"
                                               className="text-[#6F7775] md:text-[12px] text-[10px] w-[100%] md:leading-[16.5px] leading-[normal] font-normal md:py-[13px] py-[10px] md:px-[15px] px-[11px] outline-none border border-[#DDD] rounded-[3.7px]"
                                               id="Email" name="Email" placeholder="Your Email" required=""/>
                                    </div>
                                </div>
                                <div className="flex align-middle md:gap-[15px] gap-[11px]">
                                    <div className="form_group w-[100%]">
                                        <label htmlFor="Phone"
                                               className="flex pb-[7px] md:text-[12px] text-[10px] font-medium text-[#213430]">Téléphone</label>
                                        <input type="text"
                                               className="text-[#6F7775] md:text-[12px] text-[10px] w-[100%] md:leading-[16.5px] leading-[normal] font-normal md:py-[13px] py-[10px] md:px-[15px] px-[11px] outline-none border border-[#DDD] rounded-[3.7px]"
                                               id="Phone" name="Phone" placeholder="Your Phone" required=""/>
                                    </div>
                                    <div className="form_group w-[100%]">
                                        <label htmlFor="subject"
                                               className="flex pb-[7px] md:text-[12px] text-[10px] font-medium text-[#213430]">Sujet</label>
                                        <input type="text"
                                               className="text-[#6F7775] md:text-[12px] text-[10px] w-[100%] md:leading-[16.5px] leading-[normal] font-normal md:py-[13px] py-[10px] md:px-[15px] px-[11px] outline-none border border-[#DDD] rounded-[3.7px]"
                                               id="subject" name="subject" placeholder="Enter Subject" required=""/>
                                    </div>
                                </div>
                                <div className="form_group w-[100%] grid">
                                    <label htmlFor="Message"
                                           className="flex pb-[7px] md:text-[12px] text-[10px] font-medium text-[#213430]">Message</label>
                                    <textarea
                                        className="text-[#6F7775] md:text-[12px] text-[10px] md:h-[120px] h-[90px] resize-none w-[100%] md:pt-[15px] pt-[10px] md:leading-[16.5px] leading-[normal] font-normal px-[15px] outline-none border border-[#DDD] rounded-[3.7px]"
                                        name="Message" id="Message" placeholder="Enter Your Message"></textarea>
                                </div>
                                <button type="submit"
                                        className="bg-green-700 text-white w-[100%] rounded-[3.75px] md:text-[15px] text-[10px] md:leading-[1.5rem] leading-[normal] md:py-[13px] py-[10px] font-medium">Send
                                    message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export function ArrowDownIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
        </svg>

    )
}

export function PhoneIcon(props){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             {...props}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
        </svg>

    )
}

export function EmailIcon(props){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             {...props}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"/>
        </svg>
    )
}

export function MapIcon(props){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
        </svg>

    )
}