'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton({ text = 'Submit' }) {
    const { pending } = useFormStatus();
    return (
        <button className="btn-brutal" type="submit" disabled={pending}>
            {pending ? (
                <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-obsidian border-t-transparent rounded-full animate-spin" />
                    Processing...
                </span>
            ) : (
                text
            )}
        </button>
    );
}
