const { assert } = require('chai');
const Excel = require('exceljs');
const excelConfig = require('./excelconfig').config;

const workbook = new Excel.Workbook();
// const sheet = workbook.addWorksheet('SHOWS');


// Writing Excel File that contains 4 Shows
const sheetjs = require('xlsx');

function writeExcel(lastFourShows) {
  browser.pause(4000);
  sheetjs.writeFile(excelConfig(lastFourShows), './lib/shows.xlsx');
}


module.exports = { writeExcel };
