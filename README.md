# 🛒 FastCart — Modern Online Store

**FastCart** is a powerful and responsive online store built with modern frontend technologies. The project includes all the core features of an e-commerce platform — from product browsing and wishlist to cart management, checkout, and authentication.

---

## ✨ Features

- 📦 **Product catalog** with filtering by price, brand, and category  
- 🔍 **Dynamic search & filters** for smooth user experience  
- 📄 **Product details page by ID** with full information  
- ❤️ **Wishlist** functionality to save favorite products  
  > ✅ Implemented **locally** using Redux, since the backend **does not provide an endpoint** for Wishlist in Swagger.  
- 🛒 **Shopping cart** with add/remove functionality  
- 🧾 **Checkout page** for final order confirmation  
- 📸 **Image sliders (Swiper.js)**:
  - On the Home page — banners and promotions  
  - On the About page — additional image carousel  
- 🔔 **User feedback** with beautiful and customizable notifications using [Sonner](https://sonner.emilkowal.ski/)  
- ✅ Smooth interaction feedback via toasts for actions like login, wishlist, add to cart, etc.  
- 📱 **Responsive design** optimized for all devices  

---

## 🔐 Authentication & Access Control

- ✅ User login form with input validation  
- 🔑 Uses **JWT tokens** stored in `localStorage` after login  
- 🧩 Decoding is done using [`jwt-decode`](https://github.com/auth0/jwt-decode)  
- 🛡️ Without a valid token, users **cannot access**:
  - The **User Profile**  
  - The **Wishlist**  
  - **Add to Cart** functionality  
  - The **Cart page** and **Checkout**  
- 🔐 All protected routes verify the presence and validity of the JWT token before allowing access  

---

## 📚 API Documentation

FastCart is powered by a backend API with full Swagger documentation available.

- 👉 [View Swagger Docs](http://37.27.29.18:8002/swagger/index.html)

You can use Swagger to explore available endpoints, parameters, responses, and test API calls directly.

---

## 🛠 Tech Stack

| Technology        | Purpose                               |
|-------------------|---------------------------------------|
| **React**         | UI library for building interfaces    |
| **Redux Toolkit** | Global state management               |
| **React Router**  | Client-side routing                   |
| **Axios**         | HTTP client for API requests          |
| **jwt-decode**    | JWT decoding and user authentication  |
| **Material UI**   | Component library for modern UI       |
| **Swiper.js**     | Image sliders                         |
| **Sonner**        | Toast notifications and feedback UI   |
| **Vite**          | Fast build tool and dev server        |
-------------------------------------------------------------



