interface Experience {
    companyName: string,
    designation: string,
    startDate: string,
    endDate: string,
    responsibilities: string[]
}

export const experiences: Experience[] = [
    {
        companyName: "Fragmatic",
        designation: "Software Developer",
        startDate: "Apr 2024",
        endDate: "Sept 2026",
        responsibilities: [
            "Built scalable web applications with modern technologies.",
            "Integrated third-party APIs and automation workflows.",
            "Improved application performance and overall user experience.",
            "Collaborated with teams to deliver features from development."
        ]
    }, {
        companyName: "OpenSense Labs",
        designation: "Associate Software Developer",
        startDate: "July 2023",
        endDate: "Apr 2024",
        responsibilities: [
            "Built scalable web applications with modern technologies.",
            "Integrated third-party APIs and automation workflows.",
            "Improved application performance and overall user experience.",
            "Collaborated with teams to deliver features from development."
        ]
    }, {
        companyName: "Freelancer",
        designation: "Full Stack Developer",
        startDate: "July 2022",
        endDate: "July 2023",
        responsibilities: [
            "Built scalable web applications with modern technologies.",
            "Integrated third-party APIs and automation workflows.",
            "Improved application performance and overall user experience.",
            "Collaborated with teams to deliver features from development."
        ]
    },
]