
const sheetjs = require('xlsx')
;

const workbook1 = sheetjs.readFile('./lib/shows.xlsx');
const firstSheetName = workbook1.SheetNames[0];
const worksheet = workbook1.Sheets[firstSheetName];

console.log(workbook1);
