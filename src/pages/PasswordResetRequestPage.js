import React, { useRef, useEffect, useState } from "react";
import validator from "validator/es";
import Logo from "../assets/images/logo.png";
import "../App";
import instance from "../utils/Axios";
import { CircleAnimationIcon } from "./ActivateAccountPage";
import MenuLanguage from "../components/MenuLanguage";

export default function PasswordResetRequestPage() {
  const [email, setEmail] = useState({
    email: "",
    errorMessage: "",
    isEmailValidate: false,
  });
  const [passwordResetSubmitted, setPasswordResetSubmitted] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center  relative">
      {!passwordResetSubmitted ? (
        <div className="z-10 flex  flex-col items-start justify-start space-y-8 w-full sm:max-w-[300px] sm:border sm:border-gray-300 py-3 px-4">
          <div className="w-full flex flex-row items-center justify-between">
            <a
              className="text-[8px] font-light uppercase py-1 px-1 bg-gray-200 text-green-800 rounded-md hover:bg-gray-100"
              href="/"
            >
              retour home
            </a>
            <MenuLanguage />
          </div>
          <img className="max-w-[100px] h-auto mx-auto" src={Logo} alt="logo" />
          <div className="space-y-2">
            <h2 className="font-bold">Réinitialiser votre mot de passe</h2>
            <p className="text-xs">
              Entrez votre adresse email pour réinitialiser votre mot de passe.
            </p>
            <PasswordResetRequestForm
              email={email}
              setEmail={setEmail}
              setPasswordResetSubmitted={setPasswordResetSubmitted}
            />
          </div>
        </div>
      ) : (
        <PasswordResetRequestEmailSentConfirmation email={email} />
      )}
    </div>
  );
}

function PasswordResetRequestForm({
  email,
  setEmail,
  setPasswordResetSubmitted,
}) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const validateEmail = (event) => {
    const emailValue = event.target.value;
    if (validator.isEmail(emailValue)) {
      setEmail({
        ...email,
        email: emailValue,
        errorMessage: "",
        isEmailValidate: true,
      });
    } else {
      setEmail({
        ...email,
        email: emailValue,
        errorMessage: "Veuillez fournir un format d'e-mail correct",
        isEmailValidate: false,
      });
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const email = emailRef.current.value;
    try {
      const response = await instance.post("/auth/users/reset_password/", {
        email: email,
      });
      console.log(response);
      setError("");
      setLoading(false);
      setPasswordResetSubmitted(true);
    } catch (error) {
      setError(error.response.data);
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4 w-full" noValidate={true}>
      <p className="text-red-500 text-xs">{error}</p>
      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm" htmlFor="email">
          Email
        </label>
        <input
          onChange={(event) => validateEmail(event)}
          value={email.email}
          ref={emailRef}
          placeholder="name@example.com"
          className="flex-grow px-1 py-1 text-xs placeholder:text-xs rounded-md border border-gray-400 focus:border-green-300"
          name="email"
          type="email"
        />
        <p className="text-[8px] text-red-500 font-medium transition-all ease-out duration-150">
          {email.errorMessage}
        </p>
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        disabled={!email.isEmailValidate}
        className="bg-green-600 capitalize w-full flex flex-row items-center justify-center text-white px-1 py-1 transition-colors ease-out duration-300 text-sm rounded-md disabled:bg-gray-200 disabled:text-black"
      >
        {loading ? <CircleAnimationIcon className="w-5" /> : "réinitialiser"}
      </button>
      <hr className="border border-gray-100 w-full" />
      <div className="space-y-0">
        <a
          className="text-xs hover:text-green-800"
          href="/account/password-reset"
        >
          Mot de passe oublié ?
        </a>
        <p className="text-xs">
          Vous n'avez pas de compte ?
          <a
            className="hover:text-green-800  ml-2"
            href="/account/registration"
          >
            Inscrivez-vous
          </a>
        </p>
      </div>
    </form>
  );
}

function PasswordResetRequestEmailSentConfirmation({ email }) {
  return (
    <div className="h-screen w-screen flex flex-col justify-between items-center gap-4 py-8 relative sm:max-w-[400px] max-h-[300px] border border-gray-100">
      <div className="w-full flex flex-row items-center justify-between px-4">
        <a
          className="text-[8px]  font-light uppercase py-1 px-1 bg-gray-200 text-green-800 rounded-md hover:bg-gray-100"
          href="/"
        >
          retour home
        </a>
        <MenuLanguage />
      </div>
      <div className="justify-self-center">
        <img className="max-w-[100px] h-auto mx-auto" src={Logo} alt="logo" />
        <p className="text-xs md:text-sm text-center">
          Un lien de réinitialisation du mot de passe a été envoyé à l'adresse
          suivante{" "}
          <span className="text-green-800 font-medium">{email.email}</span>
        </p>
      </div>
    </div>
  );
}
