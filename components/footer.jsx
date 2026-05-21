import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-24 pb-16 sm:pt-32 sm:pb-24">
            <p className="text-sm">
                <Link href="https://docs.netlify.com/frameworks/next-js/overview/" className="underline transition decoration-dashed text-orange-700 underline-offset-8 hover:text-orange-900">
                    Next.js on Netlify
                </Link>
            </p>
        </footer>
    );
};
