import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';


const Dashboard = () => {
    const [admin] = useAdmin()
    return (
        <div>
            <label for="my-drawer" class=" drawer-button lg:hidden ">
                <FontAwesomeIcon
                    className='btn bg-white border-none hover:bg-white hover:text-secondary text-primary' icon={faBars}>
                </FontAwesomeIcon>
            </label>
            <div class="drawer drawer-mobile">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                </div> 
                {/* <div class="drawer-content ">
                    <!-- Page content here -->
                    <Outlet></Outlet>
                </div>  */}
                <div class="drawer-side">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu overflow-y-auto w-60 bg-primary text-base-100 text-xl">
                   
                        {/* <!-- Sidebar content here --> */}
                        <h1 className=' text-center py-4 border-b-2 text-2xl font-bold text-black'>{admin ? 'Admin Penal' : 'User Dashboard'}</h1>
                        <li className=''> </li>
                        <li><Link className='focus:text-white focus:bg-black border-b-2 ' to='/dashboard'>My Profile</Link></li>
                        {
                            !admin &&
                            <>
                                <li><Link className='focus:text-white focus:bg-black border-b-2' to='/dashboard/mypurchases'>My Orders</Link></li>
                                <li><Link className='focus:text-white focus:bg-black border-b-2' to='/dashboard/addreviews'>Add A Review</Link></li>
                            </>        
                        }
                        {
                            admin &&
                            <>
                                <li><Link className='focus:text-white focus:bg-black border-b-2' to='/dashboard/makeadmin'>Manage Current Users</Link></li>
                                <li><Link className='focus:text-white focus:bg-black border-b-2' to='/dashboard/manageallorders'>Manage All Orders</Link></li>
                                <li><Link className='focus:text-white focus:bg-black border-b-2' to='/dashboard/addproduct'>Add New Product</Link></li>
                            </>
                        }
                    
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;