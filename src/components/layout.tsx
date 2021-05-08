import { Container, Paper, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
export default function Layout({ children }) {
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <Container fixed>
                <Paper style={{ padding: "20px" }}>
                    {children}
                </Paper>
                <Typography style={{ width: "100%", marginTop: "20px", textAlign: "center" }}>
                    Scores are calculated as specified in <Link to="https://www.ibo.org/contentassets/4d92e48d38a4415a87e11555e143a39f/assessment-guide-for-teachers-and-coordinators-en.pdf">this document</Link>
                </Typography>
                <Typography style={{ width: "100%", marginTop: "20px", textAlign: "center" }}>
                    © 2021 Nathan Kutzan | <Link to="">Open Source</Link>
                </Typography>
            </Container>
        </>
    )
}