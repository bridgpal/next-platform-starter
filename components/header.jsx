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
        <nav className="sticky top-0 z-50 w-full bg-white border-b border-axa-line shadow-[0_1px_3px_rgba(17,27,29,0.06)]">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 py-4 px-6 sm:px-12 max-w-5xl mx-auto">
                <Link href="/" className="no-underline shrink-0" aria-label="Home">
                    <Image src={netlifyLogo} alt="Netlify logo" />
                </Link>
                {!!navItems?.length && (
                    <ul className="flex flex-wrap items-center gap-x-1 gap-y-1">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="inline-block rounded px-3 py-2 text-sm font-semibold text-axa-slate no-underline transition-colors hover:bg-axa-mist hover:text-axa-blue"
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
                        className="no-underline"
                        aria-label="View source on GitHub"
                    >
                        <Image src={githubLogo} alt="GitHub logo" className="w-7 brightness-0 opacity-70 transition-opacity hover:opacity-100" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
