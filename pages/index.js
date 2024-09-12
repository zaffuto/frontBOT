import { Montserrat } from "@next/font/google";
import { Fragment, useEffect, useState } from "react";
import { db } from "../services/firebaseService";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PlanCard from "../components/planCard";

const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

export default function Home() {
  const [price, setPrice] = useState(0);
  const [offerPrice, setOfferPrice] = useState(0);
  const [discountText, setDiscountText] = useState("");

  useEffect(() => {
    db.collection("settings")
      .doc("--")
      .get()
      .then((docRef) => {
        setPrice(parseInt(docRef.data().price));
        setOfferPrice(parseInt(docRef.data().offerPrice));
        setDiscountText(docRef.data().discountText);
      });
  }, []);

  return (
    <Fragment>
      <Header title="Inicio" />
      <div className={`${montserrat.className} d-flex flex-column h-100`}>
        <Nav />
        <div className="section-cover">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-7 z-index">
                <h1 className="display-1">
                  Smarterbot
                  <span className="color"> CHATBOT</span>
                </h1>
                <p className="large mt-3">
                  Automatiza tus procesos con nuestras soluciones avanzadas.
                  <b> Optimiza tu empresa con Make</b> para automatizar tareas y personaliza chatbots entrenados con la información de tu empresa para mejorar la atención al cliente y aumentar las ventas.
                </p>
                ¡Prueba gratuita de 30 días con Shopify, Chatbot de WhatsApp y Make!
                <a
                  className="btn btn-primary btn-lg mt-4 mb-4"
                  href="/subscribe"
                >
                  Regístrate gratis
                </a>
              </div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-5 mx-auto text-center img-home-container">
                <img
                  className="align-middle img-fluid rounded img-home"
                  src="../images/Meet_Pedro_Zaffuto.jpeg"
                  width="460"
                  alt="Smarterbot"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section-shop" id="suscribete">
          <div className="container">
            <h1 className="display-1 text-center mb-4">
              Elige tu <span className="color">Plan</span>
            </h1>
            <div className="row justify-content-center">
              <PlanCard
                title="Freemium"
                text1="Gratis (30 días)"
                text2="Acceso a todas las categorías"
                text3="Automatización limitada"
                text4="10 Integraciones"
                text5="Optimización básica"
                text6="Sí"
                modal={false}
                link="/subscribe"
                linkText="ChatBOT Regístro gratis"
              />
              <PlanCard
                title="Premium"
                text1="Desde $65/mes Licencia REQUERIDA"
                text2="Automatización avanzada"
                text3="Integraciones múltiples"
                text4="Licencias ChatGPT, Claude, Make"
                text5="Soporte técnico dedicado"
                text6="40 horas de soporte mensual"
                modal={true}
                link="/subscribe/pro"
                linkText="Comprar Suscripción"
              />
              <PlanCard
                title="Custom"
                text1="$2.300/mes Licencia REQUERIDA"
                text2="Integración a medida"
                text3="Automatización completa"
                text4="Licencias exclusivas (Gemini, Make, Claude)"
                text5="Soporte semanal dedicado"
                text6="Setup completo en Google Workspace"
                modal={true}
                link="/subscribe/custom"
                linkText="Consultar"
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Fragment>
  );
}
