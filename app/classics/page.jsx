import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'Classics'
};

const explainer = `
Some classic (and much-loved) Netlify features were born when most sites we hosted were fully static.
For example, [Netlify Forms](https://docs.netlify.com/forms/setup/) do their magic based on automatic detection of specially-marked form tags in static HTML files.

This has [required some adjustments](https://docs.netlify.com/forms/setup/#javascript-forms) for the age of SPA and SSR.
With modern Next.js versions, no page is truly static: as a developer, you can revalidate any page. However, you can still use our forms.

Below is a simple form using \`fetch\` to submit its data to Netlify rather than using full-page navigation. To be detected, form tags must be hosted in static files -
and \`public/__forms.html\` exists just for this purpose.

Deploy this site to your Netlify account, [enable the forms feature in the UI](https://docs.netlify.com/forms/setup/#enable-form-detection), trigger a build and you can start collecting submissions.
`;

export default async function Page() {
    return (
        <div className="flex flex-col gap-12">
            {/* Page Header */}
            <section className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-px bg-vermillion" />
                    <span className="text-2xs uppercase tracking-[0.2em] text-cream/50 font-medium">
                        Classic Features
                    </span>
                </div>
                <h1>Netlify Classics</h1>
            </section>

            {/* Content */}
            <section>
                <Markdown content={explainer} />
            </section>

            {/* Form */}
            <section className="flex w-full justify-center">
                <FeedbackForm />
            </section>
        </div>
    );
}
