interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'A Youtube Channel',
    description: `I do make videos explaining history of tech in Thai. One of the most popular video is about the history of Windows, which has over 800K views.`,
    imgSrc: '/static/images/banner.jpg',
    href: 'https://www.youtube.com/@ranviee',
  },
]

export default projectsData
