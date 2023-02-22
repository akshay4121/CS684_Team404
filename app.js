// Node hub 2020

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");


var home = require("./routes/404");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var patientRouter = require("./routes/patient");
var contactsRouter = require("./routes/contacts");
var userLogin = require("./routes/userLogin");
var viewLogin = require("./routes/viewLogin");
var dashboardRouter = require("./routes/dashboard");
var registerRouter = require("./routes/register");
var logoutRouter = require("./routes/logout");
var loginRouter = require("./routes/login");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/404", home);
app.use("/index", indexRouter);
app.use("/users", usersRouter);
app.use("/patient", patientRouter);
app.use("/contacts", contactsRouter);
app.use("/dashboard", dashboardRouter);
app.use("/register", registerRouter);
app.use("/logout", logoutRouter);
app.use("/login", loginRouter);
//app.use("/userlogin", userLogin);
//app.use("/viewlogin", viewLogin);


var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
