export interface ExamSession {
    title: string
    classes: {
        [className: string]: ExamClass
    },
    notes: string
}

export interface ExamClass {
    components: {
        [component: string]: {
            maxMarks: number,
            weight: number,
            boundaries: GradeBoundaries
        }
    },
    boundaries: GradeBoundaries
}

export interface GradeBoundaries {
    [grade: string]: [number, number]
}