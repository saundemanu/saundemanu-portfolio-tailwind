import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import frameworks from "./frameworks"

const projects = [
  {
    name: "Texas Weddings",
    description: "A vendor portal with enhanced functionality and a polished user interface for seamless wedding planning.",
    image: "/texasweddings.png",
    framework: [frameworks.flutter, frameworks.php, frameworks.mysql ],
    github: "",
    link: "https://texasweddings.com",
  },
  {
    name: "Government Shutdown Tracker",
    description: "Simple timer to countdown seconds till the government shutdown",
    image: "/shutdowntracker.gif",
    framework: [frameworks.nextjs, frameworks.javascript, frameworks.tailwind],
    github: "https://github.com/saundemanu/GovernmentShutdownTracker",
    link: "https://government-shutdown-tracker.vercel.app",
  },
  {
    name: "Flooded Grounds",
    description: "A thrilling third-person Sci-Fi survival/horror game set in a futuristic space-ship",
    image: "/floodedgroundsdemo.gif",
    framework: [ frameworks.csharp, frameworks.unity ],
    github: "https://github.com/andacrew/flooded-grounds-2.0",
    link: "",
  },
  {
    name: "Tanks A Lot",
    description: "Engage in thrilling tank battles in this Java-based split-screen top-down shooter game with support for custom maps.",
    image: "/tanksalot.gif",
    framework: [frameworks.java],
    github: "https://github.com/saundemanu/Tanks-a-Lot",
    link: "/tanksalot.jar",
  },
  {
    name: "C File Copy",
    description: "Efficiently copy files from the command line with this lightweight utility written entirely in C.",
    image: "/cfilecopy.png",
    framework: [frameworks.C],
    github: "https://github.com/saundemanu/C-File-Copy",
    link: "",
  },
  {
    name: "X-Code Interpreter",
    description: "Interpret code written in the unique X-Code language using a Java-based interpreter emulating the Java compilation process.",
    image: "/xcode.png",
    framework: [frameworks.java],
    github: "https://github.com/saundemanu/X-Code-Interpreter",
    link: "",
  },
  {
    name: "SFSU Quad (deprecated)",
    description: "A platform facilitating safe transactions for buying and selling items and services on campus, designed for SFSU students.",
    image: "/SFSUQUAD.png",
    framework: [frameworks.python, frameworks.flask, frameworks.mysql],
    github: "https://github.com/saundemanu/SFSUQUAD",
    link: "",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link || project.github}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold underline mb-6">{project.name}</h1>
                      <div className="flex flex-row space-x-1 mb-2"> {project.framework} </div> 
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.github && (
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                       )}
                      {project.link && (
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
