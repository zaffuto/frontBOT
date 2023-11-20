import { Montserrat } from "@next/font/google";
import { Fragment, useEffect, useState } from "react";
import { db } from "../services/firebaseService";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";

const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

export default function Prices() {
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
      <Header title="Precios"></Header>
      <div className={`${montserrat.className} d-flex flex-column h-100`}>
        <Nav></Nav>
        <div className="section-single">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-9 mx-auto mb-5 text-center">
                <h1 className="text-center mb-5">
                  Conoce los <span className="color">precios </span>
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
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </Fragment>
  );
}
