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
                '9': '2.125rem',
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
                '6': '6px'
            },
            margin: {
                '34': '8.625rem'
            }
        },
    },

    plugins: [forms],
};
