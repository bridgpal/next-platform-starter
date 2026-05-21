import Image from 'next/image';
import Link from 'next/link';
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
    return (
        <nav className="sticky top-0 z-50 w-full bg-orange-600 border-b border-orange-700 text-white shadow-lg shadow-orange-900/10">
            <div className="flex flex-wrap items-center gap-5 px-8 py-6 sm:px-16 lg:px-24 max-w-6xl mx-auto">
                <Link href="/">
                    <Image src={netlifyLogo} alt="Netlify logo" />
                </Link>
                {!!navItems?.length && (
                    <ul className="flex flex-wrap gap-x-4 gap-y-2">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="inline-block rounded-md px-2 py-1.5 transition hover:bg-white/15 sm:px-4 sm:py-2.5"
                                >
                                    {item.linkText}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="flex-grow justify-end hidden lg:flex lg:mr-1">
                    <Link
                        href="https://github.com/netlify-templates/next-platform-starter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src={githubLogo} alt="GitHub logo" className="w-7" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
