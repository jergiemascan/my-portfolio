import React from "react"
import { FaTerminal, FaCode, FaChartArea } from "react-icons/fa"

export const TechnologiesList = [
  {
    icon: <FaTerminal />,
    title: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "Styled Components",
      "HTML",
      "CSS",
      "Sass",
      "React",
      "Redux",
    ],
  },
  {
    icon: <FaCode />,
    title: "Backend",
    items: ["NodeJs", "Firebase", "MongoDB", "SQLite"],
  },
  {
    icon: <FaChartArea />,
    title: "Tools",
    items: ["Figma", "Trello", "Github", "Bootstrap"],
  },
]
