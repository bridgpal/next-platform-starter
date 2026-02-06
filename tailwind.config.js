const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': "url('/images/noise.png')",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'diagonal-lines': 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(245,240,232,0.03) 2px, rgba(245,240,232,0.03) 4px)'
            },
            colors: {
                neutral: colors.neutral,
                obsidian: {
                    DEFAULT: '#0a0a0a',
                    50: '#171717',
                    100: '#141414',
                    200: '#121212',
                    300: '#101010',
                    400: '#0e0e0e',
                    500: '#0c0c0c',
                    600: '#0a0a0a',
                    700: '#080808',
                    800: '#060606',
                    900: '#040404',
                },
                cream: {
                    DEFAULT: '#f5f0e8',
                    50: '#fdfcfa',
                    100: '#faf8f5',
                    200: '#f7f4ef',
                    300: '#f5f0e8',
                    400: '#ebe4d8',
                    500: '#ddd3c2',
                    600: '#c4b8a5',
                    700: '#a69a86',
                    800: '#857a68',
                    900: '#6b6355',
                },
                vermillion: {
                    DEFAULT: '#ff4d4d',
                    50: '#fff5f5',
                    100: '#ffe0e0',
                    200: '#ffbdbd',
                    300: '#ff8a8a',
                    400: '#ff6b6b',
                    500: '#ff4d4d',
                    600: '#e63939',
                    700: '#cc2929',
                    800: '#a31f1f',
                    900: '#7a1717',
                },
            },
            fontFamily: {
                sans: ['Instrument Sans', ...defaultTheme.fontFamily.sans],
                display: ['Clash Display', 'system-ui', 'sans-serif'],
                serif: ['Instrument Serif', 'Georgia', 'serif'],
            },
            fontSize: {
                '2xs': ['0.65rem', { lineHeight: '1rem' }],
                'display-sm': ['2.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
                'display-md': ['3.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
                'display-lg': ['5rem', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
                'display-xl': ['7rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
            },
            boxShadow: {
                'brutal': '4px 4px 0px 0px rgba(245,240,232,1)',
                'brutal-sm': '2px 2px 0px 0px rgba(245,240,232,1)',
                'brutal-lg': '8px 8px 0px 0px rgba(245,240,232,1)',
                'brutal-vermillion': '4px 4px 0px 0px rgba(255,77,77,1)',
                'glow': '0 0 40px rgba(255,77,77,0.15)',
                'inner-glow': 'inset 0 0 30px rgba(255,77,77,0.1)',
            },
            borderWidth: {
                '3': '3px',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
                'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
                'grain': 'grain 8s steps(10) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                pulseSubtle: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.8' },
                },
                grain: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '10%': { transform: 'translate(-5%, -10%)' },
                    '20%': { transform: 'translate(-15%, 5%)' },
                    '30%': { transform: 'translate(7%, -25%)' },
                    '40%': { transform: 'translate(-5%, 25%)' },
                    '50%': { transform: 'translate(-15%, 10%)' },
                    '60%': { transform: 'translate(15%, 0%)' },
                    '70%': { transform: 'translate(0%, 15%)' },
                    '80%': { transform: 'translate(3%, 35%)' },
                    '90%': { transform: 'translate(-10%, 10%)' },
                },
            },
            transitionTimingFunction: {
                'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
            },
        }
    },
    daisyui: {
        themes: [
            {
                brutalist: {
                    'primary': '#ff4d4d',
                    'primary-content': '#0a0a0a',
                    'secondary': '#f5f0e8',
                    'secondary-content': '#0a0a0a',
                    'accent': '#ff4d4d',
                    'accent-content': '#0a0a0a',
                    'neutral': '#171717',
                    'neutral-content': '#f5f0e8',
                    'base-100': '#0a0a0a',
                    'base-200': '#121212',
                    'base-300': '#1a1a1a',
                    'base-content': '#f5f0e8',
                    'info': '#f5f0e8',
                    'info-content': '#0a0a0a',
                    'success': '#22c55e',
                    'success-content': '#0a0a0a',
                    'warning': '#eab308',
                    'warning-content': '#0a0a0a',
                    'error': '#ff4d4d',
                    'error-content': '#0a0a0a',
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
