const china = require("./china_zones.en.json");
const cities = require("./cities.json");
var cname, city;

cities.forEach(val => {
  city = china[val["provinceCode"] + "0000"].subItems[val["code"] + "00"];
  if (city) {
    cname = city.name;
    cname = cname.slice(0, cname.indexOf("/"));
  } else {
    cname = "null";
  }
  console.log(
    `${val["code"]},"${val["name"]}",${val["provinceCode"]},"${cname}"`
  );
});
/*
for (var i in china) {
  items = china[i].subItems;
  for (var j in items) {
    var index = items[j].name.indexOf("/");
    console.log(`
      ${j.slice(0, 4)},"${items[j].name.slice(index + 1)}",${i.slice(
      0,
      2
    )},"${items[j].name.slice(0, index)}"`);
  }
}
*/
