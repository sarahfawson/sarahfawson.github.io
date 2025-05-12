export const allTags = [ // skills tags and categories used as metadata
    "Data Visualization",
    "Design Systems",
    "Development",
    "Maps / Diagrams",
    "Experimentation",
    "UX/UI Design",
    "Prototyping",
    "Research",
    "Workflows"
  ] as const;
  
  export type Tag = typeof allTags[number];