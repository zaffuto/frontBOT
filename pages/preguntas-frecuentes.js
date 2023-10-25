import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import {Montserrat} from '@next/font/google';
import {Fragment, useState} from 'react';
import Faq from '../components/Faq';

const montserrat = Montserrat({subsets: ['latin'], weight: 'variable'});

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Mountain Pass</title>
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
          content="https://faisandu.com/mountainpass//images/mountainpass-cover.jpg"
        />
        <meta property="og:image:width" content="828" />
        <meta property="og:image:height" content="450" />
        <meta property="og:url" content="https://https://www.mountainpass.cl" />
        <meta property="og:site_name" content="Mountainpass" />
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
        {' '}
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
        </Script>{' '}
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
            <div className="row align-content-start align-items-center">
              <div className="col-12 col-sm-12 col-md-10 mx-auto">
                <h1 className="mb-5 text-center">
                  <span className="color">¿Cómo</span> Funciona?
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="partner-container d-flex justify-content-center">
                  <div className="accordion" id="accordionExample">
                    <Faq
                      title="¿Cómo reservo las horas de ski?"
                      answer="Cada titular debe realizar su reserva a través de nuestro sistema
            seleccionando el día y centro de ski de preferencia."
                    />
                    <Faq
                      title="¿Cómo pago las horas de ski?"
                      answer="Al minuto de realizar la reserva, se les solicitará
                      un abono en caso de no tener integrado el sistema de
                      pago con una tarjeta de crédito. Luego de esquiar,
                      se cobrará el tiempo real esquiado, devolviendo el
                      saldo a la tarjeta de crédito o cobrando el monto
                      según lo definido por cada titular como forma de
                      pago. Este monto final pagado podrá realizarse
                      virtual o presencialmente en el centro de ski
                      correspondiente."
                    />

                    <Faq
                      title="¿Puedo usar mis horas compradas en distintos
                      horarios del día?"
                      answer="Sí, puedes coordinarlo directamente con el ejecutivo
                      Mountain Pass que estará presente en cada centro de
                      ski."
                    />

                    <Faq
                      title="¿Voy a tener una tarjeta de Mountain Pass con
                      beneficios y promociones?"
                      answer="Todos nuestros miembros tendrán beneficios según el
                      programa de membresía que elija. Podrá hacer uso de
                      estos beneficios con una identificación virtual
                      enviada por correo electrónico o con su carnet de
                      identidad, previa validación con el sistema. Los
                      beneficios se comunicarán oportunamente a través de
                      nuestra web y redes sociales."
                    />

                    <Faq
                      title="Si quiero esquiar más horas en un mismo día, ¿Lo
                      puedo hacer?"
                      answer="Sí. La cantidad de horas totales que esquíes depende
                      de ti. Lo importante es registrar la hora de inicio
                      y la hora de término de tu dia de ski."
                    />

                    <Faq
                      title="Había mucho taco en el camino y no alcancé a
                      llegar a la hora, ¿Qué hago?"
                      answer="No te preocupes. Justamente ese es uno de los
                      beneficios de este sistema. Pagas lo que usas. Tus
                      horas puedes utilzarlas hasta 45 minutos antes del
                      cierre del centro, que es a las 17:00 horas."
                    />

                    <Faq
                      title="Si me quedo alojando en la montaña, ¿Puedo comprar
                      horas para el día siguiente?"
                      answer="Sí, realizando la reserva a través del sistema,
                      siempre respetando las políticas propias de cada
                      centro de ski."
                    />

                    <Faq
                      title="¿Tengo límite de horas compradas al día?"
                      answer="No hay límite de compra de horas."
                    />

                    <Faq
                      title="¿Puedo comprar horas el mismo día?"
                      answer="Solo si hay stock disponible y previa coordinación
                      con las políticas propias de cada centro de ski"
                    />

                    <Faq
                      title="¿Puedo usar un mismo ticket para distintas
                      personas?"
                      answer="Depende de la política de cada centro de ski. En la
                      gran mayoría de los casos, el ticket es personal e
                      intransferible."
                    />

                    <Faq
                      title="¿Cómo puedo calcular si me conviene esquiar por
                      horas?"
                      answer="En la calculadora de precios que depende de cada
                      centro de ski. Ésta la tendremos disponible
                      oportunamente."
                    />

                    <Faq
                      title="Si no uso las horas que reservé, ¿Las puedo
                      cambiar para otro momento?"
                      answer="Puedes postergar una parte del saldo cargado, pero
                      no es un reembolso total ya que los cupos son
                      limitados. En caso de no presentarte el dia
                      reservado, parte del abono queda pendiente para la
                      siguiente reserva que realices. Reservas validas
                      sólo para el 2023."
                    />

                    <Faq
                      title="Si pagué pero me arrepentí y no voy a ir a
                      esquiar, ¿Puedo pedir la devolución de mi dinero?"
                      answer="Hasta 48 horas antes puedes eliminar tu reserva sin
                      costo. Después de eso, tendrá un costo que se
                      comunicará oportunamente."
                    />
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
                  Mountain Pass 2023 –{' '}
                  <a href="mailto:clientes@mountainpass.cl">
                    clientes@mountainpass.cl
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
