import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import {
    KeranjangProvider,
    useKeranjang
} from "../context/KeranjangContext";

function TestKeranjang() {
    const {
        item,
        tambahKeKeranjang
    } = useKeranjang();

    const produk = {
        id: 1,
        nama: "Kaos Polos",
        harga: 75000
    };

    return (
        <>
            <button onClick={() => tambahKeKeranjang(produk)}>
                Tambah
            </button>

            <p>
                Jumlah item: {item.length}
            </p>
        </>
    );
}

describe("KeranjangContext", () => {

    it("Menambahkan produk ke keranjang", () => {
        render(
            <KeranjangProvider>
                <TestKeranjang />
            </KeranjangProvider>
        );

        const tombol = screen.getByRole("button", {
            name: "Tambah"
        });

        fireEvent.click(tombol);

        expect(
            screen.getByText("Jumlah item: 1")
        ).toBeInTheDocument();
    });

});