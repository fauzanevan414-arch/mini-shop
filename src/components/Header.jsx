// import Keranjang from "../pages/Keranjang";
import { Link } from "react-router-dom";

function Header(){
    return (
        <header>
            <h1>MiniShop</h1>
            <nav>
                <Link to="/">Beranda</Link>
                <Link to="Keranjang">Keranjang</Link>
            </nav>
        </header>
    );
}
export default Header;