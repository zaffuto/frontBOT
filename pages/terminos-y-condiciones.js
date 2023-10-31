import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { Montserrat } from "@next/font/google";
import { Fragment, useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

export default function Terminos() {
  return (
    <Fragment>
      <Head>
        <title>SmarterBot</title>
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
          content="https://smarterbot.cl/images/smarterbot-cover.jpg"
        />
        <meta property="og:image:width" content="828" />
        <meta property="og:image:height" content="450" />
        <meta property="og:url" content="https://smarterbot.cl" />
        <meta property="og:site_name" content="SmarterBot" />
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
        {" "}
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
        </Script>{" "}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-WS4L7S5"
          strategy="afterInteractive"
        />
        <header>
          <nav className="navbar navbar-expand-md fixed-top">
            <div className="container-fluid">
              <Link className="navbar-brand" href="/">
                <img
                  className="margin-top img-fluid"
                  src="/images/MountainPassv2.svg"
                  width={220}
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>
                <a
                  className="btn btn-secondary mx-2 btn-header"
                  href="/auth/login"
                >
                  Ingresa
                </a>
                <a
                  className="btn btn-primary btn-header mx-2 btn-sub"
                  href="/subscribe"
                >
                  Inscríbete gratis
                </a>
                <a
                  className="btn btn-primary btn-header mx-2 btn-sub"
                  href="https://tienda.mountainpass.cl"
                  target="_blank"
                >
                  Tienda
                </a>
              </div>
            </div>
          </nav>
        </header>
        <div className="section-single">
          <div className="container">
            <div className="row align-content-start align-items-center">
              <div className="col-12 col-sm-12 col-md-10 mx-auto">
                <h1 className="text-center">
                  <span className="color">Términos de uso</span>
                </h1>
                <h1 className="text-center">Mountain Pass</h1>
                <hr />
                <a href="#1">
                  <p>
                    <strong>1. Definiciones</strong>
                  </p>
                </a>
                <a href="#2">
                  <p>
                    <strong>2. Introducción</strong>
                  </p>
                </a>
                <a href="#3">
                  <p>
                    <strong>3. El Servicio de Mountain Pass</strong>
                  </p>
                </a>
                <a href="#4">
                  <p>
                    <strong>
                      4. Servicio de atención al cliente, información, preguntas
                      y quejas
                    </strong>
                  </p>
                </a>
                <a href="#5">
                  <p>
                    <strong>5. ¿Qué más necesito saber?</strong>
                  </p>
                </a>
                <hr />
                <h2 className="mb-4 mt-5" id="1">
                  1 – DEFINICIONES
                </h2>
                <p>
                  <strong>Beneficio de Acceso a Centros de Esquí:</strong>{" "}
                  corresponde al Beneficio de acceder a los Centros de Esquí por
                  medio de un cobro por hora o por uso de la Infraestructura del
                  Proveedor.
                </p>
                <p>
                  Beneficios: corresponde a los productos y servicios ofrecidos
                  por los Centros de Esquí y demás Proveedores que hayan
                  suscrito un contrato, convenio o alianza con Mountain Pass a
                  costos reducidos y alternativos al cobro tradicional para
                  acceder a ellos.
                </p>
                <p>
                  Centros de Esquí: corresponde a los centros de montaña
                  preparados para ofrecer actividades para el disfrute de la
                  nieve por los Usuarios con los cuales Mountain Pass ha
                  suscrito un acuerdo, convenio o alianza para permitir a los
                  Usuarios el Beneficio de Acceso a Centros de Esquí.
                </p>
                <p>
                  <strong>Infraestructura del Proveedor:</strong> corresponde a
                  los andariveles o sillas disponibles en los Centros de Esquí.
                </p>
                <p>
                  <strong>Membresía:</strong> corresponde a la membresía anual
                  que el Usuario debe pagar para poder acceder a los Beneficios
                  ofrecidos a través de la Plataforma por los Proveedores. La
                  membresía es de carácter personal e intransferible y está
                  asociada al número de cédula de identidad de la persona
                  natural del Usuario.
                </p>
                <p>
                  <strong>Mountain Pass SpA o Mountain Pass:</strong> es una
                  sociedad por acciones chilena constituida por escritura
                  pública de fecha 5 de mayo de 2022 en la Notaría de Santiago
                  de don Roberto Antonio Cifuentes Allel, con domicilio social
                  en Santiago, y que tiene como objetivo el promover la cultura
                  de montaña. En ese sentido, la sociedad, en su carácter de
                  operador de plataforma de comercio electrónico, busca
                  facilitar y promover vías de acceso a la montaña para fines
                  turísticos y deportivos, mediante la suscripción de convenios
                  con distintos Proveedores a lo largo de todo el país. Mountain
                  Pass no es un centro de esquí, un centro de ocio o recreativo,
                  un club de salud, instalación, o establecimiento similar; ni
                  tiene, opera ni controla ninguno de los servicios y productos
                  que se ofrecen a través de la Plataforma.
                </p>
                <p>
                  <strong>Plataforma:</strong> es el soporte online (la
                  siguiente página web:{" "}
                  <a href="https://www.mountainpass.cl/" target="_blank">
                    https://www.mountainpass.cl/
                  </a>
                  ) mediante el cual se ofrecen los Beneficios.
                </p>
                <p>
                  <strong>Proveedores:</strong> la persona natural o jurídica no
                  relacionada a Mountain Pass que realiza una oferta de sus
                  productos y/o servicios relacionados con el esquí a través de
                  la Plataforma. Para poder consultar el listado de los
                  Proveedores con los que Mountain Pass ha celebrado dichos
                  contratos, convenios o alianzas y que actualmente ofrecen los
                  Beneficios a través de la Plataforma, el Usuario puede
                  ingresar al siguiente link:{" "}
                  <a href="https://www.mountainpass.cl/" target="_blank">
                    https://www.mountainpass.cl/
                  </a>
                </p>
                <p>
                  <strong>Servicio(s):</strong> servicios de intermediación o
                  enlace mediante la Plataforma entre un Usuario y los distintos
                  Proveedores.
                </p>
                <p>
                  Términos de Uso: el presente documento donde los Usuarios
                  podrán conocer las normas y restricciones que rigen el uso de
                  nuestra Plataforma y Servicios.
                </p>
                <p>
                  <strong>Usuario(s):</strong> persona natural o jurídica que ha
                  aceptado y le son aplicables los Términos de Uso de la
                  Plataforma al momento de registrarse en la misma.
                </p>
                <hr />
                <h2 className="mb-4 mt-5" id="2">
                  2 – INTRODUCCIÓN
                </h2>
                <p>
                  Lea atentamente los Términos de Uso, antes de su aceptación y
                  registro en la Plataforma, ya que rigen el uso de los
                  Servicios y representan un contrato vinculante entre el
                  Usuario y Mountain Pass. Si no está de acuerdo con los
                  Términos de Uso, no debe registrarse en la Plataforma ni
                  comprar la Membresía.
                </p>
                <p>
                  Estos Términos de Uso incluyen las disposiciones del presente
                  documento, así como otras políticas relevantes o documentos
                  vinculados o referenciados a través de un link o enlace en el
                  mismo, por ejemplo, la Política de Privacidad de la
                  Plataforma.
                </p>
                <h2 className="mb-4 mt-5" id="3">
                  3 – EL SERVICIO DE MOUNTAIN PASS – CONDICIONES GENERALES
                </h2>
                <p>
                  Mountain Pass ofrece a través de la Plataforma, en calidad de
                  intermediario, a los Usuarios que hubieren adquirido la
                  Membresía, distintos Beneficios, los que podrán ir variando
                  con el tiempo en virtud de las alianzas de Mountain Pass con
                  los distintos Proveedores.
                </p>
                <h4>
                  <strong>Registro en la Plataforma</strong>
                </h4>
                <p>
                  Para usar los Servicios y acceder a los Beneficios el Usuario
                  deberá registrarse en la Plataforma y aceptar los Términos de
                  Uso.
                </p>
                <p>
                  Para registrarse en la Plataforma y solicitar una Membresía,
                  el Usuario deberá (i) tener al menos 18 años de edad, (ii) ser
                  capaz de celebrar un contrato vinculante de conformidad a la
                  legislación vigente y (iii) residir en un país en el cual esté
                  disponible la Plataforma.
                </p>
                <p>
                  Sin perjuicio de lo anterior, los menores de edad deberán ser
                  registrados y su Membresía deberá ser adquirida por sus padres
                  o tutor legal según corresponda.
                </p>
                <p>
                  El Usuario (i) se obliga a que toda la información que le
                  entregue a Mountain Pass al momento de su registro en la
                  Plataforma es verdadera, precisa y completa, y que notificará
                  a Mountain Pass en caso de que todo o parte de la información
                  provista se modifique en miras de mantener la veracidad,
                  precisión y completitud de la misma; y (ii) se obliga a usar
                  la Plataforma y los Servicios que ésta ofrece de manera que no
                  infrinja la legislación aplicable.
                </p>
                <p>
                  La cuenta creada por el Usuario en la Plataforma al momento
                  del registro es de carácter personal, única e intransferible y
                  no deberá ser facilitada a otra persona. El Usuario no
                  compartirá ni transferirá sus datos de identificación en la
                  Plataforma con nadie y deberá proteger la seguridad de estos.
                </p>
                <p>
                  Mountain Pass ha establecido mecanismos de identificación para
                  el Usuario mediante una contraseña secreta, la que deberá ser
                  conocida sólo por el titular de la cuenta. Mountain Pass asume
                  que es el titular el único facultado para ingresar a la cuenta
                  mediante esta validación de identidad.
                </p>
                <p>
                  Mountain Pass utiliza estándares de seguridad reconocidos
                  internacionalmente para la seguridad y protección de su
                  información y de la Plataforma. Sin perjuicio de lo anterior,
                  cada Usuario es responsable de la actividad asociada a su
                  cuenta que se derive de su actuar negligente.
                </p>
                <h4>
                  <strong>¿Cómo acceder a nuestros Servicios?</strong>
                </h4>
                <p>
                  Una vez registrado en la Plataforma, el Usuario podrá acceder
                  a los Beneficios a través de la compra de una Membresía. La
                  Membresía tendrá una duración de 365 días desde la fecha de su
                  adquisición.
                </p>
                <p>
                  El costo de la Membresía corresponde al publicado en la
                  Plataforma. Los precios publicados incluyen IVA. El Usuario
                  puede consultar el valor de la Membresía en el siguiente link:{" "}
                  <a
                    href="https://www.mountainpass.cl/"
                    target="_blank"
                    https="www.mountainpass.cl="
                  >
                    https://www.mountainpass.cl/
                  </a>
                </p>
                <p>
                  Mountain Pass funciona como intermediario de los Beneficios
                  ofrecidos, los que son prestados directamente por los
                  Proveedores quienes además fijan los precios de los mismos.
                </p>
                <h4>
                  <strong>Beneficio de Acceso a Centros de Esquí</strong>
                </h4>
                <p>
                  Uno de los Beneficios que Mountain Pass ofrece a través de la
                  Plataforma, es acceder a los Centros de Esquí por medio de un
                  cobro por hora o por uso de la Infraestructura del Proveedor,
                  independiente de cuántas horas efectivamente se esquíen o la
                  cantidad de andariveles utilizados por el Usuario.
                </p>
                <p>
                  Para usar el Beneficio de Acceso a Centros de Esquí, el
                  Usuario deberá acceder a la Plataforma con al menos 48 horas
                  de anticipación al día en que quiera hacer uso de dicho
                  Beneficio. En caso de haber cupos disponibles, deberá
                  seleccionar el día en que quiera acceder al Centro de Esquí
                  respectivo y pagar una reserva (la “Reserva”). El valor de la
                  Reserva asociada a este beneficio será el valor que resulte
                  mayor entre $20.000 (veinte mil pesos) o dos horas de tiempo
                  de esquí. La disponibilidad de cupos para acceder al Beneficio
                  de Acceso a Centros de Esquí es entregada directamente por los
                  Centros de Esquí respectivos.
                </p>
                <p>
                  Mediante la realización de la Reserva, Mountain Pass garantiza
                  al Usuario que el día para el cual haya realizado la Reserva
                  podrá hacer uso del Beneficio de Acceso a Centros de Esquí,
                  salvo que ocurra un evento de fuerza mayor conforme a la
                  legislación aplicable en cuyo caso el pago hecho por la
                  Reserva será reembolsado.
                </p>
                <p>
                  Realizada la Reserva, Mountain Pass enviará al Usuario un
                  código de reserva asociado al RUT de dicho Usuario. En caso de
                  que un Usuario quiera pagar en ese acto una Reserva para otras
                  personas, éstas deberán tener la calidad de Usuario y
                  encontrarse por tanto registradas en la Plataforma.
                </p>
                <p>
                  Los Usuarios deberán presentarse el día de la Reserva en el
                  Centro de Esquí respectivo, donde se realizará su ingreso
                  (“Check-In”) directamente con el staff de Mountain Pass.
                </p>
                <p>
                  De no presentarse en el día para el cual se realizó la
                  Reserva, ésta perderá su validez y quedará sin efecto, en cuyo
                  caso el Usuario no podrá efectuar reclamo ni solicitar
                  devolución del pago de la Reserva a Mountain Pass.
                </p>
                <p>
                  Al momento del Check-In, los Usuarios deberán validar su
                  identidad mediante la presentación al staff de Mountain Pass
                  de su cédula de identidad o pasaporte. El staff de Mountain
                  Pass procederá a registrar la hora de ingreso, le entregará un
                  ticket al Usuario, y se realizará un cargo por autorización en
                  la tarjeta de crédito o equivalente que presente el Usuario
                  por un monto de $60.000 (sesenta mil pesos) o seis horas de
                  tiempo de esquí, según corresponda (“Cargo Adelantado”). El
                  tiempo de uso del Beneficio de Acceso a Centros de Esquí se
                  calcula desde los 15 minutos siguientes a la entrega del
                  ticket y hasta los 15 minutos previos a la devolución del
                  ticket.
                </p>
                <p>
                  Cuando el Usuario quiera dejar de hacer uso del Beneficio de
                  Acceso a Centros de Esquí, se deberá acercar al staff de
                  Mountain Pass para entregar el ticket. En ese acto, se
                  registrará la hora de salida (“Check-Out”) y se procederá a
                  facturar y realizar el cobro por el uso efectivo del Beneficio
                  de Acceso a Centros de Esquí en el medio de pago que hubiere
                  presentado el Usuario. El pago realizado al momento de la
                  Reserva se imputará al monto total a pagar en el Check-Out.
                  Una vez que el Usuario devuelve su ticket, éste se cancelará
                  de manera que no podrá ser entregado nuevamente al Usuario.
                </p>
                <p>
                  En caso de que el Usuario no realizara el Check-Out al
                  finalizar el uso del Beneficio de Acceso a Centros de Esquío o
                  en caso de pérdida del ticket, se procederá a facturar y
                  realizar el cobro al medio de pago que el Usuario hubiere
                  presentado al momento del Check-In por el valor de la Reserva
                  más el Cargo Adelantado.
                </p>
                <p>
                  Mountain Pass no procederá a realizar devolución alguna del
                  pago de la Reserva ni descuento alguno por el tiempo u
                  oportunidades en las que efectivamente se hubiere utilizado el
                  Beneficio de Acceso a Centros de Esquí a causa de condiciones
                  climáticas adversas en los Centros de Esquí. Lo anterior,
                  salvo que los Centros de Esquí hubieren cerrado oficialmente y
                  para todo público sus instalaciones durante todo el día para
                  el cual se hubiere realizado la Reserva, en cuyo caso se
                  procederá a reembolsar al Usuario el monto pagado por la
                  Reserva.
                </p>
                <h4>
                  <strong>Normas Generales aplicables a los Beneficios</strong>
                </h4>
                <p>
                  ¿Qué es un cargo por autorización? Un cargo por autorización
                  significa que Mountain Pass se comunicará con el banco emisor
                  del medio de pago presentado por el Usuario, para asegurar de
                  que la forma de pago que se utilizó es válida y de que el
                  Usuario tiene suficientes fondos para realizar la compra. El
                  banco retendrá los fondos hasta que se procese de forma
                  definitiva la transacción o venza la autorización. Una
                  retención por autorización pendiente no es un cobro, así que
                  no se realizará ningún pago por las autorizaciones. Mountain
                  Pass solo cobrará por hora o por uso efectivo de los
                  productos, servicios e Infraestructura del Proveedor, pagando
                  un precio reducido en relación al que el Usuario pagaría por
                  dicho producto, servicio y/o Infraestructura del Proveedor de
                  no contar con los Beneficios que otorga la Membresía. LOS
                  USUARIOS DE MOUNTAIN PASS NUNCA PAGARÁN MÁS DE LO QUE HUBIERAN
                  PAGADO DE HABER CONTRATADO LOS SERVICIOS Y PRODUCTOS
                  DIRECTAMENTE AL PROVEEDOR.
                </p>
                <p>
                  El Usuario debe garantizar los respectivos pagos a través de
                  una tarjeta de crédito bancaria, tarjeta de débito o cualquier
                  otra forma que, a criterio exclusivo de Mountain Pass, ofrezca
                  garantía suficiente de pago. Mountain Pass utiliza
                  procesadores de pagos de terceros para cobrar. Este
                  procesamiento de los pagos estará sujeto también a los
                  términos, condiciones y políticas de privacidad del respectivo
                  procesador de pagos.
                </p>
                <p>
                  La distintas ofertas y alternativas de Beneficios ofrecidos
                  por los Proveedores incluirán las modalidades, plazos de
                  vigencia, detalles y condiciones específicas de dicho producto
                  y/o servicio. Asimismo, cada una de estas ofertas y
                  alternativas de acceso tendrán una duración determinada,
                  publicada a disposición de los Usuarios a través de la
                  Plataforma.
                </p>
                <p>
                  Las descripciones de los Beneficios se realizan en base a la
                  información proporcionada por los propios Proveedores. Lo
                  mismo ocurre con la fotografías, imágenes y videos asociados a
                  los Proveedores.
                </p>
                <h4>
                  <strong>
                    ¿Cambiará alguna vez Mountain Pass los Servicios?
                  </strong>
                </h4>
                <p>
                  Es probable. Mountain Pass siempre está buscando evolucionar y
                  mejorar la experiencia de sus Usuarios, encontrar eficiencias
                  y/o introducir nuevas funcionalidades y Beneficios. En
                  ocasiones podrá ser necesario cancelar, interrumpir o ajustar
                  parte o la totalidad de los Servicios. En estos casos, siempre
                  notificaremos a los Usuarios vía correo electrónico y/o a
                  través de la Plataforma, para la aceptación de las
                  modificaciones que correspondan. Sin embargo, cualquier
                  modificación de los Servicios, así como la eventual suspensión
                  del funcionamiento de la Plataforma, no afectará en ningún
                  caso los derechos válidamente adquiridos por los Usuarios.
                </p>
                <p>
                  Asimismo, es posible que los Servicios que ofrece Mountain
                  Pass a través de la Plataforma puedan experimentar
                  interrupciones temporales debido a dificultades técnicas,
                  mantenimiento, pruebas o actualizaciones, incluidas las
                  necesarias para reflejar los cambios en las leyes y los
                  requisitos normativos pertinentes. Estas interrupciones son
                  necesarias para cumplir con la normativa vigente y para
                  garantizar al Usuario un mejor servicio, por lo que Mountain
                  Pass no será responsable por los eventuales perjuicios que las
                  referidas interrupciones puedan causar a los Usuarios y
                  empleará sus mejores esfuerzos para que las interrupciones
                  temporales se extiendan por la menor cantidad de tiempo
                  posible.
                </p>
                <h4>
                  <strong>¿Cambiarán estos Términos de Uso alguna vez?</strong>
                </h4>
                <p>
                  Es posible que estos Términos de Uso deban cambiar en el
                  futuro, debido a modificaciones de los Beneficios, necesidades
                  del negocio, cambios regulatorios, entre otros.
                </p>
                <p>
                  Cada cambio será notificado vía correo electrónico y/o a
                  través de la Plataforma y en caso alguno afectará los derechos
                  válidamente adquiridos por los Usuarios.
                </p>
                <p>
                  Si el Usuario no está de acuerdo con los nuevos Términos de
                  Uso, podrá rechazarlos, lo que significa que ya no podrá
                  utilizar la Plataforma ni los Beneficios.
                </p>
                <p>
                  Sin perjuicio de lo anterior, para aquellos Usuarios que hayan
                  suscrito y pagado la Membresía al momento de realizarse las
                  modificaciones, siempre se respetarán las condiciones
                  inicialmente pactadas con cada uno de ellos durante todo el
                  periodo contratado, de manera de no afectar los derechos
                  válidamente adquiridos.
                </p>
                <h4>
                  <strong>¿Cómo se comunicará Mountain Pass conmigo?</strong>
                </h4>
                <p>
                  Como parte de los Servicios, el Usuario podrá recibir
                  comunicaciones a través de la Plataforma o, a través de
                  mensajes que Mountain Pass le envíe por otros medios de
                  comunicación (por correo electrónico, llamada o SMS). Al
                  registrarse en la Plataforma el Usuario acepta que Mountain
                  Pass le envíe información relativa a su cuenta o a las
                  transacciones que realice en la Plataforma o que considere que
                  puede ser de su interés, y que haya sido autorizada por el
                  Usuario.
                </p>
                <p>
                  En toda forma de comunicación y en la Política de Privacidad
                  el Usuario encontrará los enlaces para dejar de recibir dichas
                  comunicaciones.
                </p>
                <p>
                  El Usuario reconoce y acepta que los Proveedores podrán
                  contactarlo a través de cualquier información de contacto
                  proporcionada en su cuenta.
                </p>
                <h4>
                  <strong>
                    ¿Existen restricciones al uso de los Servicios?
                  </strong>
                </h4>
                <p>
                  El Usuario declara, garantiza y acepta que no utilizará de
                  otro modo los Servicios o interactuará con ellos de manera
                  que:
                </p>
                <p>
                  – Infrinja o viole los derechos de propiedad intelectual o
                  cualquier otro derecho de cualquier otra persona (incluida
                  Mountain Pass);
                </p>
                <p>– Infrinja cualquier ley o normativa aplicable;</p>
                <p>
                  – Sea peligroso, dañino, fraudulento, engañoso, amenazante,
                  acosador, difamatorio, obsceno o de cualquier otro modo
                  objetable;
                </p>
                <p>
                  – Ponga en peligro la seguridad de su cuenta de Usuario de la
                  Plataforma o la de cualquier otra persona (como permitir que
                  otra persona inicie sesión en la Plataforma bajo su cuenta);
                </p>
                <p>
                  – Intente, de cualquier manera, obtener la contraseña, la
                  cuenta u otra información de seguridad de cualquier otro
                  Usuario;
                </p>
                <p>
                  – Viole la seguridad de cualquier red informática, o descifre
                  cualquier contraseña o código de encriptación de seguridad; o
                </p>
                <p>
                  – Descompile, realice ingeniería inversa o intente obtener el
                  código fuente o las ideas o información subyacentes de la
                  Plataforma o Servicios o relacionadas con ellos.
                </p>
                <p>
                  La infracción de cualquiera de los numerales anteriores es
                  motivo de terminación de su derecho de uso o acceso a los
                  Servicios.
                </p>
                <h4>
                  <strong>Derechos de Propiedad</strong>
                </h4>
                <p>
                  Los materiales mostrados o disponibles en la Plataforma o a
                  través de ella, incluidos, entre otros, el nombre y el
                  logotipo de Mountain Pass y todos los textos, imágenes,
                  archivos de audio, archivos de video, gráficos, información,
                  dibujos, diseños, esquemas, anuncios, noticias, datos,
                  guiones, software, mapas y características interactivas
                  presentados en la Plataforma (y cualquier software y códigos
                  de programación subyacentes), los programas o algoritmos
                  computacionales (en cualquier formato), los módulos de
                  programación, las directrices operativas o cualquier contenido
                  creado, proporcionado o generado de alguna manera por Mountain
                  Pass están protegidos por los derechos de autor y/u otras
                  leyes de propiedad intelectual. El Usuario se compromete a
                  respetar todos los avisos de derechos de autor, las normas de
                  marcas comerciales, la información y las restricciones
                  contenidas en cualquier contenido al que acceda a través de la
                  Plataforma o Servicios, y no utilizará, copiará, reproducirá,
                  modificará, traducirá, publicará, emitirá, transmitirá,
                  distribuirá, ejecutará, cargará, mostrará, licenciará,
                  venderá, comercializará o explotará de cualquier otro modo
                  para cualquier fin cualquier contenido que no sea de su
                  propiedad, (i) sin el consentimiento previo del propietario de
                  dicho contenido o (ii) de una forma que infrinja los derechos
                  de otra persona (incluidos los de Mountain Pass).
                </p>
                <p>
                  Sujeto a estos Términos de Uso, concedemos a cada Usuario de
                  la Plataforma una licencia mundial, gratuita, no exclusiva, no
                  sublicenciable e intransferible para utilizar (es decir, para
                  descargar y mostrar localmente) el Contenido únicamente con el
                  fin de utilizar los Servicios. El uso, la reproducción, la
                  modiﬁcación, la distribución o el almacenamiento de cualquier
                  contenido para cualquier fin que no sea el uso de los
                  Servicios está expresamente prohibido sin nuestro permiso
                  previo por escrito. El Usuario reconoce que Mountain Pass es
                  el propietario de la Plataforma y de los Servicios. El Usuario
                  no podrá modificar, publicar, transmitir, participar en la
                  transferencia o venta, reproducir (salvo lo dispuesto
                  expresamente en esta Sección), crear trabajos derivados
                  basados en ellos o explotar de cualquier otra forma cualquiera
                  de los Servicios. Los Servicios pueden permitir al Usuario
                  copiar o descargar determinados contenidos a los que son
                  aplicables todas las restricciones de esta sección.
                </p>
                <h4>
                  <strong>¿Qué pasa con mi privacidad?</strong>
                </h4>
                <p>
                  Para conocer la política de privacidad de Mountain Pass, haga
                  clic aquí. Dicha política cumple los con los estándares y
                  normativa nacional sobre privacidad de datos, su tratamiento y
                  eliminación.
                </p>
                <hr />
                <h2 className="mb-4 mt-5" id="4">
                  4 – SERVICIO DE ATENCIÓN AL CLIENTE, INFORMACIÓN, PREGUNTAS Y
                  QUEJAS
                </h2>
                <p>
                  Ante cualquier pregunta, comentarios o inquietud sobre estos
                  Términos de Uso, el Usuario podrá contactar a Mountain Pass
                  ingresando a la sección “[nombre de sección ej. ayuda]”
                  disponible en la Plataforma o escribiendo directamente al
                  siguiente correo electrónico: [incluir correo de servicio al
                  cliente o departamento especializado].
                </p>
                <hr />
                <h2 className="mb-4 mt-5" id="5">
                  5 – ¿QUÉ MÁS NECESITO SABER?
                </h2>
                <h4>
                  <strong>Requisito mínimo de Usuarios suscritos</strong>
                </h4>
                <p>
                  Mediante la aceptación de los presentes Términos de Uso, el
                  Usuario reconoce y acepta que Mountain Pass pondrá a
                  disposición de los Usuarios los Beneficios asociados a los
                  Centros de Esquí, sólo una vez que un mínimo de cinco mil
                  (5.000) Usuarios hubiere adquirido la Membresía. De no
                  cumplirse con dicha meta para lanzar los Beneficios, Mountain
                  Pass efectuará el reembolso completo del monto pagado por la
                  Membresía a los Usuarios que ya la hubieren adquirido. Los
                  reembolsos efectuados directamente a una tarjeta de pago
                  pueden tardar entre cinco (5) y diez (10) días hábiles
                  bancarios en verse reflejados en la cuenta del Usuario.
                </p>
                <p></p>
                <h4>
                  <strong>Cesión</strong>
                </h4>
                <p>
                  El Usuario no podrá ceder o transferir sus derechos y
                  obligaciones bajo los Términos de Uso, ni su cuenta en la
                  Plataforma, de ninguna manera sin el consentimiento previo por
                  escrito de Mountain Pass. Mountain Pass podrá transferir o
                  ceder sus derechos y obligaciones bajo los Términos de Uso sin
                  consentimiento del Usuario, a empresas relacionadas, filiales
                  o coligadas de Mountain Pass, según se definen en los
                  artículos 86 y 87 de la Ley 18.046 sobre Sociedades Anónimas,
                  en la medida que el cesionario cumpla con las condiciones
                  patrimoniales, técnicas, operativas e idoneidad para asumir
                  las obligaciones de los presentes Términos de Uso.
                </p>
                <h4>
                  <strong>
                    Sitios, productos y servicios de terceros; enlaces
                  </strong>
                </h4>
                <p>
                  La Plataforma puede incluir enlaces o conexiones a otros
                  sitios web o servicios de terceros que no son de propiedad ni
                  son operados por Mountain Pass (“Sitios Enlazados”),
                  únicamente para comodidad de los Usuarios. Mountain Pass no es
                  responsable del contenido de dichos Sitios Enlazados ni de la
                  información, material, productos o servicios contenidos en
                  otros sitios enlazados o accesibles a través de los Sitios
                  Enlazados. Al ser sitos web de terceros, Mountain Pass no
                  tiene control sobre los estándares de seguridad utilizados en
                  ellos ni del contenido o las políticas de privacidad de los
                  mismos.
                </p>
                <p>
                  EL ACCESO Y USO DE SITIOS ENLAZADOS, INCLUIDO EL ACCESO Y USO
                  DE LA INFORMACIÓN, MATERIAL, PRODUCTOS Y SERVICIOS DISPONIBLES
                  EN ELLOS O DISPONIBLES A TRAVÉS DE SITIOS ENLAZADOS, ES DE
                  EXCLUSIVA RESPONSABILIDAD DE LOS USUARIOS.
                </p>
                <h4>
                  <strong>Responsabilidad de Mountain Pass</strong>
                </h4>
                <p>
                  Los Beneficios disponibles a través de la Plataforma y las
                  descripciones de los mismos son proporcionados por los
                  Proveedores y no por Mountain Pass. Mediante la aceptación de
                  los presentes Términos de Uso, el Usuario acepta que el uso de
                  la Plataforma, la asistencia y participación a los
                  establecimientos de los Proveedores, así como la compra y/o
                  uso de cualquier Beneficio es de su exclusiva responsabilidad.
                  Mountain Pass no asume ninguna responsabilidad ni otorga
                  garantía de ningún tipo, expresa o implícita, derivada de ni
                  en relación con los productos y servicios ofrecidos por los
                  Proveedores.
                </p>
                <p>
                  Mountain Pass solo garantiza a sus Usuarios que, mediante la
                  realización de la Reserva, el día para el cual hayan realizado
                  la Reserva podrán hacer uso del producto y/o servicio pagando
                  por hora o por uso efectivo y, que los Usuarios de Mountain
                  Pass nunca pagarán más de lo que hubieran pagado de haber
                  contratado los servicios y productos directamente del
                  Proveedor.
                </p>
                <p>
                  En ningún caso Mountain Pass será responsable por lesión,
                  pérdida, reclamación, daño o daños especiales, ejemplares,
                  punitivos, incidentales o consecuentes de ningún tipo, ya sea
                  fundamentándose en un contrato, en presunto agravio u otros
                  motivos, que surjan de o estén relacionados de alguna manera
                  con la asistencia al establecimiento del Proveedor o con el
                  uso de los Beneficios. Mountain Pass proporciona Beneficios y
                  promociones para el uso de productos y servicios relacionados
                  al esquí ofrecidos por terceros independientes a Mountain
                  Pass. Mountain Pass no está conectado de otro modo, ni es un
                  agente de ningún Proveedor. El Proveedor es el único
                  responsable de las interacciones con el Usuario. Todas y cada
                  una de las reclamaciones, lesiones, enfermedades, daños,
                  responsabilidades y costos sufridos por el Usuario como
                  resultado de su interacción, visita o participación en un
                  establecimiento del Proveedor deberán hacerse directamente
                  contra el Proveedor responsable.
                </p>
                <p>
                  Es responsabilidad del Usuario revisar y determinar que la
                  Plataforma y los Servicios ofrecidos son adecuados para los
                  fines previstos por este. Mountain Pass no acepta ninguna
                  responsabilidad en cuanto a la idoneidad o adecuación de la
                  Plataforma o de los Servicios para satisfacer las necesidades
                  que se hubieren representado los Usuarios.
                </p>
                <p>
                  Nada de lo dispuestos en estos Términos de Uso tiene la
                  intención de excluir o limitar la responsabilidad que Mountain
                  Pass pueda tener con sus Usuarios en virtud de su rol de
                  operador de plataforma de comercio electrónico, según lo
                  contemplado por la legislación aplicable.
                </p>
                <h4>
                  <strong>
                    Responsabilidad respecto a las Ofertas e información
                    relacionada con el ejercicio físico
                  </strong>
                </h4>
                <p>
                  Mediante la aceptación de los presentes Términos de Uso, el
                  Usuario entiende que Mountain Pass no es un centro de esquí,
                  gimnasio, centro de ocio o recreativo, club de salud,
                  instalación, centro de fitness o establecimiento similar, y
                  que los Beneficios que proporciona a través de la Plataforma
                  son operados e impartidos por un Proveedor independiente de
                  Mountain Pass y no por Mountain Pass. Mountain Pass, en su
                  calidad de operador de plataforma de comercio electrónico, no
                  será responsable de la calidad de ningún producto o servicio
                  proporcionado por los Proveedores (incluidos, entre otros, la
                  calidad o medidas de seguridad de las instalaciones, aptitud o
                  idoneidad del personal del Proveedor, calidad de la
                  infraestructura, horarios, condiciones de seguridad y calidad
                  de los servicios disponibles en los Centro de Esquí, etc.).
                </p>
                <p>
                  El Usuario declara conocer que hay ciertos riesgos y peligros
                  inherentes a la práctica de esquí y del uso de los Beneficios.
                  Dichos riesgos incluyen, entre otros, daños a la propiedad,
                  enfermedad, lesiones físicas o muerte. El Usuario, mediante la
                  aceptación de los presentes Términos de Uso asume a su propia
                  cuenta el riesgo de lesiones o daños que se puedan sufrir en
                  el uso de los Beneficios, eximiendo a Mountain Pass de toda
                  responsabilidad a ese respecto. El Usuario es el único
                  responsable de determinar si los Beneficios disponibles en la
                  Plataforma son adecuados y compatibles con su estado de salud
                  y el de los menores en cuya representación hubiere adquirido
                  una Membresía.
                </p>
                <p>
                  SI LOS USUARIOS DE LA PLATAFORMA TIENEN ALGUNA DUDA SOBRE SUS
                  CONDICIONES DE SALUD O APTITUD FÍSICA PARA PRACTICAR ESQUÍ,
                  DEBEN CONSULTAR SIEMPRE A UN MÉDICO U OTRO PROFESIONAL DEL
                  AREA DE LA SALUD ANTES DE ACEPTAR LOS PRESENTES TÉRMINOS DE
                  USO.
                </p>
                <h4>
                  <strong>Términos y Condiciones de los Proveedores</strong>
                </h4>
                <p>
                  Al aceptar los Términos de Uso los Usuarios declaran aceptar
                  de acuerdo los términos y condiciones de los que regulan los
                  servicios y/o productos de los Proveedores. El uso de los
                  Beneficios ofrecidos por los Proveedores puede estar sujeto a
                  políticas, reglas o condiciones especiales establecidas por el
                  correspondiente Proveedor. SI EL USUARIO TIENE PREGUNTAS SOBRE
                  LA EXENCIÓN O DESCARGO DE RESPONSABILIDAD DE UN PROVEEDOR U
                  OTROS TÉRMINOS, CONSULTE EL SITIO WEB DEL PROVEEDOR O PÓNGASE
                  EN CONTACTO DIRECTAMENTE CON EL PROVEEDOR ANTES DE ACEPTAR LOS
                  PRESENTES TÉRMINOS DE USO.
                </p>
                <p>
                  Los Usuarios declaran conocer y aceptar que el Proveedor puede
                  solicitar o requerir que se le proporcione información
                  personal adicional a la que solicita Mountain Pass, y que
                  Mountain Pass no es responsable de ningún uso de dicha
                  información por parte del Proveedor.
                </p>
                <h4>
                  <strong>Ley Aplicable</strong>
                </h4>
                <p>
                  Estos Términos de Uso se rigen y se interpretarán de acuerdo
                  con las leyes de la República de Chile.
                </p>
                <h4>
                  <strong>Jurisdicción</strong>
                </h4>
                <p>
                  Cualquier duda, dificultad o controversia que surja entre el
                  Usuario y Mountain Pass con motivo, causa u omisión de estos
                  Términos de Uso, ya sea respecto de su interpretación,
                  cumplimiento, validez, terminación o por cualquier otro motivo
                  relacionado directa o indirectamente con éstos, se resolverá
                  ante el juzgado de policía local correspondiente al domicilio
                  de Mountain Pass o del Usuario, a elección de este último
                  según lo dispuesto por el Artículo 50 letra A) de la Ley
                  19.496 o cualquier otro Tribunal de Justicia que resulte
                  competente de acuerdo con lo establecido por las leyes de la
                  República de Chile.
                </p>
                <h4>
                  <strong>Varios</strong>
                </h4>
                <p>
                  El hecho de que el Usuario o Mountain Pass no ejerza, de
                  alguna manera, algún derecho de los presentes Términos y
                  Condiciones no se considerará una renuncia a otros derechos en
                  virtud de los mismos. Si alguna de las disposiciones de estos
                  Términos de Uso se considera inaplicable o inválida, éstos
                  subsistirán con las restantes cláusulas, de modo que las
                  disposiciones válidas y aplicables de estos Términos de Uso
                  sigan siendo plenamente vigentes y aplicables, con sujeción a
                  lo dispuesto por la Ley 19.496. El Usuario y Mountain Pass
                  aceptan que estos Términos de Uso son la declaración completa
                  y exclusiva del entendimiento mutuo entre el Usuario y
                  Mountain Pass, y que estos Términos de Uso sustituyen y dejan
                  sin efecto todos los acuerdos, comunicaciones y otros
                  entendimientos anteriores, tanto escritos como orales,
                  relacionados con el objeto de estos Términos de Uso. El
                  Usuario reconoce y acepta que no es un empleado, agente, socio
                  o empresa conjunta de Mountain Pass, y que no tiene autoridad
                  de ningún tipo para obligar a Mountain Pass en ningún aspecto.
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer mt-auto py-5">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <a className="footer-brand d-block" href="#">
                  <img
                    className="margin-top img-fluid "
                    src="/images/MountainPass-white.svg"
                  />
                </a>
                <p className="d-block mt-4">
                  Mountain Pass 2023 –{" "}
                  <a href="mailto:clientes@smarterbot.cl">
                    clientes@smarterbot.cl
                  </a>
                </p>

                <div className="follow-us mt-4">
                  <a
                    href="https://www.instagram.com/mountainpassgroup/"
                    target="_blank"
                  >
                    <img
                      className="icon-follow-us align-middle img-fluid"
                      src="/images/i-instagram.svg"
                      width="40"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/MountainPassGroup/"
                    target="_blank"
                  >
                    <img
                      className="icon-follow-us align-middle img-fluid"
                      src="/images/i-facebook.svg"
                      width="40"
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@mountainpassgroup"
                    target="_blank"
                  >
                    <img
                      className="icon-follow-us align-middle img-fluid"
                      src="/images/i-tiktok.svg"
                      width="40"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/@mountainpassgroup"
                    target="_blank"
                  >
                    <img
                      className="icon-follow-us align-middle img-fluid"
                      src="/images/i-youtube.svg"
                      width="40"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-6">
                <ul>
                  <li>
                    <a href="/quienes-somos">Quiénes Somos</a>
                  </li>
                  <li>
                    <a href="/precios">Tarifas de ski por hora</a>
                  </li>
                  <li>
                    <a href="/politicas-de-privacidad">
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <a href="/terminos-y-condiciones">Términos de Uso</a>
                  </li>
                  <li>
                    <a href="/preguntas-frecuentes">¿Cómo Funciona?</a>
                  </li>
                  <li>
                    <a href="/auth/login">Iniciar Sesión</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}
