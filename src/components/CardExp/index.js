import React from "react";

export default function CardExp(props) {
  return (
    <div className="border-2 border-gray-200 px-8 py-16 text-gray-400 text-left flex flex-col gap-4">
      <p>{props.data}</p>
      <h3 className="text-slate-900 font-bold text-2xl">{props.titulo}</h3>
      <p>{props.empresa}</p>
      <p>{props.desc}</p>
    </div>
  );
}
