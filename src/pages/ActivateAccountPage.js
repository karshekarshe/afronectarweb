import "../App";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import instance from "../utils/Axios";
import LogoBun from "../assets/images/logo.png";

export default function ActivateAccountPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const { uid, token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const activateAccount = async () => {
      try {
        await instance.post("/auth/users/activation/", {
          uid,
          token,
        });
        return String("Votre compte a été activé");
      } catch (error) {
        return String(
          "Votre lien d'activation a expiré ou le compte a été activé.",
        );
      }
    };

    activateAccount().then((data) => setMessage(data));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [uid, token]);

  // Handler for back to login button
  const handleBackToLogin = () => {
    navigate("/account/login"); // Adjust this path to your login route
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center  relative">
      {loading ? (
        <CircleAnimationIcon />
      ) : (
        <div className="z-10 flex flex-col items-center justify-start space-y-8 max-w-md border border-gray-300 py-3 px-4">
          {/* Logo */}
          <img src={LogoBun} className="w-16 h-auto" alt="Logo Bun" />
          <p className="text-sm md:text-base capitalize font-medium">
            activez votre compte
          </p>
          <ActivationAccountMessage message={message} />
          <button
            onClick={handleBackToLogin}
            className="px-1 py-2 text-white text-xs bg-green-500 hover:bg-green-600 rounded-md shadow-md inline-flex items-center gap-2"
          >
            <BackIcon className="w-3 h-auto" />
            Retour à la connexion
          </button>
        </div>
      )}
    </div>
  );
}

function ActivationAccountMessage({ message }) {
  return (
    <div className="max-w-md text-center">
      <p className="text-base md:text-base font-medium text-red-500">
        {message}
      </p>
    </div>
  );
}

function BackIcon(prop) {
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
        d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
      />
    </svg>
  );
}

export function CircleAnimationIcon(prop) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ margin: "auto", display: "block" }}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      {...prop}
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  );
}
