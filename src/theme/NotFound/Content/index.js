/**
 * Wrap do 404: em desenvolvimento, explica por que /en/ e /fr/ não existem com `npm start`.
 */
import React from "react";
import { useLocation } from "react-router-dom";
import Original from "@theme-original/NotFound/Content";

export default function NotFoundContent(props) {
  const location = useLocation();
  const isDev = process.env.NODE_ENV === "development";
  const isAlternateLocalePath = /^\/(en|fr)(\/|$)/.test(location.pathname);

  return (
    <>
      {isDev && isAlternateLocalePath ? (
        <div className="container margin-vert--md">
          <div className="alert alert--info" role="alert">
            <strong>Desenvolvimento (idiomas):</strong> com{" "}
            <code>npm start</code> o Docusaurus só gera o idioma padrão (
            <strong>pt-BR</strong>). Por isso <code>/en/</code> e{" "}
            <code>/fr/</code> não existem aqui e caem nesta página.
            <br />
            <strong>O que fazer:</strong> para trabalhar em inglês ou francês,
            pare o servidor e rode <code>npm run start:en</code> ou{" "}
            <code>npm run start:fr</code> (o site passa a ser servido em{" "}
            <code>/en/</code> ou <code>/fr/</code>). Para testar os três
            idiomas como no GitHub Pages, use <code>npm run preview</code>.
          </div>
        </div>
      ) : null}
      <Original {...props} />
    </>
  );
}
