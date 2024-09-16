import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { db } from "../../../../services/firebaseService";
import bcrypt from "bcryptjs-react";
import { Montserrat } from "next/font/google";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import Header from "../../../../components/Header";
import SubscriptionNav from "../../../../components/SubscriptionNav";

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
      <Header title="Recupera contraseña"></Header>
      <SubscriptionNav></SubscriptionNav>
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
                  <a href="mailto:experiencias@smarterbot.cl">
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
