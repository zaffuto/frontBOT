import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { Montserrat } from "@next/font/google";
import { Fragment, useEffect, useState } from "react";
import { db } from "../services/firebaseService";

const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

export default function Prices() {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [offerPrice, setOfferPrice] = useState(0);
  const [displayMobileBar, setDisplayMoblieBar] = useState(false);
  const [discountText, setDiscountText] = useState("");

  const updateCount = (option) => {
    if (option == "minus" && count > 1) {
      localStorage.setItem("__mtp_count", count - 1);
      setCount(count - 1);
    }
    if (option == "plus" && count < 10) {
      localStorage.setItem("__mtp_count", count + 1);
      setCount(count + 1);
    }
  };

  useEffect(() => {
    if (typeof window != "undefined") {
      localStorage.setItem("__mtp_count", 1);
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
          content="Mountain Pass – Suscríbete y paga sólo las horas que esquíes"
        />
        <meta name="author" content="Mountain Pass" />
        <title>Mountain Pass – Esquía pagando solo el tiempo que uses</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mountain Pass - La nueva forma de disfrutar la montaña"
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
        {" "}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MRN2ZCR8ZP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MRN2ZCR8ZP');
        `}
        </Script>{" "}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-WS4L7S5"
          strategy="afterInteractive"
        />
        <header>
          <nav className="navbar navbar-expand-md fixed-top">
            <div className="container-fluid">
              <Link className="navbar-brand" href="/">
                <img
                  className="margin-top img-fluid"
                  src="/images/MountainPassv2.svg"
                  width={220}
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setDisplayMoblieBar(!displayMobileBar)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse ${
                  displayMobileBar ? "show" : ""
                }`}
                id="navbarCollapse"
              >
                <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>

                <a
                  className="btn btn-secondary mx-2 btn-header"
                  href="/auth/login"
                >
                  Ingresa
                </a>
                <a
                  className="btn btn-primary btn-header mx-2 btn-sub"
                  href="/subscribe"
                >
                  Inscríbete Gratis
                </a>
                <a
                  className="btn btn-primary btn-header mx-2 btn-sub"
                  href="https://tienda.mountainpass.cl"
                  target="_blank"
                >
                  Tienda
                </a>
              </div>
            </div>
          </nav>
        </header>
        <div className="section-single">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-9 mx-auto mb-5 text-center">
                <h1 className="text-center mb-5">
                  Conoce los <span className="color">precios por hora</span>
                </h1>

                <p className="large text-center">
                  Todos los suscriptores de <strong>Smarter Bot</strong> tienen
                  acceso a pagar por hora en nuestros centros de ski asociados.
                  Revisa los valores para los planes Basic y Pro.
                </p>

                <p className="text-center">
                  <strong>Plan Pro</strong>, tiene acceso a los “Precios
                  Dinámicos”, que fluctúan según diferentes condiciones, como la
                  temporada del año, el horario, y otras variables. En la tabla
                  podrás revisar los rangos mínimos y máximos entre los que se
                  moverán nuestros valores.
                </p>

                <p className="mb-0">
                  <strong>Plan Basic</strong> tiene un valor fijo por hora,
                  publicado en la tabla a continuación.
                </p>
                <h3 className="mt-5">¡Lánzate a la nueva forma de esquiar!</h3>
              </div>
            </div>
            <div className="container">
              <div className="row align-content-start align-items-center">
                <div className="bg-light rounded col-12 col-sm-12 col-lg-12 col-xl-9 mx-auto text-center p-0 mb-5">
                  <p className="mb-0">
                    <a
                      href="https://laparva.cl/"
                      target="_blank"
                      title="La Parva"
                    >
                      <img
                        className="img-fluid"
                        src="/images/la-parva.png"
                        width="200"
                      />
                    </a>
                  </p>

                  <h4 className="title-table">Temporada Alta</h4>
                  <table className="table table-price">
                    <thead className="table-color">
                      <tr>
                        <th scope="col" className="align-middle">
                          <span className="title-table-price">Categorías</span>
                        </th>
                        <th scope="col" className="align-middle">
                          <span className="title-table-price">
                            Pro
                            <br />
                            <small>Precios dinámicos</small>
                          </span>
                        </th>
                        <th scope="col" className="align-middle">
                          <span className="title-table-price">
                            Basic
                            <br />
                            <small>Precio Fijo</small>
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price pt-3"
                        >
                          Super Senior
                          <br />
                          <small>(Desde 66 años)</small>
                        </th>
                        <td className="align-middle title-table-price">
                          <strong>- -</strong>
                          <br />
                        </td>
                        <td className="align-middle">
                          <strong>- -</strong>
                          <br />
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price"
                        >
                          Senior
                          <br />
                          <small>(60 a 65 años)</small>
                        </th>
                        <td>
                          <small>Desde</small>
                          <strong>6.900</strong>
                          <br />
                          <small>Hasta</small>
                          <strong>9.900</strong>
                        </td>
                        <td className="align-middle">
                          <strong>9.900</strong>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price"
                        >
                          Adulto <br />
                          <small>(13 a 59 años)</small>
                        </th>
                        <td>
                          <small>Desde</small>
                          <strong>11.900</strong>
                          <br />
                          <small>Hasta</small>
                          <strong>14.900</strong>
                        </td>
                        <td className="align-middle">
                          <strong>14.900</strong>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price"
                        >
                          Menor <br />
                          <small>(6 a 12 años)</small>
                        </th>
                        <td>
                          <small>Desde</small>
                          <strong>6.900</strong>
                          <br />
                          <small>Hasta</small>
                          <strong>9.900</strong>
                        </td>
                        <td className="align-middle">
                          <strong>9.900</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <h4 className="title-table">Temporada Baja</h4>
                  <table className="table table-price">
                    <thead className="table-color">
                      <tr>
                        <th scope="col" className="align-middle">
                          <span className="title-table-price">Categorías</span>
                        </th>
                        <th scope="col" className="align-middle">
                          <span className="title-table-price">
                            Pro
                            <br />
                            <small>Precios dinámicos</small>
                          </span>
                        </th>
                        <th scope="col" className="align-middle">
                          <span className="title-table-price">
                            Basic
                            <br />
                            <small>Precio Fijo</small>
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price pt-3"
                        >
                          Super Senior
                          <br />
                          <small>(Desde 66 años)</small>
                        </th>
                        <td className="align-middle title-table-price">
                          <strong>- -</strong>
                          <br />
                        </td>
                        <td className="align-middle">
                          <strong>- -</strong>
                          <br />
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price"
                        >
                          Senior
                          <br />
                          <small>(60 a 65 años)</small>
                        </th>
                        <td>
                          <small>Desde</small>
                          <strong>5.900</strong>
                          <br />
                          <small>Hasta</small>
                          <strong>8.900</strong>
                        </td>
                        <td className="align-middle">
                          <strong>8.900</strong>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price"
                        >
                          Adulto <br />
                          <small>(13 a 59 años)</small>
                        </th>
                        <td>
                          <small>Desde</small>
                          <strong>7.900</strong>
                          <br />
                          <small>Hasta</small>
                          <strong>10.900</strong>
                        </td>
                        <td className="align-middle">
                          <strong>10.900</strong>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price"
                        >
                          Menor <br />
                          <small>(6 a 12 años)</small>
                        </th>
                        <td>
                          <small>Desde</small>
                          <strong>5.900</strong>
                          <br />
                          <small>Hasta</small>
                          <strong>8.900</strong>
                        </td>
                        <td className="align-middle">
                          <strong>8.900</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-light rounded col-12 col-sm-12 col-lg-12 col-xl-9 mx-auto text-center p-0 mb-5">
                  <p className="mb-0">
                    <a
                      href="https://antillanca.cl/"
                      target="_blank"
                      title="Antillanca"
                    >
                      <img
                        className="img-fluid"
                        src="/images/antillanca.png"
                        width="200"
                      />
                    </a>
                  </p>

                  <h4 className="title-table">Temporada Alta</h4>
                  <table className="table table-price">
                    <thead className="table-color">
                      <tr>
                        <th scope="col" className="align-middle">
                          <span className="title-table-price">Categorías</span>
                        </th>
                        <th scope="col" className="align-middle">
                          <span className="title-table-price">
                            Pro
                            <br />
                            <small>Precios dinámicos</small>
                          </span>
                        </th>
                        <th scope="col" className="align-middle">
                          <span className="title-table-price">
                            Basic
                            <br />
                            <small>Precio Fijo</small>
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price"
                        >
                          Senior
                          <br />
                          <small>(Desde 65 años)</small>
                        </th>
                        <td>
                          <small>Desde</small>
                          <strong>5.900</strong>
                          <br />
                          <small>Hasta</small>
                          <strong>8.900</strong>
                        </td>
                        <td className="align-middle">
                          <strong>8.900</strong>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price"
                        >
                          Adulto <br />
                          <small>(18 a 64 años)</small>
                        </th>
                        <td>
                          <small>Desde</small>
                          <strong>7.900</strong>
                          <br />
                          <small>Hasta</small>
                          <strong>10.900</strong>
                        </td>
                        <td className="align-middle">
                          <strong>10.900</strong>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price"
                        >
                          Estudiante <br />
                          <small>(13 a 24 años)</small>
                        </th>
                        <td>
                          <small>Desde</small>
                          <strong>5.900</strong>
                          <br />
                          <small>Hasta</small>
                          <strong>8.900</strong>
                        </td>
                        <td className="align-middle">
                          <strong>8.900</strong>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price"
                        >
                          Menor <br />
                          <small>(5 a 12 años)</small>
                        </th>
                        <td>
                          <small>Desde</small>
                          <strong>5.900</strong>
                          <br />
                          <small>Hasta</small>
                          <strong>8.900</strong>
                        </td>
                        <td className="align-middle">
                          <strong>8.900</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <h4 className="title-table">Temporada Media</h4>
                  <table className="table table-price">
                    <thead className="table-color">
                      <tr>
                        <th scope="col" className="align-middle">
                          <span className="title-table-price">Categorías</span>
                        </th>
                        <th scope="col" className="align-middle">
                          <span className="title-table-price">
                            Pro
                            <br />
                            <small>Precios dinámicos</small>
                          </span>
                        </th>
                        <th scope="col" className="align-middle">
                          <span className="title-table-price">
                            Basic
                            <br />
                            <small>Precio Fijo</small>
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price"
                        >
                          Senior
                          <br />
                          <small>(Desde 65 años)</small>
                        </th>
                        <td>
                          <small>Desde</small>
                          <strong>4.900</strong>
                          <br />
                          <small>Hasta</small>
                          <strong>6.900</strong>
                        </td>
                        <td className="align-middle">
                          <strong>6.900</strong>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price"
                        >
                          Adulto <br />
                          <small>(18 a 64 años)</small>
                        </th>
                        <td>
                          <small>Desde</small>
                          <strong>5.900</strong>
                          <br />
                          <small>Hasta</small>
                          <strong>7.900</strong>
                        </td>
                        <td className="align-middle">
                          <strong>7.900</strong>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price"
                        >
                          Estudiante <br />
                          <small>(13 a 24 años)</small>
                        </th>
                        <td>
                          <small>Desde</small>
                          <strong>4.900</strong>
                          <br />
                          <small>Hasta</small>
                          <strong>6.900</strong>
                        </td>
                        <td className="align-middle">
                          <strong>6.900</strong>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price"
                        >
                          Menor <br />
                          <small>(5 a 12 años)</small>
                        </th>
                        <td>
                          <small>Desde</small>
                          <strong>4.900</strong>
                          <br />
                          <small>Hasta</small>
                          <strong>6.900</strong>
                        </td>
                        <td className="align-middle">
                          <strong>6.900</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <h4 className="title-table">Temporada Baja</h4>
                  <table className="table table-price">
                    <thead className="table-color">
                      <tr>
                        <th scope="col" className="align-middle">
                          <span className="title-table-price">Categorías</span>
                        </th>
                        <th scope="col" className="align-middle">
                          <span className="title-table-price">
                            Pro
                            <br />
                            <small>Precios dinámicos</small>
                          </span>
                        </th>
                        <th scope="col" className="align-middle">
                          <span className="title-table-price">
                            Basic
                            <br />
                            <small>Precio Fijo</small>
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price"
                        >
                          Senior
                          <br />
                          <small>(Desde 65 años)</small>
                        </th>
                        <td>
                          <small>Desde</small>
                          <strong>3.900</strong>
                          <br />
                          <small>Hasta</small>
                          <strong>4.900</strong>
                        </td>
                        <td className="align-middle">
                          <strong>4.900</strong>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price"
                        >
                          Adulto <br />
                          <small>(18 a 64 años)</small>
                        </th>
                        <td>
                          <small>Desde</small>
                          <strong>4.900</strong>
                          <br />
                          <small>Hasta</small>
                          <strong>5.900</strong>
                        </td>
                        <td className="align-middle">
                          <strong>5.900</strong>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price"
                        >
                          Estudiante <br />
                          <small>(13 a 24 años)</small>
                        </th>
                        <td>
                          <small>Desde</small>
                          <strong>3.900</strong>
                          <br />
                          <small>Hasta</small>
                          <strong>4.900</strong>
                        </td>
                        <td className="align-middle">
                          <strong>4.900</strong>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="align-middle title-table-price"
                        >
                          Menor <br />
                          <small>(5 a 12 años)</small>
                        </th>
                        <td>
                          <small>Desde</small>
                          <strong>3.900</strong>
                          <br />
                          <small>Hasta</small>
                          <strong>4.900</strong>
                        </td>
                        <td className="align-middle">
                          <strong>4.900</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-light rounded col-12 col-sm-12 col-lg-12 col-xl-9 mx-auto text-center p-0 mb-5">
                  <p className="mb-0">
                    <a
                      href="https://skiportillo.com/"
                      target="_blank"
                      title="Ski Portillo"
                    >
                      <img
                        className="img-fluid"
                        src="/images/ski-portillo.png"
                        width="200"
                      />
                    </a>
                  </p>
                  <hr />
                  <h3 className="mt-5 mb-5 text-muted">
                    Pronto más información
                  </h3>
                </div>
                <div className="bg-light rounded col-12 col-sm-12 col-lg-12 col-xl-9 mx-auto text-center p-0">
                  <p className="mb-0">
                    <a
                      href="https://laderas.com.ar/"
                      target="_blank"
                      title="Laderas"
                    >
                      <img
                        className="img-fluid"
                        src="/images/laderas.png"
                        width="200"
                      />
                    </a>
                  </p>
                  <hr />
                  <h3 className="mt-5 mb-5 text-muted">
                    Pronto más información
                  </h3>
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
                  Mountain Pass 2023 –{" "}
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
