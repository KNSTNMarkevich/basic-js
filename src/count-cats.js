const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  var count = 0;
  for (let i = 0; i<matrix.length; i++){
    for(let j = 0; j<matrix[i].length; j++){
      if (matrix[i][j] === '^^'){
            count++
      }
    } 
  }
  return matrix !==0 ? count : 0; 
};
