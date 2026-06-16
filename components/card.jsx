import Link from 'next/link';

export function Card({ title, text, linkText, href, children }) {
    return (
        <div className="bg-white text-axa-slate border border-axa-line rounded-lg shadow-card card">
            <div className="card-body">
                {title && <h3 className="text-axa-blue font-bold card-title">{title}</h3>}
                {text && <p>{text}</p>}
                {linkText && href && (
                    <div className="card-actions">
                        <Link href={href} className="font-semibold text-axa-bright no-underline transition-colors link hover:text-axa-blue">
                            {linkText} <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                )}
                {children}
            </div>
        </div>
    );
}
