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
          Estos son algunos projectos que he hecho de manera autonoma
        </p>
      </section>
      <section className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center items-center mt-12 mb-5">
        <Card
          isBlurred
          className="px-5 projects-cards w-full h-full"
          shadow="sm"
        >
          <CardHeader className="flex gap-2">
            {javascriptTT()} {nodejsTT()} {mongodbTT()}
          </CardHeader>
          <CardBody className="justify-center items-center">
            <Image
              alt="Card BG"
              radius="lg"
              className="object-cover"
              src="https://i.imgur.com/rSJl0hq.png"
            />
          </CardBody>
          <CardFooter className="flex text-center justify-center items-center justify-items-center flex-col">
            <b className="text-2xl">Mankekito Discord Bot</b>
            <p className="text-default-500 mt-2">
              Mankekito es un bot publico que sebasa inicialmente en comunidades
              de habla hispna. Este fue creado con sugerencias de varias
              comunidades las cuales fueron fundamentales para la creacion de
              este.
            </p>
            <div className="flex items-center justify-center justify-items-center mt-5 gap-5">
              <Link
                isExternal
                href="https://discord.com/oauth2/authorize?client_id=758059320238931978&scope=bot&permissions=27652058174"
              >
                <Button
                  color="success"
                  variant="bordered"
                  startContent={<FaDiscord />}
                >
                  Invitar
                </Button>
              </Link>
              <Link isExternal href="https://top.gg/bot/758059320238931978">
                <Button
                  color="success"
                  variant="bordered"
                  startContent={<BsRobot />}
                >
                  Top.gg
                </Button>
              </Link>
            </div>
          </CardFooter>
        </Card>

        <Card
          isBlurred
          className="px-5 projects-cards w-full h-full"
          shadow="sm"
        >
          <CardHeader className="flex gap-2">
            {reactTT()} {nextjsTT()} {typescriptTT()} {tailwindcssTT()}
          </CardHeader>
          <CardBody className="justify-center items-center">
            <Image
              alt="Card BG"
              radius="lg"
              className="object-cover"
              src="https://i.imgur.com/TNnMDXL.png"
            />
          </CardBody>
          <CardFooter className="flex text-center justify-center items-center justify-items-center flex-col">
            <b className="text-2xl">Frey Web</b>
            <p className="text-default-500 mt-2">
              Frey es una comunidad de videojuegos, enfocado en juegos de
              supervivencia tales como Valheim, Enshourded, Palia y Palworld.{" "}
              <br />
              Esta es una Web la cual sirve para promocionar sus servidores al
              publico.
            </p>
            <div className="flex items-center justify-center justify-items-center mt-5 gap-5">
              <Link
                isExternal
                href="https://github.com/fco-gt/FreyWeb/tree/main"
              >
                <Button
                  color="success"
                  variant="bordered"
                  startContent={<FaGithub />}
                >
                  Repositorio
                </Button>
              </Link>
              <Link isExternal href="https://frey-web.vercel.app/">
                <Button
                  color="success"
                  variant="bordered"
                  startContent={<VscPreview />}
                >
                  Mirar
                </Button>
              </Link>
            </div>
          </CardFooter>
        </Card>

        <Card
          isBlurred
          className="px-5 projects-cards w-full h-full"
          shadow="sm"
        >
          <CardHeader className="flex gap-2">
            {html5TT()} {css3TT()} {javascriptTT()}
          </CardHeader>
          <CardBody className="justify-center items-center min-w-full">
            <Image
              alt="Card BG"
              radius="lg"
              className="object-cover"
              src="https://i.imgur.com/nGuJ727.png"
            />
          </CardBody>
          <CardFooter className="flex text-center justify-center items-center justify-items-center flex-col">
            <b className="text-2xl">Spotify Playlist</b>
            <p className="text-default-500 mt-2 mb-[21px]">
              Web que sirve para mostrar tarjetas tipo Spotify con mis Playlist
              <br />
              Cada tarjeta cuenta con su boton para poder redirigir al link de
              Spotify.
            </p>
            <div className="flex items-center justify-center justify-items-center mt-5 gap-5">
              <Link isExternal href="https://github.com/fco-gt/playlist">
                <Button
                  color="success"
                  variant="bordered"
                  startContent={<FaGithub />}
                >
                  Repositorio
                </Button>
              </Link>
              <Link isExternal href="https://fco-gt.github.io/playlist/">
                <Button
                  color="success"
                  variant="bordered"
                  startContent={<VscPreview />}
                >
                  Mirar
                </Button>
              </Link>
            </div>
          </CardFooter>
        </Card>

        <Card
          isBlurred
          className="px-5 projects-cards w-full h-full"
          shadow="sm"
        >
          <CardHeader className="flex gap-2">
            {html5TT()} {css3TT()} {javascriptTT()}
          </CardHeader>
          <CardBody className="justify-center items-center min-w-full">
            <Image
              alt="Card BG"
              radius="lg"
              className="object-cover"
              src="https://i.imgur.com/56Ntnmz.png"
            />
          </CardBody>
          <CardFooter className="flex text-center justify-center items-center justify-items-center flex-col">
            <b className="text-2xl">Login/Register Dinamico</b>
            <p className="text-default-500 mt-2 mb-[21px]">
              Propotipo de Login y Register dinamico.
              <br />
              Este proyecto fue diseñado y programado junto a un amigo: <br />
              <a
                href="https://github.com/zFlen/LogIn-Register"
                target="_blank"
                className="text-green-500"
              >
                GitHub zFlen
              </a>
            </p>
            <div className="flex items-center justify-center justify-items-center mt-5 gap-5">
              <Link isExternal href="https://github.com/fco-gt/LogIn-Register">
                <Button
                  color="success"
                  variant="bordered"
                  startContent={<FaGithub />}
                >
                  Repositorio
                </Button>
              </Link>
              <Link isExternal href="https://fco-gt.github.io/LogIn-Register/">
                <Button
                  color="success"
                  variant="bordered"
                  startContent={<VscPreview />}
                >
                  Mirar
                </Button>
              </Link>
            </div>
          </CardFooter>
        </Card>

        <Card
          isBlurred
          className="px-5 projects-cards w-full h-full"
          shadow="sm"
        >
          <CardHeader className="flex gap-2">
            {javascriptTT()} {nodejsTT()}
          </CardHeader>
          <CardBody className="justify-center items-center min-w-full">
            <Image
              alt="Card BG"
              radius="lg"
              className="object-cover"
              src="https://i.imgur.com/UmMtfFX.png"
            />
          </CardBody>
          <CardFooter className="flex text-center justify-center items-center justify-items-center flex-col">
            <b className="text-2xl">Mankekito-Gifs</b>
            <p className="text-default-500 mt-2 mb-[21px]">
              Libreria de Gifs publica para Bots de Discord.
              <br />
              Esta es la libreria que ocupa mi bot para algunos comandos de
              interaccion.
              <br />
              Cada categoria retorna un gif distinto.
            </p>
            <div className="flex items-center justify-center justify-items-center mt-5 gap-5">
              <Link isExternal href="https://github.com/fco-gt/mankekito-gifs">
                <Button
                  color="success"
                  variant="bordered"
                  startContent={<FaGithub />}
                >
                  Repositorio
                </Button>
              </Link>
              <Link
                isExternal
                href="https://www.npmjs.com/package/mankekito-gifs"
              >
                <Button
                  color="success"
                  variant="bordered"
                  startContent={<VscPreview />}
                >
                  Mirar
                </Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
