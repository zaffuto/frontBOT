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
            <div className="row">
              <div className="col-md-12">
                <div className="partner-container d-flex justify-content-center">
                  <div className="accordion" id="faqAccordion">
                    {/* Pregunta 1 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          ¿Qué es SmarterBot CHAT para Whatsapp?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          SmarterBot es una empresa especializada en el desarrollo e implementación de chatbots agentes personalizados utilizando inteligencia artificial. Ayudamos a las empresas a mejorar su eficiencia y comunicación interna y externa mediante soluciones tecnológicas avanzadas.
                        </div>
                      </div>
                    </div>
                    {/* Más preguntas siguen aquí */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
