"use client";
import { useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import { LeetCodeChart } from "../LeetCodeChart";

export type UserStatistics = {
  status: "success" | "error";
  message: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
  submissionCalendar: Record<string, number>;
};
export type Progress = {
  date: string;
  count: number;
};

export function LeetCodeHeatmap() {
  const [data, setData] = useState<Progress[]>();
  const [total, setTotal] = useState(0);
  const [insights, setInsights] = useState<UserStatistics>();

  const handleClick = async () => {
    const response = await fetch(
      "https://leetcode-stats-api.herokuapp.com/bhatiakbkb"
    );
    const data = (await response.json()) as UserStatistics;
    const transformedData: Progress[] = Object.entries(
      data.submissionCalendar
    ).map(([timestamp, count]) => {
      const date = new Date(Number(timestamp) * 1000)
        .toISOString()
        .split("T")[0];
      return { date, count };
    });
    setData(transformedData);
    setTotal(data.totalSolved);
    setInsights(data);
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <button
        className="w-fit text-3xl text-customOrange border-r-4 border-b-4 border-2 border-customOrange rounded-full font-extrabold p-2"
        onClick={() => handleClick()}
      >
        Click Here
      </button>

      {data && (
        <div className="w-full flex flex-col items-center gap-5">
          <div className="text-5xl lg:text-6xl">
            <span className="text-customGreen">LeetCode</span>:{" "}
            <span className="text-customBlue">{total} + </span>
          </div>
          <div className="bg-white p-5 rounded-lg w-full">
            <CalendarHeatmap
              startDate={new Date("2023-12-08")}
              endDate={new Date("2024-8-31")}
              values={data ?? []}
              classForValue={(value) => {
                if (!value) {
                  return "heatmap-empty"; // Default gray for empty cells
                }
                // Map counts to green intensity
                if (value.count === 1) return "heatmap-green-1";
                if (value.count === 2) return "heatmap-green-2";
                if (value.count === 3) return "heatmap-green-3";
                return "heatmap-green-4";
              }}
            />
          </div>
        </div>
      )}

      {insights && (
        <LeetCodeChart insights={insights} />
      )}
    </div>
  );
}
