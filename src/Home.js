import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import { NavBar } from './components/navBar/NavBar'
import Description from './pages/description/Description'
import Trailer from './pages/trailer/Trailer'
import Erreur from './pages/erreur/Erreur'
import Footer from './components/footer/Footer'

const Home = () => {
  return (
    <div>
        <NavBar />

        <Routes>
            <Route path='/' element={<App /> } />
            <Route path='/movie/:id' element={<Description />} />
            <Route path='/trailer/:id' element={<Trailer />} />
            <Route path='/*' element={<Erreur/>} />
        </Routes>

        <Footer />
    </div>
  )
}

export default Home