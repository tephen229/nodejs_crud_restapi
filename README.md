# CRUD API - Node.js & Express.js

REST API sederhana untuk mengelola data **kategori** dan **produk** menggunakan **Node.js**, **Express.js**, dan **MySQL**.

---

## Endpoint Kategori (`/categories`)

### Tambah Kategori
**POST** `/categories`

Request Body:
```json
{
  "name": "Mainan"
}
Response:
Kategori berhasil ditambahkan
Ambil Semua Kategori
GET /categories

Menampilkan daftar kategori:
id
name
created_at
updated_at
Update Kategori
PUT /categories/:id

Request Body:

json
Copy code
{
  "name": "pakainan"
}
Response:
Kategori berhasil diupdate
Hapus Kategori
DELETE /categories/:id

Response:
Kategori berhasil dihapus
Endpoint Produk (/products)
Tambah Produk
POST /products

Request Body:
json
Copy code
{
  "category_id": "1",
  "name": "rubik",
  "price": "50000"
}
Response:
Produk berhasil ditambahkan


Update Produk
PUT /products/:id
Request Body:

json
{
  "category_id": "1",
  "name": "rubik",
  "price": "30000"
}
Response:
Produk berhasil diupdate
Hapus Produk
DELETE /products/:id

Response:
Produk berhasil dihapus
