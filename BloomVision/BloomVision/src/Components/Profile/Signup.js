import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import img1 from "../assets/img1.png";

const Signup = () => {
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        errorMessage: ''
    });
    const navigate = useNavigate();
 localStorage.clear()
    const handleSignup = (e) => {
        e.preventDefault();

        if (state.password !== state.confirmPassword) {
            setState({ ...state, errorMessage: 'Passwords do not match.' });
            return;
        }

        localStorage.setItem('username', state.username);
        localStorage.setItem('password', state.password);
        localStorage.setItem('email', state.email);
        setState({ ...state, errorMessage: '' });
        navigate('/login');
    };

    return (         
        <div>
          <div className='flex mt-32 ml-44'>
            <div className="signup-container" >
                <div>
                <div >
                <h2 className='text-left ml-6 mb-7'><b>
                Let's create your account</b></h2></div>
                <form onSubmit={handleSignup}>
                    <label>
                        Choose your username                    </label>

                        <input
                            type="text"
                            placeholder="Username"
                            value={state.username}
                            onChange={(e) => setState({ ...state, username: e.target.value })}
                            required
                        />
                    <label>Your email </label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={state.email}
                            onChange={(e) => setState({ ...state, email: e.target.value })}
                            required
                        />
                    <label>
                        Create Password </label>
                        <input
                            type="password"
                            placeholder="Create password"
                            value={state.password}
                            onChange={(e) => setState({ ...state, password: e.target.value })}
                            required
                        />
                    <label>
                        Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            value={state.confirmPassword}
                            onChange={(e) => setState({ ...state, confirmPassword: e.target.value })}
                            required
                        />
                    {state.errorMessage && <p style={{ color: 'red' }}>{state.errorMessage}</p>}
                   
                   <div className='action-buttons'>
                    <button type="submit" className='mt-3 ml-9'>
                        Continue with Username</button>
                
                        <span className="separator">or</span>
                    <button type="button" className="google-btn mt-3 ml-9">
                        <FcGoogle /> Continue with Google
                    </button>
                     </div>
                </form></div></div>

             <div>
                <img src={img1} alt="Signup Image" className="signup-image" />
        </div>   
        </div>
        </div> 
    );
};

export default Signup;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FcGoogle } from "react-icons/fc";
// import img1 from "./assets/img1.png"
// const Signup = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const navigate = useNavigate();
//     const handleSignup = (e) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             setErrorMessage('Passwords do not match.');
//             return;
//         }
//         localStorage.setItem('username', username);
//         localStorage.setItem('password', password);
//         localStorage.setItem('email', email);
//         setErrorMessage('');
//         navigate('/login');
//     };
    
//     return (
//         <>
//             <h2 className='text-left mt-12'> <b>Let's create your account
//             </b>
//             </h2>
//             <div className="flex">
//                 <div className="flex text-left">
//                     <form onSubmit={handleSignup}>
//                         <label htmlFor="username">
//                             Choose your username                        </label>

//                             <input
//                                 type="text"
//                                 placeholder="Username"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 required
//                             />
//                         <label htmlFor="email">
//                             Your email                        </label>
//                             <input
//                                 type="email"
//                                 placeholder="Email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                         <label htmlFor="password">
//                             Password                        </label>
//                             <input
//                                 type="password"
//                                 placeholder="Create password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                             />
//                         <label htmlFor="confirmPassword">
//                             Confirm Password  </label>
//                             <input
//                                 type="password"
//                                 placeholder="Confirm your password"
//                                 value={confirmPassword}
//                                 onChange={(e) => setConfirmPassword(e.target.value)}
//                                 required
//                             />
//                         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//                         <button type="submit" className='flex gap-2 justify-center items-center'>Continue with Username</button>
//                         <pre>               or         </pre>
//                         <button type="button" className="bg-slate-950 flex gap-2 justify-center items-center hover:bg-slate-900">
//                             <FcGoogle /> Continue with Google
//                         </button>
//                     </form>
//                 </div>
//                 <img src={img1} alt="Signup visual" width={560} height={560} />
//             </div>
//         </>
//     );
// };
// export default Signup;



// {/*
//   <>       
//          <h2 className='text-left'>Lets create your account</h2>
//         <div className='flex'>
//         < div className="text-left">
//             <label htmlFor="username">
//                 Choose your username</label>
//                 <input
//                     type="text"
//                     placeholder="username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//  <label htmlFor="email">  Your email</label>
//                 <input
//                     type="text"
//                     placeholder="username"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />

//                 <label htmlFor="password">
//             Password</label>
//                 <input
//                     type="password"
//                     placeholder="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
// <label>  Confirm Password</label>
// <input
//         type='password'
//         placeholder="Confirm your password" value={password} onChange={(e) => setPassword(e.target.value)}/>

//                  <br />
//                 <button type="submit">Continue with username</button>
//                 <pre>        or       </pre>
//                 <button type="submit" className="bg-slate-900 flex justify-between " onClick={handleSignup}>
//                 <FcGoogle /> Continue with Google
//                 </button>
//                 </div>               
             
//                 <div>
//                     <img src={img1} width={200} height={200}alt="image "/>
//                     </div>               
//                     </div>               
//                  </>
// */}