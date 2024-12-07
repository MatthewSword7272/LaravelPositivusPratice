import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'lightGreen': '#B9FF66',
                'black': '#191A23',
                'gray': '#F3F3F3',
            },
            fontSize: {
                'h1': ['3.75rem', 'normal'],
                'h2': ['2.5rem', 'normal'],
                'h3': ['1.875rem', '2.375rem'],
                'h4': ['1.25rem', '1.75rem'],
                'p': ['1.125rem', 'normal'],
                'h1-mobile': ['2.6875rem', 'normal'],
                'h2-mobile': ['2.25rem', 'normal'],
                'h3-mobile': ['1.625rem', 'normal'],
                'h4-mobile': ['1.125rem', 'normal'],
                'p-mobile': ['1rem', 'normal'],
            },
            padding: {
                '5.5': '1.125rem',
                '2.5': '0.625rem',
                '7.5': '1.875rem',
                '9': '2.125rem',
                '10.5': '2.625rem',
                '13': '3.125rem',
                '15': '3.75rem',
                '18': '4.375rem',
                '25': '6.25rem',
                '3.25rem': '3.75rem'
            },
            borderRadius: {
                '4xl': '2.8125rem',
                '5xl': '3rem'
            },
            borderWidth: {
                '6': '0.375rem'
            },
            margin: {
                '15': '3.125rem',
                '34': '8.625rem'
            },
            backgroundImage: {
                checkedRadioButton: 'url("images/checkedDot.svg")'
            },
            gap: {
                '15': '3.75rem'
            },
            height: {
                '75': '19.375rem'
            },
            keyframes: {
                slide1: {
                    '0%': {
                        transform: 'translateX(2rem)',
                    },

                    '40%, 50%': {
                        transform: 'translateX(calc(-10rem))',
                    },

                    '90%, 100%': {
                        transform: 'translateX(2rem)',
                    },
                },
                slide2: {
                    '0%': {
                        transform: 'translateX(-2rem)',
                    },

                    '40%, 50%': {
                        transform: 'translateX(calc(10rem))',
                    },

                    '90%, 100%': {
                        transform: 'translateX(-2rem)',
                    },
                },
            },
            animation: {
                slide1: 'slide1 15s linear infinite',
                slide2: 'slide2 15s linear infinite',
            },
        },
    },

    plugins: [forms],
};
