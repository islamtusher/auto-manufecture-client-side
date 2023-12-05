import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../additional/FirebaseConfig";

const useAdmin = () => {
  const [user] = useAuthState(auth);
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    fetch(`https://calm-retreat-24478.herokuapp.com/admin/${user?.email}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.isAdmin);
        setAdminLoading(false);
      });
  }, [user?.email]);

  return [admin, adminLoading];
};

export default useAdmin;
