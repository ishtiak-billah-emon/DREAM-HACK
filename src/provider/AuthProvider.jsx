import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const AuthContex = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const passwordReset = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
        return user;
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    loginWithGoogle, 
    loading,
    updateUserProfile,
    passwordReset,
  };

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
