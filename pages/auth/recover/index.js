import { Fragment, useState } from "react";
import Header from "../../../components/Header";
import SubscritionNav from "../../../components/SubscriptionNav";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../../services/firebaseService";
import { Montserrat } from "@next/font/google";
import { recoverEmail } from "../../../services/sendEmail";
const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

function RecorverPassword(props) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const checkUser = () => {
    setLoading(true);
    db.collection("accounts")
      .where("email", "==", email)
      .limit(1)
      .get()
      .then(async (querySnapshot) => {
        if (querySnapshot.size > 0) {
          let token = uuidv4();
          await db
            .collection("accounts")
            .doc(querySnapshot.docs[0].id)
            .update({ recoverToken: token });
          recoverEmail(
            querySnapshot.docs[0].data().firstName,
            email,
            token,
            () => {
              alert(
                "Te enviamos un correo con las instrucciones para reestablecer la contraseña"
              );
              setEmail("");
              setLoading(false);
            }
          );
        } else {
          alert("El email no está registrado en la plataforma");
          setEmail("");
          setLoading(false);
        }
      });
  };

  return (
    <Fragment>
      <Header title="Recuperar Contraseña"></Header>
      <SubscritionNav></SubscritionNav>
      <div className={`${montserrat.className} section-shop pt-5 pb-0`}>
        <div className="container">
          <div className="z-index">
            <h1 className="text-center mb-4">
              Recuperar <br />
              contraseña
            </h1>
            <div className="bg-light rounded col-sm-12 col-xl-5 py-5 mx-auto">
              <div className="row order-container">
                <div className="col-md-12">
                  <div className="row">
                    <p className="mb-4">
                      Escribe el <strong>correo electrónico</strong> asociado a
                      tu cuenta Smarter Bot y sigue los pasos que te indiquemos.
                    </p>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="floatingInput">Correo Electrónico</label>
                  </div>

                  <div className="text-center">
                    <button
                      className="btn btn-primary btn-lg d-block mt-4 mx-auto"
                      onClick={() => checkUser()}
                      disabled={loading}
                    >
                      {loading ? "Verificando..." : "Recuperar"}
                    </button>
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
                    <a href="mailto:clientes@smartbot.cl">
                      clientes@smartbot.cl
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Fragment>
  );
}

export default RecorverPassword;
