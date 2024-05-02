import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { doSignInWithGoogle } from '../../../firebase/auth'
import { useAuth } from '../../../contexts/authContext'

const Login = () => {
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false)
            })
        }
    }

    return (
        <div className="flex justify-center items-center px-12 py-12 bg-gray-800 max-md:px-5">
          <div id="mainCard"className="flex flex-col px-8 py-8 mt-0 rounded-3xl w-[386px] max-md:px-4 max-md:mt-8`">
            <img
              loading="lazy"
              src="src\utils\image\Logo.png"
              alt="Apratim Pragyan logo"
              className="w-48 max-w-full aspect-[2.27]"
            />
            <h1 className="mt-44 text-5xl font-semibold text-white max-md:mt-10 max-md:text-4xl">
              Apratim Pragyan{" "}
            </h1>
            <p className="mt-4 text-xl text-stone-300">Samgra Smautkarsha Yojana</p>

            <button
            disabled={isSigningIn}
            onClick={(e) => { onGoogleSignIn(e) }} 
            className="flex gap-5 py-2.5 pr-3 pl-9 mt-52 text-2xl text-black bg-white rounded-[30px] max-md:pl-5 max-md:mt-10">
              <img
                loading="lazy"
                src="src\utils\image\GoogleLogo.jpg"
                alt="Google logo"
                className="shrink-0 w-10 aspect-[0.88]"
              />
              {isSigningIn ? 'Signing In...' : <span className="grow my-auto">Sign in with google</span>}
            </button>
            
          </div>
        </div>
      );
                    
}

export default Login

/**
 * 
 * import * as React from "react";


function Login() {
  return (
    <div className="flex justify-center items-center px-12 py-12 bg-gray-800 max-md:px-5">
      <div id="mainCard"className="flex flex-col px-8 py-8 mt-0 rounded-3xl w-[386px] max-md:px-4 max-md:mt-8`">
        <img
          loading="lazy"
          src="src\utils\image\Logo.png"
          alt="Apratim Pragyan logo"
          className="w-48 max-w-full aspect-[2.27]"
        />
        <h1 className="mt-44 text-5xl font-semibold text-white max-md:mt-10 max-md:text-4xl">
          Apratim Pragyan{" "}
        </h1>
        <p className="mt-4 text-xl text-stone-300">Samgra Smautkarsha Yojana</p>
        <button className="flex gap-5 py-2.5 pr-3 pl-9 mt-52 text-2xl text-black bg-white rounded-[30px] max-md:pl-5 max-md:mt-10">
          <span className="grow my-auto">Sign in with google</span>
          <img
            loading="lazy"
            src="src\utils\image\GoogleLogo.jpg"
            alt="Google logo"
            className="shrink-0 w-10 aspect-[0.88]"
          />
        </button>
      </div>
    </div>
  );
}
 */