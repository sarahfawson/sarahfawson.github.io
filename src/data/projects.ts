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
    title: "The Legislative Roots of Mass Incarceration",
    summary: "Analyzing the United States' criminal legal system, policing, disenfranchisement, and more.",
    image: "/images/portfolio/thedatasays-personal/thumbnails-04.png",
    slug: "cjr",
    details: "A comprehensive analysis of the United States criminal justice system, including data on policing practices, incarceration rates, and the impact of disenfranchisement on communities. More examples to come. ",
    tags: ["Data Visualization"]
  },
  {
    title: "Workshops & Diagramming",
    summary: "Various journey maps and diagrams where I layer in how people, processes, and technology interact.",
    image: "/images/portfolio/thedatasays-personal/thumbnails-02.jpg",
    slug: "workflow-diagrams",
    details: "A collection of journey maps and diagrams that visualize complex processes and user experiences. More info and examples to come.",
    tags: ["Journey Maps", "Data Visualization"]
  },
  {
    title: "Calendar Prototype",
    summary: "A detailed calendar designed and prototyped for live testing",
    image: "/images/portfolio/thedatasays-personal/dash-general-light.png",
    slug: "calendar-prototype",
    details: "More details and images to come..",
    tags: ["UX/UI Design", "Data Visualization"]
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
    title: "Bitches Are The Shit",
    summary: "A visualization of award-winning female music artists.",
    details: "",
    image: "/images/portfolio/thedatasays-personal/bitches-are-the-shit.jpg",
    slug: "bitches-are-the-shit",
    tags: ["Data Visualization"]
  },
  {
    title: "What Chart Are You?",
    summary: "A playful horoscope about what chart you are.",
    details: "",
    image: "/images/portfolio/thedatasays-personal/what-chart-art-you.png",
    slug: "what-chart-are-you",
    tags: ["Data Visualization", "Graphic Design"]
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
    summary: "The economics of beer, summarized visually.",
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
    tags: ["Graphic Design"]
  },
  {
    title: "Wrongful Death Sentence",
    summary: "A visual analysis of tragic cases of wrongful death sentences in the United States.",
    details: "",
    image: "/images/portfolio/thedatasays-personal/wrongful-death-sentence-dark.png",
    slug: "wrongful-death-sentence",
    tags: ["Data Visualization"]
  },
  {
    title: "Democratic Polls Sketch",
    summary: "A sketched visualization of democratic polling data for the 2020 presidential election.",
    details: "",
    image: "/images/portfolio/thedatasays-personal/demPollsSketched1.jpg",
    slug: "democratic-polls-sketch",
    tags: ["Data Visualization", "Sketch"]
  },
  {
    title: "Disenfranchisement Poster",
    summary: "A poster highlighting huge issues related to disenfranchisement of people who have served time for a felony.",
    details: "",
    image: "/images/portfolio/thedatasays-personal/disenfranchisement-poster.jpg",
    slug: "disenfranchisement-poster",
    tags: ["Data Visualization", "Graphic Design"]
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
