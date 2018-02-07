const china = require("./china_zones.en.json");
const areas = require("./areas.json");
const trans = require("./trans");
const fs = require("fs");

/**
 *  "code": "110101",
    "name": "东城区",
    "cityCode": "1101",
    "provinceCode": "11"
 */
var cname, city, area;
areas.forEach((val, i) => {
  /*
  if (i <= 2000) {
    return;
  }
  */
  city = china[val["provinceCode"] + "0000"].subItems[val["cityCode"] + "00"];
  if (city) {
    if (city.subItems) {
      area = city.subItems[val["code"]];
      if (area) {
        cname = area.name;
        cname = cname.slice(0, cname.indexOf("/"));
      } else {
        cname = "area null";
      }
    } else {
      cname = "area null";
    }
  } else {
    cname = "city null";
  }
  if (cname == "city null" || cname == "area null") {
    console.log(val["name"], cname);
    cname = trans(val["name"]);
  }
  fs.appendFile(
    `./tempStr.txt`,
    `${val["code"]},"${val["name"]}",${val["cityCode"]},${
      val["provinceCode"]
    },"${cname}"\n`,
    err => {
      err && console.log("储存err：", err);
    }
  );
});
