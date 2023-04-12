import React from "react";

export default function Footer(props) {
  return (
    <footer className={`py-8 ${props.temaTela}`}>
      <p className="text-gray-400">
        Copyright 2022{" "}
        <span className="text-yellow-400">Otávio Aparecido Simoncini</span>
      </p>
    </footer>
  );
}
