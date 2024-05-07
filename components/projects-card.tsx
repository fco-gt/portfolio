import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";
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

const tooltipComponents: { [key: string]: React.FC } = {
  javascriptTT: javascriptTT,
  nodejsTT: nodejsTT,
  mongodbTT: mongodbTT,
  reactTT: reactTT,
  nextjsTT: nextjsTT,
  typescriptTT: typescriptTT,
  tailwindcssTT: tailwindcssTT,
  html5TT: html5TT,
  css3TT: css3TT,
};

interface Project {
  name: string;
  description: string;
  image: string;
  isPrivate: boolean;
  invite?: string;
  topgg?: string;
  badges: string[];
  github?: string;
  url?: string;
}

export default function ProjectsCard({ project }: { project: Project }) {
  const renderBadge = (badge: string) => {
    const TooltipComponent = tooltipComponents[badge];
    if (TooltipComponent && typeof TooltipComponent === "function") {
      return <TooltipComponent key={badge} />;
    } else {
      return <span key={badge}>{badge}</span>;
    }
  };

  return (
    <>
      <Card isBlurred className="px-5 projects-cards w-full h-full" shadow="sm">
        <CardHeader className="flex gap-2">
          {project.badges.map((badge, i) => renderBadge(badge))}
        </CardHeader>
        <CardBody className="justify-center items-center">
          <Image
            className="object-cover"
            src={project.image}
            alt={project.name}
          />
        </CardBody>
        <CardFooter className="flex flex-col text-center justify-center items-center justify-items-center">
          <b className="text-2xl">{project.name}</b>
          <p className="text-default-500 mt-2">{project.description}</p>
          <div className="flex items-center justify-center justify-items-center mt-5 gap-5">
            {project.isPrivate ? (
              <>
                <Link isExternal href={project.invite}>
                  <Button
                    color="success"
                    variant="bordered"
                    startContent={<FaDiscord />}
                  >
                    Invitar
                  </Button>
                </Link>

                <Link isExternal href={project.topgg}>
                  <Button
                    color="success"
                    variant="bordered"
                    startContent={<BsRobot />}
                  >
                    Top.gg
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link isExternal href={project.github}>
                  <Button
                    color="success"
                    variant="bordered"
                    startContent={<FaGithub />}
                  >
                    Repositorio
                  </Button>
                </Link>
                <Link isExternal href={project.url}>
                  <Button
                    color="success"
                    variant="bordered"
                    startContent={<VscPreview />}
                  >
                    Mirar
                  </Button>
                </Link>
              </>
            )}
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
