module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#F0F5F9',
        baseDark: '#151515',
        letraDark: '#E2E8F0',
        letra: '#1E2022',
        fondos: '#52616B',
        bordes: '#C9D6DF'
      },
      gridTemplateRows: {
        layout: '50px 1fr auto'
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
