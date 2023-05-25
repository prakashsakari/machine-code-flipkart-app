import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return (
  
        <header className="heading d-flex grow-shrink-basis align-center">
            <div className="heading-title-icon d-flex grow-shrink-basis align-center">
                <h1 className="heading-title">
                    <Link className="link" to="/">Bamboo App</Link>
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
                        </span>bamboo list</Link>
                    </li>
                    <li className="list-item-inline">
                        <Link to="/vendor" className="link cursor">Vendor</Link>
                    </li>
                    <li className="list-item-inline">
                        <Link to="/optimization" className="link cursor">Optimization</Link>
                    </li>
                    <li>
 <div class="dropdown">
  <button class="dropbtn">Government Yojna</button>
  <div class="dropdown-content scrollable">
    <a href="https://pmksy.gov.in/"> Pradhan Mantri Krishi Sinchai Yojana (PMKSY)</a>
    <a href="https://vikaspedia.in/agriculture/policies-and-schemes/crops-related/krishi-unnati-yojana/paramparagat-krishi-vikas-yojana">Paramparagat Krishi Vikas Yojana (PKVY)</a>
    <a href="https://pmfby.gov.in/"> Pradhan Mantri Fasal Bima Yojana (PMFBY)</a>
    <a href="http://dmi.gov.in/Schemegby.aspx">Gramin Bhandaran Yojana</a>
    <a href="https://pmkmy.gov.in/"> Pradhan Mantri Kisan Maan-Dhan Yojana (PM-KMY)</a>
    <a href="https://pmkisan.gov.in/"> PM Kisan Samman Nidhi Yojana</a>
    <a href="https://www.nabard.org/content1.aspx?id=1720&catid=8&mid=8#:~:text=Under%20MIF%2C%20the%20State%20Governments,and%20%60%201827.47%20crore%2C%20respectively."> Micro Irrigation Fund scheme</a>
    <a href="https://www.enam.gov.in/web/"> E-NAM</a>
    <a href="https://sbi.co.in/web/agri-rural/agriculture-banking/crop-loan/kisan-credit-card"> Kisan Credit Card (KCC)</a>
    <a href="https://nmsa.dac.gov.in/">  National Mission For Sustainable Agriculture (NMSA)</a>
  </div>
</div>

                    </li>
                </ul>
            </nav>
</header>
    )
}