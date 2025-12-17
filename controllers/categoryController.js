const db = require("../config/db");

// Get All Categories
const getCategories = (req, res) => {
  db.query("SELECT * FROM categories", (err, results) => {
    if (err) return res.status(500).json({ message: err });

    res.json(results);
  });
};

// Get Category by ID
const getCategoryById = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM categories WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ message: err });

    if (results.length === 0)
      return res.status(404).json({ message: "Kategori tidak ditemukan" });

    res.json(results[0]);
  });
};

// Create Category
const createCategory = (req, res) => {
  const { name } = req.body;

  db.query(
    "INSERT INTO categories (name) VALUES (?)",
    [name],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });

      res.json({
        id: results.insertId,
        name,
        message: "Kategori berhasil ditambahkan",
      });
    }
  );
};

// Update Category
const updateCategory = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  db.query(
    "UPDATE categories SET name = ? WHERE id = ?",
    [name, id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });

      res.json({ message: "Kategori berhasil diupdate" });
    }
  );
};

// Delete Category
const deleteCategory = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM categories WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ message: err });

    res.json({ message: "Kategori berhasil dihapus" });
  });
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
