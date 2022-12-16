import { useEffect, useState, useContext } from "react";
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "../Styles/DetailCard.module.css";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthContext";
import { ThemeContext } from "../Providers/ThemeProvider";
import api from "../Services/api";

const DetailCard = () => {
  const { theme } = useContext(ThemeContext);

  const { matricula } = useParams();
  const [dentista, setDentista] = useState({});

  const { userData } = useContext(AuthContext);
  const { token } = userData;

  useEffect(() => {
    getDentista();
  }, []);

  async function getDentista() {
    try {
      const res = await api.get(`/dentista?matricula=${matricula}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDentista(res.data);
    } catch (e) {
      console.log("erro ao buscar dentista");
    }
  }

  return (
    <>
      <h1>
        Informação sobre {dentista.nome} {dentista.sobrenome}{" "}
      </h1>
      <section className="card col-sm-12 col-lg-6 container">
        <div
          className={theme === "light" ? `card-body row` : `card-body dark row`}
          data-testid="detailCardDiv"
        >
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {dentista.nome}</li>
              <li className="list-group-item">
                Sobrenome: {dentista.sobrenome}
              </li>
              <li className="list-group-item">
                Matrícula: {dentista.matricula}
              </li>
            </ul>
            <div className="text-center">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={
                  theme === "light"
                    ? `btn btn-light ${styles.button}`
                    : `btn btn-dark ${styles.button}`
                }
                data-testid="detailCardButton"
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
