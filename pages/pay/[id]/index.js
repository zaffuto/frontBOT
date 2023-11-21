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
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [subscriptionsCount, setSubscriptionsCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selections, setSelections] = useState([]);

  useEffect(() => {}, []);

  const updateCount = (option) => {
    if (option == "minus" && subscriptionsCount > 1) {
      setSubscriptionsCount(subscriptionsCount - 1);
      updateValues();
    }
    if (option == "plus" && subscriptionsCount < 10) {
      setSubscriptionsCount(subscriptionsCount + 1);
      updateValues();
    }
  };

  const updateValues = (value, index) => {
    let aux = selections;
    let priceAux = 0;
    let realValue =
      parseInt(value) == 1
        ? 0
        : parseInt(value) == 2
        ? 24000
        : parseInt(value) == 3
        ? 36000
        : parseInt(value) == 4
        ? 48000
        : 0;
    let totalAux = 0;
    for (let j = 0; j < subscriptionsCount; j++) {
      aux[j] =
        index == j
          ? {
              option:
                parseInt(value) == 1
                  ? "3 a 10 años - Gratis"
                  : parseInt(value) == 2
                  ? "11 a 18 años - $24.000"
                  : parseInt(value) == 3
                  ? "19 a 34 años - $36.000"
                  : parseInt(value) == 4
                  ? "35 a 64 años - $48.000"
                  : "65 años - Gratis",
              value,
              realValue,
            }
          : aux[j] != null
          ? aux[j]
          : {};
      totalAux =
        totalAux +
        (typeof aux[j].realValue == "undefined" ? 0 : aux[j].realValue);
    }
    setSelections(aux);
    setTotalPrice(totalAux);
  };

  const processPayment = async () => {
    setLoading(true);
    let update = await db.collection("accounts").doc(props.userId).update({
      planType: "PRO",
      subscriptionsCount,
      totalPrice: 1000,
      paymentStatus: "PENDING",
    });
    window.location.href = `/pay/${props.userId}/process`;
  };

  return (
    <Fragment>
      <Header title="Paga tu suscripcion"></Header>
      <SubscriptionNav></SubscriptionNav>
      <div className={`mont section-shop pt-5 pb-0`}>
        <div className="container">
          <div className="z-index">
            <h1 className="text-center mb-4">Completa tu pago</h1>
            <div className="bg-light rounded col-md-12 col-xl-6 py-5 mx-auto">
              <div className="row order-container">
                <div className="col-md-12">
                  <h3 className="mb-4">Resumen de tu compra:</h3>

                  <div
                    className="rounded-small alert alert-primary mt-4"
                    role="alert"
                  >
                    <div className="row justify-content-center align-items-center">
                      <div className="col-md-7">
                        <h4 className="mb-2 text-left">
                          <strong>
                            <small>
                              {subscriptionsCount == 1
                                ? "1 Membresía"
                                : `${subscriptionsCount} Membresías`}{" "}
                              Pro {subscriptionsCount > 1 ? "Anuales" : "Anual"}
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
                            />
                          </span>
                          <input
                            type="number"
                            className="count-small"
                            name="qty"
                            value={subscriptionsCount}
                          />
                          <span
                            className="plus-small"
                            onClick={() => updateCount("plus")}
                          >
                            <img
                              className="align-middle img-fluid"
                              src="/images/i-plus.svg"
                              width="50"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    {Array(subscriptionsCount)
                      .fill(0)
                      .map((_, i) => (
                        <Fragment key={i}>
                          <hr />
                          <div className="form-floating">
                            <p className="mb-1 pl-3">
                              Membresía {i + 1} {i > 0 ? "" : `(tu membresía)`}
                            </p>
                            <select
                              className="form-select form-select-lg mb-3"
                              aria-label=".form-select-lg example"
                              onChange={(e) => updateValues(e.target.value, i)}
                            >
                              <option selected="">Seleccionar categoría</option>
                              {i > 0 ? (
                                <option value="1">3 a 10 años - Gratis</option>
                              ) : (
                                ""
                              )}
                              {i > 0 ? (
                                <option value="2">
                                  11 a 18 años - $24.000
                                </option>
                              ) : (
                                ""
                              )}
                              <option value="3">19 a 34 años - $36.000</option>
                              <option value="4">35 a 64 años - $48.000</option>
                              {i > 0 ? (
                                <option value="5">65 años - Gratis</option>
                              ) : (
                                ""
                              )}
                            </select>
                          </div>
                        </Fragment>
                      ))}
                  </div>

                  <div className="text-center">
                    <button
                      className="btn btn-primary w-100 btn-lg d-block mt-4"
                      onClick={(e) => processPayment()}
                      disabled={saving}
                    >
                      {saving ? "Actualizando cuenta..." : "Actualizar cuenta"}
                    </button>
                  </div>
                  <div className="text-center mt-4 mb-0">
                    <img
                      className="webpay align-middle img-fluid rounded"
                      src="/images/webpay.svg"
                      width="120"
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
