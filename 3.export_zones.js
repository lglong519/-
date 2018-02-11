const exec = require("child_process").exec;
const outShells = [
  "mongoexport --db debug_db --collection chinaprovinces --out exportMongoDB/ChinaProvince.json",
  "mongoexport --db debug_db --collection chinacities --out exportMongoDB/ChinaCity.json",
  "mongoexport --db debug_db --collection chinadistricts --out exportMongoDB/ChinaDistrict.json",
  "mongoexport --db debug_db --collection chinastreets --out exportMongoDB/ChinaStreet.json"
];
outShells.forEach(Shell => {
  exec(Shell, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
});
