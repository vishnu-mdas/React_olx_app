import React, { useEffect, useContext } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/PostContext';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';



function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div>
      
      <Post>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Signup' element={<SignUp />}> </Route>
            <Route path='/Login' element={<Login />}> </Route>
            <Route path='/sell' element={<Create />}> </Route>
            <Route path='/view' element={<View />}> </Route>
          </Routes>
        </Router>
      </Post>
     </div>
  );
}

export default App;
