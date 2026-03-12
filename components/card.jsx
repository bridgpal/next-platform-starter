import Link from 'next/link';

export function Card({ title, text, linkText, href, children }) {
    return (
        <div className="bg-white text-black card">
            <div className="card-body">
                {title && <h3 className="text-black card-title font-serif">{title}</h3>}
                {text && <p>{text}</p>}
                {linkText && href && (
                    <div className="card-actions">
                        <Link href={href} className="transition link text-black font-bold hover:text-accent">
                            {linkText}
                        </Link>
                    </div>
                )}
                {children}
            </div>
        </div>
    );
}
