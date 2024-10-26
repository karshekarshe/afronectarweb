import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import validator from "validator/es";
import instance from "../utils/Axios"
import useSignIn from "react-auth-kit/hooks/useSignIn";
import {CircleAnimationIcon} from "../pages/ActivateAccountPage";


export default  function LoginForm() {
    const [email, setEmail] = useState({email: '', errorMessage: '', isEmailValidate: false})
    const [password, setPassword] = useState({password: '', errorMessage: '', isPasswordValidate: false})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const emailRef = useRef(null);
    const passwordRef = useRef(null)
    const {t} = useTranslation()
    //const signIn = useSignIn();

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    const validateEmail = (event) => {
        const emailValue = event.target.value
        if (validator.isEmail(emailValue)) {
            setEmail({
                email: emailValue,
                errorMessage: '',
                isEmailValidate: true
            })

        } else {
            setEmail({
                email: emailValue,
                errorMessage: 'Veuillez fournir un format d\'e-mail correct',
                isEmailValidate: false
            });
        }
    }



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
    try {
      const response = await instance.post("/auth/jwt/create", {
        email: email,
        password: password,
      });
      setError("");
      setLoading(false);
    } catch (error) {
      setError(t('login_error_message'));
      setLoading(false);
    }
  };


  return (
    <form className="space-y-2 w-full" noValidate={true}>
      <p className="text-red-500 text-xs">{error}</p>
      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm" htmlFor="email">
          {t("login_email_field_name")}
        </label>
        <input
          onChange={(event) => validateEmail(event)}
          value={email.email}
          ref={emailRef}
          placeholder="name@example.com"
          className="flex-grow px-1 py-1 text-xs placeholder:text-[10px] placeholder:text-black rounded-md border border-gray-400 focus:border-green-300"
          name="email"
          type="email"
        />
        <p className="text-[8px] text-red-500 font-medium">
          {email.errorMessage}
        </p>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="password">{t("login_password_field_name")}</label>
        <input
          onChange={(event) => validatePassword(event)}
          value={password.password}
          ref={passwordRef}
          placeholder="*************"
          className="w-full px-1 py-1 text-xs  placeholder:text-[10px] placeholder:text-black rounded-md border border-gray-400"
          name="password"
          type="password"
        />
        <p className="text-[8px] text-red-500 font-medium">
          {password.errorMessage}
        </p>
      </div>
      <a
        className="text-xs underline text-green-800"
        href="/account/password-reset"
      >
        {t("login_forgotten_link_name")}
      </a>
      <button
        onClick={handleSubmit}
        type="button"
        disabled={isButtonDisabled()}
        className="bg-green-600 capitalize w-full flex flex-row items-center justify-center text-white px-1 py-1  text-sm rounded-md disabled:bg-gray-200 disabled:text-black"
      >
        {loading ? (
          <CircleAnimationIcon className="w-5" />
        ) : (
          t("login_button_name")
        )}
      </button>
    </form>
  );
}
