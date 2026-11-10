import { useState, useEffect } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import MarqueeText from './components/MarqueeText'
import Navbar from './components/Navbar'
import Stack from './components/Stack'
import Work from './components/Work'
import Loading from './components/Loading'

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const Componets = [
    <About />,
    <Stack />,
    <Work />,
    <MarqueeText />,
    <Contact />,
  ]

  useEffect( () => {
    setTimeout( () => {
      // setIsLoading(false);
    }, 3000)
  }, [])
 
  return (
    <main className='bg-linear-to-b from-[#000000] to-[#303030] text-white'>
      {
        isLoading ? (
          <Loading />
        ) : (
          <>
            <Navbar />
             <Home />
            {Componets.map((Component, idx) => (
              <div key={idx} className='mt-40'>
                {Component}
              </div>
            ))}
          </>
        )
      }
    </main>
  )
}

export default App
