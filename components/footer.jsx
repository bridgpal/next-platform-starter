import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 mt-8 border-t sm:pt-20 sm:pb-16 border-neutral-200">
            <p className="text-sm text-neutral-500">
                <span className="text-teal-500">{'//'}</span> built with{' '}
                <Link
                    href="https://docs.netlify.com/frameworks/next-js/overview/"
                    className="font-medium transition text-teal-700 decoration-teal-400/50 hover:text-teal-600"
                >
                    Next.js on Netlify
                </Link>
            </p>
        </footer>
    );
}
