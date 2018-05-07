const Excel = require('exceljs');
const excelConfig = require('./helperFunctions/excelconfig').config;

const workbook = new Excel.Workbook();
const sheet = workbook.addWorksheet('SHOWS');

const sheetjs = require('xlsx');


// Writing Excel File that contains 4 Shows
function writeExcel(lastFourShows) {
  sheetjs.writeFile(excelConfig(lastFourShows), './lib/FoxShows.xlsx');
}


// Updates an Excel File after each type of shows
function updateExcel(index, type) {
  const readExcel = workbook.xlsx.readFile('/Users/msargsyan/testProject/lib/FoxShows.xlsx');
  type === 'FX' ? type = 'B' : type === 'NG' ? type = 'C' : type === 'FS' ? type = 'D' : type = 'E';
  readExcel.then(() => {
    const rows = [1, 2, 3, 4];
    const worksheet = workbook.getWorksheet(1);
    rows.forEach((name, i) => {
      worksheet.getCell(`${type}${name + 1}`).value = 'Not dublicated';
    });
    index.forEach((name) => {
      console.log(name);
      worksheet.getCell(`${type}${name + 1}`).value = 'Dublicated';
    });
    return workbook.xlsx.writeFile('/Users/msargsyan/testProject/lib/FoxShows.xlsx');
  })
    .catch(err => console.log(err));
}

function write(lastFourShows) {
  sheetjs.write(excelConfig(lastFourShows), './lib/Test.xlsx');
}

// ////////////////////////////////
function verifyIfShowsAreDublicate(shows, type) {
  const workbook1 = sheetjs.readFile('/Users/msargsyan/testProject/lib/FoxShows.xlsx');
  const firstSheetName = workbook1.SheetNames[0];
  const worksheet = workbook1.Sheets[firstSheetName];
  const text = sheetjs.utils.sheet_to_row_object_array(worksheet);
  const index = [];
  const result = text.map(a => a.SHOWS);
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < shows.length; j++) {
      if (shows[j] == result[i]) {
        console.log(`${result[i]}${result.indexOf(result[i]) + 1}`);
        index.push(result.indexOf(result[i]) + 1);
      }
    }
  }
  updateExcel(index, type);
}

write(['ffff', 'sdf', 'sdfsdf', 'sdfdsf', 'mher']);
