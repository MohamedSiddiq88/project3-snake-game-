import React, { Children, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Auth({children}) {
    const navigate = useNavigate();
    useEffect(() => {
        checkAuthentication();
      }, []);
    
      const checkAuthentication = () => {
        const isAuthenticated = !!localStorage.getItem('token');
        if (!isAuthenticated) {
          navigate('/login');
        }
      };
  return (
    <div className='auth-page'>
      {children}
    </div>
  )
}

export default Auth
