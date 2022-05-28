import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';


const Dashboard = () => {
    const [admin] = useAdmin()
    return (
        <div>
            <label for="my-drawer" class=" drawer-button">
                <FontAwesomeIcon
                    className='btn bg-white border-none rounded hover:bg-white hover:text-secondary hover:border-rounded-0 text-primary' icon={faBars}>
                </FontAwesomeIcon>
            </label>
            <div class="drawer">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                </div> 
                <div class="drawer-side">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        
                        <li><Link className='focus:text-white focus:bg-secondary' to='/dashboard'>My Profile</Link></li>
                        {
                            !admin &&
                            <>
                                <li><Link className='focus:text-white focus:bg-secondary' to='/dashboard/mypurchases'>My Orders</Link></li>
                                <li><Link className='focus:text-white focus:bg-secondary' to='/dashboard/addreviews'>Add A Review</Link></li>
                            </>        
                        }
                        {
                            admin &&
                            <>
                                <li><Link className='focus:text-white focus:bg-secondary' to='/dashboard/makeadmin'>Make Admin</Link></li>
                                <li><Link className='focus:text-white focus:bg-secondary' to='/dashboard/manageallorders'>Manage All Orders</Link></li>
                                <li><Link className='focus:text-white focus:bg-secondary' to='/dashboard/addproduct'>Add A Product</Link></li>
                                <li><Link className='focus:text-white focus:bg-secondary' to='/dashboard'>Manage Products</Link></li>
                            </>
                        }
                    
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;