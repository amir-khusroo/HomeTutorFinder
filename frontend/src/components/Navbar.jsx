import React from 'react'
import { Link, NavLink, useNavigate} from 'react-router-dom'
import LoginLogoutButton from './LoginLogoutButton';
import axios from 'axios';
import { toast } from 'react-toastify';
import logo from './assets/logo.jpg';
const API_URL = import.meta.env.VITE_API_URL;

const Navbar=()=> {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
          await axios.post(`${API_URL}/tutor/logout`).then((res) => {
            toast.success(res.data.message)
            console.log(res.data.message);
          })
    
          navigate('/');
        } catch (err) {
          console.error(err.response.data.msg);
          toast.error(err.response.data.msg);
          navigate('/tutor/login');
        }
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                        <i className='text-2xl'>HomeTutorFinder</i>

                    </Link>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 text-lg"
                        id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/post"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Post
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/createpost"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Create Post
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/findTutor"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Find Tutors
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <LoginLogoutButton />

                        <button 
                        onClick={handleLogout}
                        className="text-gray-800 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none border border-blue-800"
                        >
                            Log out
                        </button>

                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar