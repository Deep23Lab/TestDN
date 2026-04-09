import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 120px rgba(255, 199, 102, 0.15)',
      },
      colors: {
        midnight: '#07070d',
        ember: '#6d0618',
        violetink: '#2f0f2f',
        sand: '#e3d8c2',
        goldsoft: '#f3c987',
      },
      backgroundImage: {
        dusk: 'radial-gradient(circle at top, rgba(243, 201, 135, 0.12), transparent 35%), linear-gradient(180deg, #07070d 0%, #190817 45%, #281b3a 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
