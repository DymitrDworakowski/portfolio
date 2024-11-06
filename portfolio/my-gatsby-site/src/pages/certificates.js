import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Certificates = () => (
  <Layout>
    <h1>Мої сертифікати</h1>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        gap: "20px",
      }}
    >
      <iframe
        src="/certificates/Dymitr Dworakowski.pdf"
        title="Сертифікат 1"
        width="100%"
        height="500px"
        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
      ></iframe>
      <iframe
        src="/certificates/certificate2.pdf"
        title="Сертифікат 2"
        width="100%"
        height="500px"
        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
      ></iframe>
    </div>

    <Link to="/" style={{ marginTop: "20px", display: "inline-block" }}>
      Повернутися на головну
    </Link>
  </Layout>
)

export const Head = () => <Seo title="Certificates" />

export default Certificates
