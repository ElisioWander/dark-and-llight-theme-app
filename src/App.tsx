import { Moon, SunDim } from 'phosphor-react'
import { useEffect, useState } from 'react'

export function App() {
  const [theme, setTheme] = useState('light' || 'dark')

  useEffect(() => {
    const rootElement = window.document.documentElement
    
    const removeOldTheme = 'light' ? 'dark' : 'light'

    rootElement.classList.remove(removeOldTheme)
    rootElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  function handleChangeTheme() {
    if(localStorage.getItem('theme') === 'dark') {
      setTheme('light')
    } else {
      if(localStorage.getItem('theme') === 'light') {
        setTheme('dark')
      }
    }
  }

  return (
    <div className=" h-screen bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center " >
      <div className="w-[680px] h-[340px] bg-zinc-300 dark:bg-zinc-600 flex items-center justify-center gap-3" >
        <h1 className="font-bold text-2xl text-zinc-700 dark:text-zinc-100 " >Dark and Light</h1>

        { theme === 'light' ? (
          <Moon size={32} className="cursor-pointer" onClick={handleChangeTheme} />
        ): (
          <SunDim size={32} className="cursor-pointer" onClick={handleChangeTheme} color="white" />
        ) }
      </div>
    </div>
  )
}
