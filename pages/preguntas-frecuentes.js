import { Montserrat } from "@next/font/google";
import { Fragment } from "react";
import Faq from "../components/Faq";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

export default function Home() {
  return (
    <Fragment>
      <Header title="Preguntas Frecuentes"></Header>
      <div className={`${montserrat.className} d-flex flex-column h-100`}>
        <Nav />
        <div className="section-single">
          <div className="container">
            <div className="row align-content-start align-items-center">
              <div className="col-12 col-sm-12 col-md-10 mx-auto">
                <h1 className="mb-5 text-center">
                  <span className="color">¿Cómo</span> Funciona?
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="partner-container d-flex justify-content-center">
                  <div className="accordion" id="accordionExample">
                    <Faq
                      title="¿Cómo reservo las horas de ski?"
                      answer="Cada titular debe realizar su reserva a través de nuestro sistema
            seleccionando el día y centro de ski de preferencia."
                    />
                    <Faq
                      title="¿Cómo pago las horas de ski?"
                      answer="Al minuto de realizar la reserva, se les solicitará
                      un abono en caso de no tener integrado el sistema de
                      pago con una tarjeta de crédito. Luego de esquiar,
                      se cobrará el tiempo real esquiado, devolviendo el
                      saldo a la tarjeta de crédito o cobrando el monto
                      según lo definido por cada titular como forma de
                      pago. Este monto final pagado podrá realizarse
                      virtual o presencialmente en el centro de ski
                      correspondiente."
                    />

                    <Faq
                      title="¿Puedo usar mis horas compradas en distintos
                      horarios del día?"
                      answer="Sí, puedes coordinarlo directamente con el ejecutivo
                      Smarter Bot que estará presente en cada centro de
                      ski."
                    />

                    <Faq
                      title="¿Voy a tener una tarjeta de Smarter Bot con
                      beneficios y promociones?"
                      answer="Todos nuestros miembros tendrán beneficios según el
                      programa de membresía que elija. Podrá hacer uso de
                      estos beneficios con una identificación virtual
                      enviada por correo electrónico o con su carnet de
                      identidad, previa validación con el sistema. Los
                      beneficios se comunicarán oportunamente a través de
                      nuestra web y redes sociales."
                    />

                    <Faq
                      title="Si quiero esquiar más horas en un mismo día, ¿Lo
                      puedo hacer?"
                      answer="Sí. La cantidad de horas totales que esquíes depende
                      de ti. Lo importante es registrar la hora de inicio
                      y la hora de término de tu dia de ski."
                    />

                    <Faq
                      title="Había mucho taco en el camino y no alcancé a
                      llegar a la hora, ¿Qué hago?"
                      answer="No te preocupes. Justamente ese es uno de los
                      beneficios de este sistema. Pagas lo que usas. Tus
                      horas puedes utilzarlas hasta 45 minutos antes del
                      cierre del centro, que es a las 17:00 horas."
                    />

                    <Faq
                      title="Si me quedo alojando en la montaña, ¿Puedo comprar
                      horas para el día siguiente?"
                      answer="Sí, realizando la reserva a través del sistema,
                      siempre respetando las políticas propias de cada
                      centro de ski."
                    />

                    <Faq
                      title="¿Tengo límite de horas compradas al día?"
                      answer="No hay límite de compra de horas."
                    />

                    <Faq
                      title="¿Puedo comprar horas el mismo día?"
                      answer="Solo si hay stock disponible y previa coordinación
                      con las políticas propias de cada centro de ski"
                    />

                    <Faq
                      title="¿Puedo usar un mismo ticket para distintas
                      personas?"
                      answer="Depende de la política de cada centro de ski. En la
                      gran mayoría de los casos, el ticket es personal e
                      intransferible."
                    />

                    <Faq
                      title="¿Cómo puedo calcular si me conviene esquiar por
                      horas?"
                      answer="En la calculadora de precios que depende de cada
                      centro de ski. Ésta la tendremos disponible
                      oportunamente."
                    />

                    <Faq
                      title="Si no uso las horas que reservé, ¿Las puedo
                      cambiar para otro momento?"
                      answer="Puedes postergar una parte del saldo cargado, pero
                      no es un reembolso total ya que los cupos son
                      limitados. En caso de no presentarte el dia
                      reservado, parte del abono queda pendiente para la
                      siguiente reserva que realices. Reservas validas
                      sólo para el 2023."
                    />

                    <Faq
                      title="Si pagué pero me arrepentí y no voy a ir a
                      esquiar, ¿Puedo pedir la devolución de mi dinero?"
                      answer="Hasta 48 horas antes puedes eliminar tu reserva sin
                      costo. Después de eso, tendrá un costo que se
                      comunicará oportunamente."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </Fragment>
  );
}
