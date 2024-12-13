import javascript from "../../public/javascript (1).svg";
import typescript from "../../public/typescript.svg";
import cpp from "../../public/cpp-svgrepo-com.svg";
import go from "../../public/go-svgrepo-com.svg";
import docker from "../../public/docker.svg";
import aws from "../../public/aws.svg";
import github from "../../public/github-color-svgrepo-com.svg";
import react from "../../public/react.svg";
import express from "../../public/express.svg";
import nextjs from "../../public/nextjs-svgrepo-com.svg";
import mongodb from "../../public/mongodb.svg";
import redis from "../../public/redis.svg";
import postgres from "../../public/postgresql.svg";
import bash from "../../public/bash-icon-svgrepo-com.svg";
import git from "../../public/git.svg";
import electron from "../../public/electron-svgrepo-com.svg";
export interface Skill {
  skill: string;
  image: string;
  color: string;
}
export const languages: Skill[] = [
  {
    skill: "Javascript",
    image: javascript,
    color: "#FF085E",
  },
  {
    skill: "Typescript",
    image: typescript,
    color: "#FF085E",
  },
  {
    skill: "C++",
    image: cpp,
    color: "#FF085E",
  },
  {
    skill: "Go",
    image: go,
    color: "#FF085E",
  },
];

export const devops: Skill[] = [
  {
    skill: "Docker",
    image: docker,
    color: "#0CDCF7",
  },
  {
    skill: "AWS",
    image: aws,
    color: "#0CDCF7",
  },
  {
    skill: "Github",
    image: github,
    color: "#0CDCF7",
  },
];

export const frameworks: Skill[] = [
  {
    skill: "React",
    image: react,
    color: "#CAA6F7",
  },
  {
    skill: "NextJs",
    image: nextjs,
    color: "#CAA6F7",
  },
  {
    skill: "Electron",
    image: electron,
    color: "#CAA6F7",
  },
  {
    skill: "Express",
    image: express,
    color: "#CAA6F7",
  },
];

export const database: Skill[] = [
  {
    skill: "MongoDB",
    image: mongodb,
    color: "#BBF7D0",
  },
  {
    skill: "Postgres",
    image: postgres,
    color: "#BBF7D0",
  },
  {
    skill: "Redis",
    image: redis,
    color: "#BBF7D0",
  },
];

export const versionControl: Skill[] = [
  {
    skill: "Bash",
    image: bash,
    color: "#6ee7b7",
  },
  {
    skill: "Git",
    image: git,
    color: "#6ee7b7",
  },
];
