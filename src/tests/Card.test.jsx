import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "../Components/Card";

describe("<Card/>", () => {
  const dentista = {
    nome: "Admin",
    sobrenome: "Admin",
    matricula: "c3e6cf30-dccc-4e21-935a-8efe9344677e",
    usuario: {
      username: "dentistaAdmin",
    },
  };

  test("Verifica se o card esta renderizando", () => {
    render(
      <BrowserRouter>
        <Card dentista={dentista} key={dentista.matricula} />
      </BrowserRouter>
    );

    const nome = screen.getByRole("heading", { level: 5 });

    expect(nome).toBeInTheDocument();
    expect(nome.textContent).toBe("Admin Admin");
  });

  test("Verifica se o tema dark esta funcionando", () => {
    render(
      <BrowserRouter>
        <Card dentista={dentista} key={dentista.matricula} />
      </BrowserRouter>
    );

    const tema = screen.getByTestId("card");

    expect(tema).toHaveClass("dark");
    expect(tema).toHaveStyle({ backgroundColor: 27272796 });
  });

});
