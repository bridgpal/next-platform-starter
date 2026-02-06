import Link from 'next/link';

export function Card({ title, text, linkText, href, children, variant = 'default' }) {
    const variants = {
        default: 'card-brutal',
        featured: 'card-brutal border-vermillion/40 shadow-brutal-vermillion',
        minimal: 'bg-transparent border-0 p-0 shadow-none hover:shadow-none hover:transform-none',
    };

    return (
        <div className={`relative group ${variants[variant]}`}>
            {/* Corner decorations for featured cards */}
            {variant === 'featured' && (
                <>
                    <div className="geo-corner geo-corner-tl" />
                    <div className="geo-corner geo-corner-br" />
                </>
            )}

            <div className="relative z-10">
                {title && (
                    <h3 className="text-cream mb-3 group-hover:text-vermillion transition-colors duration-300">
                        {title}
                    </h3>
                )}
                {text && (
                    <p className="text-cream/60 text-sm leading-relaxed">
                        {text}
                    </p>
                )}
                {linkText && href && (
                    <div className="mt-5 pt-4 border-t border-cream/10">
                        <Link
                            href={href}
                            className="card-link inline-flex items-center gap-2 text-sm font-medium text-vermillion hover:text-cream transition-colors duration-300 border-0 hover:border-0"
                        >
                            <span>{linkText}</span>
                            <svg
                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                )}
                {children}
            </div>

            {/* Subtle hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-vermillion/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
}
