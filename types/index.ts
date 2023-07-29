export type SiteConfig = {
  name: string
  description: string
  url: string
  links: {
    twitter: string
    github: string
  }
  header: [
    { href: string, label: string },
    { href: string, label: string }
  ]
}


export type Item = {
  id: number
  description: string
  price: string
  title: string
}