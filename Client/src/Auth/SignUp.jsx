import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { Link } from "react-router-dom";

export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleCreateAccount = async (e) => {
        e.preventDefault();
        const formErrors = {};
        if (!firstName.trim()) {
            formErrors.firstName = 'First name is required.';
        }
        if (!lastName.trim()) {
            formErrors.lastName = 'Last name is required.';
        }
        if (!username.trim()) {
            formErrors.username = 'Username is required.';
        } else if (!/^[a-z0-9_]+$/.test(username)) {
            formErrors.username = 'Username can only contain lowercase letters, numbers, and underscores.';
        }
        if (!email.trim()) {
            formErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            formErrors.email = 'Invalid email address.';
        }
        if (!password.trim()) {
            formErrors.password = 'Password is required.';
        } else if (password.length < 8) {
            formErrors.password = 'Password must be at least 8 characters long.';
        }

        if (Object.keys(formErrors).length === 0) {
            const apiUrl = 'http://localhost:5000/auth';

            try {
                // Your fetch request here
                // ...

                if (response.ok) {
                    setShowSuccessMessage(true);
                    setShowErrorMessage(false);
                    if (response.status === 400) {
                        setShowErrorMessage(true);
                        setShowSuccessMessage(false);
                    } else if (response.status === 401) {
                    } else {
                        setShowErrorMessage(true);
                        setShowSuccessMessage(false);
                    }
                }
            } catch (error) {
                // Handle any other errors
                console.error('An error occurred:', error);
                setShowErrorMessage(true);
                setShowSuccessMessage(false);
            }
        } else {
            setShowErrorMessage(true);
            setShowSuccessMessage(false);
        }

        setErrors(formErrors);
    };

    return (
        <div className="bg-[#e7fdea] h-screen">
            <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 pt-10 mx-60 ">
                <div className="flex items-center space-x-2 text-[#f07167] text-sm">
                    <Link to="/" className="hover:underline text-green-950">Home</Link>
                    <span>
            <svg className="h-5 w-5 leading-none text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </span>
                    <Link to="/SignUp" className="hover:underline text-[#64ad99]">SignUp Page</Link>
                </div>
            </div>
        <div className="bg-[#e7fdea] min-h-screen flex flex-col items-center justify-center ">
            <div className="text-gray-500 rounded-3xl shadow-[#92e3a9] shadow-lg w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
                <div className="md:flex w-full">
                    <div className="hidden md:block w-1/2 py-10 px-10">
                        <img src={"https://i.ibb.co/PYMkZNC/Fingerprint-amico.png"} alt="logo" className="w-full"/>
                    </div>
                    <div className="w-full md:w-1/2 px-4 py-5 md:px-10">
                        <h2 className="mb-2 text-4xl font-bold text-[#92e3a9]">Sign Up</h2>
                        <p className="mb-2 block font-bold text-[#92e3a9]">
                            Have an account <Link to="/login" className="mx-3 text-xl text-green-800">Login?</Link>
                        </p>
                        <div className="text-[#64ad99]">
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-5">
                                    <label htmlFor="" className="text-[1rem] font-medium px-1">
                                        First name
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-0 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <AiOutlineUser className="text-green-800 text-lg"/>
                                        </div>
                                        <input
                                            type="text"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-[#64ad99] outline-none focus:border-green-800 bg-green-100 placeholder:text-green-600 placeholder:text-opacity-60"
                                            placeholder="John"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                                </div>
                                <div className="w-1/2 px-3 mb-5">
                                    <label htmlFor="" className="text-[1rem] font-medium px-1">
                                        Last name
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-0 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <AiOutlineUser className="text-green-800 text-lg"/>
                                        </div>
                                        <input
                                            type="text"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-[#64ad99] outline-none focus:border-green-800 bg-green-100 placeholder:text-green-600 placeholder:text-opacity-60"
                                            placeholder="Jobs"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label htmlFor="" className="text-[1rem] font-medium px-1">
                                        Username
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-0 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <AiOutlineUser className="text-green-800 text-lg"/>
                                        </div>
                                        <input
                                            type="text"
                                            className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-[#64ad99] outline-none focus:border-green-800 bg-green-100 placeholder:text-green-600 placeholder:text-opacity-60 ${
                                                errors.username ? 'border-red-500' : ''
                                            }`}
                                            placeholder="john111"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                    {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                                </div>
                            </div>
                            <div className="flex -mx-3 ">
                                <div className="w-full px-3 mb-5" >
                                    <label htmlFor="" className="text-[1rem] font-medium px-1">
                                        Email
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-0 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <AiOutlineMail className="text-green-800 text-lg"/>
                                        </div>
                                        <input
                                            type="email"
                                            className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-[#64ad99] outline-none focus:border-green-800 bg-green-100 placeholder:text-green-600 placeholder:text-opacity-60 ${
                                                errors.email ? 'border-red-500' : ''
                                            }`}
                                            placeholder="abcde3@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-12">
                                    <label htmlFor="" className="text-[1rem] font-medium px-1">
                                        Password
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-0 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <AiOutlineLock className="text-green-800 text-lg"/>
                                        </div>
                                        <input
                                            type="password"
                                            className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-[#64ad99] outline-none focus:border-green-800 bg-green-100 placeholder:text-green-500 placeholder:text-opacity-60 ${
                                                errors.password ? 'border-red-500' : ''
                                            }`}
                                            placeholder="************"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <button
                                        className={"block w-full max-w-xs mx-auto bg-[#64ad99] text-xl text-white rounded-lg px-3 py-3 font-semibold  focus:bg-[#001836] transition-all transform active:scale-95"}
                                        onClick={handleCreateAccount}
                                        disabled={!isEmailVerified}
                                    >
                                        Create Account
                                    </button>
                                </div>
                            </div>
                            {showErrorMessage && <p className="text-red-500 text-sm">Please fix the errors before submitting.</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
