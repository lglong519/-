
const mongoose = require("mongoose");
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


module.exports.ProvinceModel = mongoose.model("Province", ProvinceSchema, "chinaprovinces");
module.exports.CityModel = mongoose.model("City", CitySchema, "chinacities");
module.exports.DistrictModel = mongoose.model("District", DistrictSchema, "chinadistricts");
module.exports.StreetModel = mongoose.model("Street", StreetSchema, "chinastreets");
