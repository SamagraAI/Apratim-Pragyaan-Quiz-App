import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
// import { GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

import { getFirestore, doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isEmailUser, setIsEmailUser] = useState(false);
  const [isGoogleUser, setIsGoogleUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isQm, setIsQm] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);


// Inside your AuthProvider component

async function initializeUser(user) {
  const firestore = getFirestore();
  if (user) {
    setCurrentUser({ ...user });

    // Check if the email belongs to @indoreinstitute.com domain
    const email = user.email;
    const domain = email.split('@')[1];
    if (domain !== 'indoreinstitute.com') {
      // Sign out the user if the email domain is not @indoreinstitute.com
      await signOut(auth);
      console.log('Invalid email domain');
      //
      setCurrentUser(null);
      setUserLoggedIn(false);
      setLoading(false);
      throw new Error('Invalid email domain');
      return;
    }
    else
    {
      // Check if the email exists in the "quiz master" collection
      const quizMasterDoc = doc(firestore, "quiz_master", email);
      const docSnap = await getDoc(quizMasterDoc);
      if (docSnap.exists()) {
      // Email exists in the "quiz master" collection
        console.log("User email exists in the quiz master collection.");
        setIsQm(true);
      } else {
      // Email doesn't exist in the "quiz master" collection
        console.log("User email doesn't exist in the quiz master collection.");
      }
    }
    // check if provider is email and password login
    const isEmail = user.providerData.some(
      (provider) => provider.providerId === "password"
    );
    setIsEmailUser(isEmail);

    setUserLoggedIn(true);
    
  } else {
    setCurrentUser(null);
    setUserLoggedIn(false);
  }

  setLoading(false);
}

  const value = {
    userLoggedIn,
    isEmailUser,
    isGoogleUser,
    currentUser,
    setCurrentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
