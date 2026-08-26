import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

import ProdukCard from "../components/ProdukCard";
import { KeranjangProvider } from "../context/KeranjangContext";

describe("ProdukCard", () => {

    const produk = {
        id: 1,
        nama: "Kaos Polos",
        harga: 75000,
        gambar: "gambar.jpg",
        stok: 10
    };

    it("Menampilkan nama produk dengan benar", () => {
        render(
            <MemoryRouter>
                <KeranjangProvider>
                    <ProdukCard produk={produk} />
                </KeranjangProvider>
            </MemoryRouter>
        );

        expect(
            screen.getByText("Kaos Polos")
        ).toBeInTheDocument();
    });

    it("Menampilkan status stok tersedia", () => {
        render(
            <MemoryRouter>
                <KeranjangProvider>
                    <ProdukCard produk={produk} />
                </KeranjangProvider>
            </MemoryRouter>
        );

        expect(
            screen.getByText("Stok tersedia")
        ).toBeInTheDocument();
    });

});