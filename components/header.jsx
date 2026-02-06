'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import netlifyLogo from 'public/netlify-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Revalidation', href: '/revalidation' },
    { linkText: 'Image CDN', href: '/image-cdn' },
    { linkText: 'Edge Function', href: '/edge' },
    { linkText: 'Blobs', href: '/blobs' },
    { linkText: 'Classics', href: '/classics' }
];

export function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Top accent line */}
            <div className="h-1 w-full bg-vermillion" />

            <nav className="bg-obsidian/95 backdrop-blur-md border-b border-cream/10">
                <div className="flex items-center justify-between py-5 px-6 sm:px-12 max-w-6xl mx-auto">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center gap-3 border-0 hover:border-0">
                        <div className="relative">
                            <Image
                                src={netlifyLogo}
                                alt="Netlify logo"
                                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute -inset-2 bg-vermillion/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                        </div>
                        <span className="hidden sm:block font-display font-semibold text-lg tracking-tight text-cream">
                            Netlify
                        </span>
                    </Link>

                    {/* Navigation */}
                    {!!navItems?.length && (
                        <ul className="hidden md:flex items-center gap-1">
                            {navItems.map((item, index) => {
                                const isActive = pathname === item.href;
                                return (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className={`nav-link px-4 py-2 ${isActive ? 'active' : ''}`}
                                        >
                                            {item.linkText}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                    {/* Right section */}
                    <div className="flex items-center gap-4">
                        {/* Mobile menu indicator */}
                        <div className="md:hidden flex items-center gap-1.5">
                            <div className="w-1 h-1 bg-vermillion rounded-full" />
                            <div className="w-1 h-1 bg-cream/40 rounded-full" />
                            <div className="w-1 h-1 bg-cream/40 rounded-full" />
                        </div>

                        {/* GitHub link */}
                        <Link
                            href="https://github.com/netlify-templates/next-platform-starter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border-0 hover:border-0"
                        >
                            <div className="relative p-2 border border-cream/20 hover:border-vermillion/50 transition-colors duration-300">
                                <Image
                                    src={githubLogo}
                                    alt="GitHub logo"
                                    className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Mobile navigation */}
                <div className="md:hidden border-t border-cream/10 px-6 py-3 overflow-x-auto">
                    <ul className="flex items-center gap-4 min-w-max">
                        {navItems.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className={`nav-link text-xs ${isActive ? 'active' : ''}`}
                                    >
                                        {item.linkText}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
