import React from 'react';
import { ReactTyped } from "react-typed";
import { useState } from 'react';
import { toast } from 'react-toastify';

const Home = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleOnChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("currently not working")
        setFormData({
            email: "",
            password: "",
        })
    }
    return (
        <>
            <div className="w-full bg-slate-300 min-h-full flex items-center justify-center p-9">
                <div className="text-center text-lg" >
                    <ReactTyped className='text-3xl text-black' strings={["Welcome to Admin Module"]} typeSpeed={100} loop={true} backSpeed={50} />
                </div>
            </div>
            <div className="min-h-screen flex flex-col items-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                type="text"
                                name='email'
                                value={formData.email}
                                onChange={handleOnChange}
                                placeholder="Email or Username"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name='password'
                                value={formData.password}
                                onChange={handleOnChange}
                                placeholder="Password"
                                required
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Home;