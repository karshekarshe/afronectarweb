import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import validator from "validator/es";
import instance from "../utils/Axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";
import { CircleAnimationIcon } from "../pages/ActivateAccountPage";
import {AccountService} from "../services/AccountService";

export default function LoginForm() {
  const [email, setEmail] = useState({
    email: "",
    errorMessage: "",
    isEmailValidate: false,
  });
  const [password, setPassword] = useState({
    password: "",
    errorMessage: "",
    isPasswordValidate: false,
  });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { t } = useTranslation();
  const signIn = useSignIn();
  const navigate = useNavigate();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const validateEmail = (event) => {
    const emailValue = event.target.value;
    if (validator.isEmail(emailValue)) {
      setEmail({
        email: emailValue,
        errorMessage: "",
        isEmailValidate: true,
      });
    } else {
      setEmail({
        email: emailValue,
        errorMessage: "Veuillez fournir un format d'e-mail correct",
        isEmailValidate: false,
      });
    }
  };

  const validatePassword = (event) => {
    const passwordValue = event.target.value;
    if (validator.isLength(passwordValue, { min: 8 })) {
      setPassword({
        password: passwordValue,
        errorMessage: "",
        isPasswordValidate: true,
      });
    } else {
      setPassword({
        password: passwordValue,
        errorMessage:
          "Veuillez fournir un mot de passe d'une longueur minimale de 8 caractères",
        isPasswordValidate: false,
      });
    }
  };

  const isButtonDisabled = () => {
    return !(email.isEmailValidate && password.isPasswordValidate);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    AccountService.login(email,  password)
        .then(result => {
          if (!result.success){
            setError({...result.message})
            setLoading(false)
          } else {
            setLoading(false)
            setError({})
              signIn({
                auth: {
                  token: result.data.access,
                  type: "Bearer",
                },
                refresh: result.data.refresh,
            });
            navigate('/');
            }
    })

  };

  return (
    <form className="space-y-2 w-full" noValidate={true}>
      {Object.values(error).map((value, index) => (
          <p key={index} className="text-red-500 text-sm h-11 md:text-base">{value}</p>
      ))}
      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm" htmlFor="email">
          {t("login_email_field_name")}
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 stroke-gray-400"
            >
              <path
                d="M1.87651 3.83325L6.79885 7.07932C8.55702 8.13423 9.43612 8.66169 10.402 8.6387C11.3678 8.61572 12.2208 8.04705 13.9268 6.90971L18.1232 3.83325M8.33317 14.6666H11.6665C14.8092 14.6666 16.3805 14.6666 17.3569 13.6903C18.3332 12.714 18.3332 11.1426 18.3332 7.99992C18.3332 4.85722 18.3332 3.28587 17.3569 2.30956C16.3805 1.33325 14.8092 1.33325 11.6665 1.33325H8.33317C5.19047 1.33325 3.61913 1.33325 2.64281 2.30956C1.6665 3.28587 1.6665 4.85722 1.6665 7.99992C1.6665 11.1426 1.6665 12.714 2.64281 13.6903C3.61913 14.6666 5.19047 14.6666 8.33317 14.6666Z"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <input
            onChange={(event) => validateEmail(event)}
            value={email.email}
            ref={emailRef}
            placeholder="name@afronectar.ch"
            className="w-full px-1 py-3 bg-amber-50 placeholder:text-base placeholder:text-gray-400 rounded-none pl-10 border border-gray-400 focus:border-green-300"
            name="email"
            type="email"
          />
        </div>
        <p className="text-[14px] h-7 md:text-base text-red-500 font-medium">
          {email.errorMessage}
        </p>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="password">{t("login_password_field_name")}</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
            <svg
              width="22"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 stroke-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <input
            onChange={(event) => validatePassword(event)}
            value={password.password}
            ref={passwordRef}
            placeholder="*************"
            className="w-full px-1 py-3 bg-amber-50 placeholder:text-base placeholder:text-gray-400 rounded-none pl-10 border border-gray-400 focus:border-green-300"
            name="password"
            type="password"
          />
        </div>
        <p className="text-[14px] h-7 md:text-base text-red-500 font-medium">
          {password.errorMessage}
        </p>
      </div>
      <a
        className="text-sm md:text-base underline text-green-800"
        href="/account/password-reset"
      >
        {t("login_forgotten_link_name")}
      </a>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <button
          onClick={handleSubmit}
          type="button"
          disabled={isButtonDisabled()}
          className="bg-green-600 capitalize w-full md:w-1/2 flex flex-row items-center justify-center text-white px-1 py-3 text-sm md:text-base font-medium rounded-md disabled:bg-gray-200 disabled:text-black"
        >
          {loading ? (
            <CircleAnimationIcon className="w-6 stroke-amber-500" />
          ) : (
            t("login_button_name")
          )}
        </button>
        <a
          className="w-full md:w-1/2 px-1 py-3 text-sm md:text-base font-medium text-white bg-amber-800 text-center rounded-md"
          href="/account/register"
        >
          Créer un nouveau compte
        </a>
      </div>
    </form>
  );
}
