/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
    theme: {
        extend: {
            spacing: {
                '128': '32rem',
            },
            backgroundColor: {
                'primary': '',
                'secondary': '#e3e3e3',
                'accent': '#ee6f57'
            }
        }
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
        textColor: ['responsive', 'hover', 'focus', 'active'],
        fontWeight: ['responsive', 'hover', 'focus', 'active']
    },
    plugins: [
        require('@tailwindcss/custom-forms')
    ]
}