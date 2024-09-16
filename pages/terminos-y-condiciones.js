// terminos-y-condiciones.js
import { Montserrat } from "@next/font/google";
import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

export default function Terminos() {
  return (
    <Fragment>
      <Header title="Términos y Condiciones de Uso" />
      <div className={`${montserrat.className} d-flex flex-column h-100`}>
        <Nav />
        <div className="section-single">
          <div className="container">
            <div className="row align-content-start align-items-center">
              <div className="col-12 col-sm-12 col-md-10 mx-auto">
                <h1 className="text-center">
                  <span className="color">Términos de Uso</span>
                </h1>
                <h1 className="text-center">SmarterBot</h1>
                <hr />
                <a href="#1">
                  <p>
                    <strong>1. Definiciones</strong>
                  </p>
                </a>
                <a href="#2">
                  <p>
                    <strong>2. Introducción</strong>
                  </p>
                </a>
                <a href="#3">
                  <p>
                    <strong>3. Descripción de los Servicios</strong>
                  </p>
                </a>
                <a href="#4">
                  <p>
                    <strong>4. Condiciones de Uso</strong>
                  </p>
                </a>
                <a href="#5">
                  <p>
                    <strong>5. Limitación de Responsabilidad</strong>
                  </p>
                </a>
                <a href="#6">
                  <p>
                    <strong>6. Privacidad y Protección de Datos</strong>
                  </p>
                </a>
                <a href="#7">
                  <p>
                    <strong>7. Modificaciones a los Términos y Condiciones</strong>
                  </p>
                </a>
                <a href="#8">
                  <p>
                    <strong>8. Ley Aplicable y Jurisdicción</strong>
                  </p>
                </a>
                <hr />
                <h2 className="mb-4 mt-5" id="1">
                  1 – DEFINICIONES
                </h2>
                <p>
                  <strong>SmarterBot SpA o SmarterBot:</strong> Empresa especializada en soluciones de inteligencia artificial y chatbots personalizados para empresas, liderada por el experto Pedro José Zaffuto.
                </p>
                <p>
                  <strong>Servicios:</strong> Desarrollo, implementación y soporte de chatbots agentes personalizados, incluyendo capacitación y consultoría especializada.
                </p>
                <p>
                  <strong>Cliente:</strong> Persona natural o jurídica que contrata los servicios de SmarterBot.
                </p>
                <p>
                  <strong>Plataforma:</strong> El sitio web <a href="https://smarterbot.cl/" target="_blank">https://smarterbot.cl/</a>, a través del cual se ofrecen y promocionan los servicios de SmarterBot.
                </p>
                <hr />
                <h2 className="mb-4 mt-5" id="2">
                  2 – INTRODUCCIÓN
                </h2>
                <p>
                  Estos Términos y Condiciones regulan el acceso y uso de la Plataforma y los Servicios ofrecidos por SmarterBot. Al utilizar la Plataforma o contratar nuestros Servicios, el Cliente acepta cumplir con estos Términos y Condiciones.
                </p>
                <h2 className="mb-4 mt-5" id="3">
                  3 – DESCRIPCIÓN DE LOS SERVICIOS
                </h2>
                <p>
                  SmarterBot proporciona soluciones de inteligencia artificial y chatbots personalizados para mejorar la eficiencia y comunicación interna y externa de las empresas. Nuestros servicios incluyen:
                </p>
                <ul>
                  <li>Desarrollo de chatbots adaptados a las necesidades específicas del Cliente.</li>
                  <li>Implementación y configuración en los sistemas del Cliente.</li>
                  <li>Capacitación al personal del Cliente para el uso óptimo de las herramientas.</li>
                  <li>Soporte técnico y mantenimiento continuo.</li>
                </ul>
                <h2 className="mb-4 mt-5" id="4">
                  4 – CONDICIONES DE USO
                </h2>
                <h4>
                  <strong>Requisitos para Contratar los Servicios</strong>
                </h4>
                <p>
                  El Cliente debe ser mayor de edad y contar con la capacidad legal para celebrar contratos vinculantes. Al contratar nuestros Servicios, el Cliente garantiza que cumple con estos requisitos.
                </p>
                <h4>
                  <strong>Obligaciones del Cliente</strong>
                </h4>
                <p>
                  El Cliente se compromete a:
                </p>
                <ul>
                  <li>Proporcionar información veraz y actualizada necesaria para la prestación de los Servicios.</li>
                  <li>Facilitar el acceso a sus instalaciones y sistemas cuando sea necesario.</li>
                  <li>Respetar los derechos de propiedad intelectual de SmarterBot.</li>
                </ul>
                <h4>
                  <strong>Uso Adecuado de los Servicios</strong>
                </h4>
                <p>
                  El Cliente se compromete a no utilizar los Servicios de manera que pueda dañar, deshabilitar o sobrecargar los sistemas de SmarterBot o interferir con el uso y disfrute de los Servicios por parte de terceros.
                </p>
                <h2 className="mb-4 mt-5" id="5">
                  5 – LIMITACIÓN DE RESPONSABILIDAD
                </h2>
                <p>
                  SmarterBot no será responsable por daños indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de uso de los Servicios. La responsabilidad total de SmarterBot se limitará al monto pagado por el Cliente por los Servicios durante los 12 meses anteriores al evento que dio lugar a la responsabilidad.
                </p>
                <h2 className="mb-4 mt-5" id="6">
                  6 – PRIVACIDAD Y PROTECCIÓN DE DATOS
                </h2>
                <p>
                  SmarterBot se compromete a proteger la privacidad y confidencialidad de los datos del Cliente. Toda la información recopilada será utilizada exclusivamente para la prestación de los Servicios y no será compartida con terceros sin el consentimiento expreso del Cliente, salvo que la ley lo requiera.
                </p>
                <h2 className="mb-4 mt-5" id="7">
                  7 – MODIFICACIONES A LOS TÉRMINOS Y CONDICIONES
                </h2>
                <p>
                  SmarterBot se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán notificadas al Cliente a través de la Plataforma o por correo electrónico. El uso continuado de los Servicios después de dicha notificación constituirá la aceptación de los nuevos términos.
                </p>
                <h2 className="mb-4 mt-5" id="8">
                  8 – LEY APLICABLE Y JURISDICCIÓN
                </h2>
                <p>
                  Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de la República de Chile. Cualquier controversia que surja en relación con estos términos será sometida a la jurisdicción exclusiva de los tribunales competentes de Santiago de Chile.
                </p>
                <h2 className="mb-4 mt-5">
                  9 – CONTACTO Y SOPORTE
                </h2>
                <p>
                  Para consultas, soporte o reclamos, el Cliente puede comunicarse con SmarterBot a través de los siguientes medios:
                </p>
                <ul>
                  <li>Correo electrónico: <a href="mailto:contacto@smarterbot.cl">contacto@smarterbot.cl</a></li>
                  <li>Teléfono: +56 9 8765 4321</li>
                </ul>
                <h2 className="mb-4 mt-5">
                  10 – DISPOSICIONES FINALES
                </h2>
                <h4>
                  <strong>Independencia de las Cláusulas</strong>
                </h4>
                <p>
                  Si alguna disposición de estos Términos y Condiciones es considerada inválida o inaplicable, las demás disposiciones permanecerán en pleno vigor y efecto.
                </p>
                <h4>
                  <strong>Acuerdo Completo</strong>
                </h4>
                <p>
                  Estos Términos y Condiciones constituyen el acuerdo completo entre el Cliente y SmarterBot en relación con los Servicios y reemplazan cualquier acuerdo o entendimiento previo.
                </p>
                <h4>
                  <strong>No Renuncia</strong>
                </h4>
                <p>
                  La falta de ejercicio o demora en el ejercicio de cualquier derecho por parte de SmarterBot no constituirá una renuncia a dicho derecho.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}
