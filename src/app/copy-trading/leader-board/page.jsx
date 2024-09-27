"use client";

import dynamic from "next/dynamic";

const LeaderBoard = dynamic(() => import("./leaderboard").then((x) => x.LeaderBoard), { ssr: false });

export default function LeaderBoardPage() {
  return <LeaderBoard />;
}
