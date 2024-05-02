import React from 'react'
import { useAuth } from '../../contexts/authContext'
import Login  from "../auth/login/index.jsx"
// // Check if user is logged in
// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in, redirect to home page
//       window.location.href = "home.html"; // Replace with your home page URL
//     } else {
//       // User is not signed in, do nothing or redirect to login page
//       // window.location.href = "login.html"; // Redirect to login page if desired
//     }
//   });

const Home = () => {
    const { userLoggedIn } = useAuth()
    const { currentUser } = useAuth()
    return (
      <div> {
            userLoggedIn
            ?
                <><div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div></>
            :
                <><Login/></>
        }
        </div> 
    )
}

export default Home