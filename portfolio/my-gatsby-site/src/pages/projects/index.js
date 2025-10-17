import React, { useEffect } from "react"
import { navigate } from "gatsby"

export default function ProjectsRedirect() {
  useEffect(() => {
    navigate("/#projects")
  }, [])
  return null
}