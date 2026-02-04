const db = require("../config/db");

// db query: create new query
exports.create = (data, callback) => {
    db.query("insert into products(name, category_id) values (?, ?)",
        [data.product_name, data.category_id],
        callback
    );
};

// db query: get all products
exports.getAllProducts = (callback) => {
    db.query("select * from products", callback);
};

// db query: get all products with pagination
exports.getPaginatedProducts = (limit, offset, callback) => {
    const joinQuery = `
        SELECT 
            p.id AS productId,
            p.name AS productName,
            c.id AS categoryId,
            c.name AS categoryName
        FROM products p JOIN categories c 
        ON p.category_id = c.id
        LIMIT ? OFFSET ?`;
    db.query(joinQuery, [limit, offset], callback);
};

exports.getTotalCount = (callback) => {
    db.query("SELECT COUNT(*) AS total FROM products", (err, result) => {
        callback(err, result[0].total);
    });
};

exports.getById = (id, callback) => {
    const query = `
        SELECT id, name, category_id 
        FROM products 
        WHERE id = ?`;
    db.query(query, [id], (err, result) => {
        callback(err, result[0]);
    });
};


// db query: update product (set name) by id
exports.updateById = (id, productName, callback) => {
    db.query("UPDATE products SET name=? WHERE id=?", [ productName, id], callback);
}

// db query: delete product by id
exports.deleteById = (id, callback) => {
    db.query("DELETE FROM products WHERE id=?", [id], callback);
}