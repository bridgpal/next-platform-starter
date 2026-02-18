'use client';

import { useState } from 'react';
import { Card } from './card';

export function ContactForm() {
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
                myForm.reset();
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
        <div className="w-full md:max-w-xl">
            <Card title="Contact">
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleFormSubmit}
                    className="text-black flex flex-col gap-4 align-center"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            required
                            className="input input-bordered w-full"
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="How can we help?"
                        required
                        className="textarea textarea-bordered min-h-[140px]"
                    />
                    <button className="btn btn-primary" type="submit" disabled={status === 'pending'}>
                        Send message
                    </button>
                    {status === 'ok' && (
                        <div className="alert alert-success">
                            <SuccessIcon />
                            Thanks! The message was sent.
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
