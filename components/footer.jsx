import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16 text-center">
            <div className="border-4 border-dashed border-rainbow p-6 bg-gradient-to-r from-purple-900 to-blue-900">
                <div className="marquee mb-4">
                    <span>🌟 This site is best viewed in 800x600 resolution! 🌟 Made with ❤️ in 1995! 🌟</span>
                </div>
                <p className="text-sm mb-2 neon-text">
                    <Link href="https://docs.netlify.com/frameworks/next-js/overview/" className="text-yellow-300">
                        ⚡ Next.js on Netlify ⚡
                    </Link>
                </p>
                <div className="flex justify-center gap-4 items-center flex-wrap text-xs">
                    <span className="text-lime-400">🌈 Geocities Forever!</span>
                    <span className="text-pink-400">📼 Dial-up Friendly!</span>
                    <span className="text-cyan-400">🚧 Under Construction!</span>
                </div>
                <p className="text-xs text-gray-400 mt-4">
                    © 1995-2025 | Webmaster: CoolDude123 | Last updated: Never! 
                </p>
                <div className="text-center mt-2">
                    <span className="text-2xl animate-pulse">🚧</span>
                </div>
            </div>
        </footer>
    );
};
