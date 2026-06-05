/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#00FF87',
        'accent-dark': '#00CC6F',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Bricolage Grotesque"', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray.700'),
            '--tw-prose-headings': theme('colors.black'),
            '--tw-prose-lead': theme('colors.gray.600'),
            '--tw-prose-links': theme('colors.accent-dark'),
            '--tw-prose-bold': theme('colors.black'),
            '--tw-prose-counters': theme('colors.accent-dark'),
            '--tw-prose-bullets': theme('colors.accent'),
            '--tw-prose-hr': theme('colors.gray.200'),
            '--tw-prose-quotes': theme('colors.gray.900'),
            '--tw-prose-quote-borders': theme('colors.accent'),
            '--tw-prose-captions': theme('colors.gray.500'),
            '--tw-prose-code': theme('colors.gray.900'),
            '--tw-prose-pre-code': theme('colors.gray.100'),
            '--tw-prose-pre-bg': theme('colors.gray.900'),
            '--tw-prose-th-borders': theme('colors.gray.300'),
            '--tw-prose-td-borders': theme('colors.gray.200'),
            // Headings get the brand display font
            'h1, h2, h3, h4': {
              fontFamily: '"Bricolage Grotesque", sans-serif',
              fontWeight: '700',
              letterSpacing: '-0.01em',
            },
            h2: {
              marginTop: '2.5em',
              marginBottom: '0.75em',
              paddingBottom: '0.4em',
              borderBottom: `2px solid ${theme('colors.gray.100')}`,
            },
            h3: {
              marginTop: '1.75em',
              marginBottom: '0.5em',
            },
            // Tighter intro paragraphs
            'h2 + p, h3 + p': {
              marginTop: '0.5em',
            },
            // Make strong stand out a touch more
            strong: {
              fontWeight: '600',
            },
            // Pretty links: brand colour, underline only on hover
            a: {
              fontWeight: '600',
              textDecoration: 'none',
              borderBottom: `2px solid ${theme('colors.accent')}`,
              transition: 'background-color 150ms',
              '&:hover': {
                backgroundColor: `${theme('colors.accent')}33`, // 20% alpha
              },
            },
            // Lists with more breathing room
            'ul > li': {
              paddingLeft: '0.4em',
            },
            'ul > li::marker': {
              color: theme('colors.accent-dark'),
            },
            'ol > li::marker': {
              color: theme('colors.accent-dark'),
              fontWeight: '600',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
