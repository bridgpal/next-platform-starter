import { revalidateTag } from 'next/cache';
import { SubmitButton } from '../../components/submit-button';
import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'On-Demand Revalidation'
};

// Force dynamic rendering to avoid build-time fetch failures
export const dynamic = 'force-dynamic';

const tagName = 'randomWiki';
const randomWikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/random/summary';
const maxExtractLength = 200;
const revalidateTTL = 60;

const explainer = `
This page perfoms a \`fetch\` on the server to get a random article from Wikipedia.
The fetched data is then cached with a tag named "${tagName}" and a maximum age of ${revalidateTTL} seconds.

~~~jsx
const url = 'https://en.wikipedia.org/api/rest_v1/page/random/summary';

async function RandomArticleComponent() {
    const randomArticle = await fetch(url, {
        next: { revalidate: ${revalidateTTL}, tags: ['${tagName}'] }
    });
    // ...render
}
~~~

After the set time has passed, the first request for this page would trigger its rebuild in the background. When the new page is ready, subsequent requests would return the new page -
see [\`stale-white-revalidate\`](https://www.netlify.com/blog/swr-and-fine-grained-cache-control/).

Alternatively, if the cache tag is explicitly invalidated by \`revalidateTag('${tagName}')\`, any page using that tag would be rebuilt in the background when requested.

In real-life applications, tags are typically invalidated when data has changed in an external system (e.g., the CMS notifies the site about content changes via a webhook), or after a data mutation made through the site.

For this functionality to work, Next.js uses the [fine-grained caching headers](https://docs.netlify.com/platform/caching/) available on Netlify - but you can use these features on basically any Netlify site!
`;


export default async function Page() {
    async function revalidateWiki() {
        'use server';
        revalidateTag(tagName);
    }

    return (
        <div className="flex flex-col gap-12">
            {/* Page Header */}
            <section className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-px bg-vermillion" />
                    <span className="text-2xs uppercase tracking-[0.2em] text-cream/50 font-medium">
                        Data Fetching
                    </span>
                </div>
                <h1>Revalidation Basics</h1>
            </section>

            {/* Content */}
            <section>
                <Markdown content={explainer} />
                <form className="mt-8" action={revalidateWiki}>
                    <SubmitButton text="Click to Revalidate" />
                </form>
            </section>

            {/* Wikipedia Article */}
            <RandomWikiArticle />
        </div>
    );
}

async function RandomWikiArticle() {
    const randomWiki = await fetch(randomWikiUrl, {
        next: { revalidate: revalidateTTL, tags: [tagName] }
    });

    const content = await randomWiki.json();
    let extract = content.extract;
    if (extract.length > maxExtractLength) {
        extract = extract.slice(0, extract.slice(0, maxExtractLength).lastIndexOf(' ')) + ' [...]';
    }

    return (
        <div className="card-brutal max-w-2xl">
            <div className="geo-corner geo-corner-tl" />
            <div className="geo-corner geo-corner-br" />

            <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl text-cream mb-2">{content.title}</h3>
                <p className="text-vermillion font-medium mb-4">{content.description}</p>
                <p className="text-cream/60 italic mb-6">{extract}</p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={content.content_urls.desktop.page}
                    className="inline-flex items-center gap-2 text-sm text-cream/50 hover:text-vermillion transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Read on Wikipedia
                </a>
            </div>
        </div>
    );
}
