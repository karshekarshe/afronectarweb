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
import BlogPage from "./pages/BlogPage";
import ArticlePage from "./pages/ArticlePage";
import DelayedFallback from './components/DelayedFallback'
import instance from "./utils/Axios";
import ActiveAccountEmailConfirmation from "./pages/ActivateAccountEmailConfirmation";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";



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
              <Route path="/" element={<IndexPage />} />
              <Route path="/products">
                <Route path="" element={<ProductsPage />} />
                <Route path=":slug" element={<ProductDetailPage />} />
              </Route>
              <Route path="/contact/" element={<ContactPage />} />
               <Route path="/blog">
                  <Route path="articles" element={<BlogPage />} />
                  <Route path="article/:slug" element={<ArticlePage />} />
              </Route>
            <Route path="/account">
              <Route path="login" element={<LoginPage />} />
              <Route path="registration" element={<RegistrationPage />} />
              <Route path="password-reset" element={<PasswordResetRequestPage />} />
              <Route path="email-sent-confirm/:email" element={<ActiveAccountEmailConfirmation />} />
              <Route path="activate/:uid/:token" element={<ActivateAccountPage />} />
            </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </Suspense>
  );
}

export default App;
