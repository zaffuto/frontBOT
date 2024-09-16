// preguntas-frecuentes.js
import { Montserrat } from 'next/font/google';

import { Fragment } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
                    {/* Pregunta 4 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          ¿Qué tipo de soporte ofrecen después de la implementación?
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Ofrecemos soporte continuo ajustado al plan de mantenimiento para asegurar que el chatbot funcione de manera óptima. Nuestro equipo está disponible para resolver cualquier duda o inconveniente que pueda surgir.
                        </div>
                      </div>
                    </div>
                    {/* Pregunta 5 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          ¿Cómo garantizan la seguridad y confidencialidad de mi información?
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Firmamos un contrato de confidencialidad que garantiza que la información proporcionada no será compartida ni revelada a terceros. Implementamos medidas de seguridad estrictas para proteger tus datos y cumplir con las regulaciones vigentes en materia de protección de datos.
                        </div>
                      </div>
                    </div>
                    {/* Pregunta 6 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingSix">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          ¿Es necesario realizar reuniones presenciales?
                        </button>
                      </h2>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Sí, creemos en el valor del contacto directo. Realizamos un mínimo de 40 horas en terreno y reuniones presenciales para entender a fondo tu negocio y asegurar una implementación exitosa del chatbot en tu empresa.
                        </div>
                      </div>
                    </div>
                    {/* Pregunta 7 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingSeven">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSeven"
                          aria-expanded="false"
                          aria-controls="collapseSeven"
                        >
                          ¿Qué sucede si necesito personalizaciones específicas?
                        </button>
                      </h2>
                      <div
                        id="collapseSeven"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSeven"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Nos especializamos en desarrollar soluciones a medida. Trabajaremos contigo para entender tus requerimientos específicos y adaptar el chatbot para satisfacer tus necesidades particulares.
                        </div>
                      </div>
                    </div>
                    {/* Pregunta 8 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingEight">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseEight"
                          aria-expanded="false"
                          aria-controls="collapseEight"
                        >
                          ¿Ofrecen garantías sobre sus servicios?
                        </button>
                      </h2>
                      <div
                        id="collapseEight"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingEight"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Sí, ofrecemos un seguro de "libre riesgo" y una garantía de 12 meses sobre nuestros servicios. Nos comprometemos a entregar soluciones de calidad y respaldamos nuestro trabajo para asegurar tu satisfacción.
                        </div>
                      </div>
                    </div>
                    {/* Pregunta 9 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingNine">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseNine"
                          aria-expanded="false"
                          aria-controls="collapseNine"
                        >
                          ¿Cómo puedo obtener una cuenta DEMO?
                        </button>
                      </h2>
                      <div
                        id="collapseNine"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingNine"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Puedes contactarnos a través de nuestro formulario en la página de <a href="/contacto">contacto</a>, enviarnos un correo electrónico a <a href="mailto:hola@smarterbot.cl">hola@smarterbot.cl</a> o llamarnos al <a href="tel:+56979540471">+56 9 7954 0471</a>. También puedes agendar una reunión directamente vía WhatsApp haciendo clic <a href="https://api.whatsapp.com/send/?phone=56979540471&text=Hola%2C+quiero+obtener+una+cuenta+demo+de+SmarterBot...&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">aquí</a>. Estaremos encantados de analizar tus necesidades y proporcionarte una cuenta DEMO personalizada.
                        </div>
                      </div>
                    </div>
                    {/* Pregunta 10 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTen">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="collapseTen"
                          data-bs-target="#collapseTen"
                        >
                          ¿Qué experiencia tienen en mi industria?
                        </button>
                      </h2>
                      <div
                        id="collapseTen"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTen"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Hemos trabajado con empresas de diversos sectores, incluyendo logística, retail, servicios financieros y más. Nuestro enfoque se adapta a las necesidades específicas de cada industria, y contamos con la experiencia de Pedro José Zaffuto en adopción de inteligencia artificial en sistemas SCM.
                        </div>
                      </div>
                    </div>
                    {/* Puedes agregar más preguntas y respuestas siguiendo el mismo formato */}
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </Fragment>
    );
}
