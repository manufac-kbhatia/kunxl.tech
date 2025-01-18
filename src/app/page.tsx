import Image from "next/image";
import profile from "../../public/profile.jpeg";
import { NPMButton } from "@/components/npmButton";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconHeart,
  IconMail,
} from "@tabler/icons-react";
import { Tile } from "@/components/Tile";
import {
  database,
  devops,
  frameworks,
  languages,
  projects,
  versionControl,
  work,
} from "@/utils/utils";
import { ProjectCard, WorkCard } from "@/components/Card";
import { LeetCodeHeatmap } from "@/components/LeetcodeHeatMap";
import { Activity } from "@/components/Activity";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="w-[100vw]">
      <Header />
      <div className="mx-auto max-w-6xl md:p-10 flex flex-col gap-36">
        {/* Info section */}
        <div
          id="about"
          className="grid lg:grid-cols-2 gap-28 mt-24"
        >
          {/* About You */}
          <div className="space-y-5">
            <div className="p-2">
            <div className="text-8xl text-customYellow">Kunal</div>
            <div className="text-3xl md:text-4xl text-customPurple space-y-2">
              <div>Freelancer</div>
              <div>Full Stack Sorcerer</div>
              <div>
                Turns <span className="text-customGreen">Coffee</span> into{" "}
                <span className="text-customGreen">Code</span>
              </div>
            </div>
            <div className="flex gap-2 text-customRed">
              <a href="https://github.com/Kunalkbhatia">
                <IconBrandGithub className="w-10 h-10" />
              </a>
              <a href="mailto:bhatiakbkb@gmail.com">
                <IconMail className="w-10 h-10" />
              </a>
              <a href="https://x.com/devKunaldev">
                <IconBrandTwitter className="w-10 h-10" />
              </a>
              <a href="https://www.linkedin.com/in/bhatia-kunal/">
                <IconBrandLinkedin className="w-10 h-10" />
              </a>
            </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-md text-customBlue pl-1">
                Check out my new react hook library!
              </div>
              <div>
                <NPMButton cmd="npm install hook-master-react" />
              </div>
            </div>
          </div>

          {/* {Profile image} */}
          <div className="flex flex-col gap-5 items-center justify-center">
            <div className="text-3xl lg:hidden text-customGreen">
              You got it, that&apos;s me!
            </div>
            <div className="w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-3xl">
              <Image
                src={profile}
                alt="profile"
                className="object-cover w-full h-full object-top"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
        {/* About Me */}
        <div className="grid lg:grid-cols-2 gap-28 p-4">
          <div className="flex flex-col gap-5">
            <div className="md:hidden text-4xl text-customPurple">Activity</div>
            <Activity />
          </div>
          <div className="flex flex-col gap-5">
            <div className="md:hidden text-4xl text-customPurple">Bio</div>
            <div className="text-customGreen text-xl">
              Hey, I&apos;m Kunal, a 23-year-old full-stack developer and
              freelancer from India. I&apos;ve been passionate about coding
              since 2019 and started freelancing and working professionally in
              2023. I also enjoy tackling algorithm-based problems.
            </div>
          </div>
        </div>

        {/* Code Skills  */}
        <div id="skills" className="flex flex-col items-center gap-10">
          <div className="text-customYellow text-5xl md:text-6xl">
            <span className="text-customGreen">Code</span>:{" "}
            <span className="text-customBlue">skills</span>
          </div>
          <div className="flex flex-col gap-5 items-center">
            {/* languages */}
            <div className="flex gap-5 flex-wrap justify-center">
              {languages.map((skill) => (
                <Tile key={skill.skill} skill={skill} />
              ))}
            </div>
            {/* Frameworks */}
            <div className="flex gap-5 flex-wrap justify-center">
              {frameworks.map((skill) => (
                <Tile key={skill.skill} skill={skill} />
              ))}
            </div>
            {/* devops */}
            <div className="flex gap-5 flex-wrap justify-center">
              {devops.map((skill) => (
                <Tile key={skill.skill} skill={skill} />
              ))}
            </div>
            {/* database */}
            <div className="flex gap-5 flex-wrap justify-center">
              {database.map((skill) => (
                <Tile key={skill.skill} skill={skill} />
              ))}
            </div>
            {/* versionc control */}
            <div className="flex gap-5 flex-wrap justify-center">
              {versionControl.map((skill) => (
                <Tile key={skill.skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Code: work */}
        <div id="work" className="flex flex-col items-center gap-10 p-4">
          <div className="text-customYellow text-5xl md:text-6xl">
            <span className="text-customGreen">Code</span>:{" "}
            <span className="text-customBlue">work</span>
          </div>
          <div className="w-full space-y-40">
            {work.map((experience) => {
              return <WorkCard key={experience.company} work={experience} />;
            })}
          </div>
        </div>

        {/* Code: Projects */}
        <div id="projects" className="flex flex-col items-center gap-10 p-4">
          <div className="text-customYellow text-5xl md:text-6xl">
            <span className="text-customGreen">Code</span>:{" "}
            <span className="text-customBlue">projects</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 w-full">
            {projects.map((project) => {
              return <ProjectCard key={project.name} project={project} />;
            })}
          </div>
        </div>

        {/* Leetcode heatmap */}
        <div className="flex flex-col gap-4 items-center">
          <LeetCodeHeatmap />
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-4">
          <div className="w-full h-1 bg-customRed"></div>
          <div className="flex justify-between items-center gap-5">
            <div className="flex gap-2 text-customGreen">
              <a href="https://github.com/Kunalkbhatia">
                <IconBrandGithub className="w-5 h-5 md:w-10 md:h-10" />
              </a>
              <a href="mailto:bhatiakbkb@gmail.com">
                <IconMail className="w-5 h-5 md:w-10 md:h-10" />
              </a>
              <a href="https://x.com/devKunaldev">
                <IconBrandTwitter className="w-5 h-5 md:w-10 md:h-10" />
              </a>
              <a href="https://www.linkedin.com/in/bhatia-kunal/">
                <IconBrandLinkedin className="w-5 h-5 md:w-10 md:h-10" />
              </a>
            </div>
            <div className="flex gap-1 text-md md:text-2xl items-center text-customPurple ">
              <span>Made with</span>{" "}
              <IconHeart fill="#FF085E" className="w-5 h-5" />{" "}
              <span>, Thank You!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
