import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { Link } from "react-router-dom";

export function SignUp() {
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
        <div className="bg-[#fcf4f3]  min-h-screen flex items-center justify-center px-5 py-5 ">
            <div className="text-gray-500 rounded-3xl shadow-gray-300 shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
                <div>
                    <div className="w-full md:w-1/2 px-4 py-5 md:px-10">
                        <h2 className="mb-2 text-4xl font-bold text-[#f07167] ">Sign Up</h2>
                        <p className="mb-2 block font-bold text-[#f07167] ">
                            Have an account <Link to="/login" className="mx-3 text-xl text-[#001836]">Login?</Link>
                        </p>
                        <div className="text-[#f07167]">
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-5">
                                    <label htmlFor="" className="text-[1rem] font-medium px-1">
                                        First name
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-0 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <AiOutlineUser className="text-[#f07167] text-lg"/>
                                        </div>
                                        <input
                                            type="text"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#001836]"
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
                                            <AiOutlineUser className="text-[#f07167] text-lg"/>
                                        </div>
                                        <input
                                            type="text"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#001836]"
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
                                            <AiOutlineUser className="text-lg"/>
                                        </div>
                                        <input
                                            type="text"
                                            className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#001836] ${
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
                                            <AiOutlineMail className="text-lg"/>
                                        </div>
                                        <input
                                            type="email"
                                            className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#001836] ${
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
                                            <AiOutlineLock className="text-[#f07167] text-lg"/>
                                        </div>
                                        <input
                                            type="password"
                                            className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#001836] ${
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
                                        className={"block w-full max-w-xs mx-auto bg-[#f07167] text-xl text-white rounded-lg px-3 py-3 font-semibold hover:bg-[#00295c] focus:bg-[#001836] transition-all transform active:scale-95"}
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
    );
}
