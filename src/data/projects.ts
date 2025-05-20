export interface Project {
  title: string;
  summary: string;
  image: string;
  slug: string;
  details: string;
  tags: string[];
  link?: string; // Optional for small projects
}

export const largeProjects: Project[] = [
  {
    title: "Workflow Diagrams",
    summary: "Various journey maps and diagrams where I layer in how people, processes, and technology interact.",
    image: "/images/portfolio/thedatasays-personal/thumbnails-02.jpg",
    slug: "workflow-diagrams",
    details: "A collection of journey maps and diagrams that visualize complex processes and user experiences. More info and examples to come.",
    tags: ["Journey Maps", "Diagrams"]
  },
  {
    title: "CJR Visual Analyses",
    summary: "Analyzing the United States' criminal legal system, policing, disenfranchisement, and more.",
    image: "/images/portfolio/thedatasays-personal/thumbnails-04.png",
    slug: "cjr",
    details: "A comprehensive analysis of the United States criminal justice system, including data on policing practices, incarceration rates, and the impact of disenfranchisement on communities. More examples to come. ",
    tags: ["Data Visualization", "Infographic"]
  },
  {
    title: "Calendar Prototype",
    summary: "A detailed calendar designed and prototyped for live testing",
    image: "/images/portfolio/thedatasays-personal/dash-general-light.png",
    slug: "calendar-prototype",
    details: "More details and images to come..",
    tags: ["UX/UI Design"]
  }
];

export const smallProjects: Project[] = [
  {
    title: "Capital Punishment Streamgraph",
    summary: "A streamgraph visualization showing the history of capital punishment in the United States.",
    details: "",
    image: "/images/portfolio/thedatasays-personal/capital-punishment-streamgraph.jpg",
    slug: "capital-punishment",
    link: "",
    tags: ["Data Visualization"]
  },
  {
    title: "Middle School Infographic",
    summary: "An infographic for parents to see what's upcoming in their child's schoolyear.",
    details: "",
    image: "/images/portfolio/thedatasays-clients/MMMS-infographic-2022.png",
    slug: "MMMS-infographic",
    link: "https://www.behance.net/gallery/your-incarceration-rates-project",
    tags: ["Data Visualization", "Graphic Design"]
  },
  {
    title: "Political Infographics",
    summary: "Short visual analyses of U.S. Presidents, Supreme Court Justices, and demographics of Congress.",
    details: "",
    image: "/images/portfolio/thedatasays-personal/thumbnails-05.jpg",
    slug: "political-infographics",
    tags: ["Data Visualization"]
  },
  {
    title: "Racial Wealth Gap",
    summary: "Visualizing the racial wealth gap in America.",
    details: "",
    image: "/images/portfolio/thedatasays-personal/racialWealthGap-01.png",
    slug: "racial-wealth-gap",
    tags: ["Data Visualization"]
  },
  {
    title: "Beerconomics Infographic",
    summary: "Learn more about the economics of beer.",
    details: "",
    image: "/images/portfolio/thedatasays-personal/beer-infographic.jpg",
    slug: "beer-infographic",
    tags: ["Data Visualization"]
  },
  {
    title: "Breaking News Illustration",
    summary: "A digital illustration of reading breaking news and seeing data to make sense of it on ipad.",
    details: "",
    image: "/images/portfolio/thedatasays-clients/political/DFD-interpreting-polls-2.png",
    slug: "breaking-news-illustration",
    tags: ["Illustration"]
  },
  {
    title: "Wrongful Death Sentence",
    summary: "A visual analysis of tragic cases of wrongful death sentences in the United States.",
    details: "",
    image: "/images/portfolio/thedatasays-personal/wrongful-death-sentence-dark.png",
    slug: "wrongful-death-sentence",
    tags: ["Data Visualization"]
  }
];

// Helper function to get a project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return [...largeProjects, ...smallProjects].find(project => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return [...largeProjects, ...smallProjects];
}

// Get all unique tags from all projects
export const allTags = Array.from(new Set([
  ...largeProjects.flatMap(project => project.tags),
  ...smallProjects.flatMap(project => project.tags)
]));
