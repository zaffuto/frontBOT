import { Fragment, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { db } from "../../services/firebaseService";
import { compareSync } from "bcryptjs-react";
import { Montserrat } from "@next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

function Login(props) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);
  const [password, setPassword] = useState("");

  const doLogin = async () => {
    setLoading(true);
    let user = await db
      .collection("accounts")
      .where("email", "==", email)
      .where("deleted", "==", false)
      .limit(1)
      .get();
    if (user.size > 0) {
      let passwordCheck = compareSync(password, user.docs[0].data().password);
      if (passwordCheck) {
        localStorage.setItem("__smtb__id", user.docs[0].id);
        localStorage.setItem(
          "__smtb__ud",
          JSON.stringify(Object.assign(user.docs[0].data(), { password: "" }))
        );
        window.location.href = `/dashboard/${user.docs[0].data().type}`;
      } else {
        alert("Usuario no existe");
        setLoading(false);
      }
    } else {
      alert("email no existe");
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      doLogin();
    }
  };

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
            <h1 className="text-center mb-4">Iniciar sesión</h1>
            <div className="bg-light rounded col-sm-12 col-xl-5 py-5 mx-auto">
              <div className="row order-container">
                <div className="col-md-12">
                  <div className="row">
                    <h3 className="mb-4">Ingresa a tu cuenta</h3>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Correo Electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e)}
                    />
                    <label>Correo Electrónico</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e)}
                    />
                    <label>Contraseña</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={check}
                      onChange={(e) => setCheck(e.target.checked)}
                    />
                    <label className="form-check-label">
                      {" "}
                      Recordar contraseña
                    </label>
                  </div>
                  <div className="text-center">
                    <a
                      className="btn btn-primary btn-lg d-block mt-4"
                      disabled={loading}
                      onClick={() => doLogin()}
                    >
                      {loading ? "Ingresando..." : "Ingresar"}
                    </a>
                  </div>
                  <div className="text-center mt-4 mb-0">
                    <a
                      href="/auth/recover"
                      className="text-decoration-none link-dark"
                    >
                      <strong>Recuperar Contraseña</strong>
                    </a>
                  </div>
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

export default Login;
