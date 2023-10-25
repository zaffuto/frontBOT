import {useEffect} from 'react';
import {db} from '../../services/firebaseService';
import bcrypt from 'bcryptjs-react';

function Change() {
  useEffect(() => {
    /*db.collection('accounts')
      .doc('F1m8myJCP6DMzceiWolv')
      .update({password: bcrypt.hashSync('vb56871', 10)})
      .then((docRef) => {
        console.log('ok');
      });*/
  });
  return <p>ok</p>;
}

export default Change;
