import React from "react";
import Banner from "./Banner";
import Experiencias from "./Experiencias";
import RedesSociais from "../RedesSociais";

export default function Conteudo(props) {
  return (
    <main>
      <Banner temaTela={props.temaTela} />
      <Experiencias temaTela={props.temaTela} />
      <RedesSociais temaTela={props.temaTela} />
    </main>
  );
}
