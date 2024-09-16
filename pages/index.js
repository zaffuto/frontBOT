import { Montserrat } from "@next/font/google";
import { Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PlanCard from "../components/planCard";

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
                <h1 className="display-1">SMARTER <span className="color"> CHATBOT</span>
                </h1>
                <p className="large mt-3">
                Automatización de Tareas con LLM de IA.
                  <b>Sistematiza tu empresa con Make.com</b>La Revolución Tecnológica en Acción 🚀
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
                title="Subscribe"
                text1="Shopify Smarter"
                text2="Para tiendas con licencias Shopify o Shopify Advanced"
                text3="Incluye ChatGPT, MERMAID, Make, META API"
                modal={false}
                link="/subscribe"
                linkText="Suscribirse"
              />
              <PlanCard
                title="Subscribe Pro"
                text1="Shopify PLUS"
                text2="Orquestación para Gemini en Google Workspace"
                text3="Opcionales: BSALE, DEFONTANA, Enviame.io, REVERSO"
                text4="Automatización avanzada, Colaboración Humana 50%"
                text5="Integraciones múltiples con licencias de ChatGPT, Antrophic, Make y más"
                text6="Soporte técnico dedicado - 40 horas mensuales"
                modal={true}
                link="/subscribe/pro"
                linkText="Comprar Suscripción"
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Fragment>
  );
}
