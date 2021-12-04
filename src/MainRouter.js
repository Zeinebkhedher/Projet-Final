import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Header from './compnents/Header.js';
import LeftSideBar from './compnents/LeftSideBar';
import Recommanded from './compnents/Recommanded.js';
import Jeux from './pages/jeux/Jeux.js';
import Library from './pages/Library/Librabry.js';

function MainRouter() {
    return (
        <>
      
       
        <Routes>
            <Route path="/" element={<Library/>} exact/>
            <Route path="/Jeux" element={<Jeux />} exact/>
            
        </Routes>
        </>
    )
}

export default MainRouter
