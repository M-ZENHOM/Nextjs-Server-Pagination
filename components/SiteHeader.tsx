import { FC } from 'react'
import { ModeToggle } from './ModeToggle'
import { siteConfig } from '@/config/site'
import { ActiveLink } from './ActiveLink'


const SiteHeader: FC = () => {
    return (
        <header className='py-8'>
            <nav className='container flex items-center justify-between'>
                <ul className='flex space-x-6'>
                    {siteConfig.header.map((h, i) => (
                        <ActiveLink activeClassName='border-b' key={i} href={h.href}>{h.label}</ActiveLink>
                    ))}
                </ul>
                <ModeToggle />
            </nav>
        </header>
    )
}

export default SiteHeader