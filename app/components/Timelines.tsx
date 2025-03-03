"use client";

import { Button, CustomFlowbiteTheme, Timeline } from "flowbite-react";
import { JSX } from "react";

const timelineTheme: CustomFlowbiteTheme["timeline"] = {
  item: {
    root: {
        vertical: "mb-[4mm] ml-[4mm]",
    },
    content: {
      root: {
        base: "text-sm",
      },
      body: {
        base: "text-sm",
      },
      time: {
        base: "text-sm text-extralight",
      },
      title: {
        base: "font-bold",
      },
    },
    point: {
      line: "hidden h-0.5 w-full overflow-auto sm:flex",
      marker: {
        base: {
          vertical:
            "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-black bg-white",
        },
        icon: {
          base: "h-3 w-3",
          wrapper:
            "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full",
        },
      },
      vertical: "",
    },
  },
};

export function DatedTimeline({
  content,
}: Readonly<{
  content: {
    date: string;
    title: string;
    body: JSX.Element;
  }[];
}>) {
  return (
    <Timeline theme={timelineTheme}>
      {content.map((job, index) => (
        <Timeline.Item key={index}>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>{job.date}</Timeline.Time>
            <Timeline.Title>{job.title}</Timeline.Title>
            <Timeline.Body>{job.body}</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
