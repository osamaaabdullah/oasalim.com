import { Moon, SunMedium } from "lucide-react"
import { useState } from "react";

type ThemeToggleButtonProps = {
  isDark: boolean
  handleChange: () => void;
};

const ThemeToggleButton = ({ isDark, handleChange }: ThemeToggleButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () =>{
    setIsOpen(!isOpen)
  }
  
  return (
    <div className="border-solid bg-[#EEEEEE] dark:bg-[#242424] w-fit rounded-2xl relative">
      <button className={`${!isOpen ? "opacity-0" : "opacity-100"} py-1 px-2 rounded-l-2xl`} onClick={() =>{handleChange(); handleClick();}} aria-pressed={isDark}><SunMedium className={`${!isOpen ? "opacity-0" : "opacity-100"} text-amber-300 fill-amber-300 z-10`}/></button>
      <button className= {`${isOpen ? "opacity-0" : "opacity-100"} py-1 px-2 rounded-r-2xl`} onClick={() =>{handleChange(); handleClick();}} aria-pressed={isDark}><Moon className={`${isOpen ? "opacity-0" : "opacity-100"} text-gray-700 fill-gray-700 z-10`}/></button>
      {/* <div className="bg-black inset-0 rounded-full absolute w-1/3 m-1"></div> */}
    </div>
  )
}

export default ThemeToggleButton
