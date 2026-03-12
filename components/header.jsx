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
        <nav className="sticky top-0 z-50 w-full bg-black border-b-3 border-black">
            <div className="flex flex-wrap items-center gap-4 py-4 px-6 sm:px-12 max-w-5xl mx-auto">
                <Link href="/" className="no-underline">
                    <Image src={netlifyLogo} alt="Netlify logo" />
                </Link>
                {!!navItems?.length && (
                    <ul className="flex flex-wrap gap-x-1 gap-y-1">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="inline-block px-3 py-1.5 font-serif text-white no-underline uppercase text-sm tracking-wider hover:bg-accent hover:text-black transition-colors"
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
                        className="no-underline hover:opacity-80 transition"
                    >
                        <Image src={githubLogo} alt="GitHub logo" className="w-7" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
