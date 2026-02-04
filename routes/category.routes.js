const express = require("express");
const router = express.Router();
const Category = require("../models/category.model");

// list categories
router.get("/", (req, res) => {
    Category.getAll((err, results) => {
        if (err) throw err;
        res.render("categories/categories", { categories: results });
    });
});

// show add form
router.get("/add", (req, res) => {
    res.render("categories/add");
});

// add category
router.post("/add", (req, res) => {
    const name = req.body.name;

    Category.create(name, () => {
        res.redirect("/categories");
    });
});

// delete category
router.post("/delete/:id", (req, res) => {
    Category.deleteCategoryById(req.params.id, () => {
        res.redirect("/categories");
    });
});

// show edit form
router.get("/edit/:id", (req, res) => {
    Category.getAll((err, categories) => {
        const category = categories.find(c => c.id == req.params.id);
        res.render("categories/edit", { category });
    });
});

// update category
router.post("/update/:id", (req, res) => {
    Category.updateById(req.params.id, req.body.name, () => {
        res.redirect("/categories");
    });
});

module.exports = router;
