import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useAccessToken = (user) => {
    const [jwtAccessToken, setJwtAccessToken] = useState('')
    const email = user?.email
    const name = user?.displayName

    useEffect(() => {
        const updateUser = {
            email: email,
            name: name
        }
        console.log(updateUser);

        if (user) {
            fetch(`https://calm-retreat-24478.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'Content-type':'application/json'
                },
                body: JSON.stringify(updateUser)
            })
                .then(res => res.json())
                .then(data => {
                    if (data[0]?.acknowledged === true) {
                        setJwtAccessToken(data[1]?.accessToken)
                        localStorage.setItem('accessToken', data[1]?.accessToken)
                    }
                    else {
                        toast('User Up-Seart Faild')
                    }
                    
            })
        }
    }, [user, email, name])


    return [jwtAccessToken]
};

export default useAccessToken;