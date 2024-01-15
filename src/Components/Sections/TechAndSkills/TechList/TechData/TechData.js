import { IoLogoHtml5 , IoLogoCss3, IoLogoSass, IoLogoNodejs  } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import logo from "../../../../../Assets/typeorm-seeklogo.svg";

export const categories = [
  {
    name: "FrontEnd",
    technologies: [
      {
        name: "HTML",
        title: "HyperText Markup Language",
        icon: <IoLogoHtml5 />,
      },
      {
        name: "CSS",
        title: "Cascading style sheets",
        icon: <IoLogoCss3 />,
      },
      {
        name: "Sass",
        title: "Syntactically Awesome Stylesheets",
        icon: <IoLogoSass />,
      },
      {
        name: "Javascript",
        title: "Linguagem de programação de alto nível, interpretada",
        icon: <RiJavascriptFill />,
      },
      {
        name: "React",
        title: "Biblioteca JavaScript para construção de interfaces de usuário",
        icon: <IoLogoCss3 />,
      },
    ],
  },
  {
    name: "BackEnd",
    technologies: [
      {
        name: "NodeJs",
        title: "HyperText Markup Language",
        icon: <IoLogoNodejs /> ,
      },
      {
        name: "Express",
        title: "Cascading style sheets",
        icon: <IoLogoNodejs />,
      },
      {
        name: "Typescript",
        title: "Syntactically Awesome Stylesheets",
        icon: <BiLogoTypescript />,
      },
      {
        name: "PostgreSQL",
        title: "Linguagem de programação de alto nível, interpretada",
        icon: <SiPostgresql />,
      },
      {
        name: "TypeORM",
        title: "Biblioteca JavaScript para construção de interfaces de usuário",
        icon:  logo,
      },
    ],
  },
];
