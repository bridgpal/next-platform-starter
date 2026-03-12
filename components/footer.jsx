import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16 border-t-3 border-black mt-16">
            <p className="text-sm font-body">
                <Link href="https://docs.netlify.com/frameworks/next-js/overview/" className="underline decoration-2 text-black underline-offset-4 hover:text-accent transition-colors">
                    Next.js on Netlify
                </Link>
            </p>
        </footer>
    );
};
