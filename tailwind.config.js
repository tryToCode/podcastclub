/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
    theme: {},
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'visited']
    },
    plugins: [
        require('@tailwindcss/custom-forms')
    ]
}