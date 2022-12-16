import { useState, useContext, useEffect } from "react";
import Card from "../Components/Card";
import { AuthContext } from "../Providers/AuthContext";
import api from "../Services/api";

const Home = () => {
  const [dentistas, setDentistas] = useState([]);

  const { userData } = useContext(AuthContext);

  const { token } = userData;

  useEffect(() => {
    getDentistas();
  }, []);

  async function getDentistas() {
    try {
      const res = await api.get("/dentista", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDentistas(res.data);
    } catch (e) {
      console.log("erro ao buscar todos os dentistas");
    }
  }

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {dentistas.map((dentista) => {
          return <Card dentista={dentista} key={dentista.matricula} />;
        })}
      </div>
    </>
  );
};

export default Home;
