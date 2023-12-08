import { Fragment, useState } from "react";

function PlanCard(props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div className="bg-light rounded plans col-sm-12 col-lg-6 col-xl-4 py-4">
        <h2 className="mb-3 text-center">
          <span className="color large">{props.title}</span>
        </h2>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Inscripción</th>
              <td>
                {props.title == "Basic" ? (
                  props.text1
                ) : (
                  <a
                    href="#modal-valores"
                    data-bs-toggle="modal"
                    onClick={() => setShowModal(true)}
                  >
                    Valores por categorías
                  </a>
                )}
              </td>
            </tr>
            <tr>
              <th scope="row">Pagar por Día</th>
              <td>{props.text2}</td>
            </tr>
            <tr>
              <th scope="row">Precios Dinámicos</th>
              <td>{props.text3}</td>
            </tr>
            <tr>
              <th scope="row">Centros de Canje</th>
              <td>{props.text4}</td>
            </tr>
            <tr>
              <th scope="row">Anticipación Reserva</th>
              <td>{props.text5}</td>
            </tr>
            <tr>
              <th scope="row">Descuentos y Descargas</th>
              <td>{props.text6}</td>
            </tr>
          </tbody>
        </table>
        <div className="d-grid">
          <a
            className="btn btn-block btn-primary btn-md mt-4"
            href={`${props.link}`}
          >
            {props.linkText}
          </a>
        </div>
      </div>
      {showModal ? (
        <div
          id="modal-valores"
          className="modal fade show mont"
          aria-modal="true"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <h5 className="text-uppercase text-center">Plan Pro</h5>
                  <h2 className="mb-3 text-center">
                    <span className="large">
                      Valores por <span className="color">categorías</span>
                    </span>
                  </h2>

                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">hasta 10 contactos</th>
                        <td>Gratis</td>
                      </tr>
                      <tr>
                        <th scope="row">de 11 a 50 contactos</th>
                        <td>$ 24.000</td>
                      </tr>
                      <tr>
                        <th scope="row">51 a 500 contactos</th>
                        <td>$ 36.000</td>
                      </tr>
                      <tr>
                        <th scope="row">501 a 3.000 contactos</th>
                        <td>$ 48.000</td>
                      </tr>
                      <tr>
                        <th scope="row">Personilzado con APIs</th>
                        <td>Consultar</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="d-grid">
                    <a
                      className="btn btn-block btn-primary btn-md mt-4 mb-4"
                      href="/subscribe/pro"
                    >
                      Comprar Suscripción
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}
export default PlanCard;
