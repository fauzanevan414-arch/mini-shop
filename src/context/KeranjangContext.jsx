/* eslint-disable react-refresh/only-export-components */
import {
    createContext,
    useContext,
    useState,
} from "react";

const KeranjangContext = createContext();

export function KeranjangProvider({ children }) {
    const [item, setItem] = useState([]);

    // TAMBAH PRODUK
    const tambahKeKeranjang = (produk) => {
        setItem((keranjangLama) => {
            const produkAda = keranjangLama.find(
                (p) => p.id === produk.id
            );

            if (produkAda) {
                return keranjangLama.map((p) =>
                    p.id === produk.id
                        ? {
                            ...p,
                            jumlah: p.jumlah + 1,
                        }
                        : p
                );
            }

            return [
                ...keranjangLama,
                {
                    ...produk,
                    jumlah: 1,
                },
            ];
        });
    };

    // HAPUS PRODUK
    const hapusDariKeranjang = (id) => {
        setItem((keranjangLama) =>
            keranjangLama.filter((p) => p.id !== id)
        );
    };

    // UBAH JUMLAH
    const ubahJumlah = (id, jumlahBaru) => {
        if (jumlahBaru < 1) {
            return;
        }

        setItem((keranjangLama) =>
            keranjangLama.map((p) =>
                p.id === id
                    ? {
                        ...p,
                        jumlah: jumlahBaru,
                    }
                    : p
            )
        );
    };

    return (
        <KeranjangContext.Provider
            value={{
                item,
                tambahKeKeranjang,
                hapusDariKeranjang,
                ubahJumlah,
            }}
        >
            {children}
        </KeranjangContext.Provider>
    );
}

export function useKeranjang() {
    return useContext(KeranjangContext);
}