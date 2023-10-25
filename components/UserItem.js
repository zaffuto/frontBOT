import { useEffect, useState, Fragment } from "react";
import { db } from "../services/firebaseService";
import moment from "moment";
import { BsInfoCircle } from "react-icons/bs";
import { IoTrashBinOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";

function UserItem(props) {
  const [paymentDate, setPaymentDate] = useState("");
  const [paymentData, setPaymentData] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  useEffect(() => {
    if (props.item.data.paymentStatus != "PENDING") {
      db.collection("paymentData")
        .where("accountId", "==", props.item.id)
        .limit(1)
        .orderBy("dateCreated", "desc")
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size > 0) {
            setPaymentDate(
              querySnapshot.docs[0].data().paymentData.requestDate
            );
            setPaymentData(
              querySnapshot.docs[0].data().paymentData.requestData
            );
            setPaymentAmount(querySnapshot.docs[0].data().paymentData.amount);
          }
        });
    }
  }, []);

  const deleteUser = async (id, type) => {
    const text =
      type == "user"
        ? "Eliminarás un usuario y sus suscripciones"
        : "Eliminarás este usuario de centro";
    if (confirm(text)) {
      if (type == "user") {
        let subs = await db
          .collection("subscriptions")
          .where("accountId", "==", id)
          .get();
        subs.forEach((accountsItem) => {
          db.collection("subscriptions")
            .doc(accountsItem.id)
            .update({ deleted: true });
        });
        let user = await db
          .collection("accounts")
          .doc(id)
          .update({ deleted: true });
        alert("Usuario Eliminado");
        props.onDelete();
      }
    }
  };

  return (
    <tr>
      <td>
        {moment
          .unix(props.item.data.dateCreated.seconds)
          .format("DD-MM-YYYY HH:mm:ss")}
      </td>
      <td>
        {props.item.data.firstName} {props.item.data.lastName1}{" "}
        {props.item.data.lastName2}
      </td>
      <td>{props.item.data.email}</td>
      <td>{props.item.data.planType || "--"}</td>
      <td>{props.item.data.subscriptionsCount || "--"}</td>
      <td>
        {props.item.data.paymentStatus == "PENDING" ? (
          <p className="alert alert-warning text-center mb-0">Pendiente</p>
        ) : (
          <p className="alert alert-success text-center mb-0">Pagado</p>
        )}
      </td>
      <td>
        {props.item.data.paymentStatus != "PENDING" && paymentData != null
          ? moment.unix(paymentData.seconds).format("DD-MM-YYYY HH:mm:ss")
          : ""}
        {props.item.data.paymentStatus != "PENDING" && paymentDate != null
          ? moment(paymentDate, "YYYY-MM-DD HH:mm:ss").format(
              "DD-MM-YYYY HH:mm:ss"
            )
          : ""}
      </td>
      <td>{paymentAmount != "" ? `$${paymentAmount}` : ""}</td>
      <td width={250}>
        <a href={`/dashboard/${props.userType}/users/${props.item.id}`}>
          <button className="btn btn-warning">{<BsInfoCircle />}</button>
        </a>
        <button
          className="btn btn-danger mx-2"
          onClick={() => deleteUser(props.item.id)}
        >
          <IoTrashBinOutline />
        </button>
        {props.item.data.paymentStatus == "PENDING" ? (
          <a href={`/pay/${props.item.id}/`}>
            <button className="btn btn-success ">
              <MdPayment />
            </button>
          </a>
        ) : (
          ""
        )}
      </td>
    </tr>
  );
}
export default UserItem;
