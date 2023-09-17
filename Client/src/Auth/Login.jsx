import {useState} from 'react';
import {AiOutlineUser, AiOutlineLock} from 'react-icons/ai';
import {Link} from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const errors = {};
        if (!username) {
            errors.username = 'Username is required';
        }
        if (!password) {
            errors.password = 'Password is required';
        }
        setErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        const requestBody = {
            email: username,
            password: password
        };
        try {
            const response = await fetch('http://localhost:5000/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (response.ok) {
                // const data = await response.json();
                // onLogin(data);
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Login failed!', error);
            setErrors({login: 'Invalid credentials. Please try again.'});
        }
    };


    return (

            <div className="bg-[#e7fdea] h-screen">
                <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 pt-10 mx-60">
                    <div className="flex items-center space-x-2 text-[#f07167] text-sm">
                        <Link to="/" className="hover:underline text-green-950">Home</Link>
                        <span>
            <svg className="h-5 w-5 leading-none text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </span>
                        <Link to="/login" className="hover:underline text-[#64ad99]">Login Page</Link>
                    </div>
                </div>
                <div className="min-w-screen  flex items-center justify-center px-5 py-5 font-Rajdhani">
                    <div className="text-gray-500 rounded-3xl shadow-[#c7f0d2] shadow-xl w-full overflow-hidden"
                         style={{maxWidth: '1000px'}}>
                        <div className="md:flex w-full">
                            <div className="hidden md:block w-1/2 py-10 px-10">
                                <img src={"https://i.ibb.co/VpDCK0f/Fingerprint-bro.png"} alt="logo"
                                     className="w-full"/>
                            </div>
                            <div className="w-full md:w-1/2 px-4 py-20 md:px-10">
                                <h2 className="mb-2 text-4xl font-bold text-[#92e3a9] font-Raleway">Login</h2>
                                <p className="mb-10 block font-bold text-[#64ad99] font-Raleway ">
                                    Don't Have an Account <Link to="/SignUp"
                                                                className="mx-3 text-[1.rem] text-[#001836]">Create
                                    One?</Link>
                                </p>

                                <div className="text-[#64ad99]">
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">
                                            <label htmlFor="" className="text-[1rem] font-medium px-1">Username</label>
                                            <div className="flex">
                                                <div
                                                    className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <AiOutlineUser className="text-lg"/>
                                                </div>
                                                <input
                                                    type="text"
                                                    className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-[#64ad99] outline-none focus:border-green-800 bg-green-100 placeholder:text-green-600 ${
                                                        errors.username ? 'border-red-500' : ''
                                                    }`}
                                                    placeholder="john111"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                            </div>
                                            {errors.username &&
                                                <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div
                                            className={`w-full px-3 mb-12 ${errors.password ? 'shake-animation' : ''}`}>
                                            <label htmlFor="" className="text-[1rem] font-medium px-1">Password</label>
                                            <div className="flex">
                                                <div
                                                    className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <AiOutlineLock className="text-[#64ad99] text-lg"/>
                                                </div>
                                                <input
                                                    type="password"
                                                    className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-[#64ad99] outline-none focus:border-green-800 bg-green-100 placeholder:text-green-600 ${
                                                        errors.password ? 'border-red-500' : ''
                                                    }`}
                                                    placeholder="************"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                            {errors.password &&
                                                <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">
                                            <button
                                                className="block w-full max-w-xs mx-auto bg-[#64ad99]  focus:bg-[#001836] text-2xl text-white rounded-lg px-3 py-3 font-semibold"
                                                onClick={handleFormSubmit} // Call the function on button click
                                            >
                                                Login
                                            </button>
                                            {errors.login &&
                                                <p className="text-red-500 text-xs mt-1">{errors.login}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
