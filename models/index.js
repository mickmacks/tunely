var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/3000");



// module.exports.Projects = require("./projects.js");
