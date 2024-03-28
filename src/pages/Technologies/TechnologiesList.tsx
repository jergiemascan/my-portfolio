import React from "react"
import { FaTerminal, FaCode, FaChartArea } from "react-icons/fa"

export const TechnologiesList = [
  {
    icon: <FaTerminal />,
    title: "Frontend",
    items: [
      "CSS",
      "React",
      "Next",
      "Vue",
      "Redux",
      "Vuex",
      "Sass",
      "JavaScript",
      "TypeScript",
      "Styled Components",
    ],
  },
  {
    icon: <FaCode />,
    title: "Backend",
    items: [
      ".NET 7",
      "Laravel",
      "Node.js",
      "Firebase",
      "MySQL",
      "AWS",
      "MongoDB",
    ],
  },
  {
    icon: <FaChartArea />,
    title: "Tools and Software",
    items: ["Git", "Docker", "Figma", "Trello"],
  },
]
