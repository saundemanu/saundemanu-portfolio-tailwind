import {  BiLogoPython, BiLogoJavascript, BiLogoJava, BiLogoPhp, BiLogoFlutter, BiLogoCPlusPlus, BiLogoFlask, BiLogoUnity } from "react-icons/bi"
import { DiMysql } from "react-icons/di"
import { SiCsharp } from "react-icons/si"

const frameworks = {
    java: <BiLogoJava size={30} aria-label="Java"  className="hover:-translate-y-1 transition-transform cursor-pointer" />,
  
    javascript: <BiLogoJavascript size={30} aria-label="JavaScript" className="hover:-translate-y-1 transition-transform cursor-pointer" />,
  
    python: <BiLogoPython size={30} aria-label="Python" className="hover:-translate-y-1 transition-transform cursor-pointer" />,
  
    php: <BiLogoPhp size={30} aria-label="PHP" className="hover:-translate-y-1 transition-transform cursor-pointer" />,
  
    flutter: <BiLogoFlutter size={30} aria-label="Flutter" className="hover:-translate-y-1 transition-transform cursor-pointer" />,
  
    C: <BiLogoCPlusPlus size={30} aria-label="C" className="hover:-translate-y-1 transition-transform cursor-pointer" />,
  
    flask: <BiLogoFlask size={30} aria-label="Flask" className="hover:-translate-y-1 transition-transform cursor-pointer" />,
  
    mysql: <DiMysql size={30} aria-label="MySQL" className="hover:-translate-y-1 transition-transform cursor-pointer" />,

    unity: <BiLogoUnity size={30} aria-label="Unity" className="hover:-translate-y-1 transition-transform cursor-pointer" />, 

    csharp: <SiCsharp size={30} aria-label="C#" className="hover:-translate-y-1 transition-transform cursor-pointer"/>
  }

  export default frameworks;