import { Typography } from "@material-ui/core"
import React from "react"
import Calculator from "../components/calculator"
import { ExamSession } from "../components/data"
import Layout from "../components/layout"
import M21Data from "../data/M21.json"

export default function Home() {
  const data: ExamSession = M21Data as any
  return (
    <Layout>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h3">IB Score Estimator</Typography>
        <Calculator data={data} />
      </div>
    </Layout>
  );
}