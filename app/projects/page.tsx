import { title } from "@/components/primitives";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
  Link,
  Tooltip,
} from "@nextui-org/react";

import projects from "@/config/projects";
import ProjectsCard from "@/components/projects-card";

import { FaDiscord, FaGithub } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import {
  javascriptTT,
  nodejsTT,
  mongodbTT,
  reactTT,
  nextjsTT,
  typescriptTT,
  tailwindcssTT,
  html5TT,
  css3TT,
} from "@/components/tooltip-projects";

export default function page() {
  return (
    <>
      <section className="text-center">
        <h2 className={title()}>
          Algunos de{" "}
          <strong className={title({ color: "green" })}>mis proyectos</strong>
        </h2>
        <p className="pt-3 text-xl">
          Estos son algunos proyectos que he hecho de manera personal o en grupo
          y que me han ayudado a aprender y mejorar mis habilidades.
          <br />
          Si quieres ver más proyectos, puedes visitar mi{" "}
          <Link
            href="https://github.com/fco-gt"
            className="text-green-500 text-xl"
            isExternal
          >
            {" "}
            GitHub
          </Link>
          .
        </p>
      </section>

      <section className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center items-center mt-12 mb-5">
        {projects.map((project, i) => (
          <ProjectsCard key={i} project={project} />
        ))}
      </section>
    </>
  );
}
