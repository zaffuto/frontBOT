import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { Montserrat } from "@next/font/google";
import Sidebar from "../../../components/Sidebar";
import ChileanRutify from "chilean-rutify";
import { db } from "../../../services/firebaseService";
import DashNav from "../../../components/DashNav";
import bcrypt from "bcryptjs-react";
const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

function Centers(props) {
  const [displayMobileBar, setDisplayMoblieBar] = useState(false);
  const [saving, setSaving] = useState(false);
  const [centers, setCenters] = useState([]);
  const [centerName, setCenterName] = useState("");
  const [accountFirstName, setAccountFirstName] = useState("");
  const [accountLastName1, setAccountLastName1] = useState("");
  const [accountLastName2, setAccountLastName2] = useState("");
  const [accountEmail, setAccountEmail] = useState("");
  const [accountPassword, setAccountPassword] = useState("");
  const [accountRut, setAccountRut] = useState("");
  const [accountPhone, setAccountPhone] = useState("");
  const [validRut, setValidRut] = useState(false);

  useEffect(() => {
    getCenters();
  }, []);

  const handleRut = (rut) => {
    setAccountRut(ChileanRutify.formatRut(rut));
  };

  const verifyRut = () => {
    setValidRut(ChileanRutify.validRut(accountRut));
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email));
  };

  const getCenters = () => {
    db.collection("centers")
      .where("deleted", "==", false)
      .get()
      .then((querySnapshot) => {
        let centers = querySnapshot.docs.map((item) => {
          return { id: item.id, data: item.data() };
        });
        setCenters(centers);
      });
  };

  const deleteCenter = async (centerId) => {
    if (confirm("Se Eliminará el centro y sus usuarios")) {
      let accounts = await db
        .collection("accounts")
        .where("centerId", "==", centerId)
        .get();
      accounts.forEach((accountsItem) => {
        db.collection("accounts")
          .doc(accountsItem.id)
          .update({ deleted: true });
      });
      let center = await db
        .collection("centers")
        .doc(centerId)
        .update({ deleted: true });
      alert("Centro Eliminado");
      getCenters();
    }
  };

  const saveCenter = async () => {
    setSaving(true);
    if (centerName == "") {
      setSaving(false);
      return alert("Debes ingresar un nombre para el centro");
    }

    if (
      accountFirstName == "" ||
      accountLastName1 == "" ||
      accountLastName2 == "" ||
      accountPhone == "" ||
      accountEmail == "" ||
      accountRut == "" ||
      accountPassword == ""
    ) {
      setSaving(false);
      return alert("Debes completar todos los datos");
    }
    if (!validRut) {
      setSaving(false);
      return alert("Debes ingresar un rut con formato válido");
    }
    if (!validateEmail(accountEmail)) {
      setSaving(false);
      return alert("Debes ingresar un email con formato válido");
    }
    if (accountPhone.length != 8) {
      setSaving(false);
      return alert("Debes ingresar un teléfono de 8 dígitos");
    }

    db.collection("accounts")
      .where("rut", "==", accountRut)
      .limit(1)
      .get()
      .then(async (querySnapshot) => {
        if (querySnapshot.size > 0) {
          return alert("Ya existe un usuario con este rut");
        } else {
          let center = await db
            .collection("centers")
            .add({ name: centerName, deleted: false, dateCreated: new Date() });
          db.collection("accounts")
            .add({
              deleted: false,
              dateCreated: new Date(),
              password: bcrypt.hashSync(accountPassword, 10),
              firstName: accountFirstName,
              lastName1: accountLastName1,
              lastName2: accountLastName2,
              email: accountEmail,
              rut: accountRut,
              phone: `+569${accountPhone}`,
              type: "center",
              centerId: center.id,
            })
            .then((docRef) => {
              if (docRef.id) {
                alert("Centro y usuario creados");
                setSaving(false);
                getCenters();
              }
            })
            .catch((error) => {
              console.log(error);
              alert(
                "Ocurrió un error al crear tu cuenta. Inténtalo nuevamente"
              );
              setSaving(false);
            });
        }
      });
  };

  return (
    <Fragment>
      <Head>
        <title>SmarterBot</title>
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
                  displayMobileBar ? "show" : ""
                }`}
                id="navbarCollapse"
              >
                <DashNav userType={props.userType}></DashNav>
              </div>
            </div>
          </nav>
        </header>
        <div className="container-fluid mont dashboard">
          <div className="row">
            <Sidebar userType={props.userType} />
            <main
              role="main"
              className="col-md-10 ml-sm-auto col-lg-9 pt-5 pb-5 px-5"
            >
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-5 border-bottom">
                <h2>Centros</h2>
              </div>

              <div className="row mt-5 mb-5">
                {centers.map((item, index) => {
                  return (
                    <div className="col-md-4 col-12" key={index}>
                      <div className="card">
                        <h5 className="card-header">{item.data.name}</h5>
                        <div className="card-body">
                          <a
                            onClick={() => deleteCenter(item.id)}
                            className="btn btn-primary mt-3"
                          >
                            Eliminar Centro
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="row mt-5 mb-5 align-items-center justify-content-center">
                <Fragment>
                  <div className="col-12">
                    <h3>Agrega un centro</h3>
                  </div>
                  <div className="col-12 mt-4">
                    <input
                      className="form-control"
                      placeholder="Nombre"
                      type="text"
                      value={centerName}
                      onChange={(e) => setCenterName(e.target.value)}
                    ></input>
                  </div>
                  <div className="col-12 mt-5">
                    <h4>Crea una cuenta para el centro</h4>
                  </div>
                  <div className="col-md-4 col-12 mb-3 mt-3">
                    <input
                      className="form-control"
                      placeholder="Nombre"
                      type="text"
                      value={accountFirstName}
                      onChange={(e) => setAccountFirstName(e.target.value)}
                    ></input>
                  </div>
                  <div className="col-md-4 col-12 mb-3">
                    <input
                      className="form-control"
                      placeholder="Apellido"
                      type="text"
                      value={accountLastName1}
                      onChange={(e) => setAccountLastName1(e.target.value)}
                    ></input>
                  </div>
                  <div className="col-md-4 col-12 mb-3">
                    <input
                      className="form-control"
                      placeholder="Segundo Apellido"
                      type="text"
                      value={accountLastName2}
                      onChange={(e) => setAccountLastName2(e.target.value)}
                    ></input>
                  </div>
                  <div className="col-md-4 col-12 mb-3">
                    <input
                      className="form-control"
                      placeholder="Email"
                      type="text"
                      value={accountEmail}
                      onChange={(e) => setAccountEmail(e.target.value)}
                    ></input>
                  </div>
                  <div className="col-md-4 col-12 mb-3">
                    <input
                      className="form-control"
                      placeholder="Teléfono"
                      type="text"
                      value={accountPhone}
                      onChange={(e) => setAccountPhone(e.target.value)}
                    ></input>
                  </div>
                  <div className="col-md-4 col-12 mb-3">
                    <input
                      className="form-control"
                      placeholder="Contraseña"
                      type="password"
                      value={accountPassword}
                      onChange={(e) => setAccountPassword(e.target.value)}
                    ></input>
                  </div>
                  <div className="col-md-4 col-12 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Rut"
                      value={accountRut}
                      onChange={(e) => handleRut(e.target.value)}
                      onBlur={(e) => verifyRut()}
                    />
                  </div>
                  <div className="col-md-4 col-12 mb-3"></div>
                  <div className="col-md-4 col-12 mt-4">
                    <button
                      className="btn btn-primary"
                      disabled={saving}
                      onClick={() => saveCenter()}
                    >
                      {saving ? "Creando Centro..." : "Crear centro"}
                    </button>
                  </div>
                </Fragment>
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

export default Centers;
