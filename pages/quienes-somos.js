import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { Montserrat } from "@next/font/google";
import { Fragment, useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

export default function QuienesSomos() {
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
          content="https://smarterbot.cl/images/smarterbot-cover.jpg"
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
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
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
                  Inscríbete gratis
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
              <div className="col-12">
                <h4 className="text-center text-uppercase">¿Quiénes somos?</h4>
                <h1 className="mb-5 text-center">
                  <span className="color">Mountain</span> Pass
                </h1>
              </div>
            </div>
            <div className="row align-content-start align-items-center">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-6 mx-auto text-center">
                <img
                  className="align-middle img-fluid rounded img-home-two"
                  src="/images/peter-leatherbee.jpg"
                  width="460"
                />
              </div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-6 z-index">
                <p className="large mt-3">
                  <strong>Smarter Bot</strong>, el sistema de cobro de ski por
                  hora, es una de las empresas de{" "}
                  <strong>Andes Mountain Corporation</strong>, holding fundado
                  por{" "}
                  <a
                    href="https://www.linkedin.com/in/peter-leatherbee-8b1b371/"
                    target="_blank"
                  >
                    Peter Leatherbee
                  </a>{" "}
                  para cambiar la manera en que las personas se relacionan con
                  la <strong>Cordillera de los Andes</strong>.
                </p>

                <p>
                  <strong>Peter Leatherbee</strong>, el Fundador y CEO Andes
                  Mountain Corporation, fue por más de 11 años el CEO de Andacor
                  S.A., operador de El Colorado, el centro de ski más grande de
                  Chile.
                </p>
                <p>
                  También es el creador de Parques de Farellones, el primer
                  parque de entretención en la nieve de América Latina, y lideró
                  la transformación tecnológica de la industria, al crear el
                  primer centro de ski con RFID (Radio Frequency
                  Identification).
                </p>
                <p>
                  En 2022, Leatherbee fundó Andes Mountain Corporation SpA, y
                  lanzó dos nuevas marcas: <strong>Mountain Park</strong>, la
                  primera plaza de entretención en la nieve, y{" "}
                  <strong>Smarter Bot</strong>, el sistema de cobro del ski por
                  hora, que en la temporada invernal tuvieron su funcionamiento
                  piloto en conjunto con el Centro de Ski Portillo.
                </p>
                <p>
                  Para 2023 el objetivo de <strong>Smarter Bot</strong> es que
                  más personas puedan tener una experiencia increíble y
                  disfrutar de la montaña a su propio ritmo.
                </p>
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
