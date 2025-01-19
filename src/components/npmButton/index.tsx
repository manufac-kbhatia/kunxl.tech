"use client";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useClipboard } from "hook-master-react";

export function NPMButton({ cmd }: { cmd: string }) {
  const clipboard = useClipboard({ timeout: 2000 });
  return (
    <div className="flex h-[70px] items-center gap-4 overflow-hidden rounded-2xl border border-gray-500 bg-gray-900 text-customBlue shadow-md transition-shadow hover:shadow-lg">
      {/* Left Blue Bar */}
      <div className="h-full w-[10%] rounded-l-2xl bg-customBlue" />

      {/* Command Section */}
      <div className="flex flex-1 items-center justify-between gap-4 px-4">
        <div className="truncate text-lg font-bold text-gray-200 md:text-xl">
          {cmd}
        </div>

        {/* Copy Button */}
        <button
          className="flex items-center justify-center rounded-lg border border-customBlue p-2 text-customBlue transition-colors hover:bg-customBlue hover:text-white"
          onClick={() => clipboard.copy(cmd)}
        >
          {clipboard.copied ? <IconCheck size={20} /> : <IconCopy size={20} />}
        </button>
      </div>
    </div>
  );
}
