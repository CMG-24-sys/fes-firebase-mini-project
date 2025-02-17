import React from 'react';
import './App.css';
import { auth } from './firebase/init';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged
} from "firebase/auth";
import Logo from './logo.svg'


function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => { 
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        console.log(user.email[0].toUpperCase());
      }
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
    {loading ? 'loading...' : user?.email}
    <button className='btn' onClick={logout}>Logout</button>
    </div>
    </div>
  );
}


export default App;
