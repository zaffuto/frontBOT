import { Montserrat } from "@next/font/google";
import { Fragment, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

export default function QuienesSomos() {
  return (
    <Fragment>
      <Header title="Quienes Somos"></Header>
      <div className={`${montserrat.className} d-flex flex-column h-100`}>
        <Nav />
        <div className="section-single">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h4 className="text-center text-uppercase">¿Quiénes somos?</h4>
                <h1 className="mb-5 text-center">
                  <span className="color">Smarter</span> Bot
                </h1>
              </div>
            </div>
            <div className="row align-content-start align-items-center">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-6 mx-auto text-center">
                <img
                  className="align-middle img-fluid rounded img-home-two"
                  src="https://placehold.co/525x687"
                  width="460"
                />
              </div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-6 z-index">
                <p className="large mt-3">
                  <strong>Lorem Ipsum</strong> es simplemente el texto de
                  relleno de las imprentas y archivos de texto.
                </p>
                <p>
                  {" "}
                  Lorem Ipsum ha sido el texto de relleno estándar de las
                  industrias desde el año 1500, cuando un impresor (N. del T.
                  persona que se dedica a la imprenta) desconocido usó una
                  galería de textos y los mezcló de tal manera que logró hacer
                  un libro de textos especimen. No sólo sobrevivió 500 años,
                  sino que tambien ingresó como texto de relleno en documentos
                  electrónicos, quedando esencialmente igual al original. Fue
                  popularizado en los 60s con la creación de las hojas
                  "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
                  recientemente con software de autoedición, como por ejemplo
                  Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </Fragment>
  );
}
