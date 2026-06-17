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
        <div className="overflow-hidden bg-white border rounded-xl border-neutral-200">
            <div className="p-6 sm:p-8">
                {quote ? (
                    <>
                        <h3 className="text-xl font-bold leading-snug text-neutral-900">
                            <span className="text-teal-500">&ldquo;</span>
                            {quote.text}
                            <span className="text-teal-500">&rdquo;</span>
                        </h3>
                        <p className="mt-2 text-neutral-600">
                            {' '}
                            - {quote.playedBy} as {quote.character} in &ldquo;{quote.film}&rdquo; ({quote.year})
                        </p>
                        <p className="pt-2.5 mt-4 border-t border-dashed border-neutral-200 text-teal-700">
                            <span className="text-sm italic">
                                loaded at {time}. <a href={quote.dataSource}>Original data source.</a>
                            </span>
                        </p>
                    </>
                ) : (
                    <p className="text-sm text-neutral-400">
                        <span className="text-teal-500">$</span> fetching quote...
                    </p>
                )}
            </div>
        </div>
    );
}
