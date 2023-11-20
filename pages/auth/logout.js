import { useEffect } from "react";

function Logout() {
  useEffect(() => {
    localStorage.removeItem("__smtb__id");
    localStorage.removeItem("__smtb__ud");
    window.location.replace("/auth/login");
  }, []);

  return <p></p>;
}

export default Logout;
