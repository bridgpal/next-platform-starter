const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': "linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('/images/noise.png')"
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
                    primary: '#DC2626',
                    'primary-content': '#FFFFFF',
                    secondary: '#C0C0C0',
                    'secondary-content': '#1F1F1F',
                    accent: '#B91C1C',
                    'accent-content': '#FFFFFF',
                    info: '#A3A3A3',
                    'info-content': '#1F1F1F',
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
