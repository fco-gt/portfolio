import { title, subtitle } from "@/components/primitives";
import { Image, Card, CardFooter, Button } from "@nextui-org/react";
import nextImage from "next/image";

import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiReact,
  DiHtml5,
  DiCss3,
  DiPython,
} from "react-icons/di";
import { SiExpress, SiPostman } from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbFileTypeSql,
} from "react-icons/tb";

export default function page() {
  return (
    <div>
      <section className="flex justify-between p-5">
        <div className="flex-1">
          <div className="text-center pb-9">
            <h2 className={title({ size: "md" })}>Sobre mi</h2>
          </div>
          <p className="text-about text-xl">
            <br />
            Soy estudiante de Ingeniería Informática en DuocUC y Desarrollador
            Web Full Stack autónomo.
            <br />
            Me apasiona aprender todo lo relacionado con la programación,
            especialmente el Desarrollo Web.
            <br />
            <br />
            Me adentré en el mundo de la programación desde que era joven,
            aproximadamente a los 13 años, y hasta ahora no me arrepiento.
            <br />
            <br />
            Desde que conocí JavaScript, me interesé mucho por las posibilidades
            que ofrecía este lenguaje.
            <br />
            <br />
            Comencé creando un pequeño bot de Discord llamado{" "}
            <strong className={title({ color: "green", size: "xl" })}>
              Mankekito
            </strong>{" "}
            <br />y actualmente este bot esta en mas de{" "}
            <strong className={title({ color: "green", size: "xl" })}>
              250 servidores y verificado por Discord.
            </strong>
            <br />
            <br />
            Ahora me estoy adentrando en el mundo del Desarrollo Web y espero
            poder dedicarme a esto con toda mi pasión.
          </p>
          <div className="pt-5 text-center">
            <h2 className={title({ color: "green", size: "xl" })}>
              {`"¿Un día? mejor día uno"`}
            </h2>
          </div>
        </div>
        <div className="hidden sm:flex pl-7">
          <Image
            as={nextImage}
            width={290}
            height={290}
            alt="FCO-GT Icon"
            src="/images/mamkeke.jpg"
            className="rounded-full"
          ></Image>
        </div>
      </section>

      <section className="mt-12">
        <div className="text-center">
          <h2 className={title({ color: "green" })}>Tecnologías</h2>
        </div>
        <div className="skills-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 justify-items-center items-center mt-11">
          <Card
            isBlurred
            isPressable
            radius="lg"
            className="p-[59px] skill-card"
          >
            <DiJavascript1 className="skills-icon" />
          </Card>
          <Card
            isBlurred
            isPressable
            radius="lg"
            className="p-[59px] skill-card"
          >
            <DiNodejs className="skills-icon" />
          </Card>
          <Card
            isBlurred
            isPressable
            radius="lg"
            className="p-[59px] skill-card"
          >
            <SiExpress className="skills-icon" />
          </Card>
          <Card
            isBlurred
            isPressable
            radius="lg"
            className="p-[59px] skill-card"
          >
            <DiMongodb className="skills-icon" />
          </Card>
          <Card
            isBlurred
            isPressable
            radius="lg"
            className="p-[59px] skill-card"
          >
            <DiReact className="skills-icon" />
          </Card>
          <Card
            isBlurred
            isPressable
            radius="lg"
            className="p-[59px] skill-card"
          >
            <TbBrandNextjs className="skills-icon" />
          </Card>
          <Card
            isBlurred
            isPressable
            radius="lg"
            className="p-[59px] skill-card"
          >
            <DiHtml5 className="skills-icon" />
          </Card>
          <Card
            isBlurred
            isPressable
            radius="lg"
            className="p-[59px] skill-card"
          >
            <DiCss3 className="skills-icon" />
          </Card>
          <Card
            isBlurred
            isPressable
            radius="lg"
            className="p-[59px] skill-card"
          >
            <TbBrandTypescript className="skills-icon" />
          </Card>
          <Card
            isBlurred
            isPressable
            radius="lg"
            className="p-[59px] skill-card"
          >
            <TbFileTypeSql className="skills-icon" />
          </Card>
          <Card
            isBlurred
            isPressable
            radius="lg"
            className="p-[59px] skill-card"
          >
            <DiPython className="skills-icon" />
          </Card>
          <Card
            isBlurred
            isPressable
            radius="lg"
            className="p-[59px] skill-card"
          >
            <SiPostman className="skills-icon" />
          </Card>
        </div>
      </section>
    </div>
  );
}
