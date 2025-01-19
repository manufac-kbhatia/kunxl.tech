import Image from "next/image";
import { Skill } from "@/utils/utils";

export function Tile({ skill }: { skill: Skill }) {
  return (
    <div
      className="flex w-[160px] items-center justify-center gap-4 rounded-3xl border-[1px] border-b-8 p-3 text-xl md:w-[200px]"
      style={{ borderColor: skill.color }}
    >
      <Image src={skill.image} alt="javascript" width={30} height={30} />
      <div>{skill.skill}</div>
    </div>
  );
}
