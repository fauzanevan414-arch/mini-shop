import { useKeranjang } from "../context/KeranjangContext";

function Keranjang() {
    const {
        item,
        hapusDariKeranjang,
        ubahJumlah,
    } = useKeranjang();

    const total = item.reduce(
        (sum, p) => sum + p.harga * p.jumlah,
        0
    );

    return (
        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Keranjang Belanja
            </h1>

            {item.length === 0 ? (
                <p className="text-gray-500">
                    Keranjang masih kosong.
                </p>
            ) : (
                <div className="space-y-4">

                    {item.map((p) => (
                        <div
                            key={p.id}
                            className="border rounded-lg p-4 flex gap-4 items-center"
                        >

                            <img
                                src={p.gambar}
                                alt={p.nama}
                                className="w-24 h-24 object-contain"
                            />

                            <div className="flex-1">

                                <h2 className="font-semibold">
                                    {p.nama}
                                </h2>

                                <p className="text-blue-600">
                                    ${p.harga}
                                </p>

                                <div className="flex items-center gap-2 mt-2">

                                    <button
                                        onClick={() =>
                                            ubahJumlah(
                                                p.id,
                                                Math.max(1, p.jumlah - 1)
                                            )
                                        }
                                        className="px-3 py-1 border rounded"
                                    >
                                        -
                                    </button>

                                    <span>
                                        {p.jumlah}
                                    </span>

                                    <button
                                        onClick={() =>
                                            ubahJumlah(
                                                p.id,
                                                p.jumlah + 1
                                            )
                                        }
                                        className="px-3 py-1 border rounded"
                                    >
                                        +
                                    </button>

                                </div>

                            </div>

                            <button
                                onClick={() =>
                                    hapusDariKeranjang(p.id)
                                }
                                className="text-red-500 hover:text-red-700"
                            >
                                Hapus
                            </button>

                        </div>
                    ))}

                    <div className="border-t pt-4 text-right">

                        <p className="text-xl font-bold">
                            Total: ${total.toFixed(2)}
                        </p>

                    </div>

                </div>
            )}

        </div>
    );
}

export default Keranjang;