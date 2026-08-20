import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { useKeranjang } from "../context/KeranjangContext";

function DetailProduk() {
    const { id } = useParams();

    const [produk, setProduk] = useState(null);
    const [loading, setLoading] = useState(true);

    const { tambahKeKeranjang } = useKeranjang();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                const dataProduk = {
                    id: data.id,
                    nama: data.title,
                    harga: data.price,
                    gambar: data.image,
                    deskripsi: data.description,
                    kategori: data.category,
                    stok: 10,
                };

                setProduk(dataProduk);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Gagal mengambil detail produk:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="p-6">
                <p>Memuat detail produk...</p>
            </div>
        );
    }

    if (!produk) {
        return (
            <div className="p-6">
                <p>Produk tidak ditemukan.</p>
            </div>
        );
    }

    return (
        <div className="p-6">

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

                <div className="flex justify-center">
                    <img
                        src={produk.gambar}
                        alt={produk.nama}
                        className="w-70 h-70 object-contain rounded"
                    />
                </div>

                <div>

                    <p className="text-sm text-gray-500 mb-2">
                        {produk.kategori}
                    </p>

                    <h1 className="text-2xl font-bold mb-3">
                        {produk.nama}
                    </h1>

                    <p className="text-2xl font-semibold text-blue-600 mb-4">
                        ${produk.harga}
                    </p>

                    <Badge text="Stok tersedia" />

                    <p className="text-gray-600 mt-5 leading-relaxed">
                        {produk.deskripsi}
                    </p>

                    <div className="mt-6">
                        <Button
                            onClick={() => tambahKeKeranjang(produk)}
                        >
                            Tambah ke Keranjang
                        </Button>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default DetailProduk;