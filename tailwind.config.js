const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': "url('/images/grid-bg.svg')"
            },
            colors: {
                neutral: colors.neutral
            },
            fontFamily: {
                sans: ['"Comic Sans MS"', 'Comic Sans', 'cursive', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    daisyui: {
        themes: [
            {
                geocities: {
                    primary: '#ff00ff',
                    'primary-content': '#000000',
                    secondary: '#00ffff',
                    'secondary-content': '#000000',
                    accent: '#ffff00',
                    'accent-content': '#000000',
                    neutral: '#000000',
                    'neutral-content': '#ffffff',
                    'base-100': '#000000',
                    'base-content': '#ffffff'
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
