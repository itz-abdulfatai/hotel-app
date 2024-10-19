import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import { useState } from "react";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };


  return (
    <div className="bg-[var(--primary-color)] text-[var(--secondary-color)] min-h-screen max-container font-montserrat ">
      <button className=" border border-black fixed bottom-5 right-5 capitalize  bg-[var(--secondary-color)] text-[var(--primary-color)] px-4 py-2 opacity-70 font-bold"
      onClick={toggleDarkMode}>
        {isDarkMode? 'light':'dark'}
      </button>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>




      </Routes>
      <Footer/>
    </div>
  )
}

export default App
