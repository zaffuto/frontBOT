import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { db } from "../../../../services/firebaseService";
import bcrypt from "bcryptjs-react";
import { Montserrat } from "@next/font/google";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

function RecorverPassword(props) {
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [updated, setUpdated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [userId, setUserid] = useState("");

  const [eye, seteye] = useState(true);
  const [type, settype] = useState(false);

  useEffect(() => {
    checkUser(props.token);
  }, []);

  const checkUser = (token) => {
    db.collection("accounts")
      .where("recoverToken", "==", token)
      .limit(1)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size > 0) {
          setUserid(querySnapshot.docs[0].id);
        } else {
          setIsValid(false);
        }
      });
  };

  const toggleEye = () => {
    if (passwordType == "password") {
      setPasswordType("text");
      seteye(false);
      settype(true);
    } else {
      setPasswordType("password");
      seteye(true);
      settype(false);
    }
  };

  const savePassword = () => {
    setLoading(true);
    db.collection("accounts")
      .doc(userId)
      .update({ password: bcrypt.hashSync(password, 10), recoverToken: "" })
      .then(() => {
        setUpdated(true);
        setLoading(false);
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
      <header>
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
      <div className={`${montserrat.className} section-shop pt-5 pb-0`}>
        <div className="container">
          <div className="z-index">
            <h1 className="text-center mb-4">
              Restablece tu <br />
              contraseña
            </h1>
            <div className="bg-light rounded col-sm-12 col-xl-5 py-5 mx-auto">
              <div className="row order-container">
                <div className="col-md-12">
                  {updated ? (
                    <Fragment>
                      <div className="row">
                        <div className="text-center mt-0 mb-4">
                          <img
                            className="icon-ok align-middle img-fluid"
                            src="/images/icon-ok.svg"
                            width="100"
                          />
                        </div>

                        <h3 className="mb-4 text-center">
                          Tu contraseña fue restablecida con éxito
                        </h3>
                        <div className="text-center">
                          <a
                            href="/auth/login"
                            className="btn btn-primary btn-lg d-block mt-4"
                          >
                            Ingresar
                          </a>
                        </div>
                      </div>
                    </Fragment>
                  ) : isValid ? (
                    <Fragment>
                      <div className="row">
                        <h3 className="mb-4">Ingresa tu nueva contraseña</h3>
                      </div>
                      <div className="form-floating input-password">
                        <input
                          type={passwordType}
                          className="form-control"
                          placeholder="Contraseña"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          name="password"
                        />
                        {eye ? (
                          <RxEyeClosed
                            className="eye"
                            size={25}
                            onClick={() => toggleEye()}
                          />
                        ) : (
                          <RxEyeOpen
                            className="eye"
                            size={25}
                            onClick={() => toggleEye()}
                          />
                        )}
                        <label>Contraseña</label>
                      </div>

                      <div className="text-center">
                        <button
                          className="btn btn-primary btn-lg d-block mt-4"
                          onClick={() => savePassword()}
                          disabled={loading}
                        >
                          {loading ? "Guardando..." : "Guardar"}
                        </button>
                      </div>
                    </Fragment>
                  ) : (
                    <div className="row text-center">
                      <h3 className="mb-4">Token de acceso no es válido</h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer bg-transparent">
          <div className="container-fluid">
            <div className="row text-center">
              <div className="col-sm-12">
                <p className="d-block">
                  <strong>Smarter Bot</strong> 2023 –{" "}
                  <a href="mailto:experiencias@mountainpass.cl">
                    clientes@smartbot.cl
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

export async function getServerSideProps(context) {
  return {
    props: {
      token: context.query.token,
    },
  };
}

export default RecorverPassword;
