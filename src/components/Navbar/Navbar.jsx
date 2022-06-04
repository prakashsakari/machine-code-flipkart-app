import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <header class="heading d-flex grow-shrink-basis align-center">
            <div class="heading-title-icon d-flex grow-shrink-basis align-center">
                {/* <img class="icon mr-1" src="/assets/image.png" alt="lightbul" /> */}
                <h1 class="heading-title">
                    <a class="link" href="/">Apparel Kart</a>
                </h1>
            </div>
            <nav class="navigation">
                <ul class="list-non-bullet">
                    <li class="list-item-inline">
                        <Link to="/" class="link cursor">Home</Link>
                    </li>
                </ul>
            </nav>
</header>
    )
}