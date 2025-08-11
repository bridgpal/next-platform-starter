import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | 🌈 AWESOME GEOCITIES SITE 🌈',
        default: '🚧 UNDER CONSTRUCTION - TOTALLY RAD NETLIFY SITE 🚧'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="text-white">
                <div className="marquee">
                    <span>🌟 WELCOME TO MY AWESOME WEBSITE! 🌟 UNDER CONSTRUCTION! 🌟 BEST VIEWED IN NETSCAPE! 🌟</span>
                </div>
                <div className="flex flex-col min-h-screen px-6 sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow geocities-border">
                        <Header />
                        <div className="grow">{children}</div>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
