import React from "react";

export default function Banner(props) {
  return (
    <div className={`bg-gray-50 py-20 lg:py-0 flex`}>
      <div className={`${props.temaTela} hidden lg:block bg-white w-1/2`}>
        <img src="/assets/banner.png" alt="Banner" className="cover mx-auto" />
      </div>
      <div className="px-4 py-24 text-left">
        <p className="text-sm tracking-widest">
          BRANDING / UI / UX / TECNOLOGIA
        </p>
        <h2 className="text-5xl text-slate-900 leading-relaxed">
          Agência de Branding
          <span className="font-extrabold">
            {" "}
            <br />e design digital
          </span>
        </h2>
      </div>
    </div>
  );
}
