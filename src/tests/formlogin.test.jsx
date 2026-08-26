import { render, screen } from "@testing-library/react";
import { describe, it, expect,vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import FormLogin from "../pages/formlogin";

vi.mock("../context/AuthContext", () => ({
    useAuth: () => vi.fn()
}));

describe("FormLogin", () => {

    it("Menampilkan input email dan password", () => {
        render(
        <MemoryRouter>
        <FormLogin />
        </MemoryRouter>
        );

        expect(
            screen.getByPlaceholderText("Masukkan email")
        ).toBeInTheDocument();

        expect(
            screen.getByPlaceholderText("Masukkan password")
        ).toBeInTheDocument();

    });

    it("Menampilkan tombol Login", () => {
    render(
    <MemoryRouter><FormLogin /></MemoryRouter>);

    expect(
        screen.getByRole("button", { name: /login/i })
    ).toBeInTheDocument();
    });

});