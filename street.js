const trans = require("./trans");
const fs = require("fs");
const streets = require("./streets.json");
const strs = require("./strs.json");
/*
console.log(trans("东莞街道"));
console.log(trans("省"));
console.log(trans("市"));
console.log(trans("区"));
console.log(trans("镇"));
console.log(trans("西藏"));
*/
// code,name,areaCode,provinceCode,cityCode,en
//[110101001,"东华门街道",110101,11,1101]
strs.forEach((val, i) => {
  if (i > 100) {
    //return;
  }
  if (/公司/.test(val[1])) {
    console.log(val[1]);
    return;
  }
  var cname = trans(val[1]);

  fs.appendFile(
    `./tempStr.txt`,
    `${val[0]},"${val[1]}",${val[2]},${val[3]},${val[4]},"${cname}"\n`,
    err => {
      err && console.log("储存err：", err);
    }
  );
});

/**
 * console.log(
    `${val["code"]},"${val["name"]}",${val["areaCode"]},${
      val["provinceCode"]
    },${val["cityCode"]},"${cname}"\n`
  );
 */
