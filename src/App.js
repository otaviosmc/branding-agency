import Header from "./components/Header";
import Conteudo from "./components/Conteudo";
import Footer from "./components/Footer";
import { useState } from "react";
import "./App.css";

function App() {
  let temaTela = "";
  let imgTema = "";
  const [tema, setTema] = useState("escuro");

  if (tema === "claro") {
    temaTela = "escuro";
    imgTema = "/assets/sun.png";
  } else {
    temaTela = "claro";
    imgTema = "/assets/moon.png";
  }

  const mudarTema = () => {
    tema === "claro" ? setTema("escuro") : setTema("claro");
  };
  return (
    <div className="App">
      <Header temaTela={temaTela} imgTema={imgTema} mudarTema={mudarTema} />
      <Conteudo temaTela={temaTela} />
      <Footer temaTela={temaTela} />
    </div>
  );
}

export default App;
