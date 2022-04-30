import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../images/avatar.svg'
import { FaUserAlt } from 'react-icons/fa';
import { BsFillLockFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SignUp = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    console.log(confirmPassword);


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    console.log(user)

    const [
        signInWithGoogle,
        googleUser,
        googleLoading,
        googleError
    ] = useSignInWithGoogle(auth);

    if(user){
        navigate('/')
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


    const handleConfirmPassword = event => {
        const confirmPassword = event.target.value;
        
        if(password === confirmPassword){
            setConfirmPassword(confirmPassword);
        }
        else{
            setConfirmPasswordError("Password Mismatched")
        }
        
    }


    const handleSingIn = (event) => {
        event.preventDefault();
        if(password === confirmPassword){
            createUserWithEmailAndPassword(email, password)
        }

    }



    return (
        <div className="w-full login-container">
        
            <form onSubmit={handleSingIn} className="flex flex-col justify-center items-center ">
                <img src={avatar} className="w-32" />
                <h2
                    className="my-5 font-display font-bold text-3xl text-gray-700 text-center">
                    Welcome to you
                </h2>
                <div className="relative">
                    <FaUserAlt className="absolute text-primarycolor text-xl text-gray-300" />
                    <input
                        onBlur={getEmail}
                        type="email"
                        name='email'
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
                        name='password'
                        placeholder="password"
                        className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                    />
                </div>
                <p className="text-sm mr-20 mt-3 text-red-300">{passwordError && passwordError}</p>

                <div className="relative mt-8">

                    <BsFillLockFill className="absolute text-primarycolor text-xl text-gray-300" />
                    <input
                        onBlur={handleConfirmPassword}
                        type="password"
                        name='confirmPassword'
                        placeholder="password"
                        className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                    />
                </div>
                <p className="text-sm mr-20 mt-3 text-red-300">{confirmPasswordError && confirmPasswordError}</p>

                <Link to="/login" className="self-center mt-4 text-gray-600 font-bold"
                >login?</Link>


                <input
                    className="py-3 px-20 bg-[#00CBA9] rounded-full font-bold uppercase text-lg my-4 transform hover:translate-y-1 transition-all duration-500"
                    type="submit"
                    value="Login"
                />
            </form>

            <div className="flex flex-col justify-center items-center">
                <button className="flex items-center border-2 border-black p-3 rounded-lg text-lg hover:bg-[#00CBA9]"
                onClick={() => signInWithGoogle()}
                >
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

export default SignUp;