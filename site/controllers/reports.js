// const User = require("../models/user");

// exports.postAddReport = (req, res, next) => {
//   const location = req.body.location;
//   const date = req.body.date;
//   const description = req.body.description;
//   User.findOne({ where: { id: req.userId } })
//     .then((user) => {
//       console.log("hey");
//       user.createReport({ location, date, description });
//     })
//     .then((results) => res.send("Report is created succesfully"))
//     .catch((err) => console.log(err));
// };
// exports.getReport = (req, res, next) => {
//   User.findOne({ where: { id: req.userId } })
//     .then((user) => user.getReports())
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// };

const Reports = require("../models/report");

exports.postAddReport = async (req, res, next) => {
  const location = req.body.location;
  const date = req.body.date;
  const description = req.body.description;
 

  const reports = Reports.build({ name, location, date, description });
  try {
    await reports.save();
    res.send(reports);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getReport = async (req, res, next) => {
  const reports = await Reports.findAll();
  res.send(reports);
};
