// // Organise duplicate numbers in list
// function group(arr) {
//   let result = [];
//   let duplicated = {};
//   for (i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (duplicated[num]) {
//       duplicated[num].push(num);
//     } else {
//       duplicated[num] = [num];
//       result.push(duplicated[num]);
//     }
//   }
//   return result;
// }

// console.log(group([3, 2, 6, 2, 1, 3]));

// Employee Data Processor
const XLSX = require("xlsx");
const read = XLSX.readFile("D:/Documents/employee_data_.xlsx");
// console.log(read);
let sheetName = read.SheetNames[0];
let sheetValue = read.Sheets[sheetName];
// console.log(sheetValue);

let data = XLSX.utils.sheet_to_json(sheetValue);
// console.log(data);
let employeeArr = [];
let update = [];
for (i = 0; i < data.length; i++) {
  //   console.log(employee);
  
  let employee = data[i];
  let bonusAmount = 0;
  let bonusPercentage = 0;
  if (employee.AnnualSalary <= 50000) {
    bonusPercentage = 5;
    bonusAmount = (employee.AnnualSalary * bonusPercentage) / 100;
  } else if (employee.AnnualSalary > 50000 && employee.AnnualSalary < 100000) {
    bonusPercentage = 7;
    bonusAmount = (employee.AnnualSalary * bonusPercentage) / 100;
  } else {
    bonusPercentage = 10;
    bonusAmount = (employee.AnnualSalary * bonusPercentage) / 100;
  }
  let update = {
    ...employee,
    BonusPercentage: bonusPercentage,
    BonusAmount: bonusAmount,
  };
  //   console.log("updated users : ",update);
  employeeArr.push(update);
  // console.log(employeeArr);
}
let wb = XLSX.utils.book_new();
let newWS = XLSX.utils.json_to_sheet(employeeArr);
XLSX.utils.book_append_sheet(wb, newWS, "data");
XLSX.writeFile(wb,"data.xlsx");


