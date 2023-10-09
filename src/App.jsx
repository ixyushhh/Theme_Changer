import './App.css'
import { useEffect, useState } from 'react'
import Card from './Components/Card'
import ThemeBtn from './Components/Themebtn'
import { ThemeProvider } from './Context/theme'

function App() {


  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode) // adding themeMode because at the end light and dark is inside it only.
  }, [themeMode])  // Here dependency is also theme mode, because themeMode m kuch bhi change ho toh useEffect wapas run hona chiye, toh uska name should be mentioned here.
  
 
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
            </div>
    </div>
    </ThemeProvider>
  )
}

export default App
