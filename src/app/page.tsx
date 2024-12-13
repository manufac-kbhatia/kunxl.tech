import Image from "next/image";
import profile from "../../public/profile.jpeg";
import monkey from "../../public/icon.png";
import { NPMButton } from "@/components/npmButton";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
} from "@tabler/icons-react";
import { Time } from "@/components/Time";
import { Tile } from "@/components/Tile";
import { database, devops, frameworks, languages, versionControl } from "@/utils/utils";

export default function Home() {
  return (
    <div className="">
      <div className="mx-auto max-w-6xl p-14 mt-2">
        {/* Info section */}
        <div className="grid lg:grid-cols-2 gap-28 my-40">
          {/* About You */}
          <div className="space-y-5">
            <div className="text-7xl text-customYellow">Kunal</div>
            <div className="text-4xl text-customPurple space-y-2">
              <div>Freelancer</div>
              <div>Full Stack Sorcere</div>
              <div>
                Turns <span className="text-customGreen">Coffee</span> into{" "}
                <span className="text-customGreen">Code</span>
              </div>
            </div>
            <div className="flex gap-2 text-customRed">
              <a href="">
                <IconBrandGithub className="w-10 h-10" />
              </a>
              <a href="">
                <IconMail className="w-10 h-10" />
              </a>
              <a href="">
                <IconBrandTwitter className="w-10 h-10" />
              </a>
              <a href="">
                <IconBrandLinkedin className="w-10 h-10" />
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm text-customBlue">
                Check out my new react library!
              </div>
              <div>
                <NPMButton cmd="npm install hook-master-react" />
              </div>
            </div>
          </div>
          {/* {Profile image} */}
          <div className="w-96 h-96 overflow-hidden rounded-3xl">
            <Image
              src={profile}
              alt="profile"
              className="object-cover w-full h-full object-top"
              width={200}
              height={200}
            />
          </div>
        </div>
        {/* About Me */}
        <div className="grid lg:grid-cols-2 gap-28 my-40">
          <div className="flex gap-5 items-center">
            <Image
              src={monkey}
              alt="monkey"
              height={100}
              width={100}
              className="bg-customGreen rounded-3xl"
            />
            <div className="text-2xl flex flex-col gap-1">
              <div className="text-customLightBlue">@kunxl</div>
              <div className="text-customPurple">Idle</div>
              <Time />
            </div>
          </div>
          <div className="text-customGreen text-xl">Hey, I’m Kunal, I’m a 23-year-old full-stack developer and freelancer based in India. I’ve been coding since 2019 and have been freelancing and working since 2023. I also love solving problems based on algorithms.</div>
        </div>

        {/* Code Skills  */}
        <div className="flex flex-col items-center gap-10">
          <div className="text-customYellow text-6xl"><span className="text-customGreen">Code</span>: <span className="text-customBlue">skills</span></div>
          <div className="flex flex-col gap-5 items-center">
             {/* languages */}
            <div className="flex gap-5">{languages.map((skill) => <Tile key={skill.skill} skill={skill} /> )}</div>
            {/* Frameworks */}
            <div className="flex gap-5">{frameworks.map((skill) => <Tile key={skill.skill} skill={skill} /> )}</div>
            {/* devops */}
            <div className="flex gap-5">{devops.map((skill) => <Tile key={skill.skill} skill={skill} /> )}</div>
            {/* database */}
            <div className="flex gap-5">{database.map((skill) => <Tile key={skill.skill} skill={skill} /> )}</div>
            {/* versionc control */}
            <div className="flex gap-5">{versionControl.map((skill) => <Tile key={skill.skill} skill={skill} /> )}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
