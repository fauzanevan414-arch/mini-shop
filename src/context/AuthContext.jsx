/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const userTersimpan = localStorage.getItem("userLogin");

        return userTersimpan
            ? JSON.parse(userTersimpan)
            : null;
    });

    function login(email, password) {
        const userTersimpan = JSON.parse(
            localStorage.getItem("user")
        );

        if (!userTersimpan) {
            return "Akun belum terdaftar.";
        }

        if (
            userTersimpan.email !== email ||
            userTersimpan.password !== password
        ) {
            return "Email atau password salah.";
        }

        setUser(userTersimpan);

        localStorage.setItem(
            "userLogin",
            JSON.stringify(userTersimpan)
        );

        return null;
    }

    function register(email, password) {
        const userBaru = {
            email,
            password
        };

        localStorage.setItem(
            "user",
            JSON.stringify(userBaru)
        );

        return null;
    }

    function logout() {
        setUser(null);
        localStorage.removeItem("userLogin");
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                register,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}