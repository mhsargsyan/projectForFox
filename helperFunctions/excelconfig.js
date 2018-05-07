module.exports = {
  config(text) {
    return {
      SheetNames: ['SHOWS'],
      Sheets: {
        SHOWS:
      { '!ref': 'A1:E5',
        A1: { t: 's', v: 'FOXSHOWS' },
        B1: { t: 's', v: 'FX SHOWS' },
        C1: { t: 's', v: 'NATIONAL GEOGRAPHIC' },
        D1: { t: 's', v: 'FX SPORTS' },
        E1: { t: 's', v: 'ALL SHOWS' },
        A2: { t: 's', v: text[0] },
        A3: { t: 's', v: text[1] },
        A4: { t: 's', v: text[2] },
        A5: { t: 's', v: text[3] },
      } },
    };
  } };
