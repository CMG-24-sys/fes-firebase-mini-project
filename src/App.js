import React from 'react';
import './App.css';
import { auth } from './firebase/init';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged
} from "firebase/auth"

import 'Logo' from '../assets/Logo.svg';

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => { 
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user.email[0].toUpperCase());
      if (user) {
        setUser(user)
      }
    })
  }, []);
  function register() {
    console.log('register');
    createUserWithEmailAndPassword(auth, 'email@email.com', 'test123')
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
      
    })
  }

  function login() {
    signInWithEmailAndPassword(auth, 'email@email.com', 'test123')
    .then(({ user }) => {
      console.log(user);
      setUser(user);
    })
    .catch((error) => {
      console.log(error.message);
      
    })
  }

  function logout() {
    signOut(auth);
    setUser({});
  }


  return (
    <div className='nav__container'>
    <div className="App">
    <button className='btn' onClick={register}>Register</button>
    <button className='btn__login' onClick={login}>Login</button>
    <button className='btn' onClick={logout}>Logout</button>
    {loading ? 'loading...' : user.email}
    </div>
    </div>
  );
}


export default App;
