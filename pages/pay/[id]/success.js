import { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import moment from "moment";
import { Montserrat } from "@next/font/google";
import { db } from "../../../services/firebaseService";
import Header from "../../../components/Header";
import SubscriptionNav from "../../../components/SubscriptionNav";
import SubscriptionFooter from "../../../components/SubscriptionFooter";
const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });
function Success(props) {
  const [userName, setUserName] = useState("");
  const [subscriptionsCount, setSubscriptionsCount] = useState(0);
  const [expirationDate, setExpirationDate] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let userData = await db.collection("accounts").doc(props.userId).get();
    setUserName(
      `${userData.data().firstName} ${userData.data().lastName1} ${
        userData.data().lastName2
      }`
    );
    setSubscriptionsCount(userData.data().subscriptionsCount);
    setExpirationDate(
      moment.unix(userData.data().expirationDate.seconds).format("DD-MM-YYYY")
    );
  };

  return (
    <Fragment>
      <Header title="Pago Exitoso"></Header>
      <div className={`${montserrat.className} d-flex flex-column h-100`}></div>
      <SubscriptionNav></SubscriptionNav>
      <div className="section-shop pt-5 pb-0">
        <div className="container">
          <div className="z-index">
            <h1 className="text-center mb-4">¡Todo listo para esquiar!</h1>
            <div className="bg-light rounded col-md-12 col-xl-6 py-5 mx-auto">
              <div className="row order-container">
                <div className="col-md-12">
                  <div className="text-center mt-0 mb-4">
                    <img
                      className="icon-ok align-middle img-fluid"
                      src="/images/icon-ok.svg"
                      width="100"
                    />
                  </div>

                  <h4 className="mb-4">
                    ¡Te damos la bienvenida,{" "}
                    <span className="color">{userName}</span>!
                  </h4>
                  <p>
                    Hemos actualizado tu suscripción. Para realizar cambios,
                    dirígete a la información y configuración de tu perfil.
                  </p>

                  <h5 className="text-uppercase opacity-50 mt-4">
                    Suscripción
                  </h5>
                  <p>
                    {subscriptionsCount > 1
                      ? `${subscriptionsCount} Suscripciones Anuales`
                      : `1 Suscripción Anual`}
                  </p>

                  <h5 className="text-uppercase opacity-50 mt-4">
                    Válido hasta
                  </h5>
                  <p>{expirationDate}</p>

                  <div className="text-center mt-4">
                    <a
                      className="btn btn-primary btn-lg d-block mt-4"
                      href="/auth/login"
                    >
                      Ir a mi cuenta
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SubscriptionFooter></SubscriptionFooter>
      </div>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      userId: context.query.id,
    },
  };
}

export default Success;
