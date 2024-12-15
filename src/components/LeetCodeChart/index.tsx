"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { UserStatistics } from "../LeetcodeHeatMap";


const chartConfig = {
  total: {
    label: "total",
  },
  hard: {
    label: "Hard",
    color: "hsl(var(--chart-1))",
  },
  medium: {
    label: "Medium",
    color: "hsl(var(--chart-2))",
  },
  easy: {
    label: "Easy",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function LeetCodeChart({
  insights,
}: {
  insights: UserStatistics;
}) {
    console.log(insights);
  const chartData = React.useMemo(() => {
    return [
      {
        browser: "Hard",
        visitors: insights?.hardSolved,
        fill: "#FF085E",
      },
      {
        browser: "Medium",
        visitors: insights?.mediumSolved,
        fill: "#ffbe6f",
      },
      {
        browser: "Easy",
        visitors: insights?.easySolved,
        fill: "#31a6fa",
      },
    ];
  }, [insights]);

  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, [chartData]);

  return (
    <Card className="flex flex-col w-full bg-customGreen">
      <CardHeader className="items-center pb-0">
        <CardTitle>Total problems solved</CardTitle>
        <CardDescription>LeetCode</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[200px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
