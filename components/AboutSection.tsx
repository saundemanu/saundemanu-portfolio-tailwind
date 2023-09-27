import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Java" },
  { skill: "Python" },
  { skill: "PHP" },
  { skill: "C#" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "SQL" },
  { skill: "NoSQL" },
  { skill: "Redis" },
  { skill: "Next.js" },
  { skill: "Flutter" },
  { skill: "Dart" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Emanuel and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Pennsylvania, particularly fond of backend systems.
            </p>
            <br />
            <p>
              I graduated from San Francisco State University in 2020
              with a BS in Computer Science and am currently Working as an Software Engineering Intern at Texas Weddings.
            </p>
            <br />
            <p>
            Here's a glimpse into some of my interests: 
            <br />
            I find joy in problem-solving, often immersing myself in puzzle games. 
            Additionally, I like to delve into personal computer hardware research. 
            On a more relaxed note, I play guitar and occasionally dabble in hobbyist DJing.
            </p>
            <br />
            <p>
              I firmly believe that learning never stops {" "}
              <span className="font-bold text-teal-500">
                growth doesn't stop either
              </span>{" "}
              , even in the face of adversity. 
              That&#39;s what I strive to do, grow. I'm on a mission to dive headfirst into the world of technology and all its wonders. 
              I'm genuinely thrilled to discover where this journey will lead my career. Plus, I'm always up for new adventures!🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            {/* <Image
              src="/hello.jpg"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 object-center"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
