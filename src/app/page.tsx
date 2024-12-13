import Image from "next/image";
import profile from "../../public/profile.jpeg";
import { NPMButton } from "@/components/npmButton";

export default function Home() {
  return (
    <div className="">
      <div className="mx-auto max-w-6xl p-14 mt-10">
        <div className="grid lg:grid-cols-2 gap-28">
          {/* About You */}
          <div>
            <div className="text-7xl text-customYellow">Kunal</div>
            <div className="text-4xl text-customPurple">
            <div>Freelancer</div>
            <div>Full Stack Sorcere</div>
            <div>Turns <span className="text-customGreen">Coffee</span> into <span className="text-customGreen">Code</span></div>
            </div>
            <div>Icons</div>
            <div>
              <div className="text-sm">Check out my new react library!</div>
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
