import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { Montserrat } from "@next/font/google";
import { Fragment, useEffect, useState } from "react";
import { db } from "../services/firebaseService";

const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

export default function Home() {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [offerPrice, setOfferPrice] = useState(0);
  const [displayMobileBar, setDisplayMoblieBar] = useState(false);
  const [discountText, setDiscountText] = useState("");
  const [showModal, setShowModal] = useState(false);

  const updateCount = (option) => {
    if (option == "minus" && count > 1) {
      localStorage.setItem("__mtp_count", count - 1);
      setCount(count - 1);
    }
    if (option == "plus" && count < 10) {
      localStorage.setItem("__mtp_count", count + 1);
      setCount(count + 1);
    }
  };

  useEffect(() => {
    if (typeof window != "undefined") {
      localStorage.setItem("__mtp_count", 1);
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
      <Head>
        <title>SmarterBot</title>
        {/* ... Rest of the head section remains unchanged */}
      </Head>
      <div className={`${montserrat.className} d-flex flex-column h-100`}>
        {/* ... Rest of the code remains unchanged */}
        <header>
          <nav className="navbar navbar-expand-md fixed-top">
            <div className="container-fluid">
              <Link className="navbar-brand" href="/">
                <img
                  className="margin-top img-fluid"
                  src="/images/SmarterBOTv2.svg"
                  width={220}
                />
              </Link>
              {/* ... Rest of the code remains unchanged */}
            </div>
          </nav>
        </header>
        {/* ... Rest of the code remains unchanged */}
        <div className="section-cover">
          {/* ... Rest of the code remains unchanged */}
        </div>
        {/* ... Rest of the code remains unchanged */}
      </div>
      {showModal ? (
        <div
          id="modal-valores"
          className="modal fade show mont"
          aria-modal="true"
          role="dialog"
          style={{ display: "block" }}
        >
          {/* ... Rest of the code remains unchanged */}
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}
