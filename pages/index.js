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
      <Head>
        <title>SmarterBot</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Smarter ChatBOT – Suscríbete ya!" 
        />
        <meta name="author" content="Smarter ChatBOT" />
        <title>Smarter ChatBOT – Esquía pagando solo el tiempo que uses</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Smarter ChatBOT - La nueva forma de disfrutar la montaña"
        />
        <meta
          property="og:description"
          content="Suscríbete y obtén una montaña de beneficios"
        />
        <meta
          property="og:image"
          content="https://mountainpass.cl/images/mountainpass-share.png"
        />
        <meta property="og:image:width" content="828" />
        <meta property="og:image:height" content="450" />
        <meta property="og:url" content="https://smarterbot.cl" />
        <meta property="og:site_name" content="SmarterBot" />
        <meta property="fb:app_id" content="" />
        <link
          rel="icon"
          type="image/png"
          href="/images/mountainpass-favicon-16.png"
          sizes="16x16"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/images/mountainpass-favicon-32.png"
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/images/mountainpass-favicon-96.png"
          sizes="96x96"
        ></link>
        <link rel="apple-touch-icon" href="images/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="images/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="images/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="images/touch-icon-ipad-retina.png"
        />
      </Head>
      <div className={`${montserrat.className} d-flex flex-column h-100`}>
        <Nav></Nav>
        <div className="section-cover">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-7 z-index">
                <h1 className="display-1">
                  Título
                  <span className="color">Principal</span>
                </h1>
                <p className="large mt-3">
                  Bot Vendedor es una membresía anual que te permitirá acceder
                  a sincronizar tus productos y servicios con WhatsApp Business{" "}
                  <b>Respuestas automáticas 24x7</b>, más una serie de beneficios.
                </p>
                <p className="large mt-3">
                  Innovamos la forma de interactuar con tus clientes.
                  ChatBOT trabaja para ti ¡las 24 horas del día.
                  ¡Respuestas automatizadas desde base de datos MySQL y Firebase!
                </p>
                <a
                  className="btn btn-primary btn-lg mt-4 mb-4"
                  href="/subscribe"
                >
                  Inscríbete gratis
                </a>
                <a
                  className="btn btn-primary btn-lg mt-4 mb-4 home-store"
                  href="https://tienda.smarterbot.cl"
                  target="_blank"
                >
                  Ir a la Tienda
                </a>
                <p>
                  <img
                    className="margin-top img-fluid mt-4"
                    src="/images/centros.png"
                    width="640"
                    title="xxxxxxx"
                  />
                </p>
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
              <div className="bg-light rounded plans col-sm-12 col-lg-6 col-xl-4 py-4">
                <h2 className="mb-3 text-center">
                  <span className="color large">Basic</span>
                </h2>
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">Inscripción y Beneficios</th>
                      <td>Gratis</td>
                    </tr>
                    <tr>
                      <th scope="row">Pagar por hora</th>
                      <td>Sí</td>
                    </tr>
                    <tr>
                      <th scope="row">Sinconizar Catálogo</th>
                      <td>No</td>
                    </tr>
                    <tr>
                      <th scope="row">CRM Integrado</th>
                      <td>Uno a elección</td>
                    </tr>
                    <tr>
                      <th scope="row">Módulo de Reserva</th>
                      <td>78 horas</td>
                    </tr>
                    <tr>
                      <th scope="row">Módulo de Descuentos</th>
                      <td>No</td>
                    </tr>
                  </tbody>
                </table>
                <div className="d-grid">
                  <a
                    className="btn btn-block btn-primary btn-md mt-4"
                    href="/subscribe"
                  >
                    Inscríbete gratis
                  </a>
                </div>
              </div>

              <div className="bg-light rounded plans col-sm-12 col-lg-6 col-xl-4 py-4">
                <h2 className="mb-3 text-center">
                  <span className="color large">Pro</span>
                </h2>
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">Inscripción</th>
                      <td>
                        <a
                          href="#modal-valores"
                          data-bs-toggle="modal"
                          onClick={() => setShowModal(true)}
                        >
                          Valores por categorías
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Pagar por hora</th>
                      <td>Sí</td>
                    </tr>
                    <tr>
                      <th scope="row">Precios Dinámicos</th>
                      <td>Sí</td>
                    </tr>
                    <tr>
                      <th scope="row">Demostración</th>
                      <td>Todos</td>
                    </tr>
                    <tr>
                      <th scope="row">Anticipación Reserva</th>
                      <td>24 horas</td>
                    </tr>
                    <tr>
                      <th scope="row">Montaña de Beneficios</th>
                      <td>Sí</td>
                    </tr>
                  </tbody>
                </table>
                <div className="d-grid">
                  <a
                    className="btn btn-block btn-primary btn-md mt-4"
                    href="/subscribe/pro"
                  >
                    Comprar suscripción
                  </a>
                </div>
              </div>
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
                  Las estrategias de Marketing con códigos QR busca la interacción entre la marca y el consumidor, ofreciendo al usuario acceso a más contenidos
                  Los suscriptores de Smarter ChatBOT podrán disfrutar de tarifas
                  de ski por hora, ofertas especiales en alojamiento, rental,
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
                  Conoce <span className="color">Smarter ChatBOT</span>
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
        </div>
        <footer className="footer mt-auto py-5">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <a className="footer-brand d-block" href="#">
                  <img
                    className="margin-top img-fluid "
                    src="/images/MountainPass-white.svg"
                  />
                </a>
                <p className="d-block mt-4">
                  Smarter ChatBOT 2023 –{" "}
                  <a href="mailto:clientes@smarterbot.cl">
                    clientes@smarterbot.cl
                  </a>
                </p>

                <div className="follow-us mt-4">
                  <a
                    href="https://www.instagram.com/mountainpassgroup/"
                    target="_blank"
                  >
                    <img
                      className="icon-follow-us align-middle img-fluid"
                      src="/images/i-instagram.svg"
                      width="40"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/MountainPassGroup/"
                    target="_blank"
                  >
                    <img
                      className="icon-follow-us align-middle img-fluid"
                      src="/images/i-facebook.svg"
                      width="40"
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@mountainpassgroup"
                    target="_blank"
                  >
                    <img
                      className="icon-follow-us align-middle img-fluid"
                      src="/images/i-tiktok.svg"
                      width="40"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/@mountainpassgroup"
                    target="_blank"
                  >
                    <img
                      className="icon-follow-us align-middle img-fluid"
                      src="/images/i-youtube.svg"
                      width="40"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-6">
                <ul>
                  <li>
                    <a href="/quienes-somos">Quiénes Somos</a>
                  </li>
                  <li>
                    <a href="/precios">Tarifas de ski por hora</a>
                  </li>
                  <li>
                    <a href="/politicas-de-privacidad">
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <a href="/terminos-y-condiciones">Términos de Uso</a>
                  </li>
                  <li>
                    <a href="/preguntas-frecuentes">¿Cómo Funciona?</a>
                  </li>
                  <li>
                    <a href="/auth/login">Iniciar Sesión</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}
