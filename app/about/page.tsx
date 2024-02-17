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
import { SiExpress } from "react-icons/si";
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
            Hola a todos,{" "}
            <strong className={title({ color: "green", size: "xl" })}>
              soy Francisco.
            </strong>
            <br />
            Soy estudiante de Ingenieria Informatica en DuocUC y Desarrollador
            Web autonomo.
            <br />
            Me gusta y apasiona todo lo relacionado a programacion y sobre todo
            el Desarrollo Web.
            <br />
            <br />
            Me adentre en el mundo de la programacion desde que era joven,
            aproximadamente
            <br />
            unos 13 años y hasta ahora no me arrepiento de eso.
            <br />
            <br />
            Desde que conoci Javascript me interese mucho por las cosas que
            podia hacer con este lenguaje.
            <br />
            Inicie creando un pequeño{" "}
            <strong className={title({ color: "green", size: "xl" })}>
              Bot de Discord llamado Mankekito
            </strong>{" "}
            que si te preguntas ¿que es un Mankekito? (es un dulce de mi pais
            llamado Mankeke) <br />y actualmente este bot esta en mas de{" "}
            <strong className={title({ color: "green", size: "xl" })}>
              250 servidores y verificado por Discord.
            </strong>
            <br />
            <br />
            Ahora me adentre en el mundo del Desarrollo Web y espero poder
            dedicarme con toda pasion a esto.
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
          <h2 className={title({ color: "green" })}>Habilidades</h2>
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
        </div>
      </section>
    </div>
  );
}
