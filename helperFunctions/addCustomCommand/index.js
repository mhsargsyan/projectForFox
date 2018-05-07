module.exports = () => {
  browser.addCommand('waitAndClick', (selector) => {
    browser.waitUntil(
      () => {
        const state = browser.execute(() => document.readyState);
        return state.value === 'complete';
      },
      100000,
      'Oops, time out!',
      500,
    );
    browser.pause(2000);
    browser.click(selector);
  });
  browser.addCommand('customGetTexts', selector => $$(selector).map(el => el.getText()));
  browser.addCommand('waitAndScroll', (x, y) => {
    browser.waitUntil(
      () => {
        const state = browser.execute(() => document.readyState);
        return state.value === 'complete';
      },
      100000,
      'Oops, time out!',
      500,
    );
    browser.pause(2000);

    browser.execute((u, i) => {
      window.scrollTo(u, i);
    }, x, y,
    );
    browser.pause(3000);
  });
};
