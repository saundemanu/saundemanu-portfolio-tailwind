import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Texas Weddings",
    description:
      "Redesgined Endpoints on vendor portals and added cosmetic fixes to site.",
    image: "/texasweddings.png",
    github: "",
    link: "https://texasweddings.com",
  },
  {
    name: "Tanks A Lot",
    description:
      "Java-Based Splitscreen top-down shooter game. Support for custom maps and levels",
    image: "/tanksalot.gif",
    github: "https://github.com/saundemanu/Tanks-a-Lot",
    link: "/tanksalot.jar",
  },
  {
    name: "C File Copy",
    description:
      "A simple command line file copying utility written entirely in C",
    image: "/cfilecopy.png",
    github: "https://github.com/saundemanu/C-File-Copy",
    link: "",
  },
  {
    name: "X-Code Interpreter",
    description:
      "Code Interpreter for unique X-Code language written in Java, emulating the compilation path of java compilers and the JVM",
    image: "/xcode.png",
    github: "https://github.com/saundemanu/X-Code-Interpreter",
    link: "",
  },
  {
    name: "SFSU Quad (depreciated)",
    description:
      "Well documented website to facilitate safe buying and selling of items and services on campus for SFSU students.",
    image: "/SFSUQUAD.png",
    github: "https://github.com/saundemanu/SFSUQUAD",
    link: "",
  }
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
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
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
