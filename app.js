var express = require("express"),
	path = require("path"),
	component = require("./controller/component"),
	app = express();

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");	

app.get("/",component.guide);

app.get("/login",component.loginReg)

app.listen(3000);