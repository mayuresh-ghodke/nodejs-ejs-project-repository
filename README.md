# Node.js Product & Category Management System

A backend-focused web application built using **Node.js**, **Express**, **EJS**, and **MySQL** that manages products and categories with full CRUD functionality. The project follows the **MVC architecture** and includes server-side pagination with dynamic page size selection.

## Features

- Product CRUD operations (Create, Read, Update, Delete)
- Category mapping for products
- Separate Edit Product page with pre-filled data
- Server-side pagination
  - Page numbers
  - Prev / Next navigation
  - Dynamic products-per-page dropdown (eg. 2,5,10,20)
- Clean MVC folder structure
- MySQL database integration
- EJS-based server-side rendering
- Bootstrap-based responsive UI

## Tech Stack

**Backend**
- Node.js
- Express.js
- MySQL (mysql2)

**Frontend**
- EJS (Embedded JavaScript Templates)
- Bootstrap 5

**Tools**
- Git & GitHub
- npm

**Database Setup (MySQL)**
1. Open MySQL Workbench or MySQL CLI
2. Execute the SQL file provided in the project root.
3. This script will: 
- Create Database `nimaptestdb`
- Create `categories` and `products` table
- Insert sample records
4. Update database credentials in `config/db.js`