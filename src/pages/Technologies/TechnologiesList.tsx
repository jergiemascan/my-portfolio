import React from "react"
import {
  FaTerminal,
  FaCode,
  FaChartArea,
  FaAws,
  FaFigma,
  FaReact,
  FaHtml5,
  FaVuejs,
  FaSass,
  FaDocker,
  FaGithub,
  FaLaravel,
  FaNodeJs,
} from "react-icons/fa"
import { TbBrandMysql } from "react-icons/tb"
import {
  SiCss3,
  SiJavascript,
  SiStyledcomponents,
  SiRedux,
  SiTypescript,
  SiDotnet,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si"
import { TbBrandGit } from "react-icons/tb"

export const TechnologiesList = [
  {
    icon: <FaTerminal />,
    title: "Frontend",
    items: [
      { icon: <FaHtml5 />, name: "HTML5" },
      {
        icon: <SiCss3 />,
        name: "CSS",
      },
      { icon: <FaReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next" },
      { icon: <FaVuejs />, name: "Vue" },
      { icon: <SiRedux />, name: "Redux" },
      { icon: <FaSass />, name: "Sass" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiStyledcomponents />, name: "Styled Components" },
    ],
  },
  {
    icon: <FaCode />,
    title: "Backend",
    items: [
      { icon: <SiDotnet />, name: ".NET 7" },
      { icon: <FaLaravel />, name: "Laravel" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <TbBrandMysql />, name: "MySQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
    ],
  },
  {
    icon: <FaChartArea />,
    title: "Tools and Software",
    items: [
      { icon: <TbBrandGit />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <FaDocker />, name: "Docker" },
      { icon: <FaAws />, name: "AWS" },
      { icon: <FaFigma />, name: "Figma" },
    ],
  },
]
