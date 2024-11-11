import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecoverUsername = () => {
  const [state, setState] = useState({
    email: "",
  });
  const navigate = useNavigate();

  const handleRecoverUsername = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("email");
    const storedUsername = localStorage.getItem("username");

    let message;
    if (state.email === storedEmail) {
      message = `Hi, we received a request to recover your account username. The username associated with this email is ${storedUsername}.`;
    } else {
      message = "This email is not registered.";
    }
    navigate("/recoverUsernameMessage", { state: { message } });
  };

  return (
    <div className="recover-username">
      <div className="recover-username-header">
        <h2 className="text-left">
          <b>Recover Username</b>
        </h2>
        <p>
          <b>We'll send your username to your email</b>
        </p>
        <br />
      </div>{" "}
      <br />
      <form onSubmit={handleRecoverUsername}>
        <p>
          <b>What's your email?</b>
        </p>
        <input
          type="email"
          placeholder="example@email.com"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
        <button type="submit" className="w-[439px] h-[46px] mt-5">
          Send Username
        </button>
      </form>
    </div>
  );
};

export default RecoverUsername;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const RecoverUsername = () => {
//   const [state, setState] = useState({
//     email: '',
//     message: '',
//   });
//   const navigate = useNavigate();

//   const handleRecoverUsername = (e) => {
//     e.preventDefault();
//     const storedEmail = localStorage.getItem('email');
//     const storedUsername = localStorage.getItem('username');

//     if (state.email === storedEmail) {
//       setState({
//         ...state,
//         message: `Hi, we received a request to recover your account username. The username associated with this email is ${storedUsername}.`,
//         show: false,
//       });
//       console.log(state.message,"mess");
//     } else {
//       setState({
//         ...state,
//         message: 'This email is not registered.',
//         show: false,
//       });
//     }
//     navigate('/recoverUsernameMessage', { state: { message:state.message } });
//   };

//   return (
//     <div className='recover-username'>
//         <div className='recover-username-content'>
//           <div className='recover-username-header'>
//             <h2 className='text-left'>Recover Username</h2>
//             <p><b>We'll send your username to your email</b></p>
//           </div>
//           <form onSubmit={handleRecoverUsername}>
//             <p><b>What's your email?</b></p>
//             <input
//               type="email"
//               placeholder="example@email.com"
//               value={state.email}
//               onChange={(e) => setState({ ...state, email: e.target.value })}
//             />
//             <button type="submit" className='w-[439px] h-[46px] mt-5'>Send Username</button>
//           </form>
//         </div>
//     </div>
//   );
// };

// export default RecoverUsername;

// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // const RecoverUsername = () => {
// //     const navigate=useNavigate()
// //     const [state, setState] = useState({
// //         email: '',
// //         message: '',
// //         show: true
// //     });

// //     const handleRecoverUsername = (e) => {
// //         e.preventDefault();
// //         const storedEmail = localStorage.getItem('email');
// //         const storedUsername = localStorage.getItem('username');

// //         if (state.email === storedEmail) {
// //             setState({
// //                 ...state,
// //                 message: `Hi, we received a request to recover your account username. The username associated with this email is ${storedUsername}.`,
// //                 show: false
// //             });
// //         } else {
// //             setState({
// //                 ...state,
// //                 message: 'This email is not registered.',
// //                 show: false
// //             });
// //             navigate('/recoverUsernameMessage', { state: { message } });

// //         }
// //     };
// //      return (
// //         <>
// //             {state.show ? (
// //                 <div className='recover-username'>
// //                     <div className='recover-username-header'>
// //                     <h2 className='text-left'>Recover Username</h2>
// //                     <p><b>We'll send your username to your email</b></p>
// //                     </div>
// //                     <div>
// //                     <p><b>Whats your email?</b></p>
// //                     <form onSubmit={handleRecoverUsername}>
// //                     <input
// //                         type="email"
// //                         placeholder="example@email.com"
// //                         value={state.email}
// //                         onChange={(e) => setState({ ...state, email: e.target.value })}
// //                     /> </form>       </div>
// //                     <button type="submit"  className='w-[439px] h-[46px] mt-5'>Send Username</button>
// //                 </div>
// //             ) : (<>
// //                 <div className='account-recovery-header'>
// //                     <h2>Account Recovery</h2></div>
// //                     <div className='account-recovery'>
// //                     <p>{state.message}</p>
// //                 </div></>
// //             )}
// //         </>
// //     );
// // };

// // export default RecoverUsername;
