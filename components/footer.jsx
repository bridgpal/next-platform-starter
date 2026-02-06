import Link from 'next/link';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative pt-20 pb-12 mt-16">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent" />

            <div className="relative">
                {/* Geometric decoration */}
                <div className="absolute -top-6 left-0 flex items-center gap-2">
                    <div className="w-3 h-3 border-2 border-vermillion rotate-45" />
                    <div className="w-8 h-px bg-vermillion/50" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
                    {/* Main footer content */}
                    <div className="space-y-4">
                        <p className="font-display text-2xl text-cream tracking-tight">
                            Built with Next.js
                        </p>
                        <p className="text-sm text-cream/50 max-w-md">
                            A modern platform starter showcasing Netlify&apos;s powerful features
                            for building and deploying web applications.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <Link
                                href="https://docs.netlify.com/frameworks/next-js/overview/"
                                className="btn-brutal btn-brutal-sm"
                            >
                                Read the Docs
                            </Link>
                            <Link
                                href="https://netlify.com"
                                className="text-sm text-cream/60 hover:text-vermillion transition-colors border-0 hover:border-0"
                            >
                                netlify.com
                            </Link>
                        </div>
                    </div>

                    {/* Copyright and meta */}
                    <div className="text-right">
                        <p className="text-2xs uppercase tracking-widest text-cream/40 mb-1">
                            Platform Starter
                        </p>
                        <p className="text-sm text-cream/60">
                            &copy; {currentYear} Netlify
                        </p>
                    </div>
                </div>

                {/* Bottom accent */}
                <div className="mt-12 flex items-center gap-4">
                    <div className="flex-1 h-px bg-cream/10" />
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-vermillion" />
                        <div className="w-1.5 h-1.5 bg-cream/30" />
                        <div className="w-1.5 h-1.5 bg-cream/20" />
                    </div>
                    <div className="flex-1 h-px bg-cream/10" />
                </div>
            </div>
        </footer>
    );
}
