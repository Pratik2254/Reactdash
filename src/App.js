import React from 'react'
import PostForm from './components/PostForm';
import {Routes, Route} from 'react-router-dom';
import Registration from './components/Registration';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Settings from './components/Settings';
import SideNav from './components/Sidenav';
import './App.css'


export default function App() {

    return (
        <div className="App">
            <SideNav />
            <Navbar/>
            
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/registration' element={<Registration />}/>
                <Route path='/postform' element={<PostForm  />}/>
                <Route path='/about' exact element={<About />}></Route>
                <Route path='/settings' exact element={<Settings />}></Route>
            </Routes>
            
        </div>
    );
}
