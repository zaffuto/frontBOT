import { Montserrat } from "next/font/google";
import { Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PlanCard from "../components/planCard";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

export default function Home() {
  return (
    <Fragment>
      <Header title="Inicio" />
      <div className={`${montserrat.className} d-flex flex-column h-100`}>
        <Nav />
        <div className="section-cover">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-7 z-index">
                <h1 className="display-1">SMARTER <span className="color"> CHATBOT</span></h1>
                <p className="large mt-3">
                  <b>Tu empresa "no tiene ni un brillo" en la atención a clientes? ¡Eeera!</b>
                </p>
                <p className="large">
                  Smarter es más que smart. Con nosotros, tu celular no solo va a ser más inteligente, ¡va a dejar a todos locos! <br />
                  Automatiza, vende y soluciona todo <b>al toque</b> con <span className="color">SmarterBOT.cl</span>, sin complicarte la vida.
                </p>
                <p className="large">
                  ¡Solo para tiendas con licencias Shopify o Shopify Advanced!
                </p>
                <a className="btn btn-primary btn-lg mt-4 mb-4" href="/subscribe">
                  Agenda una DEMO
                </a>
              </div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-5 mx-auto text-center img-home-container">
                <img
                  className="align-middle img-fluid rounded img-home"
                  src="../images/Meet_Pedro_Zaffuto.jpeg"
                  width="460"
                  alt="Smarterbot"
                />
                <img
                  className="align-middle img-fluid rounded img-home mt-3"
                  src="../images/Smarterbot_Artificial_Intelligence.jpeg"
                  width="460"
                  alt="Smarterbot AI"
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
                title="DEMO SMARTER"
                text1="Shopify Smarter"
                text2="DEMO para licencias Shopify o Shopify Advanced"
                text3="Requiere ChatGPT API, Mermaidchart.com, Make.com y Cal.com"
                text4="Automatización media, Colaboración Humana 90%"
                text5="Integraciones fijas con licencia de ChatGPT y Cal.com con GMAIL"
                text6="Soporte técnico de pago a valor de cantidad de horas"
                modal={false}
                link="/subscribe"
                linkText="SUSCRIBIRSE"
              />
              <PlanCard
                title="SMARTER PLUS"
                text1="Shopify PLUS"
                text2="Orquestación para Gemini en Google Workspace"
                text3="Opcionales: BSALE, DEFONTANA, Enviame.io, REVERSO"
                text4="Automatización avanzada, Colaboración Humana 50%"
                text5="Integraciones múltiples con licencias de ChatGPT, Antrophic, Make y más"
                text6="Soporte técnico dedicado - 40 horas mensuales"
                modal={true}
                link="/subscribe/pro"
                linkText="COMPRAR SUSCRIPCION"
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Fragment>
  );
}
