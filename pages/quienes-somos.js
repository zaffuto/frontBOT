import { Montserrat } from "@next/font/google";
import { Fragment } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: "variable" });

export default function QuienesSomos() {
  const teamMembers = [
    {
      name: "Pedro José Zaffuto",
      role: "Especialista en IA y SCM",
      image: "https://placehold.co/525x687",
      description:
        "Pedro es un experto en la adopción de Inteligencia Artificial en sistemas SCM, con más de 10 años de experiencia en el sector.",
    },
    {
      name: "María López",
      role: "Gerente de Operaciones",
      image: "https://placehold.co/525x687",
      description:
        "María lidera nuestro equipo de operaciones, asegurando que todos los proyectos se ejecuten con la máxima eficiencia.",
    },
    {
      name: "Juan Pérez",
      role: "Desarrollador Senior",
      image: "https://placehold.co/525x687",
      description:
        "Juan es responsable del desarrollo de nuestras soluciones tecnológicas innovadoras.",
    },
  ];

  return (
    <Fragment>
      <Header title="Quiénes Somos" />
      <div className={`${montserrat.className} d-flex flex-column h-100`}>
        <Nav />
        <div className="section-single">
          <div className="container">
            <div className="row text-center">
              <div className="col-12">
                <h4 className="text-uppercase">¿Quiénes somos?</h4>
                <h1 className="mb-5">
                  <span className="color">Smarter</span> Bot
                </h1>
              </div>
            </div>
            <div className="row">
              {teamMembers.map((member, index) => (
                <div
                  className="col-12 col-sm-12 col-md-6 col-xl-4 mb-4"
                  key={index}
                >
                  <div className="card h-100 text-center">
                    <img
                      className="card-img-top img-fluid rounded"
                      src={member.image}
                      alt={member.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{member.name}</h5>
                      <p className="card-text">
                        <strong>{member.role}</strong>
                      </p>
                      <p className="card-text">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}
