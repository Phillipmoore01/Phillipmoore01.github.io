/** Featured projects shown on the home page. */
export type FeaturedProject = {
  title: string
  href: string
  description: string
}

export const featuredProjects: readonly FeaturedProject[] = [
  {
    title: 'RESTful Web Service',
    href: 'https://github.com/Phillipmoore01/RestfulWebService',
    description: 'In-class REST API project.',
  },
  {
    title: 'FlightSite',
    href: 'https://github.com/Phillipmoore01/FlightSite',
    description: 'Work in progress web project.',
  },
  {
    title: 'Save The Princess',
    href: 'https://github.com/Phillipmoore01/SaveThePrincess',
    description: 'Turn-based RPG game project.',
  },
]
