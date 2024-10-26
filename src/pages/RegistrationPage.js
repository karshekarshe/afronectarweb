import "../App";
import MenuLanguage from "../components/MenuLanguage";
import Logo from "../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import RegistrationForm from "../components/RegistrationForm";

export default function RegistrationPage() {
  const { t } = useTranslation();

  return (
    <div className="h-screen w-screen space-y-5 ">
      <nav className="w-full py-4 border border-gray-300">
        <div className="container mx-auto max-w-2xl">
          <div className="w-full flex flex-row items-center justify-between">
            <a
              className="text-[8px]  font-medium uppercase py-1 px-1 bg-green-800 text-white rounded-md hover:bg-green-600"
              href="/"
            >
              {t("back_home_button_name")}
            </a>
            <MenuLanguage />
          </div>
        </div>
      </nav>
      <div className="container mx-auto space-y-5 max-w-3xl">
        <div className="space-y-2 px-0 text-center md:text-left">
          <h1 className="font-bold">{t("login_title")}</h1>
          <p className="text-xs">{t("login_instruction")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <RegistrationForm />
          <div className="border border-white shadow-2xl max-w-sm md:max-w-xs flex flex-col justify-center gap-4 items-start px-4 py-4 max-h-[300px]">
            <img
              className="max-w-[100px] h-auto mx-auto"
              src={Logo}
              alt="logo"
            />
            <h2 className="text-sm">{t("registration_feature_title")}</h2>
            <p className="text-[13px] font-light text-justify  w-full">
              {t("registration_feature_description")}
            </p>
            <a
              aria-disabled={true}
              className="text-xs underline text-green-800"
              href="/account/registration"
            >
              {t("registration_feature_register_link_title")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
