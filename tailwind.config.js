module.exports = {
  important: true,
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    screens: {
      'min-sm': '641px',
      // => @media (min-width: 640px) { ... }

      'min-md': '769px',
      // => @media (min-width: 768px) { ... }

      'min-lg': '1025px',
      // => @media (min-width: 1024px) { ... }

      'min-xl': '1281px',
      // => @media (min-width: 1280px) { ... }

      'min-2xl': '1537px',
      // => @media (min-width: 1536px) { ... }
      '2xl': { 'max': '1536px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1280px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1024px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '768px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    themes: [
      {
        'mytheme': {
          'primary': '#0049db',
          'primary-focus': '#003399',
          'primary-content': '#ffffff',
          'secondary': '#f000b8',
          'secondary-focus': '#bd0091',
          'secondary-content': '#ffffff',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  },
  corePlugins: {
    preflight: false,
  }
};
