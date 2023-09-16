import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import {BiSearchAlt} from "react-icons/bi";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const toggleSearch = () => {
        setSearchOpen(!isSearchOpen);
    }
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <navbar>
            <nav className="flex justify-between items-center py-4 md:py-8 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24">
                <button
                    className={`mt-8 block md:hidden relative z-30 focus:outline-none transform -translate-x-1/2 -translate-y-1/2 active:scale-75 transition-transform ${
                        isMenuOpen ? '' : ''
                    }`}
                    onClick={toggleMenu}
                >
                    {isMenuOpen?  <FaTimes className="h-6 w-6 text-4xl inline-flex"/> : <GiHamburgerMenu className="h-6 w-6 text-4xl inline-flex" />}

                </button>
                <a href="#" className="text-3xl md:text-4xl font-bold tracking-wide">
                    <span className="text-green-600">Eco</span><span className = "text-blue-500">Metrics</span>
                </a>
                <div
                    className={`menu-responsive fixed flex inset-0 transition-all bg-white/70 backdrop-blur-xl z-20 ${
                        isMenuOpen ? 'block' : 'hidden md:static md:bg-transparent md:flex'
                    } items-center justify-center space-y-8 md:space-y-0 flex-col md:flex-row md:space-x-8 -mt-56 md:mt-0`}
                >
                    <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8">
                        <li className="text-lg md:text-base lg:text-lg font-medium group">
                            <NavLink to="/" className={({ isActive }) => `text-lg md:text-base lg:text-lg ${isActive ? "text-green-500" : "text-gray-700"} font-medium group`}>Home</NavLink>
                            <div className={`h-0.5  "bg-green-500 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"}`}></div>
                        </li>
                        <li className="text-lg md:text-base lg:text-lg font-medium group">
                            <NavLink to="/Analysis" className={({ isActive }) => `text-lg md:text-base lg:text-lg ${isActive ? "text-green-500" : "text-gray-700"} font-medium group`}>Analysis</NavLink>
                            <div className={({ isActive }) => {`h-0.5 ${isActive ? "bg-green-500" : "bg-green-500 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"}`}}></div>
                        </li>
                        <li className="text-lg md:text-base lg:text-lg font-medium group">
                            <NavLink to="/Prevention" className={({ isActive }) => `text-lg md:text-base lg:text-lg ${isActive ? "text-green-500" : "text-gray-700"} font-medium group`}>Prevention</NavLink>
                            <div className={({ isActive }) => {`h-0.5 ${isActive ? "bg-green-500" : "bg-green-500 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"}`}}></div>
                        </li>
                        <li className="text-lg md:text-base lg:text-lg font-medium group">
                            <NavLink to="/ChatBot" className={({ isActive }) => `text-lg md:text-base lg:text-lg ${isActive ? "text-green-500" : "text-gray-700"} font-medium group`}>ChatBot</NavLink>
                            <div className={({ isActive }) => {`h-0.5 ${isActive ? "bg-green-500" : "bg-green-500 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"}`}}></div>
                        </li>
                        <li className="text-lg md:text-base lg:text-lg font-medium group">
                            <NavLink to="/about" className={({ isActive }) => `text-lg md:text-base lg:text-lg ${isActive ? "text-green-500" : "text-gray-700"} font-medium group`}>About Us</NavLink>
                            <div className={({ isActive }) => {`h-0.5 ${isActive ? "bg-green-500" : "bg-green-500 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"}`}}></div>
                        </li>
                        <li className="text-lg md:text-base lg:text-lg font-medium group flex-end ">
                            <button className = "bg-green-500 p-3 rounded-2xl">
                                <NavLink to="/login" className={`text-lg md:text-base lg:text-lg  font-medium group text-white font-bold`}>Login</NavLink>
                            </button>
                        </li>
                    </ul>
                </div>
                <button
                    className=" flex justify-center items-center h-12 px-5 font-medium text-gray-100 bg-green-500 whitespace-nowrap hover:bg-green-600 hover:text-white
    rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 focus:outline-none"
                    onClick={toggleSearch}
                >
                    <BiSearchAlt className={"text-4xl"}/>
                </button>
            </nav>
            <div
                className={` ${isSearchOpen?'':"hidden"}  flex items-center space-x-4 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24 transform duration-500 transition-all ${
                    isMenuOpen ? 'mt-16' : ''
                }`}
            >
                <div className="flex  p-2 w-full border border-green-600 space-x-2 rounded-lg items-center">
                    <BiSearchAlt className = "text-2xl text-green-600"/>
                    <input
                        className="w-full  outline-none border-transparent focus:border-transparent focus:ring-0 rounded-lg text-sm sm:text-base placeholder-blue-500"
                        type="text"
                        placeholder="Search your Place"
                    />
                </div>
            </div>
        </navbar>
    );
};
