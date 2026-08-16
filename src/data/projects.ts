export interface Project {
  title: string;
  client: string;
  timeframe?: string; // Used for large projects (e.g., '2025-2026')
  summary?: string;   // Used for small projects (description text)
  image: string;
  slug: string;
  tags: string[];
  link?: string;
}

export const largeProjects: Project[] = [

  {
    title: 'Publishing tools',
    client: 'The New York Times',
    timeframe: '2025-2026',
    image: '/images/portfolio/professional/nyt/calendar-design-prototype-week-bg.png',
    slug: 'content-planning',
    tags: ['UX/UI Design', 'Data Visualization', 'Prototypes']
  },
    {
    title: 'The Legislative Roots of Mass Incarceration',
    client: 'Masters Thesis',
    timeframe: '2020',
    image: '/images/portfolio/thedatasays-personal/thumbnails-04.png',
    slug: 'cjr',
    tags: ['Data Visualization']
  },
  {
    title: 'Service Design',
    client: 'The New York Times, Deloitte',
    timeframe: '2023-2026',
    image: '/images/portfolio/thedatasays-personal/thumbnails-02.png',
    slug: 'workflow-diagrams',
    tags: ['Service Design', 'Data Visualization']
  },
  // {
  //   title: 'Design Leadership',
  //   client: 'NYT',
  //   timeframe: '2025-2026',
  //   image: '/images/portfolio/professional/nyt/calendar-design-prototype-week-bg.png',
  //   slug: 'design-leadership',
  //   tags: ['Design Leadership', 'Workshops']
  // },
  {
    title: 'Data Dashboards',
    client: 'Freelance, Deloitte',
    timeframe: '2020-2023',
    image: '/images/portfolio/thedatasays-personal/dash-general-light.png',
    slug: 'dashboards',
    tags: ['UX/UI Design', 'Data Visualization']
  }

];

