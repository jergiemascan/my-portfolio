import React from "react"
import { FaTerminal, FaCode, FaChartArea } from "react-icons/fa"

export const TechnologiesList = [
  {
    icon: <FaTerminal />,
    title: "Frontend",
    items: [
      "React",
      "Next",
      "Vue",
      "Nuxt",
      "Redux",
      "JavaScript",
      "TypeScript",
      "Styled Components",
    ],
  },
  {
    icon: <FaCode />,
    title: "Backend",
    items: [".NET 7", "Node.js", "Firebase", "MySQL", "MongoDB"],
  },
  {
    icon: <FaChartArea />,
    title: "Tools",
    items: ["Figma", "Trello", "Github"],
  },
]
