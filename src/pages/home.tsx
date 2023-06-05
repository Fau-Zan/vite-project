import { useState, useEffect } from 'react';
import Layout from './layout';

const Homepage = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = checkAuthentication();
    setAuthenticated(isAuthenticated);
  }, []);

  const checkAuthentication = () => { 
    const isAuthenticated = true;
    return isAuthenticated;
  };

  const renderLayout = () => {
    return <Layout />
  };

  const renderHome = () => {
    if (!authenticated) {
      window.location.href = '/';
      return null;
    }

    return <h1>Welcome to Page 2</h1>;
  };

  return (
    <>
      {window.location.pathname === '/' ? renderLayout() : renderHome()}
    </>
  );
};

export default Homepage;
