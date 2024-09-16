// precios.js
import { Montserrat } from "@next/font/google";
import { Fragment, useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";

const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

export default function Prices() {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [offerPrice, setOfferPrice] = useState(0);
  const [discountText, setDiscountText] = useState("");

  useEffect(() => {
    // Aquí puedes cargar los precios desde una base de datos o API si lo deseas
    // Por ahora, estableceré valores de ejemplo
    setPrice(100000); // Precio del Plan Básico
    setOfferPrice(150000); // Precio del Plan Pro
    setDiscountText("¡Ahorra un 10% en tu primer año!");
  }, []);

  return (
    <Fragment>
      <Header title="Precios" />
      <div className={`${montserrat.className} d-flex flex-column h-100`}>
        <Nav />
        <div className="section-single">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-9 mx-auto mb-5 text-center">
                <h1 className="text-center mb-5">
                  Conoce nuestros <span className="color">Planes y Precios</span>
                </h1>

                <p className="large text-center">
                  En <strong>SmarterBot</strong>, ofrecemos soluciones de inteligencia artificial y chatbots personalizados para tu empresa. Elige el plan que mejor se adapte a tus necesidades y lleva tu negocio al siguiente nivel.
                </p>

                <h3 className="mt-5">¡Todo listo para chatear SMARTER!</h3>
              </div>
            </div>
            <div className="container">
              <div className="row align-content-start align-items-center">
                <div className="bg-light rounded col-12 col-lg-10 mx-auto text-center p-5 mb-5">
                  <h2 className="mb-4">Nuestros Planes</h2>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="card h-100">
                        <div className="card-body">
                          <h3 className="card-title">Plan Básico</h3>
                          <p className="card-text">
                            Ideal para pequeñas empresas que buscan iniciarse en la automatización con chatbots personalizados.
                          </p>
                          <ul className="list-unstyled">
                            <li>✔ Implementación básica</li>
                            <li>✔ Soporte por email</li>
                            <li>✔ Actualizaciones mensuales</li>
                          </ul>
                          <h4 className="mt-4">
                            ${price.toLocaleString("es-CL")} CLP / año
                          </h4>
                          <a href="/contacto" className="btn btn-primary mt-3">
                            Contratar Plan Básico
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="card h-100">
                        <div className="card-body">
                          <h3 className="card-title">Plan Pro</h3>
                          <p className="card-text">
                            Para empresas que buscan una solución completa con personalización avanzada y soporte dedicado.
                          </p>
                          <ul className="list-unstyled">
                            <li>✔ Implementación personalizada</li>
                            <li>✔ Soporte 24/7</li>
                            <li>✔ Actualizaciones semanales</li>
                            <li>✔ Integración con sistemas internos</li>
                          </ul>
                          <h4 className="mt-4">
                            ${offerPrice.toLocaleString("es-CL")} CLP / año
                          </h4>
                          <p className="text-success">{discountText}</p>
                          <a href="/contacto" className="btn btn-primary mt-3">
                            Contratar Plan Pro
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-5">
                    ¿Necesitas una solución a medida? <a href="/contacto">Contáctanos</a> y desarrollaremos un plan personalizado para tu empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}
