import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar";

describe("<Navbar/>", () => {
  test("Verifica se o tema altera apos clicar no botao", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const button = screen.getByTestId("btn-theme");
    fireEvent.click(button);

    const tema = screen.getByTestId("nav");        
    expect(tema).toHaveClass("navbar-dark");
  });
});
