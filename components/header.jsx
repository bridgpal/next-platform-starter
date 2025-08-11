import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: '🏠 Home', href: '/' },
    { linkText: '🔄 Revalidation', href: '/revalidation' },
    { linkText: '🖼️ Image CDN', href: '/image-cdn' },
    { linkText: '⚡ Edge Function', href: '/edge' },
    { linkText: '💾 Blobs', href: '/blobs' },
    { linkText: '🎪 Classics', href: '/classics' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center justify-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24 text-center">
            <div className="w-full flex justify-center mb-4">
                <Link href="/" className="transform hover:rotate-12 transition-transform">
                    <Image src={netlifyLogo} alt="Netlify logo" className="filter brightness-0 invert hue-rotate-180" />
                </Link>
            </div>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-2 gap-y-1 justify-center">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-yellow-400 text-white font-bold shadow-lg transform hover:scale-110 transition-all"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <div className="w-full flex justify-center mt-4">
                <Link
                    href="https://github.com/netlify-templates/next-platform-starter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-black px-4 py-2 rounded-full border-2 border-green-400 hover:border-yellow-400"
                >
                    <Image src={githubLogo} alt="GitHub logo" className="w-6" />
                    <span className="text-green-400 font-bold">Check out the code!</span>
                </Link>
            </div>
        </nav>
    );
}
