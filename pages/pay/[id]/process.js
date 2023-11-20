import { Fragment } from "react";
import Header from "../../../components/Header";
import Script from "next/script";
import { useRouter } from "next/router";
import { BounceLoader } from "react-spinners";
import { Montserrat } from "@next/font/google";
import SubscriptionNav from "../../../components/SubscriptionNav";
import SubscriptionFooter from "../../../components/SubscriptionFooter";
const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Proccess(props) {
  const router = useRouter();
  const { id } = router.query;
  if (typeof window != "undefined") {
    setTimeout(() => {
      window.location.href = `/api/processPayment?uid=${id}`;
    }, 2000);
  }
  return (
    <Fragment>
      <Header title="Procesando tu pago"></Header>
      <div className={`${montserrat.className} d-flex flex-column h-100`}></div>
      <SubscriptionNav></SubscriptionNav>
      <div className="section-shop pt-5 pb-0">
        <div className="container processing-payment-wrapper">
          <div className="z-index">
            <BounceLoader
              color="blue"
              cssOverride={override}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            ></BounceLoader>
            <p>Procesando pago...</p>
            <small>No salgas de esta página</small>
          </div>
        </div>
        <SubscriptionFooter></SubscriptionFooter>
      </div>
    </Fragment>
  );
}

export default Proccess;
