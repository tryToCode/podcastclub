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
                        borderColor: defaultTheme.colors.red[500],
                        borderWidth: defaultTheme.borderWidth[2]
                    }
                },
                select: {
                    paddingTop: defaultTheme.spacing[1],
                    paddingBottom: defaultTheme.spacing[1],
                    '&:focus': {
                        outline: 'none',
                        boxShadow: undefined,
                        borderColor: defaultTheme.colors.red[500],
                        borderWidth: defaultTheme.borderWidth[2]
                    }
                }
            },
        })
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
        textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        fontWeight: ['responsive', 'hover', 'focus', 'active'],
        borderWidth: ['responsive', 'last', 'hover', 'focus']
    },
    plugins: [
        require('@tailwindcss/custom-forms')
    ]
}