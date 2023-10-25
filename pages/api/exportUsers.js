import {db} from '../../services/firebaseService';
import moment from 'moment';
const excel = require('exceljs');

export default function handler(request, response) {
  db.collection('accounts')
    .get()
    .then((querySnapshot) => {
      let accounts = querySnapshot.docs.map((account, index) => {
        return {
          id: account.id,
          data: account.data(),
        };
      });
      processAccounts(accounts, [], async (result) => {
        let workbook = new excel.Workbook();
        let worksheet = workbook.addWorksheet('Reservas');
        worksheet.columns = [
          {header: 'nombre', key: 'nombre', width: 25},
          {header: 'rut', key: 'rut', width: 25},
          {header: 'email', key: 'email', width: 10},
          {header: 'telefono', key: 'telefono', width: 10},
          {header: 'plan', key: 'plan', width: 10},
          {header: 'fecha registro', key: 'fechaRegistro', width: 10},
          {header: 'suscripciones', key: 'suscripciones', width: 10},
          {header: 'estado de pago', key: 'estadoPago', width: 10},
          {header: 'fecha de pago', key: 'fechaPago', width: 10},
          {header: 'monto', key: 'monto', width: 10},
        ];
        worksheet.addRows(result);
        response.setHeader(
          'Content-Type',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        );
        response.setHeader(
          'Content-Disposition',
          'attachment; filename=' +
            `usuarios-${moment().format('DD-MM-YYYY HH:mm:ss')}.xlsx`
        );

        await workbook.xlsx.write(response);
        response.status(200).end();
      });
    });
}

const processAccounts = (accounts, result, cb) => {
  if (accounts.length > 0) {
    let account = accounts[0];
    db.collection('paymentData')
      .where('accountId', '==', account.id)
      .get()
      .then((paymentRef) => {
        let data = {};
        data.nombre = `${account.data.firstName} ${account.data.lastName1} ${account.data.lastName2}`;
        data.rut = account.data.rut;
        data.email = account.data.email;
        data.telefono = account.data.phone;
        data.plan = account.data.planType;
        data.fechaRegistro = moment
          .unix(account.data.dateCreated.seconds)
          .format('DD-MM-YYYY HH:mm:ss');
        data.suscripciones = account.data.subscriptionsCount || 0;
        data.estadoPago = account.data.paymentStatus;
        if (paymentRef.size > 0) {
          data.fechaPago = paymentRef.docs[0].data().paymentData.requestDate;
          data.monto = paymentRef.docs[0].data().paymentData.amount;
          result.push(data);
        } else {
          data.fechaPago = '';
          data.monto = '';
          result.push(data);
        }
        accounts.shift();
        processAccounts(accounts, result, cb);
      });
  } else {
    cb(result);
  }
};
