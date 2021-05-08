import { Typography } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4">Error 404: Page is a Sus Monkey</Typography>
        <iframe 
        style={{ margin: "20px" }}
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/luUvPWWs6xw?controls=0&autoplay=1&mute=0" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        <Typography><Link to="/">Go Home</Link></Typography>
      </div>
    </Layout>
  );
}