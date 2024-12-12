import Image from "next/image";
import profile from "../../public/profile.jpeg";

export default function Home() {
  return (
    <div className="">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2">
          {/* About You */}
          <div>
            <div className="text-7xl text-customYellow">Kunal</div>
            <div>Freelancer</div>
            <div>Full Stack Sorcere</div>
            <div>Turns Coffee into Code</div>
            <div>Icons</div>
            <div>npm libarary</div>
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
