const { chai } = require('chai');
const xlsx = require('xlsx');
const Excel = require('exceljs');

const workbook2 = new Excel.Workbook();
const captureNames = [1, 2, 3, 4];
const readExcel = workbook2.xlsx.readFile('/Users/msargsyan/testProject/lib/FoxShows.xlsx');


function updateExcel(index, type) {
  type === 'FX' ? type = 'B' : type === 'NG' ? type = 'C' : type === 'FS' ? type = 'D' : 'E';
  const place = [1,2,3,4]
  if (index <= 0) {
    readExcel.then(() => {
      const worksheet = workbook2.getWorksheet(1);
      captureNames.forEach((name, i) => {
        worksheet.getCell(`${type}${2 + i}`).value = name;
      });
      return workbook2.xlsx.writeFile('/Users/msargsyan/testProject/lib/FoxShows.xlsx');
    })
      .catch(err => console.log(err));
    console.log(type);
  } else if (index != 0) {
    const place = [1,2,3,4]
    for (let i = 1; i <= index.length; i++) {
      console.log('hello');
      const place = array.indexOf(index[i]);
      array.splice(place, 1);
    }
    readExcel.then(() => {
      const worksheet = workbook2.getWorksheet(1);
      index.forEach((name, i) => {
        worksheet.getCell(`${type}${2 + i}`).value = 'Dublicated';
      });
      return workbook2.xlsx.writeFile('/Users/msargsyan/testProject/lib/FoxShows.xlsx');
    })
      .catch(err => console.log(err));
  }
  else if (place)
}


// updateExcel(0,'');

// const workbook = xlsx.readFile('/Users/msargsyan/testProject/lib/FoxShows.xlsx');
// const firstSheetName = workbook.SheetNames[0];
// const worksheet = workbook.Sheets[firstSheetName];
// const text = xlsx.utils.sheet_to_row_object_array(worksheet);
// const index = [];
// const shows = ['Hypnotize Me'];
// const result = text.map(a => a.SHOWS);
// for (let i = 0; i < result.length; i++) {
//   for (let j = 0; j < shows.length; j++) {
//     if (shows[j] == result[i]) {
//       index.push(result.indexOf(result[i]) + 1);
//     }
//   }
// }
const index = [1, 2, 3, 4, 5];
updateExcel(index, 'NG');
// console.log(index <= 0);

