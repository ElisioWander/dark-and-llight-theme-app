import { Moon, SunDim } from "phosphor-react"
import { useTheme } from "../contexts/ThemeContext"

export function Theme() {
  const { theme, setTheme } = useTheme()

  function handleToggleTheme() {
    //reverse the theme value every time that "handleToggleTheme" is called
    setTheme(!theme)
  }

  return (
    <div className=" h-screen bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center " >
      <div className="w-[680px] h-[340px] bg-zinc-300 dark:bg-zinc-600 flex items-center justify-center gap-3" >
        <h1 className="font-bold text-2xl text-zinc-700 dark:text-zinc-100 " >Dark and Light</h1>

        { theme ? (
          <Moon size={32} className="cursor-pointer" onClick={handleToggleTheme} />
        ): (
          <SunDim size={32} className="cursor-pointer" onClick={handleToggleTheme} color="white" />
        ) }
      </div>
    </div>
  )
}