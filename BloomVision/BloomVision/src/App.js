import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import Layout from "./Components/Routes/Layout";

export const AuthContext = createContext();

function App() {
  const [authData, setAuthData] = useState({ user: null });

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setAuthData({ user: JSON.parse(savedUser) });
    }
  }, []);

  const handleLogin = (username, password) => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      const userData = { username };
      localStorage.setItem("user", JSON.stringify(userData));
      setAuthData({ user: userData });
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <AuthContext.Provider value={{ authData }}>
      <Router>
        <Layout authData={authData} handleLogin={handleLogin} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Profile/Navbar";
// import { useEffect, useState, createContext } from "react";
// import Dashboard from "./Components/Profile/Dashboard";
// import Login from "./Components/Profile/Login";
// import Signup from "./Components/Profile/Signup";
// import RecoverPassword from "./Components/Recover-Reset/RecoverPassword";
// import RecoverUsername from "./Components/Recover-Reset/RecoverUsername";
// import RecoverUsernameMessage from "./Components/Recover-Reset/RecoverUsenameMessage"
// import ResetPassword from "./Components/Recover-Reset/ResetPassword";
// import ErrorPage from "./Components/Profile/ErrorPage";
// import { useLocation } from "react-router-dom";
// export const AuthContext = createContext();
// function App() {
//   const [authData, setAuthData] = useState({ user: null });
//   const location = useLocation();
//   const showNavbar = [
//     "/dashboard",
//     "/login",
//     "/signup",
//     "/recoverUsername",
//     "/recoverPassword",
//   ].includes(location.pathname);
//   useEffect(() => {
//     const savedUser = localStorage.getItem("user");
//     if (savedUser) {
//       setAuthData({ user: JSON.parse(savedUser) });
//     }
//   }, []);

//   const handleLogin = (username, password) => {
//     const storedUsername = localStorage.getItem("username");
//     const storedPassword = localStorage.getItem("password");

//     if (username === storedUsername && password === storedPassword) {
//       const userData = { username };
//       localStorage.setItem("user", JSON.stringify(userData));
//       setAuthData({ user: userData });
//     } else {
//       alert("Invalid credentials");
//     }
//   };
//   return (
//     <AuthContext.Provider value={{ authData }}>
//       <Router>
//         <Navbar user={authData.user} />
//         <Routes>
//           <Route path="/" element={<Login onLogin={handleLogin} />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/recoverUsername" element={<RecoverUsername />} />
//           <Route path="/recoverUsernameMessage"element={<RecoverUsernameMessage />} />
//           <Route path="/recoverPassword" element={<RecoverPassword />} />
//           <Route path="/resetPassword" element={<ResetPassword />} />
//           <Route path="/*" element={<ErrorPage />} />
//         </Routes>
//       </Router>
//     </AuthContext.Provider>
//   );
// }

// export default App;

// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import { useEffect, useState } from 'react';
// import Dashboard from './Components/Dashboard';
// import Login from './Components/Login';
// import Signup from './Components/Signup';
// import RecoverPassword from './Components/RecoverPassword';
// import RecoverUsername from './Components/RecoverUsername';
// import ResetPassword from "./Components/RecoverPassword";

// function App() {
//   const [authData, setAuthData] = useState({
//     user: null,
//     username: null,
//     password: null,
//   });

//   useEffect(() => {
//     const savedUser = localStorage.getItem("user");
//     if (savedUser) {
//       setAuthData((prev) => ({
//         ...prev,
//         user: JSON.parse(savedUser),
//       }));
//     }
//   }, []);

//   const handleLogin = (username, password) => {
//     const savedUsername = localStorage.getItem('username');
//     const savedPassword = localStorage.getItem('password');

//     if (username === savedUsername && password === savedPassword) {
//       const userData = { username };
//       localStorage.setItem('user', JSON.stringify(userData));
//       setAuthData({
//         user: userData,
//         username,
//         password,
//       });
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="App">
//       <Router>
//         <Navbar user={authData.user} />
//         <Routes>
//           <Route path="/" element={<Login onLogin={handleLogin} />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/recoverUsername" element={<RecoverUsername />} />
//           <Route path="/recoverPassword" element={<RecoverPassword />} />
//           <Route path="/resetPassword" element={<ResetPassword />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
