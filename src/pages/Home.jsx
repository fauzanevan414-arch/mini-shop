import { useState, useEffect } from "react";
import ProdukCard from "../components/ProdukCard";
import "../App.css";

function Home() {
    const [produk, setProduk] = useState([]);
    const [kategori, setKategori] = useState([]);
    const [loading, setLoading] = useState(true);

    const [kataKunci, setKataKunci] = useState("");
    const [kategoriDipilih, setKategoriDipilih] = useState("");

    // Pagination
    const [halaman, setHalaman] = useState(1);
    const produkPerHalaman = 6;

    useEffect(() => {
        // Mengambil produk
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

        // Mengambil kategori
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((data) => {
                setKategori(data);
            })
            .catch((error) => {
                console.error("Gagal mengambil kategori:", error);
            });
    }, []);

    // Filter berdasarkan pencarian + kategori
    const produkTersaring = produk.filter((p) => {
        const cocokNama = p.nama
            .toLowerCase()
            .includes(kataKunci.toLowerCase());

        const cocokKategori =
            kategoriDipilih === "" ||
            p.kategori === kategoriDipilih;

        return cocokNama && cocokKategori;
    });

    // Hitung jumlah halaman
    const totalHalaman = Math.ceil(
        produkTersaring.length / produkPerHalaman
    );

    // Tentukan produk yang ditampilkan pada halaman sekarang
    const indexAwal =
        (halaman - 1) * produkPerHalaman;

    const indexAkhir =
        indexAwal + produkPerHalaman;

    const produkDitampilkan =
        produkTersaring.slice(indexAwal, indexAkhir);

    // Reset halaman ketika search atau kategori berubah
    useEffect(() => {
        setHalaman(1);
    }, [kataKunci, kategoriDipilih]);

    if (loading) {
        return <p className="p-4">Memuat Produk...</p>;
    }

    return (
        <div>

            {/* SEARCH DAN FILTER */}
            <div className="p-4 flex gap-2">

                <input
                    type="text"
                    placeholder="Cari produk..."
                    value={kataKunci}
                    onChange={(e) =>
                        setKataKunci(e.target.value)
                    }
                    className="border rounded px-4 py-2 flex-1"
                />

                <select
                    value={kategoriDipilih}
                    onChange={(e) =>
                        setKategoriDipilih(e.target.value)
                    }
                    className="border rounded px-4 py-2"
                >
                    <option value="">
                        Semua Kategori
                    </option>

                    {kategori.map((k) => (
                        <option key={k} value={k}>
                            {k}
                        </option>
                    ))}
                </select>

            </div>

            {/* PRODUK */}
            <div className="grid grid-cols-3 gap-4 p-4">
                {produkDitampilkan.map((p) => (
                    <ProdukCard
                        key={p.id}
                        produk={p}
                    />
                ))}
            </div>

            {/* JIKA TIDAK ADA PRODUK */}
            {produkTersaring.length === 0 && (
                <p className="text-center p-6 text-gray-500">
                    Produk tidak ditemukan.
                </p>
            )}

            {/* PAGINATION */}
            {totalHalaman > 1 && (
                <div className="flex justify-center items-center gap-4 p-6">

                    <button
                        onClick={() =>
                            setHalaman(halaman - 1)
                        }
                        disabled={halaman === 1}
                        className="px-4 py-2 border rounded disabled:opacity-50"
                    >
                        Sebelumnya
                    </button>

                    <span>
                        Halaman {halaman} dari {totalHalaman}
                    </span>

                    <button
                        onClick={() =>
                            setHalaman(halaman + 1)
                        }
                        disabled={halaman === totalHalaman}
                        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                    >
                        Selanjutnya
                    </button>

                </div>
            )}

        </div>
    );
}

export default Home;