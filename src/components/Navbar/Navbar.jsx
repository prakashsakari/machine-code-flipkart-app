import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <header className="heading d-flex grow-shrink-basis align-center">
            <div className="heading-title-icon d-flex grow-shrink-basis align-center">
                <h1 className="heading-title">
                    <Link className="link" to="/">Apparel Kart</Link>
                </h1>
            </div>
            <nav className="navigation">
                <ul className="list-non-bullet d-flex align-center">
                    <li className="list-item-inline">
                        <Link to="/" className="link cursor">Home</Link>
                    </li>
                    <li className="list-item-inline">
                        <Link to="/cart" className="link cursor d-flex align-center"><span className="material-icons-outlined">
                        shopping_cart
                        </span>Cart</Link>
                    </li>
                </ul>
            </nav>
</header>
    )
}