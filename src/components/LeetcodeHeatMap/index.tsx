"use client";
import { useEffect, useState } from "react";
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
  const [loaing, setLoading] = useState(false);

  const getData = async () => {
    const response = await fetch(
      "https://leetcode-stats-api.herokuapp.com/bhatiakbkb",
    );
    const data = (await response.json()) as UserStatistics;
    const transformedData: Progress[] = Object.entries(
      data.submissionCalendar,
    ).map(([timestamp, count]) => {
      const date = new Date(Number(timestamp) * 1000)
        .toISOString()
        .split("T")[0];
      return { date, count };
    });
    setData(transformedData);
    setTotal(data.totalSolved);
    setInsights(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  if (loaing === true) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-40 w-40 animate-spin rounded-full border-8 border-gray-200 border-t-customBlue"></div>
      </div>
    );
  }
  return (
    <div className="flex w-full flex-col items-center gap-5">
      {data && (
        <div className="flex w-full flex-col items-center gap-5">
          <div className="text-5xl md:text-6xl">
            <span className="text-customGreen">LeetCode</span>:{" "}
            <span className="text-customBlue">{total} + </span>
          </div>
          <div className="w-full rounded-lg bg-white p-5">
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

      {insights && <LeetCodeChart insights={insights} />}
    </div>
  );
}
