"use client";

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/react";

import TextWrite from "@/components/TextWrite";
import { GithubLogo, LinkedinLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr";


export default function Home() {
  return (
    <div>
      <section className="flex justify-between items-center p-0">
        <div className="flex-1">
          <h2 className={title({ size: "sm" })}>Hola a todos!</h2>
          <br />
          <h2 className={title({ size: "md" })}>Soy </h2>
          <h2 className={title({ color: "green", size: "md" })}>Francisco</h2>
          <br />
          <br />
          <div style={{ fontSize: 25, color: "#17c964" }}>
            <TextWrite />
          </div>
        </div>

        <div className="hidden sm:flex">
          <Image
            width={550}
            alt="Code Image"
            src="https://cdn.discordapp.com/attachments/1009541174652055563/1199889383084535849/bg-img.png?ex=65c42f11&is=65b1ba11&hm=3395d3d9276c2d29c9bd624db6a9df7cdb9985ce9efd97518800fa8641ec21ad&"
          ></Image>
        </div>
      </section>

      <section className="flex justify-between p-5">
        <div className="flex-1">
          <div className="text-center pb-9">
            <h2 className={title({ size: "md" })}>Un poco de mi</h2>
          </div>
          <p className="text-xl">
            Soy un apasionado de la programacion Web y me gusta aprender nuevas tecnologias
            <br />
            <br />
            Programo en Javascript pero tambien me gusta aprender otros lenguajes. <i><b className={title({ color: "green", size: "xl" })}>Soy muy curioso...</b></i>
            <br />
            <br />
            Me dedico a crear/programar bots de Discord para servidores publicos y privados<br />
            Tambien tengo mi propio bot de Discord llamado <i><b className={title({ color: "green", size: "xl" })}>Mankekito</b></i>
          </p>
        </div>
        <div className="hidden sm:flex pl-5">
          <Image
            width={290}
            alt="FCO-GT Icon"
            src="https://cdn.discordapp.com/attachments/1002676177036656641/1206016726693707776/mamkeke.jpg?ex=65da799a&is=65c8049a&hm=1e5f29926f34591b3bc49d8834ca10460b0397315a6a7af7fe4942522f4e9469&"
            className="rounded-full"
          ></Image>
        </div>
      </section>
      
      <div className="text-center items-center pt-5 social-media">
        <h2 className={title({ color: "green", size: "md" })}>Mis Redes</h2>
        <ul className="flex items-center text-center justify-center pt-5 mr-5">
          <li><a href=""></a><GithubLogo size={29} /></li>
          <li><a href=""></a><LinkedinLogo size={29} /></li>
          <li><a href=""></a><InstagramLogo size={29} /></li>
        </ul>
      </div>
    </div>
  );
}
