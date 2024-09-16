import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import Sidebar from "../../../components/Sidebar";
import ChileanRutify from "chilean-rutify";
import { db } from "../../../services/firebaseService";
import moment from "moment";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import bcrypt from "bcryptjs-react";
import DashNav from "../../../components/DashNav";
import Header from "../../../components/Header";
const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

function Account(props) {
  const [displayMobileBar, setDisplayMoblieBar] = useState(false);
  const [saving, setSaving] = useState(false);
  const [subscriptionsCount, setSubscriptionsCount] = useState(0);
  const [expirationDate, setExpirationDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName1, setLastName1] = useState("");
  const [lastName2, setLastName2] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rut, setRut] = useState("");
  const [validRut, setValidRut] = useState(true);
  const [password, setPassword] = useState("");
  const [paymentInfo, setPaymentInfo] = useState([]);
  const [passwordType, setPasswordType] = useState("password");
  const [eye, seteye] = useState(true);

  useEffect(() => {
    if (typeof window != "undefined") {
      db.collection("accounts")
        .doc(localStorage.getItem("__smtb__id"))
        .get()
        .then((docRef) => {
          setFirstName(docRef.data().firstName);
          setLastName1(docRef.data().lastName1);
          setLastName2(docRef.data().lastName2);
          setEmail(docRef.data().email);
          setPhone(docRef.data().phone);
          setRut(docRef.data().rut);
          setExpirationDate(
            docRef.data().expirationDate
              ? moment
                  .unix(docRef.data().expirationDate.seconds)
                  .format("DD-MM-YYYY")
              : ""
          );
          setSubscriptionsCount(docRef.data().subscriptionsCount);
        });
      db.collection("paymentData")
        .where("accountId", "==", localStorage.getItem("__smtb__id"))
        .get()
        .then((querySnapshot) => {
          let paymentItems = querySnapshot.docs.map((paymentItem) => {
            return { id: paymentItem.id, data: paymentItem.data() };
          });
          setPaymentInfo(paymentItems);
        });
    }
  }, []);

  const toggleEye = () => {
    if (passwordType == "password") {
      setPasswordType("text");
      seteye(false);
    } else {
      setPasswordType("password");
      seteye(true);
    }
  };

  const handleRut = (rut) => {
    setRut(ChileanRutify.formatRut(rut));
  };

  const verifyRut = () => {
    setValidRut(ChileanRutify.validRut(rut));
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email));
  };

  const updateAccount = () => {
    setSaving(true);
    if (
      firstName == "" ||
      lastName1 == "" ||
      lastName2 == "" ||
      phone == "" ||
      email == "" ||
      rut == ""
    ) {
      setSaving(false);
      return alert("Debes completar todos los datos");
    }
    if (!validRut) {
      setSaving(false);
      return alert("Debes ingresar un rut con formato válido");
    }
    if (!validateEmail(email)) {
      setSaving(false);
      return alert("Debes ingresar un email con formato válido");
    }
    if (phone.length != 12) {
      setSaving(false);
      return alert(
        "Debes ingresar un teléfono de 8 dígitos anteponiendo el +569"
      );
    }

    let data = {
      deleted: false,
      firstName,
      lastName1,
      lastName2,
      email,
      rut,
      phone,
      type: "user",
    };
    if (password != "") {
      data.password = bcrypt.hashSync(password, 10);
    }

    db.collection("accounts")
      .doc(localStorage.getItem("__smtb__id"))
      .update(data)
      .then(() => {
        alert("Datos Actualizados");
        setSaving(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Ocurrió un error al crear tu cuenta. Inténtalo nuevamente");
        setSaving(false);
      });
  };

  return (
    <Fragment>
      <Header title="Dashboard - Cuenta"></Header>
      <div className={`${montserrat.className} d-flex flex-column h-100`}>
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
        <div className={`mont container-fluid dashboard`}>
          <div className="row">
            <Sidebar userType={props.userType} />
            <main
              role="main"
              className="col-md-10 ml-sm-auto col-lg-9 pt-5 pb-5 px-5"
            >
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-5 border-bottom">
                <h2>Mi cuenta</h2>
              </div>

              <div className="row mt-5 mb-5 align-items-center justify-content-center">
                <div className="col-12">
                  <h3 className="mb-3">Mi plan</h3>
                </div>
                <div className="col-sm-12 col-md-4 mb-3">
                  <p>Cantidad de suscripciones: {subscriptionsCount}</p>
                </div>
                <div className="col-sm-12 col-md-4 mb-3">
                  <p>Plan Expira el : {expirationDate}</p>
                </div>
                <div className="col-sm-12 col-md-4 mb-3"></div>
                <div className="col-12">
                  <h3 className="mb-3">Actualiza tus datos</h3>
                </div>
                <div className="col-sm-12 col-md-4 mb-3">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      placeholder="Nombre"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    ></input>
                    <label>Nombre</label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 mb-3">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      placeholder="Apellido"
                      type="text"
                      value={lastName1}
                      onChange={(e) => setLastName1(e.target.value)}
                    ></input>
                    <label>Apellido</label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 mb-3">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      placeholder="Segundo Apellido"
                      type="text"
                      value={lastName2}
                      onChange={(e) => setLastName2(e.target.value)}
                    ></input>
                    <label>Segundo Apellido</label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 mb-3">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      placeholder="Email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <label>Email</label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 mb-3">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      placeholder="Teléfono"
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    ></input>
                    <label>Teléfono</label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 mb-3">
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
                </div>
                <div className="col-sm-12 col-md-4 mb-3">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Rut"
                      value={rut}
                      onChange={(e) => handleRut(e.target.value)}
                      onBlur={(e) => verifyRut()}
                      disabled={true}
                    />
                    <label>Rut</label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 mb-3"></div>
                <div className="col-sm-12 col-md-4 mb-3"></div>
                <div className="col-sm-12 col-md-4 mb-3"></div>
                <div className="col-sm-12 col-md-4 mb-3">
                  <button
                    className="btn btn-primary w-100"
                    disabled={saving}
                    onClick={() => updateAccount()}
                  >
                    {saving ? "Actualizando tus datos..." : "Actualizar Datos"}
                  </button>
                </div>
                <div className="col-sm-12 col-md-4 mb-3"></div>

                <div className="col-12">
                  <h3 className="mb-3">Mis Pagos</h3>
                </div>

                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Nº Orden</th>
                          <th scope="col">Fecha</th>
                          <th scope="col">Valor</th>
                          <th scope="col">Asunto</th>
                          <th scope="col">Método</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paymentInfo.length > 0
                          ? paymentInfo.map((item, index) => {
                              return (
                                <tr key={index}>
                                  <td>{item.data.paymentData.commerceOrder}</td>
                                  <td>
                                    {item.data.paymentData.requestDate
                                      ? item.data.paymentData.requestDate
                                      : moment.unix(
                                          item.data.paymentData.requestData
                                        ).seconds}
                                  </td>
                                  <td>
                                    ${item.data.paymentData.amount}
                                    {item.data.paymentData.currency}
                                  </td>
                                  <td>{item.data.paymentData.subject}</td>
                                  <td>
                                    {item.data.paymentData?.paymentData
                                      ?.media || "--"}
                                  </td>
                                </tr>
                              );
                            })
                          : ""}
                      </tbody>
                    </table>
                  </div>
                </div>
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
                <p className="d-block">Smarter Bot 2023 </p>
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

export default Account;
