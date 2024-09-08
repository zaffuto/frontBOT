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
                ¡Prueba gratuita de 15 días y usa los cupones de descuento disponibles!
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
                title="Básico"
                text1="Gratis"
                text2="Sí"
                text3="No"
                text4="Uno a elección"
                text5="24 horas"
                text6="No"
                modal={false}
                link="/subscribe"
                linkText="Regístrate Gratis"
              />
              <PlanCard
                title="Pro"
                text1="Precios por categorías"
                text2="Sí"
                text3="Sí"
                text4="Todos"
                text5="30 días"
                text6="Sí"
                modal={true}
                link="/subscribe/pro"
                linkText="Comprar Suscripción"
              />
            </div>
          </div>
        </div>
        <div className="section-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-6 mx-auto text-center">
                <img
                  className="align-middle img-fluid rounded img-home-two"
                  src="../images/Meet_Pedro_Zaffuto.jpeg"
                  width="460"
                  alt="Beneficios"
                />
              </div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-6 z-index">
                <h1>
                  Cupones <span className="color">de Descuento y Beneficios</span>
                </h1>
                <p className="large mt-3">
                  Tus suscriptores disfrutarán de descuentos en servicios adicionales como alojamiento, renta temporal, clases y mucho más.
                </p>

                <div>
                  <br />
                  <a
                    className="btn btn-primary btn-md mt-4"
                    href="/preguntas-frecuentes"
                  >
                    ¿Cómo funciona?
                  </a>
                  <a
                    className="btn btn-primary btn-md mt-4 mx-3"
                    href="/precios"
                  >
                    Tarifas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-white mb-2">
          <div className="container">
            <div className="row align-content-start align-items-center">
              <div className="col-12 col-sm-12 col-md-8 mx-auto text-center">
                <h1 className="mb-5">
                  Conoce <span className="color">Smarterbot</span>
                </h1>
                <div className="justify-content-center">
                  <div className="video-home rounded">
                    <div className="embed-container">
                      <iframe
                        src="https://www.youtube.com/embed/Mnfzklo2CVw?start=0"
                        frameBorder="0"
                        allowFullScreen
                        title="Video de Smarterbot"
                      ></iframe>

                    </div>
                  </div>
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
