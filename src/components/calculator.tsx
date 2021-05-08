import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@material-ui/core"
import React, { useState } from "react"
import ReactMarkdown from "react-markdown"
import { ExamClass, ExamSession, GradeBoundaries } from "./data"

interface CalculatorInput {
    data: ExamSession
}

interface InputtedData {
    [component: string]: number
}

export default function Calculator({ data }: CalculatorInput) {
    const [className, setClassName] = useState<string | null>(null)
    const [inputtedData, setInputtedData] = useState<InputtedData>({})

    const inputScore = (component: string, value: string) => {
        const newData = { ...inputtedData }
        newData[component] = parseInt(value)
        setInputtedData(newData)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h5">{data.title}</Typography>
            <div style={{ margin: "20px" }}>
                <FormControl variant="outlined" style={{ width: "15em" }}>
                    <InputLabel>Class</InputLabel>
                    <Select
                        value={className}
                        onChange={(e) => setClassName(e.target.value as string)}
                        label="Class"
                    >
                        {Object.keys(data.classes).map((v) => (
                            <MenuItem key={v} value={v}>{v}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            {className != null && (
                <div>
                    <div style={{ margin: "20px", textAlign: "center" }}>
                        {Object.keys(data.classes[className].components).map((componentName) => (
                            <TextField
                                label={componentName}
                                style={{ width: "10em", margin: "5px" }}
                                value={inputtedData[componentName] ?? ""}
                                onChange={(e) => inputScore(componentName, e.target.value)}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">/{data.classes[className].components[componentName].maxMarks}</InputAdornment>,
                                }}
                                variant="outlined"
                                type="number"
                            />
                        ))}
                    </div>
                    <div>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Component</TableCell>
                                        <TableCell align="right">Grade</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Object.keys(data.classes[className].components).map((componentName) => (
                                        <TableRow key={componentName}>
                                            <TableCell component="th" scope="row">
                                                {componentName}
                                            </TableCell>
                                            <TableCell align="right">{calculateComponentGrade(inputtedData[componentName], data.classes[className].components[componentName].boundaries)}</TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            <b>Total</b>
                                        </TableCell>
                                        <TableCell align="right"><b>{calculateTotalGrade(inputtedData, data.classes[className])}</b></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            )}
            <Typography><ReactMarkdown children={data.notes} /></Typography>
        </div>
    )
}

function calculateComponentGrade(marks: number, boundaries: GradeBoundaries): number {
    for (const grade of Object.keys(boundaries)) {
        const boundary = boundaries[grade]
        if (marks >= boundary[0] && marks <= boundary[1]) {
            return parseInt(grade)
        }
    }
    return 0
}

function calculateTotalGrade(inputtedData: InputtedData, classData: ExamClass): number {
    let total = 0
    for (const componentName of Object.keys(classData.components)) {
        const component = classData.components[componentName]
        total += inputtedData[componentName] / component.maxMarks * component.weight
    }
    return calculateComponentGrade(Math.round(total), classData.boundaries)
}