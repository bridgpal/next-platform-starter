import Link from 'next/link';

export function Card({ title, text, linkText, href, children }) {
    return (
        <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
                {title && <h3 className="card-title">{title}</h3>}
                {text && <p>{text}</p>}
                {linkText && href && (
                    <div className="card-actions">
                        <Link href={href} className="transition link hover:opacity-80">
                            {linkText}
                        </Link>
                    </div>
                )}
                {children}
            </div>
        </div>
    );
}
