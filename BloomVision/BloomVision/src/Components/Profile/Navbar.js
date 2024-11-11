import React from "react";
import { GiVanillaFlower } from "react-icons/gi";
import { TbAlphabetGreek } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function Navbar({ user }) {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <nav>
    <div className="navbar-container flex justify-between items-center p-4">
      <div className="flex items-center green font-semibold text-lg">
        <GiVanillaFlower className="mr-2 text-2xl" />
        <span>FloralDesignHub</span>
      </div>

      <div>
        <ul className="flex justify-center items-center gap-6 text-slate-600 text-base">
          <li>Overview</li>
          <li>Privacy and Terms</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div>
        {user ? (
          <TbAlphabetGreek size={30} className="green" />
        ) : (
          <button
            onClick={handleLogin}
            className="login-btn"
          >
            Login
          </button>
        )}
      </div>
    </div></nav>
  );
}

export default Navbar;

// import React from 'react';
// import { GiVanillaFlower } from "react-icons/gi";
// import { TbAlphabetGreek } from "react-icons/tb";
// import { useNavigate } from 'react-router-dom';
// import styles from './Navbar.module.css'; // Import CSS module

// function Navbar({ user }) {
//     const navigate = useNavigate();

//     function handleLogin(e) {
//         e.preventDefault();
//         navigate("/login");
//     }

//     return (
//         <div className="navbar-container flex justify-between items-center p-4 shadow-lg bg-white">
//             <div className="navbar-logo flex items-center text-green-600 font-semibold text-lg">
//                 <GiVanillaFlower className="mr-2 text-2xl" />
//                 <span>Floral Design Hub</span>
//             </div>

//             <div className="navbar-links">
//                 <ul className="flex justify-center items-center gap-6 text-slate-600 text-base">
//                     <li className="hover:text-green-600 transition">Overview</li>
//                     <li className="hover:text-green-600 transition">Privacy and Terms</li>
//                     <li className="hover:text-green-600 transition">FAQ</li>
//                 </ul>
//             </div>

//             <div className="navbar-user">
//                 {user ? (
//                     <TbAlphabetGreek size={30} className="text-green-600" />
//                 ) : (
//                     <button
//                         onClick={handleLogin}
//                         className="login-button bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
//                     >
//                         Login
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Navbar;

// // import React from 'react'
// // import { GiVanillaFlower } from "react-icons/gi";
// // import { useNavigate } from 'react-router-dom'
// // import { TbAlphabetGreek } from "react-icons/tb";

// // function Navbar({user}) {
// //   console.log(user,"user")
// //     const navigate=useNavigate()
// //     function handleLogin(e)
// //     {
// //   e.preventDefault()
// //    navigate("/login")
// //     }
// //   return (<>
// //     <div className='flex justify-between items-center'>
// //        <div className='flex green'> <div><GiVanillaFlower /></div>
// //          Floral Design Hub
// //        </div>
// //        <div >
// //         <ul className='flex justify-center items-center gap-6 text-slate-600'>
// //           <li>Overview</li>
// //           <li>Privacy and Terms</li>
// //           <li>FAQ</li>
// //         </ul>
// //        </div>

// //     <div >
// //    {user?<div><TbAlphabetGreek size={30}/></div>
// //     :<button onClick={handleLogin} className=' h-9  rounded-lg' >Login</button>
// //   }</div>

// //     </div> </>
// //   )
// // }

// // export default Navbar