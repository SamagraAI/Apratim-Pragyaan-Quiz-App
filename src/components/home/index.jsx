import React from 'react'
import { useAuth } from '../../contexts/authContext'
import Login  from "../auth/login/index.jsx"
import { useNavigate,Navigate } from 'react-router-dom'

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

const UserChanged = () => {
    const { userLoggedIn} = useAuth()
    const { currentUser } = useAuth()
   const {isQm} = useAuth(); 
    const {navigate} = useNavigate();  
    if(userLoggedIn){
        if(isQm)
            {
                return <Navigate to="/launch" />;
            }
            else{
                return <Navigate to="/studentComponent" />;
            }
    }
    return <Navigate to="/login" />;
}

export default UserChanged; 