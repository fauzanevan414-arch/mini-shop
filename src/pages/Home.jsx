import { useState, useEffect } from "react";
import ProdukCard from "../components/ProdukCard";
import "../App.css";

function Home() {
    const [produk, setProduk] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
    
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                const dataProduk = data.map((p) => ({
                    id: p.id,
                    nama: p.title,
                    harga: p.price,
                    gambar: p.image,
                    deskripsi: p.description,
                    kategori: p.category,
                    stok: 10,
                }));

                setProduk(dataProduk);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Gagal mengambil produk:", error);
                setLoading(false);
            });
    }, []);



    if (loading) {
        return <p className="p-4">Memuat Produk...</p>;
    }

    return (
            <div className="grid grid-cols-3 gap-4 p-4">
                {produk.map((p) => (
                    <ProdukCard
                        key={p.id}
                        produk={p}
                    />
                ))}
            </div>
    );
}

export default Home;

// import { useState, useEffect } from "react";
// import ProdukCard from "../components/ProdukCard";
// import "../App.css";

// function Home() {
//     const [produk, setProduk] = useState([]);
//     const [kategori, setKategori] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const [kataKunci, setKataKunci] = useState("");
//     const [kategoriDipilih, setKategoriDipilih] = useState("");

//     useEffect(() => {
    
//         fetch("https://fakestoreapi.com/products")
//             .then((res) => res.json())
//             .then((data) => {
//                 const dataProduk = data.map((p) => ({
//                     id: p.id,
//                     nama: p.title,
//                     harga: p.price,
//                     gambar: p.image,
//                     deskripsi: p.description,
//                     kategori: p.category,
//                     stok: 10,
//                 }));

//                 setProduk(dataProduk);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Gagal mengambil produk:", error);
//                 setLoading(false);
//             });

//         fetch("https://fakestoreapi.com/products/categories")
//             .then((res) => res.json())
//             .then((data) => {
//                 setKategori(data);
//             })
//             .catch((error) => {
//                 console.error("Gagal mengambil kategori:", error);
//             });
//     }, []);

//     const produkTersaring = produk.filter((p) => {
//         const cocokNama = p.nama
//             .toLowerCase()
//             .includes(kataKunci.toLowerCase());

//         const cocokKategori =
//             kategoriDipilih === "" ||
//             p.kategori === kategoriDipilih;

//         return cocokNama && cocokKategori;
//     });

//     if (loading) {
//         return <p className="p-4">Memuat Produk...</p>;
//     }

//     return (
//         <div>

//             <div className="p-4 flex gap-2">

//                 <input
//                     type="text"
//                     placeholder="Cari produk..."
//                     value={kataKunci}
//                     onChange={(e) => setKataKunci(e.target.value)}
//                     className="border rounded px-4 py-2 flex-1"
//                 />

//                 <select
//                     value={kategoriDipilih}
//                     onChange={(e) => setKategoriDipilih(e.target.value)}
//                     className="border rounded px-4 py-2"
//                 >
//                     <option value="">
//                         Semua Kategori
//                     </option>

//                     {kategori.map((k) => (
//                         <option key={k} value={k}>
//                             {k}
//                         </option>
//                     ))}
//                 </select>

//             </div>

//             <div className="grid grid-cols-3 gap-4 p-4">
//                 {produkTersaring.map((p) => (
//                     <ProdukCard
//                         key={p.id}
//                         produk={p}
//                     />
//                 ))}
//             </div>

//         </div>
//     );
// }

// export default Home; 