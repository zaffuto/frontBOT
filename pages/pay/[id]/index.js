import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { Montserrat } from "@next/font/google";
import { db } from "../../../services/firebaseService";
import Header from "../../../components/Header";
import SubscriptionNav from "../../../components/SubscriptionNav";
import SubscriptionFooter from "../../../components/SubscriptionFooter";
const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

function Pay(props) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [subscriptionsCount, setSubscriptionsCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selections, setSelections] = useState([]);

  // Inicializar 'selections' cuando cambia 'subscriptionsCount'
  useEffect(() => {
    const initialSelections = Array(subscriptionsCount).fill({});
    setSelections(initialSelections);
  }, [subscriptionsCount]);

  const updateCount = (option) => {
    if (option === "minus" && subscriptionsCount > 1) {
      setSubscriptionsCount(subscriptionsCount - 1);
    }
    if (option === "plus" && subscriptionsCount < 10) {
      setSubscriptionsCount(subscriptionsCount + 1);
    }
  };

  const optionDetails = {
    1: { label: "Crear Tienda - Gratis", realValue: 0 },
    2: { label: "Licencia Shopify Advanced", realValue: 24000 },
    3: { label: "Venta Nocturna - Ticket Promedio", realValue: 36000 },
    4: { label: "Alto Volumen - Revolución IA", realValue: 48000 },
    5: { label: "Demo - Gratis", realValue: 0 },
  };

  const updateValues = (value, index) => {
    const aux = [...selections];
    const { label, realValue } = optionDetails[value] || {
      label: "Selecciona una opción",
      realValue: 0,
    };
    aux[index] = { option: label, value, realValue };
    const totalAux = aux.reduce((acc, curr) => acc + (curr.realValue || 0), 0);
    setSelections(aux);
    setTotalPrice(totalAux);
  };

  const isFormComplete =
    selections.length === subscriptionsCount &&
    selections.every((selection) => selection.value);

  const processPayment = async () => {
    if (!isFormComplete) return;
    setSaving(true);
    await db.collection("accounts").doc(props.userId).update({
      planType: "PRO",
      subscriptionsCount,
      totalPrice,
      paymentStatus: "PENDING",
    });
    window.location.href = `/pay/${props.userId}/process`;
  };

  return (
    <Fragment>
      <Header title="Finaliza tu compra"></Header>
      <SubscriptionNav></SubscriptionNav>
      <div className={`mont section-shop pt-5 pb-0`}>
        <div className="container">
          <div className="z-index">
            <h1 className="text-center mb-4">Finaliza tu compra</h1>
            <div className="bg-light rounded col-md-12 col-xl-6 py-5 mx-auto">
              <div className="row order-container">
                <div className="col-md-12">
                  <h3 className="mb-4">Esto es lo que estás adquiriendo:</h3>

                  <div
                    className="rounded-small alert alert-primary mt-4"
                    role="alert"
                  >
                    <div className="row justify-content-center align-items-center">
                      <div className="col-md-7">
                        <h4 className="mb-2 text-left">
                          <strong>
                            <small>
                              {subscriptionsCount} Membresía
                              {subscriptionsCount > 1 ? "s" : ""} Pro Anual
                              {subscriptionsCount > 1 ? "es" : ""}
                            </small>
                          </strong>
                        </h4>
                        <h3>
                          $
                          {totalPrice
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        </h3>
                      </div>
                      <div className="col-md-5">
                        <div className="qty mt-2">
                          <span
                            className="minus-small"
                            onClick={() => updateCount("minus")}
                          >
                            <img
                              className="align-middle img-fluid"
                              src="/images/i-minus.svg"
                              width="50"
                              alt="Disminuir cantidad"
                            />
                          </span>
                          <input
                            type="number"
                            className="count-small"
                            name="qty"
                            value={subscriptionsCount}
                            readOnly
                          />
                          <span
                            className="plus-small"
                            onClick={() => updateCount("plus")}
                          >
                            <img
                              className="align-middle img-fluid"
                              src="/images/i-plus.svg"
                              width="50"
                              alt="Aumentar cantidad"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    {Array.from({ length: subscriptionsCount }, (_, i) => (
                      <Fragment key={i}>
                        <hr />
                        <div className="form-floating">
                          <p className="mb-1 pl-3">
                            Membresía {i + 1}{" "}
                            {i === 0 ? `(tu membresía)` : ""}
                          </p>
                          <select
                            className="form-select form-select-lg mb-3"
                            aria-label="Seleccionar categoría"
                            onChange={(e) => updateValues(e.target.value, i)}
                          >
                            <option value="">Seleccionar categoría</option>
                            {i > 0 && (
                              <option value="1">Crear Tienda - Gratis</option>
                            )}
                            {i > 0 && (
                              <option value="2">
                                Licencia Shopify Advanced
                              </option>
                            )}
                            <option value="3">
                              Venta Nocturna - Ticket Promedio
                            </option>
                            <option value="4">
                              Alto Volumen - Revolución IA
                            </option>
                            {i > 0 && <option value="5">Demo - Gratis</option>}
                          </select>
                        </div>
                      </Fragment>
                    ))}
                  </div>

                  {!isFormComplete && (
                    <p className="text-danger text-center mt-2">
                      Por favor, completa todas las selecciones antes de
                      continuar.
                    </p>
                  )}

                  <div className="text-center">
                    <button
                      className="btn btn-primary w-100 btn-lg d-block mt-4"
                      onClick={processPayment}
                      disabled={!isFormComplete || saving}
                    >
                      {saving ? "Procesando pago..." : "Completar pago"}
                    </button>
                  </div>
                  <p className="text-center mt-3">
                    Tu información está protegida y segura.
                  </p>
                  <div className="text-center mt-4 mb-0">
                    <img
                      className="webpay align-middle img-fluid rounded"
                      src="/images/webpay.svg"
                      width="120"
                      alt="Pagos seguros a través de Webpay"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className=""></span>
        </div>
      </div>
      <SubscriptionFooter></SubscriptionFooter>
    </Fragment>
  );
}

export default Pay;

export async function getServerSideProps(context) {
  return {
    props: {
      userId: context.query.id,
    },
  };
}
