"use client";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useClipboard } from "hook-master-react";

export function NPMButton({ cmd }: { cmd: string }) {
    const clipboard = useClipboard({ timeout: 2000 });
    return (
        <div className="flex items-center gap-4 h-[70px] border border-gray-500 rounded-2xl overflow-hidden text-customBlue bg-gray-900 shadow-md hover:shadow-lg transition-shadow">
            {/* Left Blue Bar */}
            <div className="w-[10%] h-full bg-customBlue rounded-l-2xl" />
            
            {/* Command Section */}
            <div className="flex-1 flex justify-between items-center gap-4 px-4">
                <div className="text-lg md:text-xl font-bold truncate text-gray-200">
                    {cmd}
                </div>
                
                {/* Copy Button */}
                <button
                    className="flex items-center justify-center border border-customBlue p-2 rounded-lg text-customBlue hover:bg-customBlue hover:text-white transition-colors"
                    onClick={() => clipboard.copy(cmd)}
                >
                    {clipboard.copied ? <IconCheck size={20} /> : <IconCopy size={20}/>}
                </button>
            </div>
        </div>
    );
}
