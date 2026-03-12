const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                neutral: colors.neutral,
                cream: '#FFFDF5',
                accent: '#FF5C00',
                highlight: '#FFE962',
                brutal: {
                    pink: '#FF90E8',
                    blue: '#90B8F8',
                    green: '#7CFF6B',
                    purple: '#BF94FF',
                }
            },
            fontFamily: {
                serif: ['"DM Serif Display"', ...defaultTheme.fontFamily.serif],
                body: ['"Source Serif 4"', ...defaultTheme.fontFamily.serif],
            },
            boxShadow: {
                'brutal': '4px 4px 0px 0px #000000',
                'brutal-lg': '6px 6px 0px 0px #000000',
                'brutal-sm': '2px 2px 0px 0px #000000',
            },
            borderWidth: {
                '3': '3px',
            }
        }
    },
    daisyui: {
        themes: [
            {
                brutalist: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#FF5C00',
                    'primary-content': '#000000',
                    secondary: '#FFE962',
                    'secondary-content': '#000000',
                    accent: '#FF90E8',
                    'accent-content': '#000000',
                    neutral: '#000000',
                    'neutral-content': '#FFFDF5',
                    'base-100': '#FFFDF5',
                    'base-200': '#F5F0E8',
                    'base-300': '#E8E0D0',
                    info: '#90B8F8',
                    'info-content': '#000000',
                    success: '#7CFF6B',
                    'success-content': '#000000',
                    warning: '#FFE962',
                    'warning-content': '#000000',
                    error: '#FF5C00',
                    'error-content': '#000000',
                    '--rounded-box': '0',
                    '--rounded-btn': '0',
                    '--rounded-badge': '0',
                    '--tab-radius': '0',
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
