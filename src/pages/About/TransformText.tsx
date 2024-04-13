import { wrap } from "module"
import React from "react"
import { CSSProperties } from "react"

interface TransformTextProps {
  text: string
  isActive: boolean
}

const TransformText: React.FC<TransformTextProps> = ({ text, isActive }) => {
  const activeStyle: CSSProperties = {
    animation:
      "fadeIn 1.5s forwards, stayVisible 1.5s forwards, fadeOutUp 1.5s forwards 1.5s",
    opacity: 1,
    transformStyle: "preserve-3d",
    willChange: "transform, opacity",
    fontWeight: "700",
    letterSpacing: "0.2px",
    color: "var(--blue-violet-300)",
  }

  const inactiveStyle: CSSProperties = {
    transform: "translate3d(0px, 20%, 0px)",
    opacity: 0,
  }

  const style = isActive ? activeStyle : inactiveStyle
  return <h1 style={style}>{text}</h1>
}

export default TransformText
