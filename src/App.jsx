import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


function App() {

  const [theme, setTheme] = useState("light");

    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme("dark");
        }
    }, [])

    useEffect(() => {
      if(theme === 'dark'){
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove("dark")
      }
    },[theme])

    const modeHandler = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        console.log(theme);
    }

  return (
    <>
      <Header theme={theme} modeHandler={modeHandler}/>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
