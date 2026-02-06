'use client';

import { useState } from 'react';

export function FeedbackForm() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const myForm = event.target;
            const formData = new FormData(myForm);
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            if (res.status === 200) {
                setStatus('ok');
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
    };

    return (
        <div className="w-full md:max-w-md">
            <div className="card-brutal">
                <div className="geo-corner geo-corner-tl" />
                <div className="geo-corner geo-corner-br" />

                <div className="relative z-10">
                    <h3 className="text-cream mb-6">Leave Feedback</h3>

                    <form
                        name="feedback"
                        onSubmit={handleFormSubmit}
                        className="flex flex-col gap-4"
                    >
                        <input type="hidden" name="form-name" value="feedback" />

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-wider text-cream/50">Name</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Your name"
                                required
                                className="w-full px-4 py-3 bg-obsidian border-2 border-cream/20 text-cream placeholder:text-cream/30 focus:border-vermillion focus:outline-none transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-wider text-cream/50">Email (optional)</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 bg-obsidian border-2 border-cream/20 text-cream placeholder:text-cream/30 focus:border-vermillion focus:outline-none transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-wider text-cream/50">Message</label>
                            <textarea
                                name="message"
                                placeholder="Your message..."
                                required
                                rows={4}
                                className="w-full px-4 py-3 bg-obsidian border-2 border-cream/20 text-cream placeholder:text-cream/30 focus:border-vermillion focus:outline-none transition-colors resize-none"
                            />
                        </div>

                        <button
                            className="btn-brutal mt-2"
                            type="submit"
                            disabled={status === 'pending'}
                        >
                            {status === 'pending' ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="w-4 h-4 border-2 border-obsidian border-t-transparent rounded-full animate-spin" />
                                    Sending...
                                </span>
                            ) : (
                                'Submit Feedback'
                            )}
                        </button>

                        {status === 'ok' && (
                            <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30">
                                <SuccessIcon />
                                <span className="text-green-400">Thank you! Your feedback has been submitted.</span>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="flex items-center gap-3 p-4 bg-vermillion/10 border border-vermillion/30">
                                <ErrorIcon />
                                <span className="text-vermillion">{error}</span>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

function SuccessIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-green-400 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}

function ErrorIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-vermillion shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}
