import {Fragment, useEffect, useState} from 'react';
import Head from 'next/head';
import Script from 'next/script';
import {useRouter} from 'next/router';
import {Montserrat} from '@next/font/google';
import {db} from '../../../../services/firebaseService';
const montserrat = Montserrat({subsets: ['latin'], weight: 'variable'});

function Pay(props) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(false);
  const [subscriptionsCount, setSubscriptionsCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selections, setSelections] = useState([]);
  useEffect(() => {}, []);

  const updateCount = (option) => {
    if (option == 'minus' && subscriptionsCount > 1) {
      setSubscriptionsCount(subscriptionsCount - 1);
      updateValues();
    }
    if (option == 'plus' && subscriptionsCount < 10) {
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
                  ? '3 a 10 años - Gratis'
                  : parseInt(value) == 2
                  ? '11 a 18 años - $24.000'
                  : parseInt(value) == 3
                  ? '19 a 34 años - $36.000'
                  : parseInt(value) == 4
                  ? '35 a 64 años - $48.000'
                  : '65 años - Gratis',
              value,
              realValue,
            }
          : aux[j] != null
          ? aux[j]
          : {};
      totalAux =
        totalAux +
        (typeof aux[j].realValue == 'undefined' ? 0 : aux[j].realValue);
    }
    setSelections(aux);
    setTotalPrice(totalAux);
  };

  const processPayment = async () => {
    setLoading(true);
    let update = await db.collection('accounts').doc(props.userId).update({
      planType: 'PRO',
      subscriptionsCount,
      totalPrice,
      paymentStatus: 'PENDING',
    });
    window.location.href = `/pay/${props.userId}/add/process`;
  };

  return (
    <Fragment>
      <Head>
        <title>Mountain Pass</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Mountain Pass – Suscríbete y paga sólo las horas que esquíes"
        />
        <meta name="author" content="Mountain Pass" />
        <title>Mountain Pass – Esquía pagando solo el tiempo que uses</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mountain Pass - La nueva forma de disfrutar la montaña"
        />
        <meta
          property="og:description"
          content="Suscríbete y obtén una montaña de beneficios"
        />
        <meta
          property="og:image"
          content="https://faisandu.com/mountainpass//images/mountainpass-cover.jpg"
        />
        <meta property="og:image:width" content="828" />
        <meta property="og:image:height" content="450" />
        <meta property="og:url" content="https://https://www.mountainpass.cl" />
        <meta property="og:site_name" content="Mountainpass" />
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
        </Script>{' '}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-WS4L7S5"
          strategy="afterInteractive"
        />
      </Head>
      <header>
        <nav className="navbar-transparent d-flex justify-content-center">
          <a className="d-block" href="#">
            <img
              className="margin-top img-fluid"
              src="/images/MountainPassv2.svg"
              width={220}
            />
          </a>
        </nav>
      </header>
      <div className={`${montserrat.className} section-shop pt-5 pb-0`}>
        <div className="container">
          <div className="z-index">
            <h1 className="text-center mb-4">Agrega suscripciones</h1>
            <div className="bg-light rounded col-md-12 col-xl-6 py-5 mx-auto">
              <div className="row order-container">
                <div className="col-md-12">
                  <h3 className="mb-4">Vas a agregar a tu cuenta:</h3>

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
                                ? '1 Membresía'
                                : `${subscriptionsCount} Membresías`}{' '}
                              Pro {subscriptionsCount > 1 ? 'Anuales' : 'Anual'}
                            </small>
                          </strong>
                        </h4>
                        <h3>
                          $
                          {totalPrice
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                        </h3>
                      </div>
                      <div className="col-md-5">
                        <div className="qty mt-2">
                          <span
                            className="minus-small"
                            onClick={() => updateCount('minus')}
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
                            onClick={() => updateCount('plus')}
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
                              Membresía {i + 1} {i > 0 ? '' : `(tu membresía)`}
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
                                ''
                              )}
                              {i > 0 ? (
                                <option value="2">
                                  11 a 18 años - $24.000
                                </option>
                              ) : (
                                ''
                              )}
                              <option value="3">19 a 34 años - $36.000</option>
                              <option value="4">35 a 64 años - $48.000</option>
                              {i > 0 ? (
                                <option value="5">65 años - Gratis</option>
                              ) : (
                                ''
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
                      {saving ? 'Actualizando cuenta...' : 'Actualizar cuenta'}
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
      <footer className="footer bg-transparent">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-sm-12">
              <p className="d-block">
                <strong>Mountain Pass</strong> 2023 –{' '}
                <a href="mailto:clientes@mountainpass.cl">
                  clientes@mountainpass.cl
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
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
