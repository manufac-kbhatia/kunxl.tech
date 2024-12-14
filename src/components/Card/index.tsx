import { Project, Work } from "@/utils/utils";
import profile from "../../../public/profile.jpeg";
import Image from "next/image";
import { IconBrandGithub, IconCode, IconLink } from "@tabler/icons-react";

export function WorkCard({work} : {work: Work}) {
    return (
        <div className="flex flex-col gap-5 border-2 border-r-8 border-b-8 border-customRed rounded-3xl max-w-4xl mx-auto p-5">
            <div className="flex justify-between">
                <div className="flex justify-between gap-3">
                    <div className="w-6 h-6 overflow-hidden rounded-3xl">
                        <Image src={profile} alt="profile" className="object-cover object-top w-full rounded-full overflow-hidden" />
                    </div>
                    <div>@kunxl</div>
                </div>
                <div className="flex gap-3"><span className="text-customBlue">{work.location}</span> <span className="text-customYellow">•</span> <span className="text-customGreen">{work.fromTo}</span></div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="text-customOrange text-3xl">{work.company}</div>
                <div className="text-customPurple text-xl">{work.role}</div>
                <ul className="list-disc pl-10">
                    {work.description.map((point, index) => {
                        return <li key={index}>{point}</li>
                    })}
                </ul>
                <div className="flex gap-5 items-center">
                    <IconCode className="h-5 w-5 text-customBlue"/>
                    <div className="text-cyan-400">{work.techStack.join(", ")}</div>
                </div>
            </div>
        </div>
    )
}

export function ProjectCard({project} : {project: Project}) {
    return (
        <div className="flex flex-col gap-5 border-2 border-r-4 border-b-4 border-customOrange p-5 rounded-xl">
            <div className="flex justify-between">
                <div className="flex justify-between gap-3">
                    <div className="w-6 h-6 overflow-hidden rounded-3xl">
                        <Image src={profile} alt="profile" className="object-cover object-top w-full rounded-full overflow-hidden" />
                    </div>
                    <div>@kunxl</div>
                </div>
                <div className="flex gap-2">
                    <a href={project.liveURL}><IconLink className="text-customGreen"/></a>
                    <a href={project.github}><IconBrandGithub className="text-customRed"/></a>
                </div>
            </div>
            <div>
                <div className="text-2xl text-customOrange">{project.name}</div>
                <div>{project.description}</div>
                <div className="flex gap-5 items-center">
                    <IconCode className="h-5 w-5 text-customBlue"/>
                    <div className="text-cyan-400">{project.techStack.join(", ")}</div>
                </div>
            </div>
        </div>
    )
}