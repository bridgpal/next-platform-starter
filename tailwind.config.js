const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern':
                    "radial-gradient(70% 55% at 12% -5%, rgba(43,220,210,0.14) 0%, transparent 70%), linear-gradient(to bottom, rgba(250,250,249,0) 0%, rgba(250,250,249,0.92) 92%), linear-gradient(to right, rgba(1,105,104,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(1,105,104,0.06) 1px, transparent 1px)"
            },
            backgroundSize: {
                grid: 'auto, auto, 28px 28px, 28px 28px'
            },
            colors: {
                neutral: colors.neutral
            },
            fontFamily: {
                sans: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
                mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
            }
        }
    },
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#2bdcd2',
                    'primary-content': '#171717',
                    secondary: '#016968',
                    info: '#2bdcd2',
                    'info-content': '#171717',
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
