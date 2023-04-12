import React from "react";
import LogoRS from "../LogoRS";

export default function RedesSociais(props) {
  return (
    <section className={`${props.temaTela}`}>
      <div className="default-container flex flex-col items-center gap-8 py-16">
        <img src="/assets/logo.png" alt="Logo" />
        <p className="text-gray-400 text-lg">
          Ajudamos a criar uma personalidade digital construindo sua marca no
          ambiente online utilizando estratégias, ferramentas e tecnologias
          personalizadas.
        </p>
        <div className="flex gap-3 flex-wrap items-center justify-center">
          <LogoRS img="/assets/facebook.png" />
          <LogoRS img="/assets/twitter.png" />
          <LogoRS img="/assets/linkedin.png" />
          <LogoRS img="/assets/dribble.png" />
          <LogoRS img="/assets/behance.png" />
          <LogoRS img="/assets/google-plus.png" />
        </div>
      </div>
    </section>
  );
}
