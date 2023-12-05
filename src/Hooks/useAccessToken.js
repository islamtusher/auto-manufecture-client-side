import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../network/network';

const useAccessToken = (user) => {
    
    const [jwtAccessToken, setJwtAccessToken] = useState('')
    const email = user?.email
    const name = user?.displayName

    useEffect(() => {
        const updateUser = {
            email,
            name
        }
        
        if (user) {
            fetch(`${api}/user/${email}`, {
              method: "PUT",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(updateUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data[0]?.acknowledged === true) {
                  setJwtAccessToken(data[1]?.accessToken);
                  localStorage.setItem("accessToken", data[1]?.accessToken);
                } else {
                  toast.error("User Up-Seart Failed");
                }
              })
              .catch((err) => {
                toast.error("Something went wrong");
                console.log(err);
              });
        }
    }, [user, email, name])

    return [jwtAccessToken]
};

export default useAccessToken;