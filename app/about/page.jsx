import Link from 'next/link';

export const metadata = {
    title: 'About'
};

export default function AboutPage() {
    return (
        <div className="max-w-3xl">
            <h1>About</h1>
            <p className="mb-4 text-lg">
                This is a demo page built from the <Link href="https://github.com/bridgpal/next-platform-starter">bridgpal/next-platform-starter</Link> GitHub project
                to showcase a clean, black-and-white presentation.
            </p>
            <p>
                The site keeps the focus on content, layout, and Netlify platform features while staying deliberately minimal.
            </p>
        </div>
    );
}
