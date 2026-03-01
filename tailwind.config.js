const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#c2847a',
          light: '#d4a59e',
          dark: '#a66b62',
        },
        'dark-bg': '#0c0a09',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.stone.700'),
            a: {
              color: theme('colors.stone.900'),
              textDecoration: 'underline',
              textDecorationColor: theme('colors.stone.300'),
              textUnderlineOffset: '3px',
              '&:hover': {
                textDecorationColor: theme('colors.stone.500')
              },
              code: { color: theme('colors.stone.800') }
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            },
            thead: {
              borderBottomColor: theme('colors.stone.200')
            },
            code: { color: theme('colors.stone.800') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        },
        dark: {
          css: {
            color: theme('colors.stone.300'),
            a: {
              color: theme('colors.stone.100'),
              textDecorationColor: theme('colors.stone.600'),
              '&:hover': {
                textDecorationColor: theme('colors.stone.400')
              },
              code: { color: theme('colors.stone.200') }
            },
            blockquote: {
              borderLeftColor: theme('colors.stone.700'),
              color: theme('colors.stone.400')
            },
            'h2,h3,h4': {
              color: theme('colors.stone.100'),
              'scroll-margin-top': spacing[32]
            },
            hr: { borderColor: theme('colors.stone.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.stone.500') }
              }
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.stone.500') }
              }
            },
            strong: { color: theme('colors.stone.100') },
            thead: {
              th: {
                color: theme('colors.stone.100')
              },
              borderBottomColor: theme('colors.stone.600')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.stone.700')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
