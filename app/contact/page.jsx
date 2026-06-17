'use client';

import { useState } from 'react';
import { Card } from 'components/card';

export default function ContactPage() {
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
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <h1 className="mb-0">Contact Us</h1>
                <p className="text-lg">Have a question or want to get in touch? Fill out the form below and we&apos;ll get back to you.</p>
            </section>
            <section className="flex flex-col gap-4">
                <div className="w-full md:max-w-md">
                    <Card title="Send a Message">
                        <form
                            name="contact"
                            onSubmit={handleFormSubmit}
                            className="text-black flex flex-col gap-3 align-center"
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            {/* Honeypot field for spam prevention */}
                            <p className="hidden">
                                <label>
                                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                                </label>
                            </p>
                            <input
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                required
                                className="input input-bordered"
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                required
                                className="input input-bordered"
                            />
                            <input
                                name="subject"
                                type="text"
                                placeholder="Subject"
                                className="input input-bordered"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                required
                                rows={5}
                                className="textarea textarea-bordered"
                            />
                            <button className="btn btn-primary" type="submit" disabled={status === 'pending'}>
                                {status === 'pending' ? 'Sending...' : 'Send Message'}
                            </button>
                            {status === 'ok' && (
                                <div className="alert alert-success">
                                    <SuccessIcon />
                                    Thank you for your message! We&apos;ll get back to you soon.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="alert alert-error">
                                    <ErrorIcon />
                                    {error}
                                </div>
                            )}
                        </form>
                    </Card>
                </div>
            </section>
        </main>
    );
}

function SuccessIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
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
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
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
