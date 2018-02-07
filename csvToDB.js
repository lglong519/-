const readline = require("readline");
const fs = require("fs");

//zones data
const Province = fs.createReadStream("./data/provinces.en.csv");
/*
const City = fs.createReadStream("./data/cities.en.csv");
const District = fs.createReadStream("./data/areas.en.csv");
const Street = fs.createReadStream("./data/streets.en.csv");
*/

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test");
const db = mongoose.connection;
db.on("open", function(data) {
  console.log("数据库连接成功");
});

const Schema = mongoose.Schema;

const ProvinceSchema = new Schema({
  provinceId: {
    type: String,
    unique: true
  },
  name: {
    en: String,
    zh: String
  }
});
var ProvinceModel = mongoose.model("Province", ProvinceSchema, "Province");

const CitySchema = new Schema({
  provinceId: {
    type: String
  },
  cityId: {
    type: String,
    unique: true
  },
  name: {
    en: String,
    zh: String
  }
});
var CityModel = mongoose.model("City", CitySchema, "City");

const DistrictSchema = new Schema({
  provinceId: {
    type: String
  },
  cityId: {
    type: String
  },
  districtId: {
    type: String,
    unique: true
  },
  name: {
    en: String,
    zh: String
  }
});
var DistrictModel = mongoose.model("District", DistrictSchema, "District");

const StreetSchema = new Schema({
  provinceId: {
    type: String
  },
  cityId: {
    type: String
  },
  districtId: {
    type: String
  },
  streetId: {
    type: String,
    unique: true
  },
  name: {
    en: String,
    zh: String
  }
});
var StreetModel = mongoose.model("Street", StreetSchema, "Street");

var readProvince = readline.createInterface({
  input: Province
});
var readCity = readline.createInterface({
  input: Citys
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
      provinceId: items[0],
      name: {
        en: items[2],
        zh: items[1]
      }
    },
    (err, doc) => {
      if (err) {
        console.log("Model.create err", err);
      } else {
        // console.log(2, doc);
      }
    }
  );
});

readProvince.on("close", () => {
  console.log("readline close...");
});

//city
readCity.on("line", line => {
  if (/en$/.test(line)) {
    return;
  }
  var items = line.replace(/"/g, "").split(",");
  ProvinceModel.create(
    {
      provinceId: items[0],
      cityId:,
      name: {
        en: items[2],
        zh: items[1]
      }
    },
    (err, doc) => {
      if (err) {
        console.log("Model.create err", err);
      } else {
        // console.log(2, doc);
      }
    }
  );
});

readCity.on("close", () => {
  console.log("readline close...");
});

//readDistrict
readDistrict.on("line", line => {
  if (/en$/.test(line)) {
    return;
  }
  var items = line.replace(/"/g, "").split(",");
  ProvinceModel.create(
    {
      provinceId: items[0],
      name: {
        en: items[2],
        zh: items[1]
      }
    },
    (err, doc) => {
      if (err) {
        console.log("Model.create err", err);
      } else {
        // console.log(2, doc);
      }
    }
  );
});

readDistrict.on("close", () => {
  console.log("readline close...");
});

//readStreet
readStreet.on("line", line => {
  if (/en$/.test(line)) {
    return;
  }
  var items = line.replace(/"/g, "").split(",");
  ProvinceModel.create(
    {
      provinceId: items[0],
      name: {
        en: items[2],
        zh: items[1]
      }
    },
    (err, doc) => {
      if (err) {
        console.log("Model.create err", err);
      } else {
        // console.log(2, doc);
      }
    }
  );
});

readStreet.on("close", () => {
  console.log("readline close...");
});
