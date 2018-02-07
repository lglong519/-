const transliteration = require("transliteration");

let dist = {
  省: "Province",
  市: "City",
  区: "District",
  街道: "Street",
  县: "County",
  镇: "Town"
};
let noTran = {
  莞: "Guan",
  藏: "Zang",
  自治县: "Autonomous County"
};
function translate(param) {
  var str = param || "";
  var reg = "";
  for (let k in noTran) {
    reg += k;
  }
  //多音字转换
  reg = RegExp("[" + reg + "]", "g");
  str = str.replace(reg, i => {
    return noTran[i];
  });

  // var result = str.match(/[省市区县镇]$|街道$/);
  var result = str.match(/[省市区县]$/);
  if (result) {
    return (
      transliteration.transliterate(str.slice(0, -result[0].length)) +
      " " +
      dist[result[0]]
    );
  }
  return transliteration.transliterate(str);
}

module.exports = translate;
