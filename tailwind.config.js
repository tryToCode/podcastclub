/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/resolveConfig')(require('tailwindcss/defaultConfig')).theme
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
    theme: {
        customForms: theme => ({
            default: {
                input: {
                    '&:focus': {
                        outline: 'none',
                        boxShadow: undefined,
                        borderColor: undefined,
                    }
                },
                select: {
                    paddingTop: defaultTheme.spacing[1],
                    paddingBottom: defaultTheme.spacing[1],
                    '&:focus': {
                        outline: 'none',
                        boxShadow: undefined,
                        borderColor: undefined,
                    }
                }
            },
        })
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