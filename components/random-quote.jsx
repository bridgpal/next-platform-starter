'use client';

import { useEffect, useState } from 'react';

const randomQuoteUrl = '/quotes/random';

export function RandomQuote() {
    const [quote, setQuote] = useState(null);
    const [time, setTime] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch(randomQuoteUrl, { cache: 'no-store' });
                if (response) {
                    const data = await response.json();
                    setQuote(data);
                    setTime(new Date().toLocaleString());
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchQuote();
    }, []);

    return (
        <div className="card-brutal group">
            {/* Corner decorations */}
            <div className="geo-corner geo-corner-tl" />
            <div className="geo-corner geo-corner-br" />

            <div className="relative z-10">
                {quote ? (
                    <div className="space-y-6">
                        {/* Quote mark */}
                        <div className="text-vermillion text-6xl font-serif leading-none">&ldquo;</div>

                        {/* Quote text */}
                        <blockquote className="font-serif text-2xl md:text-3xl text-cream leading-snug -mt-4">
                            {quote.text}
                        </blockquote>

                        {/* Attribution */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-cream/10">
                            <div className="space-y-1">
                                <p className="font-display font-medium text-cream">
                                    {quote.playedBy}
                                </p>
                                <p className="text-sm text-cream/50">
                                    as {quote.character} in &ldquo;{quote.film}&rdquo; ({quote.year})
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-cream/40">
                                <div className="w-1.5 h-1.5 bg-vermillion/50 rounded-full animate-pulse-subtle" />
                                <span>Loaded {time}</span>
                            </div>
                        </div>

                        {/* Source link */}
                        <div className="pt-2">
                            <a
                                href={quote.dataSource}
                                className="inline-flex items-center gap-2 text-xs text-cream/40 hover:text-vermillion transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                View data source
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-4 py-8">
                        <div className="w-5 h-5 border-2 border-vermillion border-t-transparent rounded-full animate-spin" />
                        <span className="text-cream/50 font-display">Loading quote...</span>
                    </div>
                )}
            </div>
        </div>
    );
}
