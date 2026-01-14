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
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                mono: ['Fira Code', ...defaultTheme.fontFamily.mono]
            }
        }
    },
    daisyui: {
        themes: [
            {
                bw: {
                    ...require('daisyui/src/theming/themes')['light'],
                    primary: '#000000',
                    'primary-content': '#ffffff',
                    secondary: '#000000',
                    'secondary-content': '#ffffff',
                    accent: '#000000',
                    'accent-content': '#ffffff',
                    neutral: '#ffffff',
                    'neutral-content': '#000000',
                    'base-100': '#ffffff',
                    'base-content': '#000000',
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