export const smallProjects: Project[] = [

  {
    title: 'Wrongful Death Sentences (2021)',
    client: 'Personal',
    summary: 'A visual analysis of tragic cases of wrongful death sentences in the United States, 2021.',
    image: '/images/portfolio/thedatasays-personal/wrongful-death-sentence-dark.png',
    slug: 'wrongful-death-sentence',
    tags: ['Data Visualization']
  },
  {
    title: 'Capital Punishment Streamgraph',
    client: 'Personal',
    summary: 'A streamgraph visualization showing the history of capital punishment in the United States.',
    image: '/images/portfolio/thedatasays-personal/capital-punishment-streamgraph.jpg',
    slug: 'capital-punishment',
    link: '',
    tags: ['Data Visualization']
  },
  {
    title: 'What Chart Are You?',
    client: 'Personal',
    summary: 'A playful horoscope about what chart you are.',
    image: '/images/portfolio/thedatasays-personal/what-chart-art-you.png',
    slug: 'what-chart-are-you',
    tags: ['Data Visualization', 'Graphic Design']
  },
  {
    title: 'The Popular Vote',
    client: 'Personal',
    summary: 'A candidate doesn’t need to win the popular vote to win the presidential election in the United States. 5 U.S. presidents have been elected through strategic electoral college wins even though they lost the nation’s popular vote. It’s difficult to say what the outcomes might have been in those elections had our democracy used the popular vote to declare the winner in the presidency, like in any other office. How might candidate’s strategies operate differently? How many more people would vote if they knew each vote carried the same weight?',
    image: '/images/portfolio/thedatasays-personal/thumbnails-05.png',
    slug: 'political-infographics',
    tags: ['Data Visualization']
  },
  {
    title: 'Beerconomics Infographic',
    client: 'Personal',
    summary: 'The economics of beer, summarized visually.',
    image: '/images/portfolio/thedatasays-personal/beer-infographic.jpg',
    slug: 'beer-infographic',
    tags: ['Data Visualization']
  },
  {
    title: 'COVID-19 Patient Journey',
    client: 'Deloitte',
    summary: 'In a former role working with a State Government during the Covid-19 pandemic, I synthesized user research into a comprehensive map that intersects human experiences, physical processes, and data collection moments. All sensitive or identifiable information about the client, data, and subjects have been changed.',
    image: '/images/portfolio/thedatasays-personal/thumbnails-02.png',
    slug: 'covid-19-patient-journey',
    tags: ['Data Visualization', 'Service Design']
  },
  {
    title: 'Bitches Are The Shit',
    client: 'Personal',
    summary: 'A visualization of award-winning female music artists.',
    image: '/images/portfolio/thedatasays-personal/bitches-are-the-shit.jpg',
    slug: 'bitches-are-the-shit',
    tags: ['Data Visualization']
  },
  {
    title: 'Wrongful Convictions',
    client: 'Personal',
    summary: 'A visual analysis of wrongful convictions in the United States.',
    image: '/images/portfolio/criminal-justice-designs/wrongful-convictions.png',
    slug: 'wrongful-convictions',
    tags: ['Data Visualization']
  },
  {
    title: 'Racial Wealth Gaps',
    client: 'Personal',
    summary: 'We know that the roots of legalized discrimination run deep in America, and we have data to prove many of its consequences. Let’s look at household wealth, for example. In the Fed’s 2019 survey on household wealth (so, pre-pandemic), the organization found these drastic disparities in the median wealth owned by different races. Even young families or households have enormous differences in wealth, particularly between White and Black households, with a median White household owning $25,400 and a median Black family owning only $600. As households get older, across all race and ethnicity groups the wealth rises, but we see even larger disparities between races, again most notably between Black and White households.',
    image: '/images/portfolio/thedatasays-personal/racialWealthGap-01.png',
    slug: 'racial-wealth-gap',
    tags: ['Data Visualization']
  },
  {
    title: 'Wrongful Death Sentences (2022)',
    client: 'Personal',
    summary: 'A visual analysis of tragic cases of wrongful death sentences in the United States, 2022.',
    image: '/images/portfolio/thedatasays-personal/wrongful-death-sentence-light.png',
    slug: 'wrongful-death-sentence',
    tags: ['Data Visualization']
  },
  {
    title: 'Incarceration Likelihood',
    client: 'Personal',
    summary: 'Likelihood of incarceration for black vs white men in the United States, showing disproportionate precentage of black individuals as compared to the population.',
    image: '/images/portfolio/thedatasays-personal/incarceration-likelihood-illustration.JPG',
    slug: 'incarceration-likelihood',
    tags: ['Data Visualization', 'Sketch']
  },
  {
    title: 'Innocent Years Spent on Death Row',
    client: 'Personal',
    summary: 'How many years have innocent people spent on death row before their exoneration? (2019)',
    image: '/images/portfolio/thedatasays-personal/exonerations-innocentyears-2019.JPG',
    slug: 'innocent-years-2019',
    tags: ['Data Visualization']
  },
  {
    title: 'Solitary Confinement',
    client: 'Personal',
    summary: 'Racial breakdown of people in solitary confinement, showing disproportionate precentage of black individuals as compared to the population.',
    image: '/images/portfolio/thedatasays-personal/solitary-confinement-byrace-2019.JPG',
    slug: 'solitary-configment-race-2019',
    tags: ['Data Visualization', 'Sketch']
  },
  {
    title: 'Senator Representation by Race',
    client: 'Personal',
    summary: 'Representation of the US population in the senate by race.',
    image: '/images/portfolio/thedatasays-personal/senators-race-2019.JPG',
    slug: 'senators-race-2019',
    tags: ['Data Visualization', 'Sketch']
  },
  {
    title: 'Pandemic Unemployment Pays More than Minimum Wage',
    client: 'Personal',
    summary: '2020.',
    image: '/images/portfolio/thedatasays-personal/pandemic-unemployment-hexmap.JPG',
    slug: 'pandemic-unemployment-hexmap',
    tags: ['Data Visualization']
  },
  {
    title: 'Pandemic Voting Impact',
    client: 'Personal',
    summary: 'A visual analysis of the impact of the Covid-19 pandemic on voting in the United States.',
    image: '/images/portfolio/thedatasays-personal/COVID19-VotingImpact-tall.jpg',
    slug: 'covid19-voting-impact',
    tags: ['Data Visualization', 'Graphic Design']
  },
  {
    title: 'Regional Delegates',
    client: 'Personal',
    summary: 'Regional delegates earned by 2020 presidential hopefuls.',
    image: '/images/portfolio/thedatasays-personal/regional-delegates-2019.PNG',
    slug: 'regional-delegates-2019',
    tags: ['Data Visualization', 'Sketch']
  },
  {
    title: 'Primaries Delegate Race',
    client: 'Personal',
    summary: 'Who is winning in the democratic delegate race?',
    image: '/images/portfolio/thedatasays-personal/delegates-bump-chart-2019.JPG',
    slug: 'delegates-bump-2019',
    tags: ['Data Visualization', 'Sketch']
  },
  {
    title: 'Primaries Delegates',
    client: 'Personal',
    summary: 'Traction for delegates by Democratic Presidential hopefuls',
    image: '/images/portfolio/thedatasays-personal/delegates-face-count-2019.JPG',
    slug: 'delegates-count-2019',
    tags: ['Data Visualization', 'Sketch']
  },
  {
    title: 'Campaign Tracker',
    client: 'Personal',
    summary: 'Campaign durations and polling for 2020 presidential hopefuls.',
    image: '/images/portfolio/thedatasays-personal/campaing-tracker-2019.JPG',
    slug: 'campaign-tracker-2019',
    tags: ['Data Visualization', 'Sketch']
  },
  {
    title: 'Do I Look Presidential Yet?',
    client: 'Personal',
    summary: 'Analysis of colors worn to debates.',
    image: '/images/portfolio/thedatasays-personal/candidate-debate-suitcolors-2019.JPG',
    slug: 'presidential-suits',
    tags: ['Data Visualization', 'Sketch']
  },
  {
    title: 'Voter Turnout',
    client: 'Personal',
    summary: 'Voter turnout in the United States Presidential Elections, 1972-2016 elctions (2019).',
    image: '/images/portfolio/thedatasays-personal/voter-turnout-2019.JPG',
    slug: 'voter-turnout',
    tags: ['Data Visualization', 'Sketch']
  },
  {
    title: 'Adult Loneliness',
    client: 'Personal',
    summary: 'Adult Loneliness graphic',
    image: '/images/portfolio/thedatasays-personal/loneliness-graphic.JPG',
    slug: 'adult-loneliness',
    tags: ['Data Visualization', 'Graphic Design']
  },
   {
    title: 'Program Planning Gantt',
    client: 'Deloitte',
    timeframe: '2019-2020',
    summary: 'Program planning Gantt visualization within a supply chain application for a government client at Deloitte, a project aimed at improving supply chain operations.',
    image: '/images/portfolio/professional/deloitte/apollo-gantt.png',
    slug: 'gantt-chart',
    tags: ['UX/UI Design']
  },
  {
    title: 'Breaking News Illustration',
    client: 'Data for Democracy',
    summary: 'A digital illustration of reading breaking news and seeing data to make sense of it on ipad.',
    image: '/images/portfolio/thedatasays-clients/political/DFD-interpreting-polls-2.png',
    slug: 'breaking-news-illustration',
    tags: ['Graphic Design']
  },
  {
    title: 'New Years Eve',
    client: 'Personal',
    summary: 'How many people are home before midnight? Disco Ball visualization.',
    image: '/images/portfolio/thedatasays-personal/nye-disco.JPG',
    slug: 'disco',
    tags: ['Data Visualization', 'Sketch']
  },
  {
    title: 'Holiday Spending',
    client: 'Personal',
    summary: 'Retail holiday spending continues to increase each year in the United States, based on data from the National Retail Federation.',
    image: '/images/portfolio/thedatasays-personal/holiday-spending-2019.JPG',
    slug: 'holiday-spending',
    tags: ['Data Visualization', 'Sketch']
  }
  // {
  //   title: 'Middle School Infographic',
  //   client: 'Denver Public Schools',
  //   summary: 'An infographic for parents to see what's upcoming in their child's schoolyear.',
  //   image: '/images/portfolio/thedatasays-clients/MMMS-infographic-2022.png',
  //   slug: 'MMMS-infographic',
  //   tags: ['Data Visualization', 'Graphic Design']
  // },
  // {
  //   title: 'Democratic Polls Sketch',
  //   client: 'Personal',
  //   summary: 'A sketched visualization of democratic polling data for the 2020 presidential election.',
  //   image: '/images/portfolio/thedatasays-personal/demPollsSketched-2019.jpg',
  //   slug: 'democratic-polls-sketch',
  //   tags: ['Data Visualization', 'Sketch']
  // },
  // {
  //   title: 'Disenfranchisement Poster',
  //   client: 'Personal',
  //   summary: 'A poster highlighting huge issues related to disenfranchisement of people who have served time for a felony.',
  //   image: '/images/portfolio/thedatasays-personal/disenfranchisement-poster.jpg',
  //   slug: 'disenfranchisement-poster',
  //   tags: ['Data Visualization', 'Graphic Design']
  // },
  // {
  //   title: 'Utah Backpacking Poster',
  //   client: 'Personal',
  //   summary: 'Guide to packing and preparing for a Backpacking trip.',
  //   image: '/images/portfolio/thedatasays-personal/backpacking-guide.pdf',
  //   slug: 'slug',
  //   tags: ['Data Visualization', 'Graphic Design']
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

// Get unique tags from small projects only (for the 'More designs' filter)
export const smallProjectTags = Array.from(new Set(
  smallProjects.flatMap(project => project.tags)
));
