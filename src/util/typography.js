import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  googleFonts: [
    { name: 'Alegreya', styles: ['500', '500i', '700', '700i'] },
    { name: 'Open Sans', styles: ['400', '400i'] }
  ],
  headerFontFamily: ['Alegraya'],
  bodyFontFamily: ['Open Sans', 'sans serif'],
  bodyWeight: '400',
});

export default typography;