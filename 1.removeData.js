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

// import models
const models = require( './models');
Object.keys(models).forEach(item=>global[item]=models[item]);


const db = mongoose.connection;
db.on("open", function(data) {
  console.log("数据库连接成功");
});

ProvinceModel.find({},(err, doc) => {
  if (err) {
    console.log("ProvinceModel find err", err);
  } else {
     console.log('ProvinceModel find', doc);
  }
})

//清除数据

ProvinceModel.remove((err, doc) => {
  if (err) {
    console.log("ProvinceModel remove err", err);
  } else {
     console.log(2, doc);
  }
})
CityModel.remove((err, doc) => {
  if (err) {
    console.log("CityModel remove err", err);
  } else {
     console.log(2, doc);
  }
})
DistrictModel.remove((err, doc) => {
  if (err) {
    console.log("DistrictModel remove err", err);
  } else {
     console.log(2, doc);
  }
})
StreetModel.remove((err, doc) => {
  if (err) {
    console.log("StreetModel remove err", err);
  } else {
     console.log(2, doc);
  }
})

