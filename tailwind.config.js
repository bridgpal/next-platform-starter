const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': "linear-gradient(to bottom, theme('colors.red.950 / 0%'), theme('colors.orange.900 / 100%')), url('/images/noise.png')"
            },
            colors: {
                neutral: colors.neutral
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#fb923c',
                    'primary-content': '#3b0d0d',
                    secondary: '#ef4444',
                    'secondary-content': '#3b0d0d',
                    info: '#f97316',
                    'info-content': '#3b0d0d',
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
