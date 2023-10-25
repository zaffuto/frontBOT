import Head from 'next/head';
import Script from 'next/script';
import {Montserrat} from '@next/font/google';
import ChileanRutify from 'chilean-rutify';
import {Fragment, useEffect, useState} from 'react';
import {db} from '../../services/firebaseService';
import bcrypt from 'bcryptjs-react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import {RxEyeClosed, RxEyeOpen} from 'react-icons/rx';
const mailgun = require('mailgun.js');
const mg = mailgun.client({
  username: 'api',
  key: 'key-80d577c302f3bcad991bea13930b3fde',
});
const montserrat = Montserrat({subsets: ['latin'], weight: 'variable'});

export default function Home() {
  const [saving, setSaving] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName1, setLastName1] = useState('');
  const [lastName2, setLastName2] = useState('');
  const [rut, setRut] = useState('');
  const [validRut, setValidRut] = useState(true);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  const [passwordType, setPasswordType] = useState('password');
  const [warnemail, setwarnemail] = useState(false);
  const [warnpassword, setwarnpassword] = useState(false);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [offerPrice, setOfferPrice] = useState(0);
  const [dialCode, setDialCode] = useState('+56');
  const [ready, setReady] = useState(false);

  const [eye, seteye] = useState(true);
  const [type, settype] = useState(false);

  useEffect(() => {
    const input = document.querySelector('#phone');
    let iti = intlTelInput(input, {initialCountry: 'CL'});
    input.addEventListener('countrychange', function () {
      setDialCode(iti.getSelectedCountryData().dialCode);
    });
    db.collection('settings')
      .doc('--')
      .get()
      .then((docRef) => {
        setPrice(parseInt(docRef.data().price));
        setOfferPrice(parseInt(docRef.data().offerPrice));
      });
    if (typeof window != 'undefined') {
      setCount(parseInt(localStorage.getItem('__mtp_count') || 1));
    }
  }, []);

  const toggleEye = () => {
    if (passwordType == 'password') {
      setPasswordType('text');
      seteye(false);
      settype(true);
    } else {
      setPasswordType('password');
      seteye(true);
      settype(false);
    }
  };

  const updateCount = (option) => {
    if (option == 'minus' && count > 1) {
      setCount(count - 1);
    }
    if (option == 'plus' && count < 10) {
      setCount(count + 1);
    }
  };

  const handleRut = (rut) => {
    setRut(ChileanRutify.formatRut(rut));
  };

  const verifyRut = () => {
    setValidRut(ChileanRutify.validRut(rut));
  };

  const updateEmail = (email) => {
    if (email != '') {
      console.log(email.split('@'));
      setEmail(
        email.split('@')[0].split('+')[0] +
          (email.split('@').length > 1 ? `@${email.split('@')[1]}` : '')
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
      firstName == '' ||
      lastName1 == '' ||
      lastName2 == '' ||
      phone == '' ||
      email == '' ||
      rut == '' ||
      password == ''
    ) {
      setSaving(false);
      return alert('Debes completar todos los datos');
    }
    if (!validRut) {
      setSaving(false);
      return alert('Debes ingresar un rut con formato válido');
    }
    if (!validateEmail(email)) {
      setSaving(false);
      return alert('Debes ingresar un email con formato válido');
    }
    if (phone.length != 9) {
      setSaving(false);
      return alert('Debes ingresar un teléfono de 8 dígitos');
    }
    if (!check) {
      setSaving(false);
      return alert('Debes aceptar términos y condiciones');
    }

    db.collection('accounts')
      .where('rut', '==', rut)
      .limit(1)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size > 0) {
          setSaving(false);
          return alert('Ya existe un usuario con este rut');
        } else {
          let sameEmail = db
            .collection('accounts')
            .where('email', '==', email)
            .limit(1)
            .get();
          if (sameEmail.size > 0) {
            setSaving(false);
            return alert('Ya existe un usuario con este email');
          } else {
            db.collection('accounts')
              .add({
                deleted: false,
                dateCreated: new Date(),
                planType: 'BASIC',
                paymentStatus: 'PENDING',
                password: bcrypt.hashSync(password, 10),
                firstName,
                lastName1,
                lastName2,
                email,
                rut,
                phone: `${dialCode}${phone}`,
                check,
                type: 'user',
                subscriptionsCount: count,
              })
              .then((docRef) => {
                if (docRef.id) {
                  db.collection('subscriptions')
                    .add({
                      deleted: false,
                      name: `${firstName} ${lastName1} ${lastName2}`,
                      rut,
                      accountId: docRef.id,
                    })
                    .then((subRef) => {
                      mg.messages
                        .create('mail.mountainpass.cl', {
                          from: 'Mountain Pass<noreply@mail.mountainpass.cl>',
                          to: [email],
                          subject: 'Te damos la bienvenida a Mountain Pass',
                          text: 'Te damos la bienvenida a Mountain Pass',
                          html: `<html><head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                    <title>Simple Transactional Email</title>
                    <style>
                      /* -------------------------------------
                          GLOBAL RESETS
                      ------------------------------------- */
                      
                      /*All the styling goes here*/
                      
                      img {
                        border: none;
                        -ms-interpolation-mode: bicubic;
                        max-width: 100%; 
                      }
                
                      body {
                        background-color: #f6f6f6;
                        font-family: sans-serif;
                        -webkit-font-smoothing: antialiased;
                        font-size: 14px;
                        line-height: 1.4;
                        margin: 0;
                        padding: 0;
                        -ms-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%; 
                      }
                
                      table {
                        border-collapse: separate;
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        width: 100%; }
                        table td {
                          font-family: sans-serif;
                          font-size: 14px;
                          vertical-align: top; 
                      }
                
                      /* -------------------------------------
                          BODY & CONTAINER
                      ------------------------------------- */
                
                      .body {
                        background-color: #f6f6f6;
                        width: 100%; 
                      }
                
                      /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
                      .container {
                        display: block;
                        margin: 0 auto !important;
                        /* makes it centered */
                        max-width: 580px;
                        padding: 10px;
                        width: 580px; 
                      }
                
                      /* This should also be a block element, so that it will fill 100% of the .container */
                      .content {
                        box-sizing: border-box;
                        display: block;
                        margin: 0 auto;
                        max-width: 580px;
                        padding: 10px; 
                      }
                
                      /* -------------------------------------
                          HEADER, FOOTER, MAIN
                      ------------------------------------- */
                      .main {
                        background: #ffffff;
                        border-radius: px;
                        width: 100%; 
                      }
                
                      .wrapper {
                        box-sizing: border-box;
                        padding: 20px; 
                      }
                
                      .content-block {
                        padding-bottom: 10px;
                        padding-top: 10px;
                      }
                
                      .footer {
                        clear: both;
                        margin-top: 10px;
                        text-align: center;
                        width: 100%; 
                      }
                        .footer td,
                        .footer p,
                        .footer span,
                        .footer a {
                          color: #999999;
                          font-size: 12px;
                          text-align: center; 
                      }
                
                      /* -------------------------------------
                          TYPOGRAPHY
                      ------------------------------------- */
                      h1,
                      h2,
                      h3,
                      h4 {
                        color: #000000;
                        font-family: sans-serif;
                        font-weight: 400;
                        line-height: 1.4;
                        margin: 0;
                        margin-bottom: 30px; 
                      }
                
                      h1 {
                        font-size: 40px;
                        font-weight: 800;
                        text-align: left;
                        margin-top: .5em;
                      }
                
                      p,
                      ul,
                      ol {
                        font-family: sans-serif;
                        font-size: 14px;
                        font-weight: normal;
                        margin: 0;
                        margin-bottom: 15px; 
                      }
                        p li,
                        ul li,
                        ol li {
                          list-style-position: inside;
                          margin-left: 5px; 
                      }
                
                      a {
                        color: #3498db;
                        text-decoration: underline; 
                      }
                
                      /* -------------------------------------
                          BUTTONS
                      ------------------------------------- */
                      .btn {
                        box-sizing: border-box;
                        width: 100%; }
                        .btn > tbody > tr > td {
                          padding-bottom: 15px; }
                        .btn table {
                          width: auto; 
                      }
                        .btn table td {
                          background-color: #ffffff;
                          border-radius: 5px;
                          text-align: center; 
                      }
                        .btn a {
                          background-color: #ffffff;
                          border: solid 1px #3498db;
                          border-radius: 100px;
                          box-sizing: border-box;
                          color: #3498db;
                          cursor: pointer;
                          display: inline-block;
                          font-size: 14px;
                          font-weight: bold;
                          margin: 0;
                          padding: 12px 25px;
                          text-decoration: none;
                          text-transform: capitalize; 
                      }
                
                      .btn-primary table td {
                        background-color: #0043FF; 
                                  border-radius: 100px;
                      }
                
                      .btn-primary a {
                        background-color: #0043FF;
                        border-color: #0043FF;
                        color: #ffffff; 
                      }
                
                      /* -------------------------------------
                          OTHER STYLES THAT MIGHT BE USEFUL
                      ------------------------------------- */
                      .last {
                        margin-bottom: 0; 
                      }
                
                      .first {
                        margin-top: 0; 
                      }
                
                      .align-center {
                        text-align: center; 
                      }
                
                      .align-right {
                        text-align: right; 
                      }
                
                      .align-left {
                        text-align: left; 
                      }
                
                      .clear {
                        clear: both; 
                      }
                
                      .mt0 {
                        margin-top: 0; 
                      }
                
                      .mb0 {
                        margin-bottom: 0; 
                      }
                
                      .preheader {
                        color: transparent;
                        display: none;
                        height: 0;
                        max-height: 0;
                        max-width: 0;
                        opacity: 0;
                        overflow: hidden;
                        mso-hide: all;
                        visibility: hidden;
                        width: 0; 
                      }
                
                      .powered-by a {
                        text-decoration: none; 
                      }
                
                      hr {
                        border: 0;
                        border-bottom: 1px solid #f6f6f6;
                        margin: 20px 0; 
                      }
                
                      /* -------------------------------------
                          RESPONSIVE AND MOBILE FRIENDLY STYLES
                      ------------------------------------- */
                      @media only screen and (max-width: 620px) {
                        table.body h1 {
                          font-size: 28px !important;
                          margin-bottom: 10px !important; 
                        }
                        table.body p,
                        table.body ul,
                        table.body ol,
                        table.body td,
                        table.body span,
                        table.body a {
                          font-size: 16px !important; 
                        }
                        table.body .wrapper,
                        table.body .article {
                          padding: 10px !important; 
                        }
                        table.body .content {
                          padding: 0 !important; 
                        }
                        table.body .container {
                          padding: 0 !important;
                          width: 100% !important; 
                        }
                        table.body .main {
                          border-left-width: 0 !important;
                          border-radius: 0 !important;
                          border-right-width: 0 !important; 
                        }
                        table.body .btn table {
                          width: 100% !important; 
                        }
                        table.body .btn a {
                          width: 100% !important; 
                        }
                        table.body .img-responsive {
                          height: auto !important;
                          max-width: 100% !important;
                          width: auto !important; 
                        }
                      }
                
                      /* -------------------------------------
                          PRESERVE THESE STYLES IN THE HEAD
                      ------------------------------------- */
                      @media all {
                        .ExternalClass {
                          width: 100%; 
                        }
                        .ExternalClass,
                        .ExternalClass p,
                        .ExternalClass span,
                        .ExternalClass font,
                        .ExternalClass td,
                        .ExternalClass div {
                          line-height: 100%; 
                        }
                        .apple-link a {
                          color: inherit !important;
                          font-family: inherit !important;
                          font-size: inherit !important;
                          font-weight: inherit !important;
                          line-height: inherit !important;
                          text-decoration: none !important; 
                        }
                        #MessageViewBody a {
                          color: inherit;
                          text-decoration: none;
                          font-size: inherit;
                          font-family: inherit;
                          font-weight: inherit;
                          line-height: inherit;
                        }
                        .btn-primary table td:hover {
                          background-color: #34495e !important; 
                        }
                        .btn-primary a:hover {
                          background-color: #34495e !important;
                          border-color: #34495e !important; 
                        } 
                      }
                
                    </style>
                  </head>
                  <body>
                    <span className="preheader">Tu cuenta ya está creada y tus subscripciones listas para ser inscritas.</span>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" className="body">
                      <tbody><tr>
                        <td>&nbsp;</td>
                        <td className="container">
                          <div className="content">
                
                            <table width="100%" style="max-width:640px;">
                            <!-- START CENTERED WHITE CONTAINER -->
                            </table><table role="presentation" className="main">
                              <!-- START MAIN CONTENT AREA -->
                              <tbody><tr>
                                <td className="wrapper">
                                  <table>
                                      <tbody><tr>
                                      <td>
                                        <img src="https://mountainpass.cl/images/email-cover.png" width="100%" style="border-radius: 10px;">
                                      </td>
                                    </tr>
                                  </tbody></table>
                  
                                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                    <tbody><tr>
                                      <td>
                                      <h1 style="font-size:22px">Hola <span style="color: ##0043ff">${firstName},</span><br/>¡Te damos la bienvenida a Mountain Pass!</h1>
                                        <p>Tu cuenta Mountain Pass Basic ya está creada y te invitamos a completar el pago de tu suscripción</p>
                                        <p>En caso de que no puedas o no quieras realizar el pago de tu cuenta ahora, puedes seguir el proceso en este link: </p> 
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" className="btn btn-primary">
                                          <tbody>
                                            <tr>
                                              <td align="left">
                                                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                                  <tbody>
                                                    <tr>
                                                      <td> <a href="https://mountainpass.cl/pay/${docRef.id}" target="_blank">Paga tu suscripción aquí</a> </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        
                                      </td>
                                    </tr>
                                  </tbody></table>
                                </td>
                              </tr>
                
                            <!-- END MAIN CONTENT AREA -->
                            </tbody></table>
                            <!-- END CENTERED WHITE CONTAINER -->
                
                            <!-- START FOOTER -->
                            <div className="footer">
                              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                <tbody><tr>
                                  <td className="content-block">
                                    <span className="apple-link">Mountain Pass 2023</span>
                                  </td>
                                </tr>
                
                              </tbody></table>
                            </div>
                            <!-- END FOOTER -->
                
                          </div>
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                    </tbody></table>
                  
                </body></html>
                `,
                        })
                        .then((msg) => {
                          setReady(true);
                          //window.location.href = `/pay/${docRef.id}/process`;
                        })
                        .catch((err) => {
                          setReady(true);
                          //console.log('error: ', err);
                          //window.location.href = `/pay/${docRef.id}/process`;
                        });
                    });
                }
              })
              .catch((error) => {
                console.log(error);
                alert(
                  'Ocurrió un error al crear tu cuenta. Inténtalo nuevamente'
                );
                setSaving(false);
              });
          }
        }
      });
  };

  return (
    <Fragment>
      <Head>
        <title>Mountain Pass</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Mountain Pass – Suscríbete y paga sólo las horas que esquíes"
        />
        <meta name="author" content="Mountain Pass" />
        <title>Mountain Pass – Esquía pagando solo el tiempo que uses</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mountain Pass - La nueva forma de disfrutar la montaña"
        />
        <meta
          property="og:description"
          content="Suscríbete y obtén una montaña de beneficios"
        />
        <meta
          property="og:image"
          content="https://faisandu.com/mountainpass//images/mountainpass-cover.jpg"
        />
        <meta property="og:image:width" content="828" />
        <meta property="og:image:height" content="450" />
        <meta property="og:url" content="https://https://www.mountainpass.cl" />
        <meta property="og:site_name" content="Mountainpass" />
        <meta property="fb:app_id" content="" />
        <link
          rel="icon"
          type="image/png"
          href="/images/mountainpass-favicon-16.png"
          sizes="16x16"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/images/mountainpass-favicon-32.png"
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="/images/mountainpass-favicon-96.png"
          sizes="96x96"
        ></link>
        <link rel="apple-touch-icon" href="images/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="images/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="images/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="images/touch-icon-ipad-retina.png"
        />
      </Head>
      <div className={`${montserrat.className} d-flex flex-column h-100`}>
        {' '}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MRN2ZCR8ZP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MRN2ZCR8ZP');
        `}
        </Script>{' '}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-WS4L7S5"
          strategy="afterInteractive"
        />
        <header>
          <nav className="navbar-transparent d-flex justify-content-center">
            <a className="d-block text-center" href="/">
              <img
                className="margin-top img-fluid"
                src="/images/MountainPassv2.svg"
                width={220}
              />
            </a>
          </nav>
        </header>
        <div className="section-shop pt-5 pb-0">
          <div className="container">
            <div className="z-index">
              <h1 className="text-center mb-4">Crea tu cuenta</h1>
              <div className="bg-light rounded col-md-12 col-xl-6 py-5 mx-auto">
                <div className="row order-container">
                  {!ready ? (
                    <div className="col-md-12">
                      <div className="row">
                        <h3 className="mb-4">Regístrate en Mountain Pass</h3>
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
                      {/*<div
                      className="rounded-small alert alert-primary mt-4"
                      role="alert"
                    >
                      <h5>Resumen de tu compra:</h5>
                      <h4 className="mb-2 text-left">
                        {count == 1 ? "1 Pase" : `${count} Pases`}{" "}
                        {count > 1 ? "Anuales" : "Anual"}
                      </h4>
                      <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                          <h2 className="mb-0 mt-2">
                            {offerPrice > 0 ? (
                              <Fragment>
                                <del>
                                  <span className="light">
                                    $
                                    {(price * count)
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                  </span>
                                </del>
                                <strong className="mx-3">
                                  $
                                  {(offerPrice * count)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                </strong>
                              </Fragment>
                            ) : (
                              <span className="light">
                                $
                                {(price * count)
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                              </span>
                            )}
                          </h2>
                        </div>
                        <div className="col-md-6">
                          <div className="qty mt-2">
                            <span className="minus-small">
                              <img
                                className="align-middle img-fluid"
                                src="/images/i-minus.svg"
                                width="50"
                                onClick={() => updateCount("minus")}
                              />
                            </span>
                            <input
                              type="number"
                              className="count-small"
                              name="qty"
                              max={10}
                              value={count}
                              onChange={() => {}}
                            />
                            <span className="plus-small">
                              <img
                                className="align-middle img-fluid"
                                src="/images/i-plus.svg"
                                width="50"
                                onClick={() => updateCount("plus")}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                                </div>*/}
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          onChange={(e) => setCheck(e.target.checked)}
                        />
                        <label className="form-check-label">
                          {' '}
                          Acepto los{' '}
                          <a
                            href="https://mountainpass.cl/terminos-y-condiciones"
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
                          {saving ? 'Creando cuenta...' : 'Crear mi cuenta'}
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
          <footer className="footer bg-transparent">
            <div className="container-fluid">
              <div className="row text-center">
                <div className="col-sm-12">
                  <p className="d-block">
                    <strong>Mountain Pass</strong> 2023 –{' '}
                    <a href="mailto:clientes@mountainpass.cl">
                      clientes@mountainpass.cl
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
