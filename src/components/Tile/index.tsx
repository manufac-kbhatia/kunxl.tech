import Image from "next/image";
import { Skill } from "@/utils/utils";

export function Tile({ skill }: { skill: Skill }) {
  return (
    <div
      className="flex gap-4 justify-center items-center text-xl w-[200px] p-3 border-[1px] border-b-8 rounded-3xl"
      style={{ borderColor: skill.color }}
    >
      <Image src={skill.image} alt="javascript" width={30} height={30} />
      <div>{skill.skill}</div>
    </div>
  );
}
