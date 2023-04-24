import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import avatar from '../../images/avatar.svg'
import { FaUserAlt } from 'react-icons/fa';
import { BsFillLockFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import './Login.css';
import auth from '../../firebase.init'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';
import Spinner from '../Spinner/Spinner';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [
        signInWithGoogle,
        googleUser,
        googleLoading,
        googleError
    ] = useSignInWithGoogle(auth);


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    // console.log(user);
    // console.log(email, password);
    console.log(error);



    const [
        sendPasswordResetEmail,
        sending,
        resetError
    ] = useSendPasswordResetEmail(auth);

    if (loading) {
        return <Spinner />
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






    const handleSingIn = async (event) => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password);
        console.log(email);

        const url = `warehouse-management-server-site-production.up.railway.app/login`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('accessToken', data?.accessToken);
            })
    }


    let from = location.state?.from?.pathname || "/";
    if (user || googleUser) {
        navigate(from, { replace: true });
    }

    const handleResetPassword = async () => {
        await sendPasswordResetEmail(email);
        toast("Check your Email");
    }

    // console.log(email);






    return (
        <div className="w-full login-container ">
            <div className="">
                <form onSubmit={handleSingIn} className="flex flex-col justify-center items-center ">
                    <img src={avatar} className="w-32 " />
                    <h2
                        className="my-5 font-display font-bold text-3xl text-white text-center">
                        Welcome to you
                    </h2>
                    <div className="flex items-center ">
                        <FaUserAlt className="absolute text-primarycolor text-xl text-gray-300" />
                        <input
                            onBlur={getEmail}
                            type="email"
                            name='email'
                            placeholder="Email"
                            className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg p-2 rounded-lg text-gray-700"
                            required
                        />
                    </div>
                    <p className="text-sm mr-20 mt-3 text-red-300">{emailError && emailError}</p>


                    <div className="flex items-center  mt-8">

                        <BsFillLockFill className="absolute text-primarycolor text-xl text-gray-300" />
                        <input
                            onBlur={getPassword}
                            type="password"
                            placeholder="password"
                            className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg p-2 rounded-lg text-gray-700"
                        />
                    </div>
                    <p className="text-sm mr-20 mt-3 text-red-300">{passwordError && passwordError}</p>
                    <button className="self-center mt-4 text-gray-400 font-bold"
                        onClick={handleResetPassword}
                    >Forgot password?</button>

                    <Link to="/signup" className="self-center mt-1 text-gray-400 font-bold"
                    >Are you new?</Link>

                    <input
                        className="py-3 px-20 bg-[#00CBA9] rounded-full font-bold uppercase text-lg my-4 transform hover:translate-y-1 transition-all duration-500"
                        type="submit"
                        value="Login"
                    />
                </form>

                <div className="flex flex-col justify-center items-center">


                    {/* <button className="flex items-center border-2 border-black p-3 rounded-lg text-lg hover:bg-[#00CBA9] my-5">
                        <AiFillGithub className="mx-5 text-2xl" />
                        Continue with github
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Login;