import { Fragment, useState } from "react";
import Header from "../../components/Header";
import SubscritionNav from "../../components/SubscriptionNav";
import { db } from "../../services/firebaseService";
import { compareSync } from "bcryptjs-react";
import { Montserrat } from "next/font/google";
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
      <Header title="Login"></Header>
      <SubscritionNav></SubscritionNav>

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
