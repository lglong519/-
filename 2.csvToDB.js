const readline = require("readline");
const fs = require("fs");
const _ = require("lodash");


//zones data
const Province = fs.createReadStream("./data/provinces.en.csv");

const City = fs.createReadStream("./data/cities.en.csv");
const District = fs.createReadStream("./data/areas.en.csv");
const Street = fs.createReadStream("./data/streets.en.csv");

const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/test");
mongoose.connect("mongodb://localhost:27017/debug_db");

const db = mongoose.connection;
db.on("open", function(data) {
  console.log("数据库连接成功");
});

// import models
const models = require( './models');
Object.keys(models).forEach(item=>global[item]=models[item]);


var readProvince = readline.createInterface({
  input: Province
});
var readCity = readline.createInterface({
  input: City
});
var readDistrict = readline.createInterface({
  input: District
});
var readStreet = readline.createInterface({
  input: Street
});



readProvince.on("line", line => {
  if (/en$/.test(line)) {
    return;
  }
  var items = line.replace(/"/g, "").split(",");
  ProvinceModel.create(
    {
      provinceId: _.padEnd(items[0],6,'0'),
      name: {
        en: items[2],
        zh: items[1]
      }
    },
    (err, doc) => {
      if (err) {
        console.log("ProvinceModel.create err", err);
      } else {
        // console.log(2, doc);
      }
    }
  );
});

readProvince.on("close", () => {
  console.log("readProvince close...");
});

//city
readCity.on("line", line => {
  if (/en$/.test(line)) {
    return;
  }
  var items = line.replace(/"/g, "").split(",");
  CityModel.create(
    {
      provinceId: _.padEnd(items[2],6,'0'),
      cityId: _.padEnd(items[0],6,'0'),
      name: {
        en: items[3],
        zh: items[1]
      }
    },
    (err, doc) => {
      if (err) {
        console.log("CityModel.create err", err);
      } else {
        // console.log(2, doc);
      }
    }
  );
});

readCity.on("close", () => {
  console.log("readCity close...");
});

//readDistrict
readDistrict.on("line", line => {
  if (/en$/.test(line)) {
    return;
  }
  var items = line.replace(/"/g, "").split(",");
  DistrictModel.create(
    {
      provinceId: _.padEnd(items[3],6,'0'),
      cityId: _.padEnd(items[2],6,'0'),
      districtId: items[0],
      name: {
        en: items[4],
        zh: items[1]
      }
    },
    (err, doc) => {
      if (err) {
        console.log("DistrictModel.create err", err);
      } else {
        // console.log(2, doc);
      }
    }
  );
});

readDistrict.on("close", () => {
  console.log("readDistrict close...");
});

//readStreet
readStreet.on("line", line => {
  if (/en$/.test(line)) {
    return;
  }
  var items = line.replace(/"/g, "").split(",");
  StreetModel.create(
    {
      provinceId: _.padEnd(items[3],6,'0'),
      cityId: _.padEnd(items[4],6,'0'),
      districtId: items[2],
      streetId: items[0],
      name: {
        en: items[items.length - 1],
        zh: items[1]
      }
    },
    (err, doc) => {
      if (err) {
        console.log("StreetModel.create err", err);
      } else {
        // console.log(2, doc);
      }
    }
  );
});

readStreet.on("close", () => {
  console.log("readStreet close...");
});

