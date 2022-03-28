function isNumeric(numstr) {
    if (numstr.match(/^\d+$/)) {
      return true;
    } else {
      return false;
    }
  }
function validateFieldsNoEmpty(fields) {
  let arr= Object.entries(fields);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] === '') {
      return false;
    }
  }
  return true;
  }
let toExport={isNumeric,validateFieldsNoEmpty};
export default toExport