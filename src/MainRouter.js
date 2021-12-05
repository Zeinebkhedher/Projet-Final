import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Header from './compnents/Header.js';
import LeftSideBar from './compnents/LeftSideBar';
import Recommanded from './compnents/Recommanded.js';
import Explore from './pages/Explore/Explore.js';
import Jeux from './pages/jeux/Jeux.js';
import Library from './pages/Library/Librabry.js';
import Chaines from './pages/Chaines/Chaines'
import Actualite from './pages/Actualite/Actualite.js';
import Biblio from './pages/Biblio/Biblio.js';
import Historique from './pages/Historique/Historique.js';
import Parametres from './pages/Parametres/Parametres.js';
import Recommandation from './pages/Recommendation/Recommendation.js';
import Emna1 from './pages/Main/GVideo/Emna/Emna1';
import Emna2 from './pages/Main/GVideo/Emna/Emna2';
import Emna3 from './pages/Main/GVideo/Emna/Emna3';
import Emna4 from './pages/Main/GVideo/Emna/Emna4';
import YZ from './pages/Main/GVideo/YZ/YZ'; 
import Safe1 from './pages/Main/GVideo/Safe/Safe1';
import Safe2 from './pages/Main/GVideo/Safe/Safe2';
import Principale from './pages/Principale/Principale.js';


function MainRouter() {
    return (
        <>
      
       
        <Routes>
            <Route path="/" element={<Library/>} exact/>
            <Route path="/Actualite" element={<Actualite />} exact/>
            <Route path="/Biblio" element={<Biblio/>} exact/>
            <Route path="/Historique" element={<Historique />} exact/>
            <Route path="/Chaines" element={<Chaines/>} exact/>
            <Route path="/Parametres" element={<Parametres/>} exact/>
            <Route path="/Recommendation" element={<Recommandation/>} exact/>
            <Route path="/Jeux" element={<Jeux />} exact/>
            <Route path="/explore" element={<Explore />} exact/>
            <Route path="/emna-UML" element={<Emna1/>} exact/>
            <Route path="/emna-DCU" element={<Emna2/>} exact/>
            <Route path="/emna-Classe" element={<Emna3/>} exact/>
            <Route path="/emna-Analyse" element={<Emna4/>} exact/>
            <Route path="/YZ-TODOList" element={<YZ/>} exact/>
            <Route path="/BigCheese" element={<Safe1/>} exact/>
            <Route path="/DataBase-intro" element={<Safe2/>} exact/>
            <Route path="/BigCheese" element={<Principale/>} exact/>
        </Routes>
        </>
    )
}

export default MainRouter
