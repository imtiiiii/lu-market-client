import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

const UserProvider = ({ children }) => { // Note: children should be wrapped with a function
  axios.defaults.withCredentials = true;
  const [userLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState(null);

  const checkUser = async () => {
    setUserLoading(true);
    try {
      const res = await axios.get('http://localhost:3333/auth/getUser');
      setUser(res.data);
    } catch (error) {
      setUser(null);
    }
    setUserLoading(false);
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <UserContext.Provider value={{ userLoading, user }}>
      {typeof children === 'function' ? children() : children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
