const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const db = require("../config/db");

router.get("/", (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10; 
    const offset = (page - 1) * limit;

    Product.getTotalCount((err, total) => {
        if (err) 
            throw err;

        Product.getPaginatedProducts(limit, offset, (err, products) => {
            if (err) 
                throw err;

            const totalPages = Math.ceil(total / limit);
            res.render("products/products", {products, page, limit, totalPages});
        });
    });
});

router.get("/add", (req, res) => {
    db.query("select * from categories", (err, categories) => {
        res.render("products/add", {categories});
    });
});

router.post("/add", (req, res) => {
    Product.create(req.body, ()=> {
        res.redirect("/products");
    });
});

router.post("/delete/:id", (req, res) => {
    Product.deleteById(req.params.id, () => {
        res.redirect("/products");
    });
});

router.get("/edit/:id", (req, res) => {
    Product.getById(req.params.id, (err, product) => {
        if (err) throw err;

        db.query("SELECT * FROM categories", (err, categories) => {
            res.render("products/edit", { product, categories });
        });
    });
});


router.post("/update/:id", (req, res) => {
    const newName = req.body.name;
    Product.updateById(req.params.id, newName, () => {
        res.redirect("/products");
    });
});

module.exports = router;