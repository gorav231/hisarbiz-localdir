import React, { useEffect, useState, createContext } from "react";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import app from "../../src/firebase/firebase";
// import { useQuery } from "@tanstack/react-query";

// export const AuthContext = createContext();
// const auth = getAuth(app);

const UserContext = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);


//   // const [images, setImages] = useState([]);

//   // const CDNURL = "https://gfnqrowfqknvdwngbped.supabase.co/storage/v1/object/public/photogelary/"

//   // Sign Up
//   const signUp = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const updateUserDetails = (userInfo) => {
//     return updateProfile(auth.currentUser, userInfo);
//   };

//   // Sign In
//   const signIn = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // Sign Out
//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   // watch user state change
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//         setLoading(false);
//       } else {
//         setUser(null);
//       }
//     });
//     return unsubscribe;
//   }, []);


//   const userInfo = {
//     signUp,
//     signIn,
//     logOut,
//     setError,
//     error,
//     loading,
//     updateUserDetails,
//     user
//   };
  return (
    <div>sccf</div>
    // <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
