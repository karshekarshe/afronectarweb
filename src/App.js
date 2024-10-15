
import './App.css';
import "./i18n/config";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PasswordResetRequestPage from "./pages/PasswordResetRequestPage";
import ActivateAccountPage from "./pages/ActivateAccountPage";


function App() {
  return (
    <>
        <BrowserRouter>
              <Routes>
                <Route path="/account/login" element={<LoginPage />} />
                <Route path="/account/registration" element={<RegistrationPage />} />
                   <Route path="/account/password-reset" element={<PasswordResetRequestPage />} />
                <Route path="/users/activate/:uid/:token" element={<ActivateAccountPage />} />
              </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
