import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ResetPasswordMessage = () => {
  const location = useLocation();
  const { msg } = location.state || {};
  const navigate = useNavigate();

  return (
    <div className="resetP">
      <div className="m-200">
        <div className="ml-0">
          <h2 className="text-left">
            <b>Password Reset</b>
          </h2>
          <br />
          {msg && (
            <>
              <p>{msg}</p>
              <button
                className="mt-6 bg-slate-900 text-slate-50 mb-50 hover:bg-black"
                onClick={() => navigate("/resetPassword")}
              >
                <b>Reset Your Password</b>
              </button>
              <br />
              <br />
              <div className="mt-25">
                <p>
                  If you didn't request a password reset, you can safely ignore
                  this email.
                </p>
                <p>
                  Only a person with access to your email can reset your account
                  password.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordMessage;
