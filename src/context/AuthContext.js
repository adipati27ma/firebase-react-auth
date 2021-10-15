import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    // this method is Promise (async)
    // --bisa diganti dengan auth backend sendiri--
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    // this method is Promise (async)
    // --bisa diganti dengan auth backend sendiri--
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    // this method is Promise (async)
    // --bisa diganti dengan auth backend sendiri--
    return auth.signOut();
  }

  function resetPassword(email) {
    // this method is Promise (async)
    // --bisa diganti dengan auth backend sendiri--
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    // this method is Promise (async)
    // --bisa diganti dengan auth backend sendiri--
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    // this method is Promise (async)
    // --bisa diganti dengan auth backend sendiri--
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    // onAuthStateChanged akan dipanggil saat method createUser dijalankan
    // method ini akan men-set token di localStorage, dan saat refresh page akan di cek kembali
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading && 'loading...'}
      {!loading && children}
    </AuthContext.Provider>
  );
}
