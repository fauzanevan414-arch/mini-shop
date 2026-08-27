# MiniShop

MiniShop merupakan aplikasi e-commerce sederhana yang dibuat menggunakan React JS. Aplikasi ini dibuat untuk menerapkan penggunaan React, React Router, Context API, Tailwind CSS, serta penggunaan API untuk mengambil data produk.

## Fitur

Beberapa fitur yang tersedia pada aplikasi MiniShop:

* **Register**
  Pengguna dapat membuat akun menggunakan email dan password.

* **Login dan Logout**
  Pengguna dapat masuk menggunakan akun yang telah didaftarkan dan keluar dari akun.

* **Menampilkan Produk**
  Daftar produk diambil dari Fake Store API dan ditampilkan pada halaman utama.

* **Pencarian Produk**
  Pengguna dapat mencari produk berdasarkan nama produk.

* **Filter Kategori**
  Pengguna dapat menampilkan produk berdasarkan kategori yang dipilih.

* **Detail Produk**
  Pengguna dapat melihat informasi lebih lengkap mengenai suatu produk.

* **Keranjang**
  Pengguna dapat menambahkan produk ke keranjang, mengubah jumlah produk, dan menghapus produk dari keranjang.

* **Protected Route**
  Halaman keranjang hanya dapat diakses oleh pengguna yang sudah login.

## Teknologi yang Digunakan

Project ini menggunakan beberapa teknologi berikut:

* React JS
* Vite
* Tailwind CSS
* React Router DOM
* Context API
* Fake Store API
* LocalStorage
* Git dan GitHub
* Netlify

## Instalasi

### 1. Clone Repository

Clone repository dari GitHub menggunakan perintah:

```bash
git clone https://github.com/username/mini-shop.git
```

Kemudian masuk ke folder project:

```bash
cd minishop
```

### 2. Install Dependency

Jalankan perintah berikut untuk menginstall dependency:

```bash
npm install
```

### 3. Menjalankan Project

Untuk menjalankan project dalam mode development:

```bash
npm run dev
```

Setelah itu buka alamat yang ditampilkan pada terminal, biasanya:

```text
http://localhost:5173
```

## Build Project

Untuk membuat versi production, jalankan:

```bash
npm run build
```

Hasil build akan tersimpan di dalam folder `dist`.

Untuk melihat hasil build secara lokal dapat menggunakan:

```bash
npm run preview
```

## Struktur Project

```text
minishop/
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

## Penjelasan Struktur

### `components`

Berisi komponen yang digunakan pada beberapa bagian aplikasi.

* `Header.jsx` digunakan untuk menampilkan header dan navigasi.
* `Layout.jsx` digunakan sebagai layout utama aplikasi.
* `ProdukCard.jsx` digunakan untuk menampilkan kartu produk.
* `Button.jsx` digunakan sebagai komponen tombol.
* `Badge.jsx` digunakan untuk menampilkan label atau badge.
* `ProtectedRoute.jsx` digunakan untuk membatasi halaman yang hanya dapat diakses setelah login.

### `context`

Berisi Context yang digunakan untuk mengelola data yang digunakan oleh beberapa komponen.

* `AuthContext.jsx` mengatur proses register, login, logout, dan data user.
* `KeranjangContext.jsx` mengatur data produk yang terdapat di keranjang.

### `hooks`

Berisi custom hook yang digunakan dalam aplikasi.

* `useLocalStorage.js` digunakan untuk menyimpan dan mengambil data dari LocalStorage dengan state React.

### `pages`

Berisi halaman utama dari aplikasi.

* `Home.jsx` menampilkan daftar produk, pencarian, dan filter kategori.
* `DetailProduk.jsx` menampilkan informasi detail produk.
* `Keranjang.jsx` menampilkan isi keranjang.
* `formlogin.jsx` digunakan untuk halaman login.
* `formregister.jsx` digunakan untuk halaman registrasi.

### `App.jsx`

Digunakan untuk mengatur routing atau perpindahan halaman menggunakan React Router DOM.

Route yang digunakan:

```text
/                  → Halaman utama
/login             → Halaman login
/register          → Halaman register
/produk/:id        → Detail produk
/keranjang         → Keranjang
```

### `main.jsx`

Merupakan file utama yang digunakan untuk menjalankan aplikasi React dan memasang Context Provider.

### `public/_redirects`

Digunakan untuk mengatur routing React ketika aplikasi di-deploy menggunakan Netlify.

### `index.css`

Berisi CSS utama yang digunakan pada aplikasi.

## Deployment

Project MiniShop di-deploy menggunakan Netlify dengan repository GitHub sebagai sumber project.

Pengaturan build yang digunakan:

```text
Build command: npm run build
Publish directory: dist
```

Setelah repository terhubung dengan Netlify, project dapat diakses melalui URL yang diberikan oleh Netlify.
