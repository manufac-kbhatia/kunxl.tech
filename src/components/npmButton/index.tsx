"use client"
import { IconCopy } from "@tabler/icons-react";
import { useClipboard } from "hook-master-react";

export function NPMButton({cmd}: {cmd: string}) {
    const clipboard = useClipboard({ timeout: 2000 });
    return (
        <div className="flex items-center gap-8 h-[70px] border-[1px] border-gray-500 rounded-2xl overflow-hidden text-customBlue">
            <div className="w-[10%] h-full bg-customBlue rounded-l-lg"/>
            <div className="flex justify-between items-center gap-5 px-2">
            <div className="lg:text-xl font-extrabold">{cmd}</div>
            <button className="border border-customBlue p-1 rounded-md cursor-pointer w-fit" onClick={() => clipboard.copy(cmd)}><IconCopy/></button>
            </div>
        </div>
    )
}