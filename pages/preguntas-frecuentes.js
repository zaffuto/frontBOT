import { Montserrat } from '@next/font/google';
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

export default function PreguntasFrecuentes() {
  return (
    <>
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
                          ¿Qué es SmarterBot?
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
                    {/* Pregunta 2 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          ¿Cómo puede un chatbot beneficiar a mi empresa?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Un chatbot personalizado puede automatizar tareas repetitivas, mejorar la atención al cliente 24/7, optimizar procesos internos y proporcionar información rápida y precisa. Esto libera tiempo para que tu equipo se enfoque en tareas estratégicas y mejora la satisfacción del cliente.
                        </div>
                      </div>
                    </div>
                    {/* Pregunta 3 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          ¿Cuál es el proceso de implementación?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Nuestro proceso incluye un diagnóstico personalizado en terreno, desarrollo a medida, implementación con al menos 40 horas dentro de tu empresa y capacitación al personal. Nos aseguramos de entender a fondo tus necesidades y adaptamos nuestras soluciones para integrarse perfectamente con tus sistemas.
                        </div>
                      </div>
                    </div>
                    {/* Resto de las preguntas */}
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
