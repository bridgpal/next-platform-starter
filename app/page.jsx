import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

const cards = [
    //{ text: 'Hello', linkText: 'someLink', href: '/' }
];

const contextExplainer = `
🚀 **SUPER TECHNICAL STUFF AHEAD!** 🚀 The card below is rendered on the server based on the value of \`process.env.CONTEXT\`
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
💫 **AMAZING DYNAMIC CONTENT!** 💫 The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
🌟 **TOTALLY RADICAL SERVERLESS FUNCTIONS!** 🌟 On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-center gap-3 sm:gap-4 text-center">
                <ContextAlert />
                <h1 className="mb-0">🌈 TOTALLY AWESOME NETLIFY SITE 🌈</h1>
                <p className="text-lg neon-text">Welcome to my SUPER COOL website!!! Under construction since 1995! 🚧</p>
                <div className="flex gap-4 items-center">
                    <span className="text-yellow-300">👈 NEW!</span>
                    <Link
                        href="https://docs.netlify.com/frameworks/next-js/overview/"
                        className="btn btn-lg bg-gradient-to-r from-pink-500 to-yellow-500 text-black font-bold border-4 border-white shadow-lg transform hover:scale-105"
                    >
                        🔥 CLICK HERE FOR DOCS! 🔥
                    </Link>
                    <span className="text-yellow-300">NEW! 👉</span>
                </div>
                <div className="text-center">
                    <p className="text-lime-400 font-bold">🎵 Now Playing: Darude - Sandstorm 🎵</p>
                    <p className="text-purple-300">Visitor Counter: 999999 (totally real!)</p>
                </div>
            </section>
            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <Markdown content={contextExplainer} />
                    <RuntimeContextCard />
                </section>
            )}
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
                <Markdown content={postDynamicContentExplainer} />
            </section>
            {/* !!cards?.length && <CardsGrid cards={cards} /> */}
        </main>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return <Card title={title} text="Next.js will rebuild any page you navigate to, including static pages." />;
    } else {
        return <Card title={title} text="This page was statically-generated at build time." />;
    }
}
