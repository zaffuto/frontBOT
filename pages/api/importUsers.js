import {db} from '../../services/firebaseService';
import bcrypt from 'bcrypt';
import moment from 'moment';

export default function handler(request, response) {
  let accounts = [{id: '3Dxos3d50YwhB9qzXw2j'}];
  processAccounts(accounts, (result) => {
    response.status(200).send({status: 'OK'});
  });
}

const processAccounts = async (accounts, result, cb) => {
  if (accounts.length > 0) {
    let account = accounts[0];
    let paymentData = await db.collection('paymentData').add({
      accountId: account.id,
      dateCreated: new Date(),
      paymentData: {
        amount: '24000',
        requestData: new Date(),
      },
    });
    console.log('PAYMENT ID created:', paymentData.id);
    accounts.shift();
    processAccounts(accounts, cb);
  } else {
    cb(result);
  }
};
