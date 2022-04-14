import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    console.log(tokenString);
    console.log(tokenString+"");
    console.log(tokenString+"" !== "undefined");



    if (tokenString+"" !== "undefined") {
      const userToken = JSON.parse(tokenString+"");
      console.log(userToken);
      return userToken || null;
    } else {
      return null;
    }
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken?.token || null);
  };

  return {
    setToken: saveToken,
    token
  }
}