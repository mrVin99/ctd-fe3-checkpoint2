import { useState, useContext } from "react";
import { ThemeContext } from "../Providers/ThemeProvider";
import styles from "../Styles/Card.css"

const Card = (props) => {
  const { dentista } = props;

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={theme === "light" ? `card` : `card dark`}
        data-testid="card"
      >
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          <a href={`/dentist/${dentista.matricula}`}>
            <h5 className={`card-title ${styles.title}`}>
              {dentista.nome} {dentista.sobrenome}
            </h5>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
