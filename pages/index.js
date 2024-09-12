import { Montserrat } from "@next/font/google";
import { Fragment, useEffect, useState } from "react";
import { db } from "../services/firebaseService";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PlanCard from "../components/planCard";

const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

export default function Home() {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [offerPrice, setOfferPrice] = useState(0);
  const [displayMobileBar, setDisplayMobileBar] = useState(false);
  const [discountText, setDiscountText] = useState("");

  const updateCount = (option) => {
    if (option === "minus" && count > 1) {
      localStorage.setItem("__smtb_count", count - 1);
      setCount(count - 1);
    }
    if (option === "plus" && count < 10) {
      localStorage.setItem("__smtb_count", count + 1);
      setCount(count + 1);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("__smtb_count", 1);
    }
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
                title="Prueba o Freemium"
                text1="Gratis (30 días)"
                text2="Shopify + WhatsApp + Make"
                text3="Automatización limitada"
                text4="1 Integración (Make)"
                text5="Optimización básica"
                text6="Sí"
                modal={false}
                link="/subscribe"
                linkText="Regístrate Gratis"
              />
              <PlanCard
                title="Premium"
                text1="Desde $XX/mes"
                text2="Integraciones múltiples"
                text3="Licencia ChatGPT, Claude, y Make"
                text4="META API para chatbot"
                text5="Automatización al 50% con AI"
                text6="40 horas de soporte mensual"
                modal={true}
                link="/subscribe/pro"
                linkText="Comprar Suscripción"
              />
              <PlanCard
                title="Custom"
                text1="A consultar"
                text2="Solo para Shopify ($2300+)"
                text3="Licencias Gemini y Make"
                text4="Integración con BSALE, DEFONTANA, ENVIAME.IO"
                text5="40 horas semanales de soporte"
                text6="Setup en Google Workspace"
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
