import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
//import { AuthContext } from "../../App";
import img from "../assets/img.png";
const Login = ({handleLogin}) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    userError: "",
    passError: "",
  });

  //const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLoginClick = (e) => {
    e.preventDefault();
    handleLogin(loginData.username, loginData.password);
    navigate("/dashboard");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex">
      <div className="login-container">
        <div className="hub">
          <h2>
            <b>Welcome to FloralDesignHub</b>
          </h2>
          <h2 className="green">
            <b>Your Floral Design Assistant</b>
          </h2>
        </div>
        <div className="action-buttons">
          <button className="flex gap-2 bg-slate-900 mb-2 ml-11  ">
            <FcGoogle />
            Continue with Google
          </button>
          <span className="separator"> or </span>
          <form onSubmit={onLoginClick} className="flex flex-col gap-2 mt-2">
            <input
              type="text"
              name="username"
              value={loginData.username}
              placeholder="username"
              onChange={handleChange}
            />
            <p>{loginData.userError}</p>
            <input
              type="password"
              name="password"
              value={loginData.password}
              placeholder="password"
              onChange={handleChange}
            />
            <p>{loginData.passError}</p>
            <button type="submit" className="mt-4 w-[442px]">
              Continue with Username
            </button>
          </form>
        </div>
        <div className="hub">
          <p>
            Forgot your{" "}
            <Link to="/recoverUsername">
              <b>username</b>
            </Link>{" "}
            or{" "}
            <Link to="/recoverPassword">
              <b>password</b>
            </Link>
            ?
          </p>
        </div>
        <div className="hub">
          <p>
            Don't have an account?{" "}
            <Link to="/signup">
              <b>Sign up</b>
            </Link>
          </p>
        </div>
      </div>
      <img src={img} className="login-img  ml-[407px]" alt="Design" />
    </div>
  );
};

export default Login;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import img from "./assets/img.png";
// import { FcGoogle } from "react-icons/fc";

// const Login = ({ onLogin }) => {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: '',
//         userError: '',
//         passError: '',
//     });

//     const navigate = useNavigate();

//     const handleLogin = (e) => {
//         e.preventDefault();
//         const storedUsername = localStorage.getItem('username');
//         const storedPassword = localStorage.getItem('password');

//         if (formData.username !== storedUsername) {
//             setFormData((prev) => ({
//                 ...prev,
//                 userError: 'Username is not registered',
//                 passError: '',  // Reset passError if userError is set
//             }));
//         } else if (formData.password !== storedPassword) {
//             setFormData((prev) => ({
//                 ...prev,
//                 passError: "Password didn't match",
//                 userError: '',  // Reset userError if passError is set
//             }));
//         } else {
//             setFormData({
//                 username: '',
//                 password: '',
//                 userError: '',
//                 passError: '',
//             });
//             onLogin(formData.username, formData.password);
//             navigate('/dashboard');
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     return (
//         <div className="mt-20">
//             <div className="flex">
//                 <div className="text-left">
//                     <div className="ml-0 text-left">
//                         <h2><b>Welcome to FloralDesignHub</b></h2>
//                         <p className="text-xl text-green-600"><b>Your Floral Design Assistant</b></p>
//                     </div>
//                     <button className="flex gap-2 justify-center items-center bg-slate-900 text-white px-4 py-2 rounded-lg mb-5 mt-2 w-64">
//                         <FcGoogle />
//                         <span>Continue with Google</span>
//                     </button>
//                     <pre>or</pre>
//                     <div>
//                         <input
//                             type="text"
//                             name="username"
//                             value={formData.username}
//                             placeholder="Username"
//                             onChange={handleChange}
//                             className="mt-5 w-64 border border-gray-300 p-2 rounded-lg"
//                         />
//                         {formData.userError && <p style={{ color: 'red' }}>{formData.userError}</p>}
//                     </div>
//                     <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         placeholder="Password"
//                         onChange={handleChange}
//                         className="mt-5 w-64 border border-gray-300 p-2 rounded-lg"
//                     />
//                     {formData.passError && <p style={{ color: 'red' }}>{formData.passError}</p>}
//                     <br />
//                     <button
//                         type="submit"
//                         onClick={handleLogin}
//                         className="bg-green-600 text-white px-4 py-2 rounded-lg mt-4 mb-3 w-64"
//                     >
//                         Continue with Username
//                     </button>
//                     <br />
//                     <p>
//                         Forgot your <Link to="/recoverUsername"><b>username</b></Link> or <Link to="/recoverPassword"><b>password</b></Link>?
//                     </p>
//                     <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
//                 </div>
//                 <div>
//                     <img src={img} alt="Floral Design" width={460} height={460} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import img from "./assets/img.png"
// import { FcGoogle } from "react-icons/fc";

// const Login = ({onLogin}) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const[userError,setUserError]=useState("")
//     const[passError,setPassError]=useState("")

//     const navigate = useNavigate();
//     const handleLogin = (e) => {
//         e.preventDefault();
//         const storedUsername = localStorage.getItem('username');
//         const storedPassword = localStorage.getItem('password');
//         if (username !== storedUsername) {
//             setUserError('Username is not registered');
//         } else if (password !== storedPassword) {
//             setPassError('Password did'/'nt match');
//         } else {
//             setUserError("")
//             setPassError("")
//             onLogin(username, password);
//             navigate('/dashboard');
//         }
//     }
//     return (
//     <div className='mt-20 '>
// <div className='flex'>
//         <div className='text-left'>
//         <div className="ml-0 text-left">
//             <h2 ><b>Welcome to FloralDesignHub </b></h2>
//              <p className='text-xl green'> <b>Your Floral Design Assistant</b></p>
//             </div>
//             <button className='flex gap-2 justify-center items-center bg-slate-900 mb-5 mt-2 w-64' ><FcGoogle /><h4>
//  Continue with Google</h4></button>
//              <pre>            or    </pre>
//              <div>
//              <input type="text" value={username} placeholder='username' onChange={(e)=>setUsername(e.target.value)} className='mt-5 w-64'/> </div>
//              {userError && <p style={{color: 'red'}}>{userError}</p>}

//              <input type="text" className='mt-5 w-64' value={password} placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
//              {passError && <p style={{color: 'red'}}>{passError}</p>}
//              <br />
//              <button type='submit' onClick={handleLogin} className='mt-4 mb-3 w-64'>
//                 Continue with username</button> <br />
//                 <p>Forgot your <Link to="/recoverUsername"><b>username</b></Link> or <Link to="/recoverPassword">
//                 <b>Password</b></Link></p>
//                 <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
//         </div> <div>
//     <img src={img} alt="img"  width={460} size={460} /></div>
//         </div> <div/></div>
//     )}
// export default Login;
