import { useTranslation } from "react-i18next";
import Logo from '../assets/images/logo.png'
import '../App'
import LoginForm from "../components/LoginForm";
import MenuLanguage from "../components/MenuLanguage";



export default  function LoginPage(){
   const { t } = useTranslation();
    return (
        <div className="h-screen w-screen space-y-5 ">
            <nav className="w-full py-4 border border-gray-300">
                <div className="container mx-auto max-w-lg">
                    <div className="w-full flex flex-row items-center justify-between">
                        <a className="text-[8px]  font-medium uppercase py-1 px-1 bg-green-800 text-white rounded-md hover:bg-green-600"
                           href="/">
                            {t('back_home_button_name')}
                        </a>
                        <MenuLanguage/>
                    </div>
                </div>
            </nav>
            <div className="container mx-auto space-y-5 max-w-lg">
                <div className="space-y-2 px-0 text-center md:text-left">
                    <h1 className="font-bold">{t('login_title')}</h1>
                    <p className="text-xs">{t('login_instruction')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="flex flex-col items-start justify-start space-y-2 ma-w-[350px] md:max-w-[320px]">
                        <h2 className="text-xs">{t('login_social_instruction')}</h2>
                        <button className="capitalize px-1 py-1 inline-flex gap-2 hover:bg-blue-50 rounded-md items-center justify-center text-xs w-full border border-gray-500">
                            <GoogleIcon className="w-4"/>
                            google
                        </button>
                        <hr className="border border-gray-100 w-full"/>
                        <LoginForm></LoginForm>
                    </div>
                    <div className="border border-white shadow-2xl max-w-sm md:max-w-xs flex flex-col justify-center gap-4 items-start px-4 py-4 max-h-[300px]">
                        <img className="max-w-[100px] h-auto mx-auto" src={Logo} alt="logo"/>
                        <h2 className="text-sm">{t('registration_feature_title')}</h2>
                        <p className="text-[13px] font-light text-justify  w-full">{t('registration_feature_description')}</p>
                        <a className="text-xs underline text-green-800" href="/account/registration">{t('registration_feature_register_link_title')}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}



export function GoogleIcon(prop) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" {...prop}>
            <path fill="#fbc02d"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
            <path fill="#e53935"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path fill="#4caf50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path fill="#1565c0"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
        </svg>
    )
}