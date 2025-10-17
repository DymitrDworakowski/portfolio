import React, { useEffect } from "react"
import { navigate } from "gatsby"

export default function ContactRedirect() {
  useEffect(() => {
    navigate("/#contact")
  }, [])
  return null
}
