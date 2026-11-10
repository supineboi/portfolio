export type StackCategory = "Frontend" | "Backend" | "DataBases";

type StackData = Record<StackCategory, string[]>;

export const stackData: StackData= {
  Frontend: [
    "JavaScript",
    "Angular",
    "NextJs",
    "ReactJs",
    "TypeScript"
  ],
  Backend: [
    "NodeJs",
    "Drupal",
    "Django",
    "BullMQ",
    "DotNet"
  ],
  DataBases: [
    "Postgres",
    "DynamoDb",
    "MSSQL",
    "MySQL",
    "MongoDB"
  ]
};