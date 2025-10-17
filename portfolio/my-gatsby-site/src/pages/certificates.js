import React, { useEffect } from "react"
import { navigate } from "gatsby"

export default function CertificatesRedirect() {
  useEffect(() => {
    navigate("/#certificates")
  }, [])
  return null
}
