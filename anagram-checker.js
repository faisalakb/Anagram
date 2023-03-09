module.exports = function (str1, str2) {
  let regStr1 = str1.toLowerCase().replace(/[^a-z]/g, "");
  let regStr2 = str2.toLowerCase().replace(/[^a-z]/g, "");

  if (regStr1.length != regStr2.length) {
    return false;
  }

  let sortedStr1 = regStr1.split("").sort();
  let sortedStr2 = regStr2.split("").sort();

  for (let i = 0; i < sortedStr2.length; i++) {
    if (sortedStr1[i] !== sortedStr2[i]) {
      return false;
    }
  }

  return true;
}