import Link from 'next/link';

export function Footer() {
    return (
        <footer className="w-full bg-red-900 text-orange-50">
            <div className="w-full max-w-5xl mx-auto px-6 sm:px-12 pt-16 pb-12 sm:pt-20 sm:pb-16">
                <p className="text-sm">
                    <Link
                        href="https://docs.netlify.com/frameworks/next-js/overview/"
                        className="underline transition decoration-dashed text-orange-100 underline-offset-8 hover:opacity-80"
                    >
                        Next.js on Netlify
                    </Link>
                </p>
            </div>
        </footer>
    );
};
