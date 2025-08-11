import Link from 'next/link';

export function Card({ title, text, linkText, href, children }) {
    return (
        <div className="geocities-border bg-gradient-to-br from-purple-800 to-blue-800 text-white card transform hover:rotate-1 transition-transform">
            <div className="card-body p-6">
                {title && <h3 className="text-yellow-300 card-title font-bold text-xl mb-3 neon-text">✨ {title} ✨</h3>}
                {text && <p className="text-cyan-200 mb-4">{text}</p>}
                {linkText && href && (
                    <div className="card-actions">
                        <Link href={href} className="bg-gradient-to-r from-pink-500 to-yellow-500 text-black px-4 py-2 rounded-full font-bold border-2 border-white hover:scale-105 transform transition-all shadow-lg">
                            🔗 {linkText} 🔗
                        </Link>
                    </div>
                )}
                {children}
            </div>
        </div>
    );
}
