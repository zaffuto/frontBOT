import Head from "next/head";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import ChileanRutify from "chilean-rutify";
import { Fragment, useEffect, useState } from "react";
import { db } from "../../services/firebaseService";
import bcrypt from "bcryptjs-react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { sendProEmail } from "../../services/sendEmail";
import Header from "../../components/Header";
import SubscriptionNav from "../../components/SubscriptionNav";
import SubscriptionFooter from "../../components/SubscriptionFooter";
const mailgun = require("mailgun.js");
const mg = mailgun.client({
  username: "api",
  key: "key-80d577c302f3bcad991bea13930b3fde",
});
const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

export default function Home() {
  const [saving, setSaving] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName1, setLastName1] = useState("");
  const [lastName2, setLastName2] = useState("");
  const [rut, setRut] = useState("");
  const [validRut, setValidRut] = useState(true);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [dialCode, setDialCode] = useState("+56");
  const [eye, seteye] = useState(true);
  const [type, settype] = useState(false);
  const [subscriptionsCount, setSubscriptionsCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selections, setSelections] = useState([]);

  useEffect(() => {
    const input = document.querySelector("#phone");
    let iti = intlTelInput(input, { initialCountry: "CL" });
    input.addEventListener("countrychange", function () {
      setDialCode(iti.getSelectedCountryData().dialCode);
    });
  }, []);

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

  const updateCount = (option) => {
    if (option == "minus" && subscriptionsCount > 1) {
      setSubscriptionsCount(subscriptionsCount - 1);
      updateValues();
    }
    if (option == "plus" && subscriptionsCount < 10) {
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
                  ? "3 a 10 años - Gratis"
                  : parseInt(value) == 2
                  ? "11 a 18 años - $24.000"
                  : parseInt(value) == 3
                  ? "19 a 34 años - $36.000"
                  : parseInt(value) == 4
                  ? "35 a 64 años - $48.000"
                  : "65 años - Gratis",
              value,
              realValue,
            }
          : aux[j] != null
          ? aux[j]
          : {};
      totalAux =
        totalAux +
        (typeof aux[j].realValue == "undefined" ? 0 : aux[j].realValue);
    }
    setSelections(aux);
    setTotalPrice(totalAux);
  };

  const handleRut = (rut) => {
    setRut(ChileanRutify.formatRut(rut));
  };

  const verifyRut = () => {
    setValidRut(ChileanRutify.validRut(rut));
  };

  const updateEmail = (email) => {
    if (email != "") {
      console.log(email.split("@"));
      setEmail(
        email.split("@")[0].split("+")[0] +
          (email.split("@").length > 1 ? `@${email.split("@")[1]}` : "")
      );
    }
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email));
  };

  const createAccount = async () => {
    if (totalPrice > 0) {
      setSaving(true);
      if (
        firstName == "" ||
        lastName1 == "" ||
        lastName2 == "" ||
        phone == "" ||
        email == "" ||
        rut == "" ||
        password == ""
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
      if (phone.length != 9) {
        setSaving(false);
        return alert("Debes ingresar un teléfono de 8 dígitos");
      }
      if (!check) {
        setSaving(false);
        return alert("Debes aceptar términos y condiciones");
      }

      db.collection("accounts")
        .where("rut", "==", rut)
        .limit(1)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size > 0) {
            setSaving(false);
            return alert("Ya existe un usuario con este rut");
          } else {
            let sameEmail = db
              .collection("accounts")
              .where("email", "==", email)
              .limit(1)
              .get();
            if (sameEmail.size > 0) {
              setSaving(false);
              return alert("Ya existe un usuario con este email");
            } else {
              db.collection("accounts")
                .add({
                  deleted: false,
                  planType: "PRO",
                  dateCreated: new Date(),
                  paymentStatus: "PENDING",
                  password: bcrypt.hashSync(password, 10),
                  firstName,
                  lastName1,
                  lastName2,
                  email,
                  rut,
                  phone: `${dialCode}${phone}`,
                  check,
                  type: "user",
                  subscriptionsCount,
                  totalPrice: 1000,
                })
                .then((docRef) => {
                  if (docRef.id) {
                    db.collection("subscriptions")
                      .add({
                        deleted: false,
                        name: `${firstName} ${lastName1} ${lastName2}`,
                        rut,
                        accountId: docRef.id,
                      })
                      .then((subRef) => {
                        sendProEmail(firstName, docRef.id, email, () => {
                          window.location.href = `/pay/${docRef.id}/process`;
                        });
                      });
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
          }
        });
    } else {
      alert("No has seleccionado opciones");
      setSaving(false);
    }
  };

  return (
    <Fragment>
      <Header title="Crea tu cuenta"></Header>
      <div className={`${montserrat.className} d-flex flex-column h-100`}>
        <SubscriptionNav></SubscriptionNav>
        <div className="section-shop pt-5 pb-0">
          <div className="container">
            <div className="z-index">
              <h5 className="text-uppercase text-center">Paso 2 de 3</h5>
              <h1 className="text-center mb-4">Crea tu cuenta</h1>
              <div className="bg-light rounded col-md-12 col-xl-6 py-5 mx-auto">
                <div className="row order-container">
                  <div className="col-md-12">
                    <div className="row">
                      <h3 className="mb-4">Regístrate en Smarter Bot</h3>
                      <div className="col-md-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingInputGrid"
                            placeholder="Nombre"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                          <label>Nombre</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Apellido"
                            value={lastName1}
                            onChange={(e) => setLastName1(e.target.value)}
                          />
                          <label>Apellido</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="2º Apellido"
                            value={lastName2}
                            onChange={(e) => setLastName2(e.target.value)}
                          />
                          <label>Segundo Apellido</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="111111-1"
                        value={rut}
                        onChange={(e) => handleRut(e.target.value)}
                        onBlur={(e) => verifyRut()}
                      />
                      <label>RUT</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Número de teléfono ( 9 dígitos )"
                        maxLength={9}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="nombre@correo.com"
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value.toLowerCase().trim())
                        }
                        onBlur={() => updateEmail(email)}
                      />
                      <label>Correo Electrónico</label>
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
                    <h3 className="mt-5">Resumen de tu compra:</h3>
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
                                  ? "1 Membresía"
                                  : `${subscriptionsCount} Membresías`}{" "}
                                Pro{" "}
                                {subscriptionsCount > 1 ? "Anuales" : "Anual"}
                              </small>
                            </strong>
                          </h4>
                          <h3>
                            $
                            {totalPrice
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                          </h3>
                        </div>
                        <div className="col-md-5">
                          <div className="qty mt-2">
                            <span
                              className="minus-small"
                              onClick={() => updateCount("minus")}
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
                              onClick={() => updateCount("plus")}
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
                                Membresía {i + 1}{" "}
                                {i > 0 ? "" : `(tu membresía)`}
                              </p>
                              <select
                                className="form-select form-select-lg mb-3"
                                aria-label=".form-select-lg example"
                                onChange={(e) =>
                                  updateValues(e.target.value, i)
                                }
                              >
                                <option selected="">
                                  Seleccionar categoría
                                </option>
                                {i > 0 ? (
                                  <option value="1">
                                    3 a 10 años - Gratis
                                  </option>
                                ) : (
                                  ""
                                )}
                                {i > 0 ? (
                                  <option value="2">
                                    11 a 18 años - $24.000
                                  </option>
                                ) : (
                                  ""
                                )}
                                <option value="3">
                                  19 a 34 años - $36.000
                                </option>
                                <option value="4">
                                  35 a 64 años - $48.000
                                </option>
                                {i > 0 ? (
                                  <option value="5">65 años - Gratis</option>
                                ) : (
                                  ""
                                )}
                              </select>
                            </div>
                          </Fragment>
                        ))}
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        onChange={(e) => setCheck(e.target.checked)}
                      />
                      <label className="form-check-label">
                        {" "}
                        Acepto los{" "}
                        <a
                          href="https://smarterbot.cl/terminos-y-condiciones"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Términos y Condiciones
                        </a>
                      </label>
                    </div>
                    <div className="text-center">
                      <button
                        className="btn btn-primary w-100 btn-lg d-block mt-4"
                        onClick={(e) => createAccount()}
                        disabled={saving}
                      >
                        {saving ? "Creando cuenta..." : "Crear mi cuenta"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SubscriptionFooter></SubscriptionFooter>
        </div>
      </div>
    </Fragment>
  );
}
