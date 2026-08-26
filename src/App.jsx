import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import DetailProduk from "./pages/DetailProduk";
import Keranjang from "./pages/Keranjang";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginForm from "./pages/formlogin";
import RegisterForm from "./pages/formregister";
import {lazy, Suspense} from "react";


function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<Layout />}>

                    <Route path="/" element={<Home />} />

                    <Route
                        path="/produk/:id"
                        element={<DetailProduk />}
                    />

                    <Route
                        path="/keranjang"
                        element={
                        <ProtectedRoute><Keranjang /></ProtectedRoute>}
                    />

                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />

                    <Route
                        path="*"
                        element={<h2>404 - Halaman Tidak Ditemukan</h2>}
                    />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;