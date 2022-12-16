import { useContext } from "react";
import styles from "../Styles/Navbar.module.css";
import { ThemeContext } from "../Providers/ThemeProvider";
import { AuthContext } from "../Providers/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const { theme, handleTheme } = useContext(ThemeContext);

  const { isLogged, removeUserData } = useContext(AuthContext);

  const logout = () => {
    removeUserData();
    navigate("/login");
  };

  return (
    <header className="sticky-top">
      <nav
        className={
          theme === "light"
            ? `navbar navbar-expand-sm navbar-light bg-light`
            : `navbar navbar-expand-sm navbar-dark bg-dark`
        }
        aria-label="Third navbar example"
        data-testid="nav"
      >
        <div className="container">
          <a className={`navbar-brand ${styles.navbarBrand}`} href="/home">
            DH Odonto
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                {!isLogged ? (
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                ) : (
                  <button
                    className={
                      theme === "light" ? "btn btn-light" : "btn btn-dark"
                    }
                    onClick={logout}
                  >
                    Logout
                  </button>
                )}
              </li>
              <li className={`nav-item`}>
                <button
                  className={
                    theme === "light"
                      ? `btn btn-light ${styles.btnStyle}`
                      : `btn btn-dark ${styles.btnStyle}`
                  }
                  onClick={handleTheme}
                  data-testid="btn-theme"
                >
                  {theme === "light" ? (
                    <img src="/images/moon.png" style={{ width: "20px" }} />
                  ) : (
                    <img src="/images/sun.png" style={{ width: "20px" }} />
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
