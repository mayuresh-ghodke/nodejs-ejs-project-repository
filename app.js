const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = 3000;

const categoryRoutes = require("./routes/category.routes");
const productRoutes = require("./routes/product.routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

app.get("/", (req, res) => {
    res.redirect("/products");
});

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
