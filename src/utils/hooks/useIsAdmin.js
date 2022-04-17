import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const isAdmin = localStorage.getItem('isAdmin');
    // console.log(tokenString);
    // console.log(tokenString+"");
    // console.log(tokenString+"" !== "undefined");



    if (isAdmin+"" !== "undefined") {
      const roleToken = JSON.parse(isAdmin+"");
      // console.log(userToken);
      return roleToken || null;
    } else {
      return null;
    }
  };

  const [isAdmin, setIsAdmin] = useState(getToken());

  const saveToken = roleToken => {
    localStorage.setItem('isAdmin', JSON.stringify(roleToken));
    setIsAdmin(roleToken?.isAdmin || null);
  };

  return {
    setIsAdmin: saveToken,
    isAdmin
  }
}