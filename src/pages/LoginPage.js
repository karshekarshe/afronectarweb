import { useTranslation } from "react-i18next";
import Logo from "../assets/images/logo.png";
import "../App";
import LoginForm from "../components/LoginForm";
import { useState, useEffect } from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import {useNavigate} from "react-router-dom";

export default function LoginPage() {
  const { t } = useTranslation();
  const isIsAuthenticated = useIsAuthenticated()
  const navigate = useNavigate()
  useEffect(() => {
    if (isIsAuthenticated){
      navigate('/')
    }
  }, []);

  return (
    <div className="h-screen w-screen space-y-5">
      <nav className="w-full px-4 md:px-2 lg:px-0 py-4 border border-gray-300">
        <div className="container mx-auto max-w-6xl">
          <div className="w-full flex flex-row items-center justify-between">
            <a
              className="text-[8px] md:text-base font-normal text-black  py-1 px-2 bg-gray-200 rounded-md"
              href=""
            >
              {t("back_home_button_name")}
            </a>
            <img className="w-20 h-auto" src={Logo} alt="logo" />
            <HelpMessageDropdownButton />
          </div>
        </div>
      </nav>
      <div className="container md:mx-auto w-full md:max-w-5xl  lg:max-w-6xl px-14 py-14 h-fit mt-0 md:mt-32  flex flex-col items-center justify-center bg-flame-orange rounded-2xl">
        <div className="w-screen md:max-w-xl h-full bg-amber-50  shadow-2xl shadow-black px-6 py-4 md:mx-auto">
          <div className="space-y-2 px-0 text-center md:text-left">
            <h1 className="font-bold text-base md:text-2xl">
              {t("login_title")}
            </h1>
            <p className="text-sm md:text-xl">{t("login_instruction")}</p>
          </div>
          <hr className="border border-gray-100 w-full my-4" />
          <div className="flex flex-col items-start justify-start space-y-2">
            <h2 className="text-sm md:text-base">
              {t("login_social_instruction")}
            </h2>
            <button className="capitalize px-1 py-3 text-base inline-flex gap-2 hover:bg-blue-50  items-center justify-center w-full border border-gray-500">
              <GoogleIcon className="w-6" />
              google
            </button>
            <hr className="border border-gray-100 w-full" />
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    </div>
  );
}

function HelpMessageDropdownButton() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className="relative shadow-2xl shadow-black"
    >
      <div className="flex flex-row items-center justify-between gap-2 cursor-pointer">
        <span className="text-[8px] md:text-base">Help</span>
        {isActive ? (
          <ArrowUpIcon className="w-4" />
        ) : (
          <ArrowDownIcon className="w-4" />
        )}
      </div>
      <div
        className={
          isActive
            ? "px-4 absolute right-0 space-y-2 w-96 py-4 bg-white"
            : "hidden"
        }
      >
        <h3 className="text-base md:text-xl font-semibold">
          BUN technical support
        </h3>
        <p className="text-base font-medium text-amber-600 uppercase">
          +41 076 483 33 17
        </p>
        <div className="space-y-0">
          <p className="text-sm">Monday to Friday, from 9 am to 18 pm</p>
          <p className="text-sm">
            Swiss fixed network local rate / mobile rates charged by the
            provider
          </p>
        </div>
      </div>
    </div>
  );
}

function ArrowDownIcon(prop) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...prop}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function ArrowUpIcon(prop) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      {...prop}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  );
}

export function GoogleIcon(prop) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 48 48"
      {...prop}
    >
      <path
        fill="#fbc02d"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
      <path
        fill="#e53935"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      ></path>
      <path
        fill="#4caf50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      ></path>
      <path
        fill="#1565c0"
        d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
    </svg>
  );
}
