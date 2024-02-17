import React from "react";
import { Chip, Tooltip } from "@nextui-org/react";
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiReact,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

export const javascriptTT = () => {
  return (
    <Tooltip
      showArrow={true}
      color="success"
      delay={0}
      closeDelay={0}
      content="Javascript"
    >
      <Chip variant="faded" color="success">
        <DiJavascript1 size={19} />
      </Chip>
    </Tooltip>
  );
}

export const nodejsTT = () => {
  return (
    <Tooltip
      showArrow={true}
      color="success"
      delay={0}
      closeDelay={0}
      content="NodeJS"
    >
      <Chip variant="faded" color="success">
        <DiNodejs size={19} />
      </Chip>
    </Tooltip>
  );
}

export const mongodbTT = () => {
  return (
    <Tooltip
      showArrow={true}
      color="success"
      delay={0}
      closeDelay={0}
      content="MongoDB"
    >
      <Chip variant="faded" color="success">
        <DiMongodb size={19} />
      </Chip>
    </Tooltip>
  );
}

export const reactTT = () => {
  return (
    <Tooltip
      showArrow={true}
      color="success"
      delay={0}
      closeDelay={0}
      content="React"
    >
      <Chip variant="faded" color="success">
        <DiReact size={19} />
      </Chip>
    </Tooltip>
  );
}

export const nextjsTT = () => {
  return (
    <Tooltip
      showArrow={true}
      color="success"
      delay={0}
      closeDelay={0}
      content="NextJS"
    >
      <Chip variant="faded" color="success">
        <TbBrandNextjs size={19} />
      </Chip>
    </Tooltip>
  );
}

export const typescriptTT = () => {
  return (
    <Tooltip
      showArrow={true}
      color="success"
      delay={0}
      closeDelay={0}
      content="Typescript"
    >
      <Chip variant="faded" color="success">
        <TbBrandTypescript size={19} />
      </Chip>
    </Tooltip>
  );
}

export const tailwindcssTT = () => {
  return (
    <Tooltip
      showArrow={true}
      color="success"
      delay={0}
      closeDelay={0}
      content="Tailwind CSS"
    >
      <Chip variant="faded" color="success">
        <SiTailwindcss size={19} />
      </Chip>
    </Tooltip>
  );
}

export const html5TT = () => {
  return (
    <Tooltip
      showArrow={true}
      color="success"
      delay={0}
      closeDelay={0}
      content="HTML5"
    >
      <Chip variant="faded" color="success">
        <DiHtml5 size={19} />
      </Chip>
    </Tooltip>
  );
}

export const css3TT = () => {
  return (
    <Tooltip
      showArrow={true}
      color="success"
      delay={0}
      closeDelay={0}
      content="CSS3"
    >
      <Chip variant="faded" color="success">
        <DiCss3 size={19} />
      </Chip>
    </Tooltip>
  );
}
