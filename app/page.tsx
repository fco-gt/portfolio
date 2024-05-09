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
import nextImage from "next/image";

import TextWrite from "@/components/TextWrite";
import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
} from "@phosphor-icons/react/dist/ssr";

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
            as={nextImage}
            width={550}
            height={550}
            alt="Code Image"
            src="/images/home-image-1.svg"
          ></Image>
        </div>
      </section>

      <section className="flex justify-between p-11">
        <div className="flex-1">
          <div className="text-center pb-9">
            <h2 className={title({ size: "md" })}>Un poco de mí</h2>
          </div>
          <p className="text-xl">
            Soy desarrollador web Full Stack y me gusta aprender nuevas
            tecnologías en base a mi experiencia en el desarrollo de software y
            a mi curiosidad por aprender cosas nuevas.
            <br />
            <br />
            Programo en JavaScript, pero también me gusta aprender otros
            lenguajes.{" "}
            <i>
              <b className={title({ color: "green", size: "xl" })}>
                Soy muy curioso...
              </b>
            </i>
            <br />
            <br />
            Me dedico a desarrollar aplicaciones web y también tengo un mi
            propio bot de Discord publico llamado{" "}
            <i>
              <b className={title({ color: "green", size: "xl" })}>Mankekito</b>
            </i>
          </p>
        </div>
        <div className="hidden sm:flex pl-5">
          <Image
            as={nextImage}
            width={290}
            alt="FCO-GT Icon"
            src="/images/home-image-2.svg"
            className="rounded-full"
            height={250}
          ></Image>
        </div>
      </section>

      <div className="text-center items-center pt-5 social-media">
        <h2 className={title({ color: "green", size: "md" })}>Mis Redes</h2>
        <b className={subtitle()}>Contactame tambien mediante mi correo:</b>
        <a
          href="mailto:fco.gutierrez1227@gmail.com"
          target="_blank"
          className="text-green-500"
        >
          fco.gutierrez1227@gmail.com
        </a>
        <ul className="flex items-center text-center justify-center pt-5 mr-5">
          <li>
            <a href="https://github.com/fco-gt" target="_blank">
              <GithubLogo size={29} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/francisco-guti%C3%A9rrez-1b7580254/"
              target="_blank"
            >
              <LinkedinLogo size={29} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/fco_gt.wav/" target="_blank">
              <InstagramLogo size={29} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
