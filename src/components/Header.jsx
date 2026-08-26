import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
    const { logout } = useAuth();

    return (
        <header>
            <h1>FauzanShop</h1>

            <nav>
                <Link to="/">Beranda</Link>
                <Link to="/Keranjang">Keranjang</Link>

                <button onClick={logout}>
                    Logout
                </button>
            </nav>
        </header>
    );
}

export default Header;