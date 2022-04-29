import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../images/avatar.svg'
import { FaUserAlt } from 'react-icons/fa';
import { BsFillLockFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import './Login.css';
import auth from '../../firebase.init'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {

    const naviagte = useNavigate();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    console.log(user);
    console.log(email, password);

    if (user) {
        naviagte('/')
    }


    const getEmail = event => {
        const emailRegExpression = /\S+@\S+\.\S+/;
        const validation = emailRegExpression.test(event.target.value);
        if (validation) {
            setEmail(event.target.value);
        }
        else {
            setEmailError("Please give a valid email.")
        }
    }

    const getPassword = event => {
        const passwordRegExpression = /.{6,}/;
        const validation = passwordRegExpression.test(event.target.value);
        if (validation) {
            setPassword(event.target.value);
        }
        else {
            setPasswordError("Password too short");
        }
    }


    const handleSingIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)


    }



    return (
        <div className="w-full login-container">
            <div className="">

            </div>
            <form onSubmit={handleSingIn} className="flex flex-col justify-center items-center ">
                <img src={avatar} className="w-32 " />
                <h2
                    className="my-5 font-display font-bold text-3xl text-gray-700 text-center">
                    Welcome to you
                </h2>
                <div className="relative">
                    <FaUserAlt className="absolute text-primarycolor text-xl text-gray-300" />
                    <input
                        onBlur={getEmail}
                        type="email"
                        placeholder="Email"
                        className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                        required
                    />
                </div>
                <p className="text-sm mr-20 mt-3 text-red-300">{emailError && emailError}</p>


                <div className="relative mt-8">

                    <BsFillLockFill className="absolute text-primarycolor text-xl text-gray-300" />
                    <input
                        onBlur={getPassword}
                        type="password"
                        placeholder="password"
                        className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                    />
                </div>
                <p className="text-sm mr-20 mt-3 text-red-300">{passwordError && passwordError}</p>
                <Link to="/" className="self-center mt-4 text-gray-600 font-bold"
                >Forgot password?</Link>

                <Link to="/signup" className="self-center mt-1 text-gray-600 font-bold"
                >Are you new?</Link>

                <input
                    className="py-3 px-20 bg-[#00CBA9] rounded-full font-bold uppercase text-lg my-4 transform hover:translate-y-1 transition-all duration-500"
                    type="submit"
                    value="Login"
                />
            </form>

            <div className="flex flex-col justify-center items-center">
                <button className="flex items-center border-2 border-black p-3 rounded-lg text-lg hover:bg-[#00CBA9]">
                    <FcGoogle className="mx-5 text-2xl" />
                    Continue with google
                </button>

                <button className="flex items-center border-2 border-black p-3 rounded-lg text-lg hover:bg-[#00CBA9] my-5">
                    <AiFillGithub className="mx-5 text-2xl" />
                    Continue with github
                </button>
            </div>

        </div>
    );
};

export default Login;