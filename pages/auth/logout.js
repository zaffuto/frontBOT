import {useEffect} from 'react';

function Logout() {
  useEffect(() => {
    localStorage.removeItem('__mtp__id');
    localStorage.removeItem('__mtp__ud');
    window.location.replace('/auth/login');
  }, []);

  return <p></p>;
}

export default Logout;
