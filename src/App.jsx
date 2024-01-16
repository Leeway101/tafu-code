import Header from "./components/layout/Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./components/Pages/HomePage"
import About from "./components/Pages/About"
import Contact from "./components/Pages/Contact"
import { Fragment } from "react"
import Login from "./components/Pages/Login"
import Registration from "./components/Pages/Registration"
import Asosiy from "./components/Pages/Asosiy"


function App() {
 

  return (

    <Fragment>
      <BrowserRouter>
      <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Asosiy" element={<Asosiy />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
