const fox = require('../pages/fox.page.js');
const { assert } = require('chai');

describe('Sample test', () => {
  it('Can open a page and sign up', () => {
    fox.open();
    fox.signUp();
  });

  it('Verify if Fox has dublicate shows in Fx ', () => {
    fox.getFoxShows();
    fox.getFxShows();
  });
  it('Verify if Fox has dublicate shows in National Geographic ', () => {
    fox.getNGShows();
  });
  it('Verify if Fox has dublicate shows in Fox Sport ', () => {
    fox.getFoxSportsShows();
  });
  it('Verify if Fox has dublicate shows in AllShows ', () => {
    fox.getAllShows();
  });
});

