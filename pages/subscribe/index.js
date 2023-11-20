import Header from "../../components/Header";
import Script from "next/script";
import { Montserrat } from "@next/font/google";
import ChileanRutify from "chilean-rutify";
import { Fragment, useEffect, useState } from "react";
import { db } from "../../services/firebaseService";
import bcrypt from "bcryptjs-react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { sendSubscribeEmail } from "../../services/sendEmail";
import SubscriptionNav from "../../components/SubscriptionNav";
import SubscriptionFooter from "../../components/SubscriptionFooter";
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
  const [count, setCount] = useState(1);
  const [dialCode, setDialCode] = useState("+56");
  const [ready, setReady] = useState(false);

  const [eye, seteye] = useState(true);
  const [type, settype] = useState(false);

  useEffect(() => {
    const input = document.querySelector("#phone");
    let iti = intlTelInput(input, { initialCountry: "CL" });
    input.addEventListener("countrychange", function () {
      setDialCode(iti.getSelectedCountryData().dialCode);
    });
    db.collection("settings")
      .doc("--")
      .get()
      .then((docRef) => {
        //setPrice(parseInt(docRef.data().price));
        //setOfferPrice(parseInt(docRef.data().offerPrice));
      });
    if (typeof window != "undefined") {
      setCount(parseInt(localStorage.getItem("__smtb_count") || 1));
    }
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
                dateCreated: new Date(),
                planType: "BASIC",
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
                subscriptionsCount: count,
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
                      sendSubscribeEmail(firstName, docRef.id, email);
                      setReady(true);
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
  };

  return (
    <Fragment>
      <Header title="Suscríbete"></Header>
      <div className={`${montserrat.className} d-flex flex-column h-100`}>
        <SubscriptionNav></SubscriptionNav>
        <div className="section-shop pt-5 pb-0">
          <div className="container">
            <div className="z-index">
              <h1 className="text-center mb-4">Crea tu cuenta</h1>
              <div className="bg-light rounded col-md-12 col-xl-6 py-5 mx-auto">
                <div className="row order-container">
                  {!ready ? (
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
                  ) : (
                    <div className="col-md-12">
                      <div className="row text-center">
                        <p>
                          <img
                            className="icon-ok align-middle img-fluid"
                            src="/images/icon-ok.svg"
                            width="100"
                          />
                        </p>
                        <h3 className="mb-4">Tu cuenta Basic ya fue creada</h3>
                        <div className="col-md-12">
                          <p>
                            Te enviamos un correo con la confirmación de la
                            creación de la cuenta. Ya puedes iniciar sesión con
                            tus datos.
                          </p>
                          <div className="text-center">
                            <a
                              href="/auth/login"
                              className="btn btn-primary btn-lg d-block mt-4"
                            >
                              Ingresar
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
