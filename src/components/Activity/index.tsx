"use client";

import Image from "next/image";
import monkey from "../../../public/monkey.avif";
import { useEffect, useState } from "react";
import { Time } from "../Time";

export interface VSCodeActivity {
  id: string;
  name: string;
  type: number;
  state: string;
  session_id: string;
  details: string;
  application_id: string;
  timestamps: {
    start: number;
  };
  assets: {
    large_image: string;
    large_text: string;
    small_image: string;
    small_text: string;
  };
  buttons: string[];
  created_at: number;
}

export interface Spotify {
  timestamps: {
    start: number;
    end: number;
  };
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
  track_id: string;
}

export function Activity() {
  const [vsCodeData, setVSCodeData] = useState<VSCodeActivity | null>(null);
  const [spotifyData, setSpotifyData] = useState<Spotify | null>(null);
  const [status, setStatus] = useState<string>("offline");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const socket = new WebSocket("wss://api.lanyard.rest/socket");
    let heartBeatInterval: NodeJS.Timeout | undefined;

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.op === 1) {
        const initializeMessage = {
          op: 2,
          d: {
            subscribe_to_id: "714468772739678289",
          },
        };
        socket.send(JSON.stringify(initializeMessage));
        const heartBeat = data.d.heartbeat_interval;

        heartBeatInterval = setInterval(() => {
          const heartbeatMessage = {
            op: 3,
          };
          socket.send(JSON.stringify(heartbeatMessage));
        }, heartBeat);
      } else if (data.op === 0) {
        const vsCode: VSCodeActivity = data.d.activities.find(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (activity: any) => activity.name === "Visual Studio Code",
        );
        if (vsCode) {
          setVSCodeData(vsCode);
        } else {
          setVSCodeData(null);
        }
        setSpotifyData(data.d.spotify);
        setStatus(data.d.discord_status);
      }
    };
    return () => {
      if (heartBeatInterval !== undefined) {
        clearInterval(heartBeatInterval);
      }
      socket.close();
    };
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      if (spotifyData !== null) {
        const totalDuration =
          spotifyData.timestamps.end - spotifyData.timestamps.start;
        const currentTime = Date.now();
        const elapsedTime = currentTime - spotifyData.timestamps.start;

        if (elapsedTime >= totalDuration) {
          setProgress(100);
        } else {
          const newProgress = (elapsedTime / totalDuration) * 100;
          setProgress(newProgress);
        }
      }
    };

    // Update progress every 100 milliseconds
    const intervalId = setInterval(updateProgress, 100);

    // Clean up interval when component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [spotifyData]);

  if (spotifyData !== null) {
    return (
      <div className="flex items-center gap-5">
        <Image
          src={spotifyData?.album_art_url ?? monkey}
          alt="album cover"
          height={100}
          width={100}
          className="spin-fast rounded-full object-cover"
        />
        <div className="flex flex-col gap-2">
          <div className="text-3xl text-customLightBlue">
            {spotifyData?.artist.split("; ")[0]}
          </div>
          <div className="text-xl text-customPurple">{spotifyData?.song}</div>
          <div className="h-1 w-full rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-customRed"
              style={{ width: `${progress}%` }}
            />
          </div>
          {vsCodeData && (
            <div className="flex items-center gap-2 text-sm text-customYellow">
              <div className="h-10 w-10 overflow-hidden rounded-full border border-customBlue">
                <Image
                  src={`https://cdn.discordapp.com/app-assets/${vsCodeData.application_id}/${vsCodeData.assets.small_image}.png`}
                  alt="vs code"
                  height={100}
                  width={100}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="flex flex-wrap">
                <div>{vsCodeData.state}</div>
                <span>~</span>
                <div>{vsCodeData.details}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } else if (vsCodeData !== null) {
    return (
      <div className="flex items-center gap-5">
        <Image
          src={`https://cdn.discordapp.com/app-assets/${vsCodeData.application_id}/${vsCodeData.assets.small_image}.png`}
          alt="album cover"
          height={100}
          width={100}
          className="rounded-3xl object-cover"
        />
        <div className="flex flex-col gap-1 text-2xl">
          <div className="text-customLightBlue">@kunxl</div>
          <div>
            <div className="text-customOrange">{vsCodeData.state}</div>
            <div className="text-customPurple">{vsCodeData.details}</div>
          </div>
          <Time />
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-5">
      <Image
        src={monkey}
        alt="monkey"
        height={100}
        width={100}
        className="rounded-3xl bg-customGreen"
      />
      <div className="flex flex-col gap-1 text-2xl">
        <div className="text-customLightBlue">@kunxl</div>
        <div className="text-customPurple">{status}</div>
        <Time />
      </div>
    </div>
  );
}
