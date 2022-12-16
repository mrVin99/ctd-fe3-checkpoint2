import mockAxios from "jest-mock-axios";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DetailCard from "../Components/DetailCard";
import AuthProvider from "../Providers/AuthContext";

afterEach(() => {
  mockAxios.reset();
});

describe("<DetailCard/>", () => {
  test("Verifica se o tema dark esta funcionando", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <DetailCard />
        </AuthProvider>
      </BrowserRouter>
    );

    const tema = screen.getByTestId("detailCardDiv");

    expect(tema).toHaveClass("dark");
    expect(tema).toHaveStyle({ backgroundColor: 27272796 });
  });

});
