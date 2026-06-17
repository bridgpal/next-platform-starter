import Link from 'next/link';
import { buildNetlifyImageUrl } from 'utils';

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
        <nav className="sticky top-0 z-50 w-full bg-teal-600 border-b border-teal-700">
            <div className="flex flex-wrap items-center gap-4 py-4 px-6 sm:px-12 max-w-5xl mx-auto">
                <Link href="/">
                    <img
                        src={buildNetlifyImageUrl('/netlify-logo.svg')}
                        alt="Netlify logo"
                        width="122"
                        height="50"
                    />
                </Link>
                {!!navItems?.length && (
                    <ul className="flex flex-wrap gap-x-4 gap-y-1">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2"
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
                        <img
                            src={buildNetlifyImageUrl('/images/github-mark-white.svg')}
                            alt="GitHub logo"
                            width="98"
                            height="96"
                            className="w-7 h-auto"
                        />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
