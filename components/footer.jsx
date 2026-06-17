import Link from 'next/link';

export function Footer() {
    return (
        <footer className="w-full bg-neutral-900 border-t border-neutral-700">
            <div className="max-w-5xl mx-auto px-6 sm:px-12 py-6">
                <p className="text-sm text-neutral-300">
                    <Link
                        href="https://github.com/bridgpal/next-platform-starter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline transition text-neutral-300 underline-offset-4 hover:text-white"
                    >
                        https://github.com/bridgpal/next-platform-starter
                    </Link>
                </p>
            </div>
        </footer>
    );
};
