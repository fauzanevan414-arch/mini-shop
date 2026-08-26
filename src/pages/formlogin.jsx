import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginForm() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const {login} = useAuth();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (!form.email.includes("@")) {
            setError("Email tidak valid.");
            return;
        }

        if (form.password.length < 6) {
            setError("Password minimal 6 karakter.");
            return;
        }

        const hasil = login(
            form.email,
            form.password
        );

        if (hasil) {
            setError(hasil);
            return;
        }

        setError("");

        navigate("/");
    }

    return (
        <div className="flex justify-center items-center p-6">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md border rounded-lg shadow p-6 bg-white"
            >
                <h1 className="text-2xl font-bold text-center mb-6">
                    Login
                </h1>

                {error && (
                    <p className="text-red-500 text-sm mb-4">
                        {error}
                    </p>
                )}

                <div className="mb-4">
                    <label className="block mb-1 font-medium">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="Masukkan email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                email: e.target.value
                            })
                        }
                        className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="mb-5">
                    <label className="block mb-1 font-medium">
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="Masukkan password"
                        value={form.password}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                password: e.target.value
                            })
                        }
                        className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                    Login
                </button>

                <p className="text-center text-sm mt-5">
                    Belum punya akun?{" "}
                    <Link
                        to="/register"
                        className="text-blue-500 font-semibold hover:underline"
                    >
                        Daftar
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default LoginForm;