module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#F0F5F9',
        gris: '#2c2c2c',
        baseDark: '#151515',
        letraDark: '#E2E8F0',
        letra: '#1E2022',
        fondos: '#52616B',
        bordes: '#C9D6DF',
        fondoModal: '#00000050'
      },
      gridTemplateRows: {
        layout: '1fr auto',
        layoutImgs: '200px'
      },

      gridTemplateColumns: {
        layoutCards: 'repeat(auto-fit,minmax(300px,1fr))',
        layoutImgs: 'repeat(auto-fit,minmax(200px,1fr))'
      },
      screens: {
        ssm: '430px'
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
