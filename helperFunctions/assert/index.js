const { chai } = require('chai');
const xlsx = require('xlsx');
const Excel = require('exceljs');

const workbook = new Excel.Workbook();
// const sheet = workbook.addWorksheet('SHOWS');
// const { updateExcel } = require('../excelWriting');


function updateExcel(index, type) {
  const readExcel = workbook.xlsx.readFile('./lib/shows.xlsx');
  // type === 'FX' ? type = 'B' : type === 'NG' ? type = 'C' : type === 'FS' ? type = 'D' : type = 'E';
  readExcel.then(() => {
    const rows = [1, 2, 3, 4];
    const worksheet = workbook.getWorksheet(1);
    rows.forEach((name, i) => {
      worksheet.getCell(`${type}${name + 1}`).value = 'Not dublicated';
    });
    if (index != 0) {
      index.forEach((name) => {
        console.log(name);
        worksheet.getCell(`${type}${name + 1}`).value = 'Dublicated';
      });
    }
    return workbook.csv.writeFile('./excelFile/FoxShows.csv');
  })
    .catch(err => console.log(err));
}


module.exports = {

  verifyIfShowsAreDublicate(shows, type) {
    const workbook1 = xlsx.readFile('./lib/shows.xlsx');
    const firstSheetName = workbook1.SheetNames[0];
    const worksheet1 = workbook1.Sheets[firstSheetName];
    const text = xlsx.utils.sheet_to_row_object_array(worksheet1);

    const index = [];
    const result = text.map(a => a.FOXSHOWS);

    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < shows.length; j++) {
        if (shows[j] == result[i]) {
          console.log(result[i]);
          index.push(result.indexOf(result[i]) + 1);
        }
      }
    }

    updateExcel(index, type);
  } };

