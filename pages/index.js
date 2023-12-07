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
  const [displayMobileBar, setDisplayMoblieBar] = useState(false);
  const [discountText, setDiscountText] = useState("");

  const updateCount = (option) => {
    if (option == "minus" && count > 1) {
      localStorage.setItem("__smtb_count", count - 1);
      setCount(count - 1);
    }
    if (option == "plus" && count < 10) {
      localStorage.setItem("__smtb_count", count + 1);
      setCount(count + 1);
    }
  };

  useEffect(() => {
    if (typeof window != "undefined") {
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
      <Header title="Inicio"></Header>
      <div className={`${montserrat.className} d-flex flex-column h-100`}>
        <Nav></Nav>
        <div className="section-cover">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-7 z-index">
                <h1 className="display-1">
                  Fullday
                  <span className="color">GO</span>
                </h1>
                <p className="large mt-3">
                  Descripción de los servicios de FulldayGO{" "}
                  <b>importante completar</b>
                </p>
                <p className="large mt-3">
                  ¡Inscríbete gratis en nuestros planes y conoce los cupones de descuento de
                  la tienda!
                </p>
                <a
                  className="btn btn-primary btn-lg mt-4 mb-4"
                  href="/subscribe"
                >
                  Inscríbete gratis
                </a>
              </div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-5 mx-auto text-center img-home-container">
                <img
                  className="align-middle img-fluid rounded img-home"
                  src="https://placehold.co/558x730"
                  width="460"
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
                title="Basic"
                text1="Gratis"
                text2="Sí"
                text3="No"
                text4="Uno a elección"
                text5="78 horas"
                text6="No"
                modal={false}
                link="/subscribe"
                linkText="Inscríbete Gratis"
              ></PlanCard>
              <PlanCard
                title="Pro"
                text1="Valores por categorías"
                text2="Sí"
                text3="Sí"
                text4="Todos"
                text5="24 horas"
                text6="Sí"
                modal={true}
                link="/subscribe/pro"
                linkText="Comprar Suscripción"
              ></PlanCard>
            </div>
          </div>
        </div>
        <div className="section-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-6 mx-auto text-center">
                <img
                  className="align-middle img-fluid rounded img-home-two"
                  src="https://placehold.co/558x730"
                  width="460"
                />
              </div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-6 z-index">
                <h1>
                  Una montaña <span className="color">de beneficios</span>
                </h1>
                <p className="large mt-3">
                  Los suscriptores de FulldayGO podrán disfrutar de tarifas de
                  ski por hora, ofertas especiales en alojamiento, rental,
                  clases, alimentación y mucho más.
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
                  Conoce <span className="color">FulldayGO</span>
                </h1>
                <div className="justify-content-center">
                  <div className="video-home rounded">
                    <div className="embed-container">
                      <iframe
                        src="https://www.youtube.com/embed//njrhms-83qc"
                        frameBorder="0"
                        allowFullScreen=""
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<div className="section-white mb-5">
          <div className="container">
            <div className="row align-content-start align-items-center">
              <div className="col-12 col-sm-12 col-md-12 mx-auto text-center">
                <h1 className="mb-5">Centros de ski asociados</h1>
                <div className="partner-container d-flex justify-content-center">
                  <div className="partner-brand">
                    <a
                      href="https://laparva.cl/"
                      target="_blank"
                      title="La Parva"
                    >
                      <img
                        className="img-fluid"
                        src="/images/la-parva.png"
                        width="180"
                      />
                    </a>
                  </div>
                  <div className="partner-brand">
                    <a
                      href="https://skiportillo.com/"
                      target="_blank"
                      title="Ski Portillo"
                    >
                      <img
                        className="img-fluid"
                        src="/images/ski-portillo.png"
                        width="180"
                      />
                    </a>
                  </div>
                  <div className="partner-brand">
                    <a
                      href="https://antillanca.cl/"
                      target="_blank"
                      title="Antillanca - Vive la Montaña"
                    >
                      <img
                        className="img-fluid"
                        src="/images/antillanca.png"
                        width="180"
                      />
                    </a>
                  </div>
                  <div className="partner-brand">
                    <a
                      href="https://laderas.com.ar/"
                      target="_blank"
                      title="Laderas – Cerro Perito Moreno"
                    >
                      <img
                        className="img-fluid"
                        src="/images/laderas.png"
                        width="180"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>*/}
        <Footer></Footer>
      </div>
    </Fragment>
  );
}