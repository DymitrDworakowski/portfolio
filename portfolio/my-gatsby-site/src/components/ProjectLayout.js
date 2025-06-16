import React from "react"
import { layout, content } from "./ProjectLayout.module.css"

const ProjectLayout = ({ children }) => (
  <div className={layout}>
    <main className={content}>
      {children}
    </main>
  </div>
)

export default ProjectLayout