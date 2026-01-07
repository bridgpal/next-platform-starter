import Link from 'next/link';

export function Card({ title, text, linkText, href, children }) {
    return (
        <div className="bg-neutral-200 text-neutral-700 card">
            <div className="card-body">
                {title && <h3 className="text-neutral-900 card-title">{title}</h3>}
                {text && <p>{text}</p>}
                {linkText && href && (
                    <div className="card-actions">
                        <Link href={href} className="transition link text-red-700 hover:opacity-80">
                            {linkText}
                        </Link>
                    </div>
                )}
                {children}
            </div>
        </div>
    );
}
