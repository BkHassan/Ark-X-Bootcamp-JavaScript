function bigNum(number) {
  let result = 0;
  let NumberArr = number.toString();
  for (i = 0; i < NumberArr.length; i++) {
    result += parseInt(NumberArr[i]) ** NumberArr.length;
  }
  if (result === number) {
    return true;
  } else {
    return false;
  }
}
console.log(bigNum(153));
