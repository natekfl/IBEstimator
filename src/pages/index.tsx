import { FormControl, InputLabel, MenuItem, Select, Typography } from "@material-ui/core"
import React, { useState } from "react"
import Calculator from "../components/calculator"
import { ExamSession } from "../components/data"
import Layout from "../components/layout"
import M21AData from "../data/M21-A.json"
import M21BData from "../data/M21-B.json"

export default function Home() {
  const [dataSelection, setDataSelection] = useState("M21A")
  let data: ExamSession
  if (dataSelection === "M21A") {
    data = M21AData as any
  }
  if (dataSelection === "M21B") {
    data = M21BData as any
  }
  return (
    <Layout>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h3">IB Score Estimator</Typography>
        <FormControl variant="outlined">
          <InputLabel>Exam Session</InputLabel>
          <Select
            value={dataSelection}
            onChange={(e) => setDataSelection(e.target.value as string)}
            label="Exam Session"
          >
            <MenuItem value="M21A">May 2021 (Using N20 grade boundaries)</MenuItem>
            <MenuItem value="M21B">May 2021 (Using M19 grade boundaries)</MenuItem>
          </Select>
        </FormControl>
        <Calculator data={data} />
      </div>
    </Layout>
  );
}