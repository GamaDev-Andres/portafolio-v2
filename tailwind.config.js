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
        layout: '1fr auto'
      },

      gridTemplateColumns: {
        layoutCards: 'repeat(auto-fit,minmax(300px,1fr))'
      },
      screens: {
        ssm: '430px'
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
