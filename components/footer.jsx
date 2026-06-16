import Link from 'next/link';

export function Footer() {
    return (
        <footer className="mt-16 sm:mt-24 border-t border-axa-line pt-8 pb-12">
            <p className="text-sm text-axa-slate">
                Built on{' '}
                <Link
                    href="https://docs.netlify.com/frameworks/next-js/overview/"
                    className="font-semibold text-axa-bright underline-offset-4 hover:text-axa-blue"
                >
                    Next.js on Netlify
                </Link>
            </p>
        </footer>
    );
};
