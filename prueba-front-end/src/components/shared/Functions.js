function isNumeric(numstr) {
    if (numstr.match(/^\d+$/)) {
      return true;
    } else {
      return false;
    }
  }
let toExport={isNumeric}
export default toExport