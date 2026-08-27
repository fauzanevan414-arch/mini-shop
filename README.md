# MiniShop

MiniShop adalah aplikasi e-commerce sederhana yang dibuat menggunakan React JS. Project ini dibuat untuk belajar menggunakan React, React Router, Context API, Tailwind CSS, dan API.

## Fitur

* Register akun
* Login dan Logout
* Menampilkan produk dari Fake Store API
* Mencari produk
* Filter produk berdasarkan kategori
* Melihat detail produk
* Menambahkan produk ke keranjang
* Mengubah jumlah produk di keranjang
* Menghapus produk dari keranjang
* Halaman keranjang hanya dapat diakses setelah login

## Teknologi

* React JS
* Vite
* Tailwind CSS
* React Router DOM
* Context API
* Fake Store API
* LocalStorage
* Git & GitHub
* Netlify

## Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/fauzanevan414-arch/mini-shop.git
```

Masuk ke folder project:

```bash
cd mini-shop
```

### 2. Install Dependency

```bash
npm install
```

### 3. Jalankan Project

```bash
npm run dev
```

Kemudian buka alamat yang muncul di terminal, biasanya:

```text
http://localhost:5173
```

## Build

Untuk membuat versi production:

```bash
npm run build
```

Hasil build akan berada di folder `dist`.

## Struktur Project

```text
mini-shop/
│
├── public/
│   └── _redirects
│
├── src/
│   ├── components/
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── ProdukCard.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── KeranjangContext.jsx
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── DetailProduk.jsx
│   │   ├── Keranjang.jsx
│   │   ├── formlogin.jsx
│   │   └── formregister.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Penjelasan Singkat

* **components** → berisi komponen yang digunakan dalam aplikasi.
* **context** → berisi pengaturan login dan keranjang.
* **hooks** → berisi custom hook untuk LocalStorage.
* **pages** → berisi halaman utama aplikasi.
* **App.jsx** → mengatur route atau perpindahan halaman.
* **main.jsx** → file utama untuk menjalankan aplikasi React.
* **index.css** → berisi CSS utama.
* **public/_redirects** → digunakan agar routing React dapat berjalan saat di Netlify.

## Route

```text
/                 → Home
/login            → Login
/register         → Register
/produk/:id       → Detail Produk
/keranjang        → Keranjang
```

## Deployment

Project ini di-deploy menggunakan Netlify.

Pengaturan build:

```text
Build command: npm run build
Publish directory: dist
```

Source code project tersedia di GitHub dan project dapat diakses melalui URL yang diberikan oleh Netlify.
