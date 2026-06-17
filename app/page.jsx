import Link from 'next/link';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\`
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const stack = [
    { key: 'framework', value: 'next@14.2' },
    { key: 'runtime', value: 'node@22' },
    { key: 'host', value: 'netlify' },
    { key: 'theme', value: 'teal · mono' }
];

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="flex flex-col gap-10 sm:gap-16 pb-8">
            <ContextAlert />

            {/* Hero — terminal window */}
            <section className="overflow-hidden border rounded-xl shadow-xl border-neutral-200 bg-white/80 shadow-teal-900/5 backdrop-blur">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-200 bg-neutral-50">
                    <span className="block w-3 h-3 rounded-full bg-teal-400" />
                    <span className="block w-3 h-3 rounded-full bg-neutral-300" />
                    <span className="block w-3 h-3 rounded-full bg-neutral-300" />
                    <span className="ml-3 text-xs tracking-tight text-neutral-400">~/netlify/next-platform-starter</span>
                </div>

                <div className="flex flex-col gap-6 px-6 py-10 sm:px-12 sm:py-14">
                    <p className="text-sm text-teal-600">
                        <span className="text-neutral-400">$</span> npx create-next-app --template netlify
                    </p>

                    <h1 className="mb-0">
                        Ship Next.js on Netlify
                        <span className="text-teal-500">.</span>
                    </h1>

                    <p className="max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                        A starter built for developers — server rendering, edge functions, blob storage and a
                        managed Postgres database, all wired up and ready to deploy. No config, no cold-start
                        guesswork.
                    </p>

                    <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                        <Link
                            href="https://docs.netlify.com/frameworks/next-js/overview/"
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white no-underline transition rounded-md bg-teal-600 hover:bg-teal-500"
                        >
                            <span className="text-teal-200">&gt;_</span> Read the Docs
                        </Link>
                        <Link
                            href="https://github.com/netlify-templates/next-platform-starter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium no-underline transition border rounded-md text-neutral-700 border-neutral-300 hover:border-teal-400 hover:text-teal-700"
                        >
                            git clone
                        </Link>
                    </div>

                    {/* Stack chips, written like an env block */}
                    <dl className="grid grid-cols-2 gap-px mt-4 overflow-hidden border rounded-lg sm:grid-cols-4 border-neutral-200 bg-neutral-200">
                        {stack.map(({ key, value }) => (
                            <div key={key} className="px-4 py-3 bg-white">
                                <dt className="text-xs uppercase tracking-wider text-neutral-400">{key}</dt>
                                <dd className="mt-1 text-sm text-teal-700">{value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <SectionLabel comment="server-rendered" />
                    <Markdown content={contextExplainer} />
                    <RuntimeContextCard />
                </section>
            )}

            <section className="flex flex-col gap-4">
                <SectionLabel comment="client fetch · /quotes/random" />
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
                <Markdown content={postDynamicContentExplainer} />
            </section>
        </main>
    );
}

function SectionLabel({ comment }) {
    return (
        <div className="flex items-center gap-3 text-xs text-neutral-400">
            <span className="text-teal-500">{'//'}</span>
            <span className="tracking-wide">{comment}</span>
            <span className="h-px grow bg-neutral-200" />
        </div>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    const text =
        ctx === 'dev'
            ? 'Next.js will rebuild any page you navigate to, including static pages.'
            : 'This page was statically-generated at build time.';

    return (
        <div className="p-6 bg-white border rounded-xl border-neutral-200">
            <h3 className="flex items-center gap-2 mb-2 text-lg font-bold text-neutral-900">
                <span className="block w-2 h-2 rounded-full bg-teal-500" />
                {title}
            </h3>
            <p className="text-neutral-600">{text}</p>
        </div>
    );
}
