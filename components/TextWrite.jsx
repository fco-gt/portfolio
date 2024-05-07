import React from "react";
import Typerwriter from "typewriter-effect";

export default function TextWrite() {
  return (
    <Typerwriter
      options={{
        strings: [
          "Web Developer",
          "Software Engineer",
          "Developer",
          "Full Stack Developer",
          "Javascript Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
