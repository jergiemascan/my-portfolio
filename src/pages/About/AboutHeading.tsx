import React, { useState, useEffect } from "react"
import { CSSProperties } from "react"

interface TransformTextProps {
  text: string
  isActive: boolean
}

const TransformText: React.FC<TransformTextProps> = ({ text, isActive }) => {
  const activeStyle: CSSProperties = {
    animation:
      "fadeIn 1.5s forwards, stayVisible 1.5s forwards, fadeOutUp 1.5s forwards 1.5s",
    position: "absolute",
    opacity: 1,
    width: "100%",
    transformStyle: "preserve-3d",
    willChange: "transform, opacity",
    fontWeight: "700",
    letterSpacing: "0.2px",
    color: "var(--blue-violet-300)",
    fontSize: "37px",
    lineHeight: "2.5rem",
  }

  const inactiveStyle: CSSProperties = {
    position: "absolute",
    transform: "translate3d(0px, 50%, 0px)",
    opacity: 0,
  }

  const style = isActive ? activeStyle : inactiveStyle
  return <h1 style={style}>{text}</h1>
}

const texts = [
  "Designer",
  "Optimist",
  "Badminton Enthusiast",
  "World Traveller",
]

const AboutHeading = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(currentIndex => (currentIndex + 1) % texts.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ position: "relative", height: "80px", overflow: "hidden" }}>
      {texts.map((text, index) => (
        <TransformText
          key={index}
          text={text}
          isActive={index === currentTextIndex}
        />
      ))}
    </div>
  )
}

export default AboutHeading
