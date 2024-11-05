import "./App.css";
import "./i18n/config";
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";
import createRefresh from "react-auth-kit/createRefresh";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PasswordResetRequestPage from "./pages/PasswordResetRequestPage";
import ActivateAccountPage from "./pages/ActivateAccountPage";
import ProductsPage from "./pages/ProductsPage";
import IndexPage from "./pages/IndexPage";
import DelayedFallback from './components/DelayedFallback'
import instance from "./utils/Axios";



const refresh = createRefresh({
  interval: 10,
  refreshApiCallback: async (param) => {
    try {
      const response = await instance.post("auth/jwt/refresh/", param, {
        headers: { Authorization: `JWT ${param.authToken}` },
      });
      return {
        isSuccess: true,
        newAuthToken: response.data.token,
        newAuthTokenExpireIn: 10,
        newRefreshTokenExpiresIn: 60,
      };
    } catch (error) {
      console.error(error);
      return {
        isSuccess: false,
      };
    }
  },
});

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: false,
  refresh: refresh,
});

function App() {
  return (
      <Suspense fallback={<DelayedFallback />}>
        <AuthProvider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="" element={<IndexPage />} />
              <Route path="/products/" element={<ProductsPage />} />
              <Route path="/account/login" element={<LoginPage />} />
              <Route
                path="/account/registration"
                element={<RegistrationPage />}
              />
              <Route
                path="/account/password-reset"
                element={<PasswordResetRequestPage />}
              />
              <Route
                path="/users/activate/:uid/:token"
                element={<ActivateAccountPage />}
              />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </Suspense>
  );
}

export default App;
