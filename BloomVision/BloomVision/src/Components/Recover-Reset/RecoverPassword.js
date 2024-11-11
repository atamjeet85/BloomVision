import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const RecoverPassword = () => {
    const navigate=useNavigate();
    const [state, setState] = useState({
        email: '',
        message: '',
        show: true
    });

    const handleRecoverPassword = (e) => {
        e.preventDefault();
        const storedEmail = localStorage.getItem('email');

        if (state.email === storedEmail) {
            const message = (
                <div>
                    <b>
                        Hi {"name"},
                        <br />
                        We received a request to recover your password.
                        <br />
                        If you lost your password, please use the link below to reset it.
                    </b>
                </div>
            );
            setState({
                ...state,
                message: message,
                show: false
            });
        } else {
            setState({
                ...state,
                message: 'This email is not registered.',
                show: false
            });
        }
        navigate('/resetPassswordMessage', { state: { message } });
    };

    return (
                <div className="recoverPassword">
                    <div className="flex">
                        <form onSubmit={handleRecoverPassword} className="ml-0">
                            <h2 className="text-left"><b>Forgot Password</b></h2>
                            <p><b>You will receive a link to create a new password via email</b></p>
                            <p><b>What's your email?</b></p>
                            <input
                                type="email"
                                placeholder="example@email.com"
                                value={state.email}
                                onChange={(e) => setState({ ...state, email: e.target.value })}
                            />
                            <button type="submit">Send Recovery Email</button>
                        </form>
                    </div>
                </div>
            
    );
};

export default RecoverPassword;







// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// const RecoverPassword = () => {
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const[show,setShow]=useState(true)
//     const navigate=useNavigate()
//     const handleRecoverPassword = (e) => {

//         e.preventDefault();
//         const storedEmail = localStorage.getItem('email');
//         if (email === storedEmail) {
//             const message = (
//                 <div><b>
//                   Hi {"name"},
//                   <br />
//                   We received a request to recover your password. <br />
//                   If you los password,please use the link below to reset your password.
//                   </b></div>
//               );
//             setMessage(message);
//         } else {
//             setMessage('This email is not registered.');
//         }
//         setShow(!show)
//     };
//     return (<div>
//     { show?
//         <div className='recoverPassword'>
//             <div>
//             <div  className='flex'>
//             <form onSubmit={handleRecoverPassword} className="ml-0">
//             <h2 className='text-left'><b>Forgot Password</b></h2>
//             <p><b>You will receive a link to create a new password via email</b></p>
//                 <p><b>What's your email?</b></p>
//                 <input
//                     type="email"
//                     placeholder="example@email.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <button type="submit" >Send Recovery Email</button>
//             </form> </div></div> </div>
//        :(<div className=' resetP'>
//         <div className='m-200'>

//         <div className='ml-0'>
//         <h2 className='text-left'><b> Password Reset</b></h2>
//         <br />
//              {message && <><p>{message}</p>

//              <button className='mt-6 bg-slate-900 text-slate-50 mb-50 hover:bg-black' onClick={()=>{
//                 navigate("/resetPassword")
//              }}>
//                 <b>Reset Your Password</b></button>
//                 <br />
//                 <br />
//          <div className='mt-25'>
//             <div>
//              <p>If you didn't request a password reset,you can safely ignore this email.</p>
//              <p>Only a person with access to your email can reset your account password</p>
//              </div></div>
//              </>}             </div>
//         </div>
//         </div>)
//         }  </div>

//     );
// };
// export default RecoverPassword;

