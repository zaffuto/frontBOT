import { Fragment } from "react";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { BounceLoader } from "react-spinners";
import { Montserrat } from "@next/font/google";
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
      window.location.href = `/api/processAddPayment?uid=${id}`;
    }, 2000);
  }
  return (
    <Fragment>
      <Head>
        <title>SmarterBot</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Smarter Bot – Suscríbete y paga sólo las horas que esquíes"
        />
        <meta name="author" content="Smarter Bot" />
        <title>Smarter Bot – Esquía pagando solo el tiempo que uses</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Smarter Bot - La nueva forma de disfrutar la montaña"
        />
        <meta
          property="og:description"
          content="Suscríbete y obtén una montaña de beneficios"
        />
        <meta
          property="og:image"
          content="https://smarterbot.cl/images/smarterbot-cover.jpg"
        />
        <meta property="og:image:width" content="828" />
        <meta property="og:image:height" content="450" />
        <meta property="og:url" content="https://smarterbot.cl" />
        <meta property="og:site_name" content="SmarterBot" />
        <meta property="fb:app_id" content="" />
        <link
          rel="icon"
          type="image/png"
          href="/images/mountainpass-favicon-16.png"
          sizes="16x16"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/images/mountainpass-favicon-32.png"
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/images/mountainpass-favicon-96.png"
          sizes="96x96"
        ></link>
        <link rel="apple-touch-icon" href="images/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="images/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="images/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="images/touch-icon-ipad-retina.png"
        />
      </Head>
      <div className={`${montserrat.className} d-flex flex-column h-100`}>
        {" "}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MRN2ZCR8ZP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MRN2ZCR8ZP');
        `}
        </Script>{" "}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-WS4L7S5"
          strategy="afterInteractive"
        />
      </div>
      <header>
        <nav className="navbar-transparent d-flex justify-content-center">
          <a className="d-block text-center" href="/">
            <img
              className="margin-top img-fluid"
              src="/images/MountainPassv2.svg"
              width={220}
            />
          </a>
        </nav>
      </header>
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
        <footer className="footer bg-transparent">
          <div className="container-fluid">
            <div className="row text-center">
              <div className="col-sm-12">
                <p className="d-block">
                  <strong>Smarter Bot</strong> 2023 –{" "}
                  <a href="mailto:clientes@smarterbot.cl">
                    clientes@smarterbot.cl
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export default Proccess;
