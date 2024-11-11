import React,{useContext} from "react";
import Navbar from "../Profile/Navbar";
import Dashboard from "../Profile/Dashboard";
import Login from "../Profile/Login";
import Signup from "../Profile/Signup";
import RecoverPassword from "../Recover-Reset/ResetPassword";
import RecoverUsername from "../Recover-Reset/RecoverUsername";
import RecoverUsernameMessage from "../Recover-Reset/RecoverUsenameMessage";
import ResetPassword from "../Recover-Reset/ResetPassword";
import ResetPasswordMessage from "../Recover-Reset/ResetPasswordMessage"
import ErrorPage from "../Profile/ErrorPage";
import { Routes,Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
//import { AuthContext } from "../../App";

function Layout({authData,handleLogin}) {
    const location = useLocation();
    //const { authData } = useContext(AuthContext);

    const showNavbar = ["/",
      "/dashboard",
      "/login",
      "/signup",
      "/recoverUsername",
      "/recoverPassword","/resetPassword",
    ].includes(location.pathname);

    return (
      <>
        {showNavbar && <Navbar user={authData.user} />}
        <Routes>
          <Route path="/" element={<Login handleLogin={handleLogin} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recoverUsername" element={<RecoverUsername />} />
          <Route path="/recoverUsernameMessage" element={<RecoverUsernameMessage />} />
          <Route path="/recoverPassword" element={<RecoverPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/resetPasswordMessage" element={<ResetPasswordMessage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </>
    );
  };
  export default Layout;