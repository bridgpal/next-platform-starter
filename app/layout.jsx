import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="brutalist">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased">
                {/* Grain texture overlay */}
                <div className="grain-overlay" aria-hidden="true" />

                <div className="flex flex-col min-h-screen relative">
                    {/* Subtle diagonal background pattern */}
                    <div className="fixed inset-0 bg-diagonal-lines pointer-events-none" aria-hidden="true" />

                    {/* Gradient orb decorations */}
                    <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-vermillion/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
                    <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-cream/3 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

                    <Header />

                    <div className="flex flex-col w-full max-w-6xl mx-auto grow px-6 sm:px-12 pt-12 relative z-10">
                        <div className="grow">{children}</div>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
