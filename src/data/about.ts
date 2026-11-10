import ProfilePic from '../assets/profile.png'

interface Person  {
    name: string,
    designation: string,
    about: string,
    profile: string
}

export const aboutInfo : Person = {
    name: "Mohd Rahil Khan",
    designation: "Full Stack Developer",
    about: "Full Stack Engineer with 4 years of experience building scalable SaaS platforms, high-volume data pipelines, background job systems, and third-party integrations. Experienced in Node.js, React.js, AWS, DynamoDB, MongoDB, OAuth 2.0, distributed processing, database migrations, and production-grade API integrations.",
    profile: ProfilePic
}