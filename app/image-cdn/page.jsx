import Image from 'next/image';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';
import { ImageWithSizeOverlay } from './image-with-size-overlay';
import { ContextAlert } from 'components/context-alert';

export const metadata = {
    title: 'Image CDN'
};

const sampleImage = '/images/corgi.jpg';

const ctx = getNetlifyContext();
const forceWebP = ctx === 'dev';
const sampleImageSrcSet = [640, 1280, 2048]
    .map((size) => {
        return `/.netlify/images?url=${sampleImage}&w=${size}${forceWebP ? '&fm=webp' : ''} ${size}w`;
    })
    .join(', ');

const nextImageSnippet = `
When running on Netlify, \`next/image\` is automatically set-up to use Netlify Image CDN for optimized images.

~~~jsx
import Image from 'next/image';

// In your component
<Image src="/images/corgi.jpg" alt="Corgi" /* ... additional props */ />
~~~
`;

const originalVsCdnSnippet = `
In the code below, a regular \`<img>\` tag is used in both cases for a framework-agnostic example.
Other than using \`next/image\` or rolling your own \`<img>\` tags, you can also use the excellent [unpic-img](https://unpic.pics/).

~~~jsx
// <== On the left, the original image
<img src="/images/corgi.jpg" alt="Corgi" />

// ==> On the right, explicitly using Netlify Image CDN endpoint for a responsive image
<img
  srcSet="/.netlify/images?url=images/corgi.jpg&w=640 640w, /.netlify/images?url=images/corgi.jpg&w=1280 1280w, /.netlify/images?url=images/corgi.jpg&w=2048 2048w"
  sizes="(max-width: 1024px) 100vw, 1024px"
  alt="Corgi"
/>
~~~
`;

const devModeWarning = `
In local development, optimization is performed locally without automatic format
detection, so format is set to WebP.
`;

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            {/* Page Header */}
            <section className="flex flex-col items-start gap-6 pt-8">
                <ContextAlert addedChecksFunction={
                    (ctx) => {
                        return ctx === "dev" ? devModeWarning : null;
                    }
                } />
                <div className="flex items-center gap-3">
                    <div className="w-8 h-px bg-vermillion" />
                    <span className="text-2xs uppercase tracking-[0.2em] text-cream/50 font-medium">
                        Media Optimization
                    </span>
                </div>
                <h1 className="mb-0">Image CDN</h1>
            </section>

            {/* Section 1: next/image */}
            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-vermillion" />
                    <h2 className="text-xl font-display text-cream/80 mb-0">Using next/image component</h2>
                </div>
                <Markdown content={nextImageSnippet} />
                <div
                    className="mt-8 overflow-hidden border-3 border-cream/20 relative max-w-screen-lg group"
                    style={{ aspectRatio: '3/2' }}
                >
                    <Image
                        src="/images/corgi.jpg"
                        priority
                        fill={true}
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        alt="Corgi"
                    />
                    <div className="absolute inset-0 border border-vermillion/0 group-hover:border-vermillion/30 transition-colors duration-300 pointer-events-none" />
                </div>
                <p className="text-sm text-cream/40 italic">
                    Credit: photo by{' '}
                    <a href="https://unsplash.com/@alvannee?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" className="text-cream/50 hover:text-vermillion">
                        Alvan Nee
                    </a>{' '}
                    on{' '}
                    <a href="https://unsplash.com/photos/long-coated-white-and-brown-dog-lvFlpqEvuRM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" className="text-cream/50 hover:text-vermillion">
                        Unsplash
                    </a>
                </p>
            </section>

            <div className="section-divider" />

            {/* Section 2: Comparison */}
            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-vermillion" />
                    <h2 className="text-xl font-display text-cream/80 mb-0">
                        Original vs. optimized image
                    </h2>
                </div>
                <p className="text-cream/60">Can you tell the difference?</p>
                <Markdown content={originalVsCdnSnippet} />
                <div className="diff aspect-[3/2] border-3 border-cream/20 mt-8">
                    <div className="diff-item-1">
                        <div>
                            <ImageWithSizeOverlay
                                srcSet={sampleImageSrcSet}
                                sizes={sampleImageSrcSet}
                                overlayPosition="right"
                            />
                        </div>
                    </div>
                    <div className="diff-item-2">
                        <div>
                            <ImageWithSizeOverlay src="/images/corgi.jpg" />
                        </div>
                    </div>
                    <div className="diff-resizer"></div>
                </div>
            </section>
        </div>
    );
}
