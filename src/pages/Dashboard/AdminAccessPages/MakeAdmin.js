import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../additional/FirebaseConfig';

const MakeAdmin = () => {
    const [user, loading] = useAuthState(auth) // current User
    const navigate = useNavigate()

    // Load the Profile info
    const { data : users, isLoading, refetch } = useQuery(['usersData', user], () => 
    fetch(`http://localhost:5000/allusers`)
    .then(res => res.json())
    )
    console.log(users);
    const handleMakeAdmin = () => {
        
    }
    return (
        <div>
            <h1>Make Admin: {users?.length}</h1>
            <div className=" px-6 lg:px-20">
                <div class="overflow-x-auto w-full">
                    <table class="table lg:w-1/2 mx-auto border-collapse border border-primary">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th className='border border-primary px-1'>Index</th>
                                <th className='border border-primary'>User Info</th>
                                <th className='text-center border border-primary'>Manage Purchases</th>
                            </tr>
                        </thead>

                        <tbody>
                    {
                        users?.map((user, index) =>
                            <tr  key={user._id} >
                                <th className="border border-primary">{index + 1}</th>
                                <td className="border border-primary py-0">
                                    <div class=" flex flex-col justify-center items-start ">
                                        <h1>{user.email}</h1>
                                        <h1 class="font-bold ">{user.name}</h1>
                                    </div>
                                </td>
                                        
                                
                                <th className="border border-primary">
                                    <div class="flex justify-center">   
                                        {
                                            user?.role === "admin" ?
                                                <p className='text-xl text-secondary'>Admin</p>
                                                :
                                                <button
                                                    className=' className="btn p-2 bg-primary rounded border-2 border-primary hover:bg-white text-white hover:text-primary'>
                                                    Make Admin
                                                </button> 
                                        }   
                                    </div>
                                </th>
                            </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>                                
            </div>
        </div>
    );
};

export default MakeAdmin;