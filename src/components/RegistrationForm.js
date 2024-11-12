import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import validator from "validator/es";
import {useNavigate} from "react-router-dom";
import {AccountService} from '../services/AccountService'
import { CircleAnimationIcon } from "../pages/ActivateAccountPage";

export default function RegistrationForm() {
  const [firstName, setFirstName] = useState({
    firstName: "",
    errorMessage: "",
    isFirstNameValidate: false,
  });
  const [lastName, setLastName] = useState({
    lastName: "",
    errorMessage: "",
    isLastNameValidate: false,
  });
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
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { t } = useTranslation();
  const navigate = useNavigate()

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  const validateText = (textValue) => {
    return validator.isLength(textValue, { min: 3 });
  };

  const handleFirstNameChange = (event) => {
    const textValue = event.target.value;
    console.log(textValue)
    if (validateText(textValue)) {
      setFirstName((prev) => ({
        ...prev,
        firstName: textValue,
        errorMessage: "",
        isFirstNameValidate: true,
      }));
    } else {
      setFirstName({
        firstName: textValue,
        errorMessage:
          "Le prénom doit être supérieur ou égal à 3 caractères",
        isFirstNameValidate: false,
      });
    }
  };

  const handleLastNameChange = (event) => {
    const textValue = event.target.value;
    if (validateText(textValue)) {
      setLastName({
        lastName: textValue,
        errorMessage: "",
        isLastNameValidate: true,
      });
    } else {
      setLastName({
        lastName: textValue,
        errorMessage:
          "le nom doit être supérieur ou égal à deux 2 caractères",
        isLastNameValidate: false,
      });
    }
  };

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
    return !(email.isEmailValidate
        && password.isPasswordValidate
        && firstName.isFirstNameValidate
        && lastName.isLastNameValidate);
  };

  const handleSubmit = async () => {

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setLoading(true);

     AccountService.register(firstName, lastName, email, password)
        .then((result) => {
            if (!result.success){
              setError({...result.message})
              setLoading(false)
            } else {
              console.log(result)
              setLoading(false)
              setError({})
              const emailValue = result.data.email
              console.log(emailValue)
              navigate(`/account/email-sent-confirm/${emailValue}`);
            }
        })
  };

  return (
    <form className="space-y-2 w-full" noValidate={true}>
      {Object.values(error).map((value, index) => {
         return <p key={index} className="text-red-500 text-[15px] h-7 my-4">{value}</p>
      })}
      <div className="flex flex-col gap-1 w-full">
      <label className="text-sm" htmlFor="firstname">
          Prénom
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="ml-1 w-6 fill-transparent stroke-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
            </svg>
          </div>
          <input
              onChange={(event) => handleFirstNameChange(event)}
              value={firstName.firstName}
              ref={firstNameRef}
              className="w-full px-1 py-3 bg-amber-50 placeholder:text-base placeholder:text-gray-400 rounded-none pl-10 border border-gray-400 focus:border-green-300"
              name="firstname"
              type="text"
          />
        </div>
        <p className="text-[14px] h-7 text-red-500 font-medium">
          {firstName.errorMessage}
        </p>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm" htmlFor="lastname">
          Nom
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5}
                  stroke="currentColor" className="ml-1 w-6 fill-transparent stroke-gray-400">
               <path strokeLinecap="round" strokeLinejoin="round"
                     d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
             </svg>
           </div>
           <input
               onChange={(event) => handleLastNameChange(event)}
               value={lastName.lastName}
               ref={lastNameRef}
               className="w-full px-1 py-3 bg-amber-50 placeholder:text-base placeholder:text-gray-400 rounded-none pl-10 border border-gray-400 focus:border-green-300"
               name="lastname"
               type="text"
           />
         </div>
        <p className="text-[14px] h-7 text-red-500 font-medium">
          {lastName.errorMessage}
        </p>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm" htmlFor="email">
          Email
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
                className="w-full px-1 py-3 bg-amber-50 placeholder:text-base placeholder:text-gray-400 rounded-none pl-10 border border-gray-400 focus:border-green-300"
                name="email"
                type="email"
            />
         </div>
        <p className="text-[14px] h-7 text-red-500 font-medium">
          {email.errorMessage}
        </p>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm" htmlFor="password">{t("login_password_field_name")}</label>
         <div className="relative w-full">
           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                  stroke="currentColor" className="w-6 ml-1 fill-transparent stroke-gray-400">
               <path strokeLinecap="round" strokeLinejoin="round"
                     d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
             </svg>
           </div>
           <input
               onChange={(event) => validatePassword(event)}
               value={password.password}
               ref={passwordRef}
               className="w-full px-1 py-3 bg-amber-50 placeholder:text-base placeholder:text-gray-400 rounded-none pl-10 border border-gray-400 focus:border-green-300"
               name="password"
               type="password"
            />
         </div>
        <p className="text-[14px] h-7 my-4 text-red-500 font-medium">
          {password.errorMessage}
        </p>
      </div>
      <a
        className="text-sm py-2 underline text-green-800"
        href="/account/login"
      >
        se connecter ?
      </a>
      <button
        onClick={handleSubmit}
        type="button"
        disabled={isButtonDisabled()}
        className="bg-green-600 capitalize w-full flex flex-row items-center justify-center text-white px-1 py-3  text-base font-medium rounded-md disabled:bg-gray-200 disabled:text-black"
      >
        {loading ? <CircleAnimationIcon className="w-5" /> : "S'enregistrer"}
      </button>
    </form>
  );
}
