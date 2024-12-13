import Image from "next/image";
import profile from "../../public/profile.jpeg";
import { NPMButton } from "@/components/npmButton";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="">
      <div className="mx-auto max-w-6xl p-14 mt-28">
        <div className="grid lg:grid-cols-2 gap-28">
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
              <a href=""><IconBrandGithub className="w-10 h-10"/></a>
              <a href=""><IconMail className="w-10 h-10"/></a>
              <a href=""><IconBrandTwitter className="w-10 h-10"/></a>
              <a href=""><IconBrandLinkedin className="w-10 h-10"/></a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm text-customBlue">Check out my new react library!</div>
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
      </div>
    </div>
  );
}
