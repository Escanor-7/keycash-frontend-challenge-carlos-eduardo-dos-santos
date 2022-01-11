import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />
    </>
  );
}