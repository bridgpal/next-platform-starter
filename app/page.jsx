import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\`
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with access to the [full context data](https://docs.netlify.com/functions/api/).
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="flex flex-col gap-16 sm:gap-24">
            {/* Hero Section */}
            <section className="relative pt-8 sm:pt-16">
                {/* Decorative elements */}
                <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-vermillion to-transparent hidden lg:block" />

                <div className="flex flex-col items-start gap-6">
                    <ContextAlert />

                    {/* Eyebrow */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-px bg-vermillion" />
                        <span className="text-2xs uppercase tracking-[0.2em] text-cream/50 font-medium">
                            Platform Starter
                        </span>
                    </div>

                    {/* Main heading */}
                    <h1 className="max-w-4xl">
                        <span className="block text-cream">Netlify Platform</span>
                        <span className="block text-vermillion">Starter</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-cream/60 max-w-2xl leading-relaxed">
                        Get started with Next.js and Netlify in seconds. Build, deploy, and scale
                        modern web applications with powerful platform features.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <Link
                            href="https://docs.netlify.com/frameworks/next-js/overview/"
                            className="btn-brutal"
                        >
                            Read the Docs
                        </Link>
                        <Link
                            href="https://github.com/netlify-templates/next-platform-starter"
                            className="btn-brutal-outline"
                        >
                            View on GitHub
                        </Link>
                    </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute -right-4 bottom-0 hidden lg:block">
                    <div className="w-16 h-16 border-r-2 border-b-2 border-cream/10" />
                </div>
            </section>

            {/* Context Section */}
            {!!ctx && (
                <section className="relative">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 bg-vermillion" />
                            <h2 className="text-xl font-display text-cream/80">Runtime Context</h2>
                        </div>
                        <Markdown content={contextExplainer} />
                        <RuntimeContextCard />
                    </div>
                </section>
            )}

            {/* Dynamic Content Section */}
            <section className="relative">
                <div className="section-divider" />

                <div className="flex flex-col gap-6 pt-4">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-vermillion" />
                        <h2 className="text-xl font-display text-cream/80">Dynamic Content</h2>
                    </div>

                    <Markdown content={preDynamicContentExplainer} />
                    <RandomQuote />
                    <Markdown content={postDynamicContentExplainer} />
                </div>
            </section>

            {/* Features Grid - Placeholder for future cards */}
            {/* {!!cards?.length && <CardsGrid cards={cards} />} */}
        </main>
    );
}

function RuntimeContextCard() {
    const title = `Running in ${ctx} mode`;
    const Icon = () => (
        <div className="flex items-center justify-center w-10 h-10 bg-vermillion/10 border border-vermillion/30">
            <svg className="w-5 h-5 text-vermillion" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        </div>
    );

    if (ctx === 'dev') {
        return (
            <Card title={title} variant="featured">
                <div className="flex items-start gap-4 mt-4">
                    <Icon />
                    <p className="text-cream/60 text-sm">
                        Next.js will rebuild any page you navigate to, including static pages.
                        Hot reloading is enabled for rapid development.
                    </p>
                </div>
            </Card>
        );
    } else {
        return (
            <Card title={title} variant="featured">
                <div className="flex items-start gap-4 mt-4">
                    <Icon />
                    <p className="text-cream/60 text-sm">
                        This page was statically-generated at build time and served from the edge.
                    </p>
                </div>
            </Card>
        );
    }
}
