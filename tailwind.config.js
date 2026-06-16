const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                neutral: colors.neutral,
                // AXA-inspired brand palette
                axa: {
                    blue: '#00008f', // deep AXA navy — primary brand
                    'blue-700': '#13139c',
                    bright: '#1144dd', // interactive / accent blue
                    'bright-600': '#2f5fe0',
                    red: '#ff1721', // sparing accent
                    ink: '#111b1d', // body text
                    slate: '#343c3d', // secondary text
                    line: '#d4d9d9', // borders / dividers
                    mist: '#f0f3f7', // tinted section background
                    cloud: '#f7f9fb' // page background
                }
            },
            fontFamily: {
                sans: ['"Source Sans 3"', 'Inter', ...defaultTheme.fontFamily.sans]
            },
            boxShadow: {
                card: '0 1px 2px rgba(17, 27, 29, 0.04), 0 8px 24px rgba(17, 27, 29, 0.06)'
            }
        }
    },
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#00008f',
                    'primary-content': '#ffffff',
                    secondary: '#1144dd',
                    'secondary-content': '#ffffff',
                    accent: '#ff1721',
                    'accent-content': '#ffffff',
                    neutral: '#111b1d',
                    'neutral-content': '#ffffff',
                    'base-100': '#ffffff',
                    'base-200': '#f7f9fb',
                    'base-300': '#e5e9ee',
                    'base-content': '#111b1d',
                    info: '#e6ecff',
                    'info-content': '#00008f',
                    success: '#0a7d3e',
                    'success-content': '#ffffff',
                    error: '#d11a1a',
                    'error-content': '#ffffff',
                    '--rounded-box': '0.5rem',
                    '--rounded-btn': '0.25rem',
                    '--border-btn': '1px',
                    '--tab-radius': '0.25rem'
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
