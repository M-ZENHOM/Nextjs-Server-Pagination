export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}


export type Item = {
  id: number
  description: string
  price: string
  title: string
}