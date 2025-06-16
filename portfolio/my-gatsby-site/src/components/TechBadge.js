import React from "react"
import { badge } from "./TechBadge.module.css"

const TechBadge = ({ technology }) => (
  <span className={badge}>{technology}</span>
)

export default TechBadge