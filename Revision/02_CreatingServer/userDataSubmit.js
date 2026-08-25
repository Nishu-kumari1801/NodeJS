const fs=require('fs');
const queryString = require('querystring')

function userDataSubmit(req, res) {
  let dataBody = [];
  req.on("data", (chunks) => {
    dataBody.push(chunks);
  });

  req.on("end", () => {
    let rowData = Buffer.concat(dataBody).toString();
    let readableData = queryString.parse(rowData);
    let dataString =
      "My name is " +
      readableData.name +
      " my email id is " +
      readableData.email;
    console.log(dataString);
  });
  res.write(`<h1>you can get data from user form here</h1>`);
}
module.exports = userDataSubmit;
