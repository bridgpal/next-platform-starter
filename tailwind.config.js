const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': "linear-gradient(135deg, theme('colors.orange.50 / 92%'), theme('colors.white / 96%') 46%, theme('colors.orange.100 / 92%')), url('/images/noise.png')"
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
                    primary: '#f97316',
                    'primary-content': '#ffffff',
                    secondary: '#c2410c',
                    'secondary-content': '#ffffff',
                    accent: '#fb923c',
                    'accent-content': '#431407',
                    info: '#ffedd5',
                    'info-content': '#7c2d12',
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
