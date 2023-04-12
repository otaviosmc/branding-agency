import React from "react";
import "./style.css";
import CardExp from "../../CardExp";

export default function Experiencias(props) {
  return (
    <section id="exp">
      <div className={`p-4 bg-gray-100 ${props.temaTela}`}>
        <div className=" py-24 default-container">
          <h2 className="text-4xl font-bold text-slate-900 subt relative">
            Experiências de Trabalho
          </h2>
          <p className="pt-16 text-gray-400">
            Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação
            de Sites e Marketing Digital, nos empenhamos diariamente para
            entregar resultados que tragam impacto aos nossos clientes.
          </p>
          <div className="py-8 lg:flex lg:flex-row">
            <CardExp
              data="JUNHO 2012 - 2016"
              titulo="Web Designer"
              empresa="Pied Piper StartUp."
              desc="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
            />
            <CardExp
              data="AGOSTO 2016 - 2019"
              titulo="Product Designer"
              empresa="E Corp."
              desc="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
            />
            <CardExp
              data="FEVEREIRO 2019 - 2021"
              titulo="Digital Consulting"
              empresa="Arasaka Inc."
              desc="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
