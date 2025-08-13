export interface Project {
  title: string;
  summary: string;
  image: string;
  slug: string;
  tags: string[];
  link?: string; // Optional for small projects
}

export const largeProjects: Project[] = [
  {
    title: "The Legislative Roots of Mass Incarceration",
    summary: "Visualized history of the United States' laws and rhetoric about race and criminal justice which led to the U.S. becoming the country with the highest imprisonment rates in the entire world.",
    image: "/images/portfolio/thedatasays-personal/thumbnails-04.png",
    slug: "cjr",
    tags: ["Data Visualization"]
  },
  {
    title: "Content Planning Prototypes",
    summary: "A suite of content planning tools prototyped for live testing and rapid iterations.",
    image: "/images/portfolio/professional/nyt/calendar-design-prototype-week.png",
    slug: "calendar-prototype",
    tags: ["UX/UI Design", "Data Visualization", "Development"]
  },
  {
    title: "Workshops & Diagramming",
    summary: "Various journey maps and diagrams where I layer in how people, processes, and technology interact.",
    image: "/images/portfolio/thedatasays-personal/thumbnails-02.png",
    slug: "workflow-diagrams",
    tags: ["Journey Maps", "Data Visualization"]
  },
    {
    title: "Data Dashboards",
    summary: "Making data and insights easy to consume and understand.",
    image: "/images/portfolio/thedatasays-personal/dash-general-light.png",
    slug: "dashboards",
    tags: ["UX/UI Design", "Data Visualization"]
  },

];

export const smallProjects: Project[] = [
  {
    title: "Capital Punishment Streamgraph",
    summary: "A streamgraph visualization showing the history of capital punishment in the United States.",
    image: "/images/portfolio/thedatasays-personal/capital-punishment-streamgraph.jpg",
    slug: "capital-punishment",
    link: "",
    tags: ["Data Visualization"]
  },
  {
    title: "Bitches Are The Shit",
    summary: "A visualization of award-winning female music artists.",
    image: "/images/portfolio/thedatasays-personal/bitches-are-the-shit.jpg",
    slug: "bitches-are-the-shit",
    tags: ["Data Visualization"]
  },
  {
    title: "What Chart Are You?",
    summary: "A playful horoscope about what chart you are.",
    image: "/images/portfolio/thedatasays-personal/what-chart-art-you.png",
    slug: "what-chart-are-you",
    tags: ["Data Visualization", "Graphic Design"]
  },
  {
    title: "Middle School Infographic",
    summary: "An infographic for parents to see what's upcoming in their child's schoolyear.",
    image: "/images/portfolio/thedatasays-clients/MMMS-infographic-2022.png",
    slug: "MMMS-infographic",
    link: "https://www.behance.net/gallery/your-incarceration-rates-project",
    tags: ["Data Visualization", "Graphic Design"]
  },
  {
    title: "The Popular Vote",
    summary: "A candidate doesn’t need to win the popular vote to win the presidential election in the United States. 5 U.S. presidents have been elected through strategic electoral college wins even though they lost the nation’s popular vote. It’s difficult to say what the outcomes might have been in those elections had our democracy used the popular vote to declare the winner in the presidency, like in any other office. How might candidate’s strategies operate differently? How many more people would vote if they knew each vote carried the same weight?",
    image: "/images/portfolio/thedatasays-personal/thumbnails-05.png",
    slug: "political-infographics",
    tags: ["Data Visualization"]
  },
  {
    title: "Racial Wealth Gaps",
    summary: "We know that the roots of legalized discrimination run deep in America, and we have data to prove many of its consequences. Let’s look at household wealth, for example. In the Fed’s 2019 survey on household wealth (so, pre-pandemic), the organization found these drastic disparities in the median wealth owned by different races. Even young families or households have enormous differences in wealth, particularly between White and Black households, with a median White household owning $25,400 and a median Black family owning only $600. As households get older, across all race and ethnicity groups the wealth rises, but we see even larger disparities between races, again most notably between Black and White households.",
    image: "/images/portfolio/thedatasays-personal/racialWealthGap-01.png",
    slug: "racial-wealth-gap",
    tags: ["Data Visualization"]
  },
  {
    title: "Wrongful Convictions",
    summary: "A visual analysis of wrongful convictions in the United States.",
    image: "/images/portfolio/criminal-justice-designs/wrongful-convictions.png",
    slug: "wrongful-convictions",
    tags: ["Data Visualization"]
  },
  {
    title: "Beerconomics Infographic",
    summary: "The economics of beer, summarized visually.",
    image: "/images/portfolio/thedatasays-personal/beer-infographic.jpg",
    slug: "beer-infographic",
    tags: ["Data Visualization"]
  },
  {
    title: "Breaking News Illustration",
    summary: "A digital illustration of reading breaking news and seeing data to make sense of it on ipad.",
    image: "/images/portfolio/thedatasays-clients/political/DFD-interpreting-polls-2.png",
    slug: "breaking-news-illustration",
    tags: ["Graphic Design"]
  },
  {
    title: "Covid'19 Voting Impact",
    summary: "A visual analysis of the impact of Covid19 on voting in the United States.",
    image: "/images/portfolio/thedatasays-personal/COVID19-VotingImpact.jpg",
    slug: "covid19-voting-impact",
    tags: ["Graphic Design"]
  },
  {
    title: "Wrongful Death Sentences",
    summary: "A visual analysis of tragic cases of wrongful death sentences in the United States, 2021.",
    image: "/images/portfolio/thedatasays-personal/wrongful-death-sentence-dark.png",
    slug: "wrongful-death-sentence",
    tags: ["Data Visualization"]
  },
  {
    title: "Wrongful Death Sentences",
    summary: "A visual analysis of tragic cases of wrongful death sentences in the United States, 2022.",
    image: "/images/portfolio/thedatasays-personal/wrongful-death-sentence-light.png",
    slug: "wrongful-death-sentence",
    tags: ["Data Visualization"]
  }
  // {
  //   title: "Democratic Polls Sketch",
  //   summary: "A sketched visualization of democratic polling data for the 2020 presidential election.",
  //   image: "/images/portfolio/thedatasays-personal/demPollsSketched1.jpg",
  //   slug: "democratic-polls-sketch",
  //   tags: ["Data Visualization", "Sketch"]
  // },
  // {
  //   title: "Disenfranchisement Poster",
  //   summary: "A poster highlighting huge issues related to disenfranchisement of people who have served time for a felony.",
  //   image: "/images/portfolio/thedatasays-personal/disenfranchisement-poster.jpg",
  //   slug: "disenfranchisement-poster",
  //   tags: ["Data Visualization", "Graphic Design"]
  // }
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
