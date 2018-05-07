const { generateEmail } = require('../helperFunctions/emailGenerator');
const excel = require('../helperFunctions/excelWriting');
const { verifyIfShowsAreDublicate } = require('../helperFunctions/assert');
const custom = require('../helperFunctions/addCustomCommand/custom');
// const add = require('../test').verifyIfShowsAreDublicate

class Fox {
  open() {
    browser.url('/');
  }

  // Creating an account

  signUp() {
    const homepage = browser.getUrl();
    browser.url(`${homepage}account`);
    browser.click('.Account_perksButtonContainer_3CaSA button');
    browser.setValue('input[name="signupFirstName"]', 'Testing');
    browser.setValue('.Account_signupColumnSplit_YtgPc input[name="signupLastName"]', 'Test');
    browser.setValue('.Account_signupColumn_7njw4 input[name="signupEmail"]', generateEmail());
    browser.setValue('div[class="Account_signupInline_3VnsN"] input[name="signupPassword"]', 'password');
    browser.setValue('.Account_signupColumnSplit_YtgPc input[placeholder="Birthdate"]', '12/12/1992');
    browser.click('a=Gender');
    browser.click('div=Male');
    browser.waitAndClick('.Account_signupButton_3ZxXE button');
    browser.pause(4000);
    while (browser.isExisting('.Account_signupErrorGenericText_3IZmW')) {
      browser.setValue('.Account_signupColumn_7njw4 input[name="signupEmail"]', generateEmail());
      browser.click('.Account_signupButton_3ZxXE button');
      browser.pause(3000);
    }
    browser.waitAndClick('.Account_signupSuccessButton_1mM7y button');
  }

  // Getting FOX SHOWS and saves in excel

  getFoxShows() {
    browser.waitAndClick('a[href="/shows/"]');
    browser.waitAndScroll(0, 3000);
    // const lastFourShows = custom.getText('.Tile_tile_3qaLc:nth-last-child(-n+4)');
    browser.call(() => custom.getText('.Tile_tile_3qaLc:nth-last-child(-n+4)')
      .then((data) => { excel.writeExcel(data); }).catch(err => console.log(err)));
  }

  // Getting FX shows and compares with FOX SHOWS


  getFxShows() {
    const url = browser.getUrl();
    browser.url(`${url}collection/fx`);
    browser.waitAndScroll(0, 1000);
    browser.pause(2000);
    browser.call(() => custom.getText('.Tile_tile_3qaLc').then((data) => { verifyIfShowsAreDublicate(data, 'B'); },
    ).catch(err => console.log(err)));
  }

  // Getting National Geographic shows and compares with FOX SHOWS

  getNGShows() {
    browser.url('https://www.fox.com/shows/collection/national%20geographic');
    browser.waitAndScroll(0, 1000);
    browser.scroll(0, 1500);
    browser.scroll(0, 2500);
    browser.scroll(0, 4000);
    browser.pause(2000);
    browser.call(() => custom.getText('.Tile_tile_3qaLc').then((data) => { verifyIfShowsAreDublicate(data, 'C'); },
    ).catch(err => console.log(err)));
  }

  // Getting FoxSports shows and compares with FOX SHOWS


  getFoxSportsShows() {
    browser.url('https://www.fox.com/shows/collection/fox%20sports/');
    browser.waitAndScroll(0, 1000);
    return browser.call(() => custom.getText('.Tile_tile_3qaLc').then(data => verifyIfShowsAreDublicate(data, 'D')));
  }

  // Getting All SHOWS shows and compares with FOX SHOWS

  getAllShows() {
    browser.url('https://www.fox.com/shows/collection/all%20shows/');
    browser.waitAndScroll(0, 2000);
    browser.scroll(0, 3000);
    browser.scroll(0, 4000);
    browser.scroll(0, 7000);
    browser.scroll(0, 9000);
    browser.pause(4000);
    return browser.call(() => custom.getText('.Tile_tile_3qaLc').then(data => verifyIfShowsAreDublicate(data, 'E')));
  }
}

module.exports = new Fox();
