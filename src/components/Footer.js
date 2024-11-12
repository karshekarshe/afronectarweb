import '../App.css'
import Logo from '../assets/svgs/logo.svg'
import FaceBookIcon from '../assets/images/facebook.png'
import SnapChatIcon from '../assets/images/snapchat.png'
import LinkedinIcon from '../assets/images/linkedin.png'
import InstagramIcon from '../assets/images/instagram.png'
export default function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-5 px-5 py-10 border-t border-gray-400 ">
            <div className="space-y-6">
                <div className="inline-flex space-x-4">
                    <img className="w-4" src={FaceBookIcon} alt="facebook icon"/>
                    <img className="w-4" src={SnapChatIcon} alt="snapchat icon"/>
                    <img className="w-4" src={LinkedinIcon} alt="linkedin icon"/>
                    <img className="w-4" src={InstagramIcon} alt="instagram icon"/>
                </div>
                <img className="w-32" src={Logo} alt="logo"/>
            </div>
            <div className="space-y-6">
                <p className="font-semibold text-xl">Abonnez-vous à notre newsletter.</p>
                <p className="text-base font-black text-gray-500">"Soyez les premiers à découvrir nos dernières actualités, offres exclusives, et bien plus encore."</p>
                <div className="flex flex-row space-x-10">
                    <input className="bg-transparent rounded-md w-full px-5 py-2 border border-gray-500 capitalize" type="email" placeholder="entez voter email address"/>
                    <button className="capitalize float-right self-center text-base font-medium rounded-md hover:opacity-80 px-6 py-2 bg-[#00623B] text-white">
                        s'abonner
                    </button>

                </div>
            </div>
        </div>
    )
}