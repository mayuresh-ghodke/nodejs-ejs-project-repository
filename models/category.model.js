const db = require("../config/db");

// db query: get all categories
exports.getAll = (callback) => {
    db.query("SELECT * FROM categories", callback);
};

// db query: add category to table
exports.create = (name, callback) => {
    db.query("INSERT INTO categories(name) VALUES (?)", [name], callback);
};

// db query: delete category from table
exports.deleteCategoryById = (id, callback) => {
    db.query("DELETE FROM categories WHERE id=?", [id], callback);
}

// db query: update category (set category name) by id
exports.updateById = (id, categoryName, callback) => {
    db.query("UPDATE categories SET name = ? WHERE id = ?", 
        [categoryName, id], 
        callback
    );
};
