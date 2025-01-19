import { Project, Work } from "@/utils/utils";
import profile from "../../../public/profile.jpeg";
import Image from "next/image";
import { IconBrandGithub, IconCode, IconLink } from "@tabler/icons-react";

export function WorkCard({ work }: { work: Work }) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-5 rounded-3xl border-t-[1px] border-l-[1px] shadow-[2px_6px_0px_1px_#FF085E] md:shadow-[6px_6px_0px_1px_#FF085E] border-red-500 p-5">
      <div className="flex items-center justify-between">
        <div className="flex justify-between gap-3">
          <div className="h-6 w-6 overflow-hidden rounded-3xl">
            <Image
              src={profile}
              alt="profile"
              className="w-full overflow-hidden rounded-full object-cover object-top"
            />
          </div>
          <div>@kunxl</div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-xl">
          <span className="text-customBlue">{work.location}</span>{" "}
          <span className="hidden text-customYellow md:block">•</span>{" "}
          <span className="text-customGreen">{work.fromTo}</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-3xl text-customOrange">{work.company}</div>
        <div className="text-xl text-customPurple">{work.role}</div>
        <ul className="list-disc pl-10">
          {work.description.map((point, index) => {
            return <li key={index}>{point}</li>;
          })}
        </ul>
        <div className="flex items-center gap-5">
          <IconCode className="h-5 w-5 text-customBlue" />
          <div className="text-cyan-400">{work.techStack.join(", ")}</div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-5 rounded-xl border-2 border-b-4 border-r-4 border-customOrange p-5">
      <div className="flex justify-between">
        <div className="flex justify-between gap-3">
          <div className="h-6 w-6 overflow-hidden rounded-3xl">
            <Image
              src={profile}
              alt="profile"
              className="w-full overflow-hidden rounded-full object-cover object-top"
            />
          </div>
          <div>@kunxl</div>
        </div>
        <div className="flex gap-2">
          <a href={project.liveURL}>
            <IconLink className="text-customGreen" />
          </a>
          <a href={project.github}>
            <IconBrandGithub className="text-customRed" />
          </a>
        </div>
      </div>
      <div>
        <div className="text-2xl text-customOrange">{project.name}</div>
        <div>{project.description}</div>
        <div className="flex items-center gap-5">
          <IconCode className="h-5 w-5 text-customBlue" />
          <div className="text-cyan-400">{project.techStack.join(", ")}</div>
        </div>
      </div>
    </div>
  );
}
