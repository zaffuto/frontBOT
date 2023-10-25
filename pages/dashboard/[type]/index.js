import {Fragment, useEffect, useState} from 'react';
import Head from 'next/head';
import Script from 'next/script';
import {Montserrat} from '@next/font/google';
import Sidebar from '../../../components/Sidebar';
import {db} from '../../../services/firebaseService';
import moment from 'moment';
import {isEmpty} from 'lodash';
import DashNav from '../../../components/DashNav';
const montserrat = Montserrat({subsets: ['latin'], weight: 'variable'});

function Dashboard(props) {
  const [displayMobileBar, setDisplayMoblieBar] = useState(false);
  const [userId, setUserId] = useState('');
  const [saving, setSaving] = useState(false);
  const [userData, setUserData] = useState({});
  const [price, setPrice] = useState(0);
  const [offerPrice, setOfferPrice] = useState(0);
  const [discountText, setDiscountText] = useState('');
  const [totalUsers, setTotalUsers] = useState(0);
  const [paidUsers, setPaidUsers] = useState(0);

  useEffect(() => {
    const userId = localStorage.getItem('__mtp__id');
    setUserId(userId);
    db.collection('accounts')
      .where('type', '==', 'user')
      .get()
      .then((querySnapshot) => {
        setTotalUsers(querySnapshot.size);
      });
    db.collection('accounts')
      .where('type', '==', 'user')
      .where('paymentStatus', '==', 'DONE')
      .get()
      .then((querySnapshot) => {
        setPaidUsers(querySnapshot.size);
      });
    db.collection('accounts')
      .doc(userId)
      .get()
      .then((docRef) => {
        setUserData(docRef.data());
      });
    db.collection('settings')
      .doc('--')
      .get()
      .then((docRef) => {
        setPrice(docRef.data().price);
        setOfferPrice(docRef.data().offerPrice);
        setDiscountText(docRef.data().discountText);
      });
  }, []);

  const updateSettings = () => {
    setSaving(true);
    db.collection('settings')
      .doc('--')
      .update({
        price: parseInt(price),
        offerPrice: parseInt(offerPrice),
        discountText,
      })
      .then(() => {
        setSaving(false);
        alert('Opciones Actualizadas');
      });
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
      </Head>
      <div className={`${montserrat.className} d-flex flex-column h-100`}>
        {' '}
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
        <header>
          <nav className="navbar navbar-expand-md fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand" href={`/dashboard/${props.userType}`}>
                <img
                  className="margin-top img-fluid"
                  src="/images/MountainPassv2.svg"
                  width={220}
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setDisplayMoblieBar(!displayMobileBar)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`dash-nav collapse navbar-collapse ${
                  displayMobileBar ? 'show' : ''
                }`}
                id="navbarCollapse"
              >
                <DashNav userType={props.userType}></DashNav>
              </div>
            </div>
          </nav>
        </header>
        <div className="mont container-fluid dashboard">
          <div className="row">
            <Sidebar userType={props.userType} />
            <main
              role="main"
              className="col-md-10 ml-sm-auto col-lg-9 pt-5 pb-5 px-5"
            >
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-5 border-bottom">
                <h2>Dashboard</h2>
                <div className="btn-toolbar mb-2 mb-md-0"></div>
              </div>
              <div className="row mt-5 mb-5">
                {props.userType == 'user' ? (
                  <Fragment>
                    {(!isEmpty(userData) &&
                      userData.expirationDate &&
                      moment
                        .unix(userData.expirationDate.seconds)
                        .diff(moment(), 'days') < 30) ||
                    userData.paymentStatus == 'PENDING' ? (
                      <div className="col-md-12 mb-5">
                        <div className="alert alert-primary" role="alert">
                          <div className="row align-items-center">
                            <div className="col-md-10">
                              {userData.paymentStatus != 'PENDING' ? (
                                <p className="mb-0">
                                  Tu cuenta vence el{' '}
                                  {!isEmpty(userData)
                                    ? moment
                                        .unix(userData.expirationDate.seconds)
                                        .format('DD-MM-YYYY')
                                    : ''}
                                  . Haz click en el siguiente botón para renovar
                                  tu suscripción.
                                </p>
                              ) : (
                                <p className="mb-0">
                                  Actualiza tu cuenta al plan PRO y podrás
                                  disfrutar de todos sus beneficios
                                </p>
                              )}
                            </div>
                            <div className="col-md-2">
                              <a
                                href={`/pay/${userId}`}
                                className="btn btn-primary w-100 dashboard-payment-button"
                              >
                                Actualízate a PRO
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                    {!isEmpty(userData) &&
                    userData.paymentStatus != 'PENDING' ? (
                      <Fragment>
                        <div className="col-md-6">
                          <div className="card">
                            <h5 className="card-header">
                              Mis suscripciones Mountain Pass.
                            </h5>
                            <div className="card-body">
                              <p className="card-text">
                                Revisa y administra aquí tus suscripciones
                              </p>
                              <a
                                href="/dashboard/user/subscriptions"
                                className="btn btn-primary"
                              >
                                Ver suscripciones
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card">
                            <h5 className="card-header">Mi Información</h5>
                            <div className="card-body">
                              <p className="card-text">
                                Revisa aquí tus datos y actualiza tu plan.
                              </p>
                              <a
                                href="/dashboard/user/account"
                                className="btn btn-primary"
                              >
                                Mi Mountain Pass
                              </a>
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    ) : (
                      ''
                    )}
                  </Fragment>
                ) : (
                  ''
                )}
                {props.userType == 'admin' ? (
                  <Fragment>
                    <div className="col-md-12 mb-5">
                      <div className="row justify-content-center">
                        <div className="col-md-4 text-center">
                          <h1>{totalUsers}</h1>
                          <p>Usuarios Inscritos</p>
                        </div>
                        <div className="col-md-4 text-center">
                          <h1>{paidUsers}</h1>
                          <p>Usuarios con pago realizado</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-5">
                      <h4>Administra los precios de suscripción</h4>
                    </div>
                    <div className="col-md-6">
                      <label>Precio</label>
                      <input
                        type="text"
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Precio Oferta</label>
                      <input
                        type="text"
                        className="form-control"
                        value={offerPrice}
                        onChange={(e) => setOfferPrice(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12 mt-4">
                      <label>Texto Oferta</label>
                      <input
                        type="text"
                        className="form-control"
                        value={discountText}
                        onChange={(e) => setDiscountText(e.target.value)}
                      />
                    </div>
                    <div className="col-md-4 mt-4"></div>
                    <div className="col-md-4 mt-4"></div>
                    <div className="col-md-4 mt-4">
                      <button
                        className="btn btn-primary w-100"
                        disabled={saving}
                        onClick={() => updateSettings()}
                      >
                        {saving ? 'Guardando...' : 'Guardar Opciones'}
                      </button>
                    </div>
                  </Fragment>
                ) : (
                  ''
                )}
              </div>
            </main>
          </div>
        </div>
        <footer className="footer mt-auto py-4">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <a className="footer-brand d-block" href="#">
                  <img
                    className="margin-top img-fluid "
                    src="/images/MountainPass-white.svg"
                  />
                </a>
              </div>
              <div className="col-sm-6">
                <p className="d-block">Mountain Pass 2023 </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      userType: context.query.type,
    },
  };
}

export default Dashboard;
