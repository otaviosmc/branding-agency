import React, { useState } from "react";

export default function Header(props) {
  return (
    <header className={`${props.temaTela}`}>
      <div className="flex items-center justify-between p-4 lg:px-0 default-container">
        <img src="/assets/logo.png" alt="Logo" />
        <button
          className="p-2 border-2 border-gray-500 rounded-full"
          onClick={props.mudarTema}
        >
          <img src={props.imgTema} alt="Dark e Light Mode" className="w-6" />
        </button>
      </div>
    </header>
  );
}
