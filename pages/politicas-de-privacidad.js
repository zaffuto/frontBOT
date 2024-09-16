// preguntas-frecuentes.js
import { Montserrat } from 'next/font/google';
import { Fragment } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

export default function PreguntasFrecuentes() {
  return (
    <Fragment>
      <Header title="Preguntas Frecuentes" />
      <div className={`${montserrat.className} d-flex flex-column h-100`}>
        <Nav />
        <div className="section-single">
          <div className="container">
            <div className="row align-content-start align-items-center">
              <div className="col-12 col-sm-12 col-md-10 mx-auto">
                <h1 className="mb-5 text-center">
                  <span className="color">Preguntas</span> Frecuentes
                </h1>
              </div>
            </div>
            {/* Resto del contenido */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
