/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                primary: '#fda4af',
                secondary: '#fb7185',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
        },
        screens: {
            xs: '480px',
            ss: '620px',
            sm: '768px',
            md: '1060px',
            lg: '1200px',
            xl: '1700px',
        },
    },
    plugins: [],
}
