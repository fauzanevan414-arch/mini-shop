import Button from "./Button";
import Badge from "./Badge";
import { Link } from "react-router-dom";
import { useKeranjang } from "../context/KeranjangContext";

function ProdukCard({ produk }) {
    const { tambahKeKeranjang } = useKeranjang();

    return (
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col h-full">

            <img
                src={produk.gambar}
                alt={produk.nama}
                className="w-full h-40 object-contain rounded"
            />

            <h2 className="font-bold mt-3 line-clamp-2">
                {produk.nama}
            </h2>

            <p className="text-blue-600 font-semibold mt-2">
                ${produk.harga}
            </p>

            {produk.stok > 0 ? (
                <Badge text="Stok tersedia" />
            ) : (
                <Badge text="Stok habis" />
            )}

            <div className="mt-auto pt-3 flex gap-2">

                <Link
                    to={`/produk/${produk.id}`}
                    className="flex-1"
                >
                    <Button>
                        Detail
                    </Button>
                </Link>

                <div className="flex-1">
                    <Button
                        onClick={() => tambahKeKeranjang(produk)}
                    >
                        Tambah Keranjang
                    </Button>
                </div>

            </div>
        </div>
    );
}

export default ProdukCard;