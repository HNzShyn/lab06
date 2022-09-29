//Khai báo module (package)
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

//Set thư mục chứa views (giao diện - frontend)
app.set("views", path.join(__dirname, "views/hbs"));
//set view engine (template engine)
app.set("view engine", "hbs");
//render ra trang home (index.hbs)
//get: get method
app.get("/", (req, res) => {
    let name = "Greenwich University";
    let address = "2 Pham Van Bach";
    let city = "HA NOI";
    res.render("index", {n: name, a: address, c:city});
});

app.get("/city", (req, res) => {
    let country = "VIET NAM";
    let providers = ["FPT", "Viettel", "VNPT"];
    let cities = ["HA NOI", "DA NANG", "NHA TRANG", "HO CHI MINH", "DA LAT"];
    res.render("city", {country: country, cities: cities, providers: providers});
});

app.get("/login", (req,res) => {
    res.render("login");
});

app.get("/logout", (req, res) => {
    res.render("logout");
});

//Chạy server
app.listen(port, () => {
    console.log("Server is running at: http://localhost:3000");
});