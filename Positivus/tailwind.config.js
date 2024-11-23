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
            color: {
                'lightGreen': '#B9FF66',
                'black': '#191A23',
                'grey' : '#F3F3F3',
            }
        },
    },

    plugins: [forms],
};
