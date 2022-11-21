import { Link } from "react-router-dom";
import bankMoneyLogo from "../../assets/images/argentBankLogo.png";

export const Header = () => {
    return (
    <nav className="main-nav">
        <Link to={`/`} className="main-nav-item">
            <img
                className="main-nav-logo-image"
                src={bankMoneyLogo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
            <Link to={`login`} className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link>
        </div>
    </nav>
    );
}