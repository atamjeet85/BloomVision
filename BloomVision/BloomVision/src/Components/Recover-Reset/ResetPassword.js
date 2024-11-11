import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
    msg: "",
  });

  const navigate = useNavigate();

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      setFormData((prev) => ({ ...prev, msg: "Passwords do not match." }));
    } else {
      localStorage.setItem("password", formData.newPassword);
      setFormData((prev) => ({ ...prev, msg: "Password updated." }));
      navigate("/login");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="resetPassword">
      <h2 className="text-left ml-5">Reset Password</h2>
      <form onSubmit={handlePasswordUpdate} className="mt-4">
        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={formData.newPassword}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Update Password</button>
      </form>
      {formData.msg && <p>{formData.msg}</p>}
    </div>
  );
};

export default ResetPassword;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ResetPassword = () => {
//   const [formData, setFormData] = useState({
//     newPassword: '',
//     confirmPassword: '',
//     message: '',
//   });

//   const navigate = useNavigate();

//   const handlePasswordUpdate = (e) => {
//     e.preventDefault();

//     if (formData.newPassword !== formData.confirmPassword) {
//       setFormData((prev) => ({
//         ...prev,
//         message: "Passwords do not match.",
//       }));
//     } else {
//       localStorage.setItem("password", formData.newPassword);
//       setFormData((prev) => ({
//         ...prev,
//         message: "Password has been successfully updated.",
//       }));
//       setTimeout(() => {
//         navigate("/login");
//       }, 1000);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="mt-52 w-72">
//       <h2 className="text-left"><b>Reset Password</b></h2>
//       <form onSubmit={handlePasswordUpdate} className="mt-4">
//         <label>Create New Password</label>
//         <input
//           type="password"
//           name="newPassword"
//           placeholder="New Password"
//           value={formData.newPassword}
//           onChange={handleChange}
//           className="border border-gray-300 p-2 rounded-lg w-full mt-2"
//         />
//         <label>Confirm Password</label>
//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           className="border border-gray-300 p-2 rounded-lg w-full mt-2"
//         />
//         <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg w-full mt-4">
//           Update Password
//         </button>
//       </form>
//       {formData.message && (
//         <p
//           className={`message mt-4 ${
//             formData.message.includes("successfully") ? "text-green-600" : "text-red-600"
//           }`}
//         >
//           {formData.message}
//         </p>
//       )}
//     </div>
//   );
// };

// export default ResetPassword;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ResetPassword = () => {
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handlePasswordUpdate = (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setMessage("Passwords do not match.");
//     } else {
//       localStorage.setItem("password", newPassword);
//       setTimeout(() => {
//         navigate("/login");
//       }, 1000);
//       setMessage("Password has been successfully updated.");
//     }
//   };

//   return (
//     <>
//     <div  className="mt-52 w-72">
//     <h2 className="text-left"><b>Reset Password</b></h2>

//       <form onSubmit={handlePasswordUpdate} className="mt-4" >
//         <label> Create new Password</label>
//         <input
//           type="password"
//           placeholder="New Password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//         />
//          <label> Confirm Password</label>
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//         <button type="submit">Update Password</button>
//       </form>
//       {message && (
//         <p
//           className={`message ${
//             message.includes("successfully") ? "success-message" : ""
//           }`}
//         >
//           {message}
//         </p>

//       )}
//     </div>
//     </>

//   );
// };

// export default ResetPassword;
