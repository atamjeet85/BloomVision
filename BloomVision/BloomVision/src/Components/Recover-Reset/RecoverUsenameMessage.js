import React from 'react';
import { useLocation } from 'react-router-dom';

const RecoverUsernameMessage = () => {
  const location = useLocation();
  const { message } = location.state || {}; // Retrieve message from navigation state

  return (
    <div>
      <div className='account-recovery-header'>
        <h2>Account Recovery</h2>
      </div>    
      <div className='account-recovery'>
      <p>{message}</p>
    </div></div>
  );
};

export default RecoverUsernameMessage;
