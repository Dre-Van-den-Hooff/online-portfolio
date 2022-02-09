import React from "react";
import { ResponsiveContainer, RadarChart, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, PolarGrid } from "recharts";

export default function Skills() {
  const data = [
    {
      subject: "JavaScript",
      A: 90,
      fullMark: 100,
    },
    {
      subject: "TypeScript",
      A: 80,
      fullMark: 100,
    },
    {
      subject: "Java",
      A: 70,
      fullMark: 100,
    },
    {
      subject: "SQL",
      A: 60,
      fullMark: 100,
    },
    {
      subject: "HTML",
      A: 95,
      fullMark: 100,
    },
    {
      subject: "CSS",
      A: 80,
      fullMark: 100,
    },
    {
      subject: "Python",
      A: 70,
      fullMark: 100,
    },
    {
      subject: "React",
      A: 80,
      fullMark: 100,
    },
    {
      subject: "NodeJs",
      A: 75,
      fullMark: 100,
    },
  ];
  return (
    <>
      <header>Skills</header>
      <ResponsiveContainer width="60%" height="60%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name="Programming languages" dataKey="A" stroke="black" fill="#fff" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
}
