import { Markdown } from 'components/markdown';

export const metadata = {
    title: 'Edge Functions'
};

const explainer = `
This page is using a [Netlify Edge Function](https://docs.netlify.com/edge-functions/overview/) to rewrite the URL based on visitor geography.

For it to be invoked, please either run this site locally with \`netlify dev\` or deploy it to Netlify.

Edge Functions are framework-agnostic, but are also used behind the scenes to run Next.js Middleware on Netlify.
There are advatanges to using Edge Functions directly, such as the ability to access & transform the response body.

[See more examples](https://edge-functions-examples.netlify.app)
`;

export default function FallbackPage() {
    return (
        <div className="flex flex-col gap-12">
            {/* Page Header */}
            <section className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-px bg-vermillion" />
                    <span className="text-2xs uppercase tracking-[0.2em] text-cream/50 font-medium">
                        Edge Computing
                    </span>
                </div>
                <h1>You&apos;ve reached the fallback page</h1>
            </section>

            {/* Content */}
            <section>
                <Markdown content={explainer} />
            </section>
        </div>
    );
}
