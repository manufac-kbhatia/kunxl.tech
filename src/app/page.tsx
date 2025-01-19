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
  andMore,
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
      <div className="mx-auto flex max-w-6xl flex-col gap-36 md:p-10">
        {/* Info section */}
        <div id="about" className="mt-24 grid gap-28 lg:grid-cols-2">
          {/* About You */}
          <div className="space-y-5">
            <div className="p-2">
              <div className="text-8xl text-customYellow">Kunal</div>
              <div className="space-y-2 text-3xl text-customPurple md:text-4xl">
                <div>Freelancer</div>
                <div>Full Stack Sorcerer</div>
                <div>
                  Turns <span className="text-customGreen">Coffee</span> into{" "}
                  <span className="text-customGreen">Code</span>
                </div>
              </div>
              <div className="flex gap-2 text-customRed">
                <a href="https://github.com/Kunalkbhatia">
                  <IconBrandGithub className="h-10 w-10" />
                </a>
                <a href="mailto:bhatiakbkb@gmail.com">
                  <IconMail className="h-10 w-10" />
                </a>
                <a href="https://x.com/devKunaldev">
                  <IconBrandTwitter className="h-10 w-10" />
                </a>
                <a href="https://www.linkedin.com/in/bhatia-kunal/">
                  <IconBrandLinkedin className="h-10 w-10" />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-md pl-1 text-customBlue">
                Check out my new react hook library!
              </div>
              <div>
                <NPMButton cmd="npm install hook-master-react" />
              </div>
            </div>
          </div>

          {/* {Profile image} */}
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="text-3xl text-customGreen lg:hidden">
              You got it, that&apos;s me!
            </div>
            <div className="h-80 w-80 overflow-hidden rounded-3xl md:h-96 md:w-96">
              <Image
                src={profile}
                alt="profile"
                className="h-full w-full object-cover object-top"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
        {/* About Me */}
        <div className="grid gap-28 p-4 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <div className="text-4xl text-customPurple md:hidden">Activity</div>
            <Activity />
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-4xl text-customPurple md:hidden">Bio</div>
            <div className="text-xl text-customGreen">
              Hey, I&apos;m Kunal, a 23-year-old full-stack developer and
              freelancer from India. I&apos;ve been passionate about coding
              since 2019 and started freelancing and working professionally in
              2023. I also enjoy tackling algorithm-based problems.
            </div>
          </div>
        </div>

        {/* Code Skills  */}
        <div id="skills" className="flex flex-col items-center gap-10">
          <div className="text-5xl text-customYellow md:text-6xl">
            <span className="text-customGreen">Code</span>:{" "}
            <span className="text-customBlue">skills</span>
          </div>
          <div className="flex flex-col items-center gap-5">
            {/* languages */}
            <div className="flex flex-wrap justify-center gap-5">
              {languages.map((skill) => (
                <Tile key={skill.skill} skill={skill} />
              ))}
            </div>
            {/* Frameworks */}
            <div className="flex flex-wrap justify-center gap-5">
              {frameworks.map((skill) => (
                <Tile key={skill.skill} skill={skill} />
              ))}
            </div>
            {/* devops */}
            <div className="flex flex-wrap justify-center gap-5">
              {devops.map((skill) => (
                <Tile key={skill.skill} skill={skill} />
              ))}
            </div>
            {/* database */}
            <div className="flex flex-wrap justify-center gap-5">
              {database.map((skill) => (
                <Tile key={skill.skill} skill={skill} />
              ))}
            </div>
            {/* versionc control */}
            <div className="flex flex-wrap justify-center gap-5">
              {versionControl.map((skill) => (
                <Tile key={skill.skill} skill={skill} />
              ))}
            </div>
            {/* And more */}
            <div className="flex flex-wrap justify-center gap-5">
                <Tile skill={andMore} />
            </div>
          </div>
        </div>

        {/* Code: work */}
        <div id="work" className="flex flex-col items-center gap-10 p-4">
          <div className="text-5xl text-customYellow md:text-6xl">
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
          <div className="text-5xl text-customYellow md:text-6xl">
            <span className="text-customGreen">Code</span>:{" "}
            <span className="text-customBlue">projects</span>
          </div>
          <div className="grid w-full gap-5 lg:grid-cols-2">
            {projects.map((project) => {
              return <ProjectCard key={project.name} project={project} />;
            })}
          </div>
        </div>

        {/* Leetcode heatmap */}
        <div className="flex flex-col items-center gap-4">
          <LeetCodeHeatmap />
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-4">
          <div className="h-1 w-full bg-customRed"></div>
          <div className="flex items-center justify-between gap-5">
            <div className="flex gap-2 text-customGreen">
              <a href="https://github.com/Kunalkbhatia">
                <IconBrandGithub className="h-5 w-5 md:h-10 md:w-10" />
              </a>
              <a href="mailto:bhatiakbkb@gmail.com">
                <IconMail className="h-5 w-5 md:h-10 md:w-10" />
              </a>
              <a href="https://x.com/devKunaldev">
                <IconBrandTwitter className="h-5 w-5 md:h-10 md:w-10" />
              </a>
              <a href="https://www.linkedin.com/in/bhatia-kunal/">
                <IconBrandLinkedin className="h-5 w-5 md:h-10 md:w-10" />
              </a>
            </div>
            <div className="text-md flex items-center gap-1 text-customPurple md:text-2xl">
              <span>Made with</span>{" "}
              <IconHeart fill="#FF085E" className="h-5 w-5" />{" "}
              <span>, Thank You!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
