import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { Montserrat } from "@next/font/google";
import { Fragment, useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

export default function Politicas() {
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
                  Política de <span className="color">privacidad</span>
                </h1>
                <h2 className="text-center">
                  Y protección de datos personales Mountain Pass
                </h2>
                <hr />
                <a href="#1">
                  <p>
                    <strong>1 - Definiciones</strong>
                  </p>
                </a>
                <a href="#2">
                  <p>
                    <strong>2 - Introducción</strong>
                  </p>
                </a>
                <a href="#3">
                  <p>
                    <strong>3 - ¿Qué Datos Personales recopilamos?</strong>
                  </p>
                </a>
                <a href="#4">
                  <p>
                    <strong>
                      4 - Derechos y controles sobre tus Datos personales
                    </strong>
                  </p>
                </a>
                <a href="#5">
                  <p>
                    <strong>
                      5 - Finalidad con la que utilizamos tus Datos Personales
                    </strong>
                  </p>
                </a>
                <a href="#6">
                  <p>
                    <strong>6 - ¿Cómo compartimos tus datos?</strong>
                  </p>
                </a>
                <a href="#7">
                  <p>
                    <strong>7 - Retención de datos</strong>
                  </p>
                </a>
                <a href="#8">
                  <p>
                    <strong>
                      8 - ¿Cómo mantenemos seguros tus Datos Personales?
                    </strong>
                  </p>
                </a>
                <a href="#9">
                  <p>
                    <strong>
                      9 - Servicio de atención al cliente, información,
                      preguntas y quejas
                    </strong>
                  </p>
                </a>
                <a href="#10">
                  <p>
                    <strong>10 - ¿Qué más necesito saber?</strong>
                  </p>
                </a>
                <hr />
                <h2 className="mb-4 mt-5" id="1">
                  1 – DEFINICIONES.
                </h2>
                <p>
                  <strong>Datos Personales:</strong> los relativos a cualquier
                  información concerniente a personas naturales, identificadas o
                  identificables.
                </p>
                <p>
                  <strong>Mountain Pass SpA o Mountain Pass:</strong> es una
                  empresa y sociedad por acciones chilena constituida por
                  escritura pública de fecha 5 de mayo de 2022 en la Notaría de
                  Santiago de don Roberto Antonio Cifuentes Allel, con domicilio
                  social en Santiago, y que tiene como objetivo el promover la
                  cultura de montaña. En ese sentido, la sociedad, en su
                  carácter de operador de plataforma de comercio electrónico,
                  busca facilitar y promover vías de acceso a la montaña para
                  fines turísticos y deportivos, mediante la suscripción de
                  convenios con distintos Proveedores a lo largo de todo el
                  país. Mountain Pass no es un centro de esquí, un centro de
                  ocio o recreativo, un club de salud, instalación, o
                  establecimiento similar; ni tiene, opera ni controla ninguna
                  de las ofertas de servicios y productos que se ofrecen a
                  través de la Plataforma.
                </p>
                <p>
                  <strong>Plataforma:</strong> es el soporte online (la
                  siguiente página web:{" "}
                  <a href="https://www.mountainpass.cl/" target="_blank">
                    https://www.mountainpass.cl/
                  </a>
                  ) mediante el cual se ofrecen los Servicios.
                </p>
                <p>
                  <strong>Política de Privacidad:</strong> el presente documento
                  que tiene por objetivo informar a los Usuarios sobre la forma
                  en que Mountain Pass recopila, usa, comparte y protege la
                  información que es proporcionada por sus Usuarios al momento
                  de utilizar sus Servicios y Plataforma.
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
                  <strong>Responsable de los Datos o Responsable:</strong>{" "}
                  Mountain Pass en cuanto le compete las decisiones relacionadas
                  con el Tratamiento de Datos.
                </p>
                <p>
                  <strong>Servicio(s):</strong> servicios de intermediación o
                  enlace mediante la Plataforma entre un Usuario y los distintos
                  Proveedores.
                </p>
                <p>
                  <strong>Tratamiento de Datos o Tratamiento:</strong>{" "}
                  tratamiento de datos, cualquier operación o complejo de
                  operaciones o procedimientos técnicos, de carácter
                  automatizado o no, que permitan recolectar, almacenar, grabar,
                  organizar, elaborar, seleccionar, extraer, confrontar,
                  interconectar, disociar, comunicar, ceder, transferir,
                  transmitir o cancelar datos de carácter personal, o
                  utilizarlos en cualquier otra forma.
                </p>
                <p>
                  <strong>Usuario(s):</strong> persona natural o jurídica que ha
                  aceptado los Términos de Uso de la Plataforma al momento de
                  registrarse en la misma y por consiguiente, la Política de
                  Privacidad y Protección de Datos Personales.
                </p>
                <hr />
                <h2 className="mb-4 mt-5" id="2">
                  2 – INTRODUCCIÓN
                </h2>
                La Política de Privacidad tiene por objetivo establecer e
                informar a los Usuarios del Tratamiento de Datos Personales que
                se recolectan a través de la Plataforma de Mountain Pass. Los
                términos no definidos en la presente Política de Privacidad
                tendrán el significado que se les ha asignado en los Términos de
                Uso. La Política de Privacidad es aplicable a todos los Usuarios
                personas naturales de los Servicios otorgados por Mountain Pass,
                así como a los Usuarios de Plataforma, sin importar el país en
                el que se encuentren.
                <hr />
                <h2 className="mb-4 mt-5" id="3">
                  3 – ¿QUÉ DATOS PERSONALES RECOPILAMOS?
                </h2>
                <p>
                  Los siguientes Datos Personales son recolectados por Mountain
                  Pass o en su nombre:
                </p>
                <p>
                  Datos que los Usuarios proporcionan cuando, por ejemplo, crean
                  sus cuentas, contactan a soporte técnico, o suscriben
                  comentarios, sugerencias o reclamos.
                </p>
                <p>
                  Datos que se generan cuando se utiliza la Plataforma y los
                  Servicios, como los detalles del dispositivo, ubicación y uso
                  de la Plataforma.
                </p>
                <p>
                  Los Usuarios de la Plataforma y Servicios, asumen la
                  obligación de proporcionar sus datos de manera exacta,
                  precisa, verdadera, y de actualizarlo cada vez que ocurra una
                  modificación de los mismos.
                </p>
                <p>
                  No será imputable a Mountain Pass, siempre que éste haya
                  adoptado todas las medidas razonables para que se supriman o
                  rectifiquen sin dilación, la inexactitud de los datos
                  personales, con respecto a los fines que se tratan, cuando los
                  datos inexactos: (a) hubiesen sido obtenidos por Mountain Pass
                  directamente del Usuario, (b) hubieren sido obtenidos por
                  Mountain Pass de un intermediario, que recoja a nombre de
                  Mountain Pass los datos del Usuario, o (c) hubieren sido
                  obtenidos de un registro público por Mountain Pass.
                </p>
                <h4>
                  <strong>
                    Datos proporcionados por los Usuarios. Incluye lo siguiente:
                  </strong>
                </h4>
                <p>
                  Perfil del Usuario: Mountain Pass recopila los datos que
                  brindan los Usuarios cuando crean o actualizan sus cuentas en
                  la Plataforma, lo que puede incluir, nombre, correo
                  electrónico, número de teléfono, número de cédula de
                  identidad, dirección, contraseña, foto de perfil, detalles
                  bancarios o de pago (incluyendo aquellos relacionados con su
                  verificación), y otros documentos de identificación
                  gubernamentales que muestren foto, genero, fecha de nacimiento
                  y número de documento.
                </p>
                <p>
                  Mountain Pass puede utilizar las fotografías enviadas por los
                  Usuarios para comprobar su identidad mediante tecnologías de
                  verificación facial.
                </p>
                <p>
                  Datos demográficos: Mountain Pass recopila información
                  demográfica sobre los Usuarios, incluso a través de encuestas
                  destinadas a ellos.
                </p>
                <p>
                  Otros datos: Mountain Pass recopila los datos que los Usuarios
                  envían cuando se contactan con el soporte al cliente de la
                  Plataforma, brindan calificaciones o reconocimientos a los
                  Servicios prestados a través de la Plataforma, o se comunican
                  con Mountain Pass de cualquier manera. Esto puede incluir
                  comentarios, fotografías u otras grabaciones de audio o video
                  que recopilan los Usuarios al momento de hacer uso de los
                  Servicios.
                </p>
                <p>
                  Información de menores de edad: Mountain Pass recopila la
                  información que sea entregada por los Usuario menores de edad,
                  cuyo registro en la Plataforma ha sido realizado por su padre,
                  madre o tutor legal según corresponda. La información que
                  Mountain Pass recopila relativa a los menores de edad
                  incluirá, nombre, fecha de nacimiento, número de cédula de
                  identidad y número de teléfono. Al realizar el registro de los
                  Usuarios menores de edad, su padre, madre o tutor legal según
                  corresponda, entrega su consentimiento para el Tratamiento de
                  sus datos.
                </p>
                <h4>
                  <strong>
                    Datos generados durante el uso de la Plataforma y Servicios.
                    Incluye lo siguiente:
                  </strong>
                </h4>
                <p>
                  Datos de ubicación: Mountain Pass recopila datos de ubicación
                  precisos o aproximados de los Usuarios para permitir y mejorar
                  el uso de la Plataforma, así como para optimizar la oferta de
                  los Servicios que se pueden brindar a través de la Plataforma.
                </p>
                <p>
                  Mountain Pass recopila esta información desde el momento en
                  que se crea el Usuario en la Plataforma y cada vez que la
                  Plataforma se ejecuta en primer plano (ej. la Plataforma se
                  encuentra abierta y en pantalla) en el dispositivo electrónico
                  que se utilice para acceder a ella.
                </p>
                <p>
                  Dichos datos se recopilan de los dispositivos electrónicos de
                  los Usuarios si se nos autoriza a hacerlo. Así, los Usuarios
                  pueden usar la Plataforma y acceder a los Servicios sin
                  permitir que se recopilen los datos de ubicación precisa del
                  Usuario. Sin embargo, lo anterior, puede afectar algunas
                  funciones de la Plataforma.
                </p>
                <p>
                  Información de transacciones: Mountain Pass recopila datos de
                  las transacciones relacionadas durante el uso de la
                  Plataforma, lo que incluye el tipo de Servicio solicitado o
                  prestado, fecha y hora de la prestación, detalles del pedido,
                  método e información de pago, e importe cobrado.
                </p>
                <p>
                  Datos de uso: Mountain Pass recopila información sobre cómo
                  los Usuarios interactúan con los Servicios y Plataforma. Esto
                  incluye datos como la fecha y la hora de acceso a la
                  Plataforma, funciones de la Plataforma, fallas de la
                  Plataforma y otras actividades del sistema, y tipo de
                  navegador. Adicionalmente, Mountain Pass puede recopilar datos
                  sobre los servicios o los sitios de terceros que se usan antes
                  de interactuar con la Plataforma y Servicios de Mountain Pass,
                  los que se utilizan con fines de marketing.
                </p>
                <p>
                  En algunos casos estos datos son recopilados a través de
                  cookies y tecnologías similares que crean y mantienen
                  identificadores exclusivos. El objetivo de la obtención de
                  estos datos a través de dichos mecanismos es poder autenticar
                  a los Usuarios, recordar las preferencias y configuración de
                  los Usuarios, brindar y medir la eficacia de las campañas de
                  publicidad, determinar la popularidad de algún contenido, y
                  analizar el tránsito y las tendencias del sitio web para
                  comprender los comportamientos en línea y los intereses de las
                  personas que interactúan con los Servicios y Plataforma de
                  Mountain Pass.
                </p>
                <p>
                  El Usuario tiene derecho a oponerse al procesamiento de
                  aquellas cookies que no sean estrictamente necesarias para
                  operar la Plataforma. El Usuario puede ejercer el referido
                  derecho en la ventana de gestión de cookies disponible al dar
                  click en el botón de “[Gestión de Cookies]” que se encuentra
                  disponible en nuestra Plataforma.
                </p>
                <p>
                  Datos del dispositivo: Mountain Pass puede recopilar datos
                  sobre los dispositivos usados para acceder a la Plataforma y
                  Servicios, lo que incluye modelos de hardware, dirección IP u
                  otros identificadores únicos del dispositivo, sistemas
                  operativos y versiones, software, idiomas preferidos,
                  identificadores de publicidad e información de las redes
                  móviles o de movimiento del dispositivo.
                </p>
                <p>
                  Datos de comunicación: Mountain Pass permitirá que los
                  Usuarios se comuniquen con Mountain Pass a través de la
                  Plataforma. Para brindar este servicio, Mountain Pass recibe
                  ciertos datos relacionados con las llamadas, mensajes u otras
                  comunicaciones, como su fecha, hora y contenido. Mountain Pass
                  también puede usar esta información para brindar servicios de
                  soporte a los Usuarios, incluso para resolver disputas; por
                  cuestiones de seguridad; a fin de mejorar los Servicios y
                  funciones; y para realizar análisis internos.
                </p>
                <p>
                  <strong>
                    Datos de otras fuentes. Entre estos se incluyen los
                    siguientes:
                  </strong>
                </p>
                <p>
                  Usuarios u otras personas que proporcionan datos con relación
                  a reclamos o a conflictos.
                </p>
                <p></p>
                <p>
                  Socios comerciales de Mountain Pass relacionados con tarjetas
                  de débito o de crédito emitidas por una institución financiera
                  asociada con Mountain Pass, en la medida en que se indique en
                  los Términos y Condiciones de la tarjeta.
                </p>
                <p>
                  Proveedores que ayudan a Mountain Pass a verificar la
                  identidad de los Usuarios, información de antecedentes, o que
                  revisan las cuentas de los Usuarios en relación con sanciones,
                  lavado de dinero o exigencias relativas a la identificación
                  del Usuario.
                </p>
                <p>Fuentes disponibles públicamente.</p>
                <p>
                  Proveedores de servicios de marketing o distribuidores de
                  datos, cuya información Mountain Pass usa con fines
                  publicitarios o de investigación.
                </p>
                <p>
                  Funcionarios de salud pública o de la fuerza del orden público
                  y otras autoridades gubernamentales.
                </p>
                <p>
                  Mountain Pass puede combinar la información recopilada de
                  estas fuentes con otros datos que posea.
                </p>
                <hr />
                <h2 className="mb-4 mt-5" id="4">
                  4 – DERECHOS Y CONTROLES SOBRE TUS DATOS PERSONALES
                </h2>
                <p>
                  Los Usuarios podrán ejercitar los derechos de acceso,
                  modificación, rectificación, bloqueo o supresión de sus datos
                  personales, incluyendo su dirección de e-mail, así como a
                  oponerse al tratamiento de los mismos y a ser informado de las
                  cesiones y/o transferencias internacionales, de conformidad a
                  lo dispuesto en la normativa chilena vigente.
                </p>
                <p>
                  La solicitud de acceso, modificación, rectificación, bloqueo
                  y/o supresión de datos personales deberá efectuarse mediante
                  correo electrónico enviado a{" "}
                  <a href="mailto:clientes@smartbot.cl" target="_blank">
                    clientes@smartbot.cl
                  </a>
                  , indicando su nombre completo, cédula nacional de identidad,
                  correo electrónico y número de teléfono celular. Sin perjuicio
                  de la solicitud que se realice, Mountain Pass podrá conservar
                  la información personal indicada precedentemente por motivos
                  de seguridad y control de fraude, en caso de existir dudas
                  razonables.
                </p>
                <hr />
                <h2 className="mb-4 mt-5" id="5">
                  5 – FINALIDAD CON LA QUE UTILIZAMOS TUS DATOS PERSONALES
                </h2>
                <p>
                  Los datos proporcionados por los Usuarios son usados para
                  mejorar, operar, entender y personalizar los Servicios y
                  especialmente para el cumplimiento de los siguientes
                  propósitos:
                </p>
                <p>
                  Para satisfacer o cumplir con la finalidad para la que se
                  proporcionó la información a Mountain Pass.
                </p>
                <p>
                  Para que Mountain Pass pueda comunicarse con los Usuarios
                  acerca de los Servicios, incluyendo actualizaciones u ofertas
                  (comunicaciones comerciales y no comerciales).
                </p>
                <p>
                  Para proporcionar apoyo y asistencia a los Usuarios respecto
                  de los Servicios.
                </p>
                <p>Para crear y gestionar la cuenta del Usuario.</p>
                <p>
                  Para personalizar el contenido de la Plataforma y los
                  Servicios en función de las preferencias del Usuario,
                  incluidas las ofertas y los anuncios específicos que se
                  ofrecen a través de ésta.
                </p>
                <p>
                  Para procesar solicitudes en relación a los Servicios vigentes
                  y a otros que Mountain Pass pudiera ofrecer a futuro,
                  incluidas las transacciones de pago.
                </p>
                <p>
                  Para responder a las consultas de los Usuarios y cumplir con
                  las solicitudes de éstos.
                </p>
                <p>
                  Para mejorar y desarrollar los Servicios y Plataformas,
                  incluyendo pruebas, investigación, análisis y desarrollo de
                  productos.
                </p>
                <p>
                  Para proteger o impedir acciones fraudulentas, ilegales o
                  perjudiciales y mantener la seguridad, la protección y la
                  integridad de la Plataforma, los Servicios y de los Usuarios.
                </p>
                <p>
                  Para cumplir con la obligaciones legales o contractuales de
                  Mountain Pass, resolver disputas y ejecutar los Términos de
                  Uso.
                </p>
                <p>
                  Para responder a las solicitudes realizadas en virtud de la
                  aplicación de la ley o normativa, y según lo exija la
                  legislación aplicable, una orden judicial o a la normativa
                  gubernamental.
                </p>
                <p>
                  Para cualquier otra finalidad comercial indicada al recopilar
                  los datos personales de los Usuarios o según lo establecido en
                  la normativa de protección de datos aplicable.
                </p>
                <hr />
                <h2 className="mb-4 mt-5" id="6">
                  6 – ¿CÓMO COMPARTIMOS TUS DATOS?
                </h2>
                <p>
                  Mountain Pass podrá compartir los Datos Personales que nos
                  proporciona el Usuario para las finalidades mencionadas en el
                  punto 5 anterior con cualquier sociedad de su mismo Grupo
                  Empresarial, según dicho término se define en el artículo 96
                  de la Ley Nº18.045 de Mercado de Valores.
                </p>
                <p>
                  Mountain Pass podrá comunicar los Datos Personales de los
                  Usuarios a terceros, exclusivamente en las siguientes
                  circunstancias y previa suscripción entre Mountain Pass y el
                  tercero de un acuerdo de confidencialidad, de manera que bajo
                  ninguna circunstancia la empresa o entidad pueda
                  comercializar, utilizar ni entregar Datos Personales de los
                  Usuarios a terceros:
                </p>
                <p>
                  Para los casos en que en virtud de un contrato de prestación
                  de servicios, sea una entidad externa o empresa distinta a
                  Mountain Pass quien administre las bases de datos que se
                  recogen a través de la Plataforma.
                </p>
                <p>
                  Para gestionar la experiencia de uso de los Servicios que
                  ofrece Mountain Pass con los Proveedores que ofrecen, a través
                  de la Plataforma, actividades para el disfrute de la nieve por
                  los Usuarios.
                </p>
                <p>
                  Para servicios de soporte y asistencia: Mountain Pass puede
                  utilizar prestadores de servicios, agentes o contratistas para
                  tareas de soporte de nuestra Plataforma y para prestar a
                  Mountain Pass asistencia en la administración de dichas
                  Plataformas o de algunas de las funciones, programas o
                  promociones disponibles en los mismos. Estos terceros
                  aplicarán los mismos niveles de seguridad para los Datos
                  Personales de los Usuarios que los propios de Mountain Pass y,
                  cuando sea necesario, estarán sujetos a un contrato para
                  preservar los Datos Personales de los Usuarios y para
                  tratarlos únicamente de acuerdo con las instrucciones que les
                  entregue Mountain Pass;
                </p>
                <p>
                  Para programas conjuntos o copatrocinados y finalidades
                  promocionales: Cuando Mountain Pass desarrolle un programa o
                  promoción conjunta o copatrocinada en la Plataforma con otra
                  entidad; y, como parte del evento, se recabe y traten Datos
                  Personales, podrá comunicarlos a su co-organizador o
                  co-patrocinador, sujeto al consentimiento del Usuario, cuando
                  sea necesario. Si los Datos Personales del Usuario están
                  siendo recabados por (o comunicados a) una entidad tercera
                  como parte la promoción, Mountain Pass informará de ello al
                  Usuario al tiempo de la recolección de los Datos Personales;
                </p>
                <p>
                  Por motivos de seguridad y frente a reclamaciones: Mountain
                  Pass podrá facilitar los Datos Personales del Usuario cuando
                  se le exija por Ley o cuando, de acuerdo a su criterio de
                  buena fe, lo considere necesario para cumplir procedimientos
                  normativos, para responder reclamaciones o para proteger la
                  seguridad y derechos del Grupo Empresarial del que forma parte
                  Mountain Pass, sus clientes y el público; En caso de que se
                  produzca una fusión o adquisición de todo o parte del Grupo
                  Empresarial del que forma parte Mountain Pass por un tercero,
                  o en caso de venta de o disposición de todo o parte de sus
                  negocios o activos, el comprador podría tener acceso a
                  información que podría incluir Datos Personales, con sujeción
                  a la normativa aplicable. Del mismo modo, los Datos Personales
                  pueden ser transferidos en el marco de reorganización
                  societaria, procedimientos concursales o similares
                  situaciones, sujeto a la normativa aplicable.
                </p>
                <hr />
                <h2 className="mb-4 mt-5" id="7">
                  7 – RETENCIÓN DE DATOS
                </h2>
                <p>
                  La Política de Privacidad entrará en vigor desde su aceptación
                  por parte del Usuario y estará vigente hasta que este revoque
                  dicha autorización para el Tratamiento de sus Datos
                  Personales. Se entenderá que se revoca la autorización por
                  parte del Usuario cuando éste elimine su cuenta personal para
                  uso de la Plataforma o, de ser aplicable, cuando expresamente
                  solicite revocar dicha autorización para el Tratamiento. La
                  revocación de la autorización implicará que el Usuario no
                  podrá utilizar los Servicios prestados por Mountain Pass a
                  través de la Plataforma.
                </p>
                <p>
                  Sin perjuicio de haberse revocado la autorización para el
                  Tratamiento, Mountain Pass podrá conservar los Datos
                  Personales y la información proporcionada por los Usuarios
                  debidamente bloqueados por aquel periodo permitido por la
                  legislación vigente, a fin de poder cumplir con la normativa
                  aplicable legal y reglamentaria, y poder resolver eventuales
                  disputas, reclamos, requerimientos por parte de la autoridad,
                  detectar problemas o incidencias y solucionarlos, y dar
                  cumplimiento a lo dispuesto en los Términos de Uso.
                </p>
                <p>
                  En caso de que el Usuario revoque la autorización para el
                  Tratamiento, dicha revocación no tendrá efecto retroactivo,
                  sin perjuicio de que el titular de los Datos Personales pueda
                  solicitar expresamente al Responsable, la eliminación completa
                  de sus datos en caso de que su almacenamiento carezca de
                  fundamento legal o cuando estuvieran caducos.
                </p>
                <hr />
                <h2 className="mb-4 mt-5" id="8">
                  8 – ¿CÓMO MANTENEMOS SEGUROS TUS DATOS PERSONALES?
                </h2>
                <p>
                  Mountain Pass considera que los Datos Personales y otra
                  información entregada por los Usuarios son un activo que debe
                  ser protegido de cualquier pérdida o acceso no autorizado, por
                  lo que tomará todas las precauciones para resguardar dicha
                  información mediante la implementación de mecanismos de
                  seguridad informática eficaces. Mountain Pass se obliga a
                  cumplir con toda la normativa aplicable en materia de medidas
                  de seguridad de Datos Personales, utilizando los estándares de
                  la industria en materia protección de datos y confidencialidad
                  de la información.
                </p>
                <p>
                  Asimismo, Mountain Pass adoptará todas las medidas de
                  seguridad necesarias para garantizar la confidencialidad de
                  los datos recopilados por medios de formularios, encuestas o
                  mecanismos de registro de navegación web.
                </p>
                <hr />
                <h2 className="mb-4 mt-5" id="9">
                  9 – SERVICIO DE ATENCIÓN AL CLIENTE, INFORMACIÓN, PREGUNTAS Y
                  QUEJAS
                </h2>
                <p>
                  Ante cualquier pregunta, comentario o inquietud sobre la
                  Política de Privacidad, el Usuario podrá contactar a Mountain
                  Pass usando la sección “[nombre de sección ej. ayuda]”
                  disponible en la Plataforma o escribiendo directamente al
                  siguiente correo:{" "}
                  <a href="mailto:clientes@smartbot.cl" target="_blank">
                    clientes@smartbot.cl
                  </a>
                  .
                </p>
                <hr />
                <h2 className="mb-4 mt-5" id="10">
                  10 – ¿QUÉ MÁS NECESITO SABER?
                </h2>
                <h4>
                  <strong>
                    ¿Cambiará alguna vez Mountain Pass esta Política de
                    Privacidad?
                  </strong>
                </h4>
                <p>
                  Es posible que esta Política de Privacidad deba cambiar en el
                  futuro, debido a modificaciones de los Servicios, cambio en la
                  legislación, necesidades del negocio, etc. Cada cambio que se
                  realice a la presente Política de Privacidad será notificado
                  vía correo electrónico y/o a través de la Plataforma, a los
                  Usuarios, quienes son libres para aceptarlos o rechazarlos. En
                  el caso que el Usuario no acepte las modificaciones de la
                  Política de Privacidad el vínculo entre este último y Mountain
                  Pass quedará disuelto, y respecto de los Datos Personales que
                  haya proporcionado dicho Usuario a Mountain Pass, tendrá
                  aplicación lo dispuesto en la Sección “Retención de Datos” de
                  esta Política de Privacidad.
                </p>
                <h4>
                  <strong>Ley Aplicable</strong>
                </h4>
                <p>
                  La presente Política de Privacidad se rige y se interpretará
                  de acuerdo con las leyes de la República de Chile.
                </p>
                <h4>
                  <strong>Jurisdicción</strong>
                </h4>
                <p>
                  Cualquier duda, dificultad o controversia que surja entre el
                  Usuario y Mountain Pass con motivo, causa u omisión de esta
                  Política de Privacidad, ya sea respecto de su interpretación,
                  cumplimiento, validez, terminación o por cualquier otro motivo
                  relacionado directa o indirectamente con éstos, se resolverá
                  ante el Tribunal de Justicia que resulte competente de acuerdo
                  con lo establecido por las leyes de la República de Chile.
                </p>
                <h4>
                  <strong>Protección de la Plataforma</strong>
                </h4>
                <p>
                  Con la finalidad de resguardar la seguridad de los sistemas y
                  de la Plataforma, Mountain Pass se reserva el derecho de
                  bloquear todo acceso de carácter sospechoso y/o malicioso que
                  pueda afectar la seguridad y continuidad de su Plataforma y
                  Servicios. Para ello, Mountain Pass efectuará un constante
                  monitoreo de las direcciones IP que ingresen a sus sistemas,
                  bloqueando el acceso a aquellas que presenten potenciales
                  riesgos.{" "}
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
