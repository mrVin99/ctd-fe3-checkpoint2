import { useState, useContext } from "react";
import api from "../Services/api";
import styles from "../Styles/Form.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthContext";
import { ThemeContext } from "../Providers/ThemeProvider";

const LoginForm = () => {
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);

  const { fillUserData } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    auth();
  };

  async function auth() {

    try {
      const res = await api.post("/auth", {
        username,
        password,
      });

      navigate("/home");

      fillUserData({
        token: res.data.token,
      });

      setError(false);
    } catch (e) {
      console.log("erro de autenticação");
      if (error) {
        alert("Erro ao fazer login, verifique suas informações");
      }
    }
  }

  return (
    <>
      <div
        className={
          theme === "light"
            ? `text-center card container ${styles.card}`
            : `text-center card dark container ${styles.card}`
        }
        data-testid="login"
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Nome de usuário"
              name="login"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Senha"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="btn btn-danger" type="submit">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
