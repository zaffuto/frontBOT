function Footer(props) {
  return (
    <footer className="footer mt-auto py-5">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <a className="footer-brand d-block" href="#">
              <img
                className="margin-top img-fluid "
                src="/images/smarterbot-white.svg"
              />
            </a>
            <p className="d-block mt-4">
              SmartBot 2023 –{" "}
              <a href="mailto:clientes@smarterbot.cl">clientes@smarterbot.cl</a>
            </p>

            <div className="follow-us mt-4">
              <a
                href="https://www.instagram.com/smarterbot.cl/"
                target="_blank"
              >
                <img
                  className="icon-follow-us align-middle img-fluid"
                  src="/images/i-instagram.svg"
                  width="40"
                />
              </a>
              <a
                href="https://www.facebook.com/Smarterbot.Chile"
                target="_blank"
              >
                <img
                  className="icon-follow-us align-middle img-fluid"
                  src="/images/i-facebook.svg"
                  width="40"
                />
              </a>
              <a
                href="https://www.instagram.com/smarterbot.cl/"
                target="_blank"
              >
                <img
                  className="icon-follow-us align-middle img-fluid"
                  src="/images/i-tiktok.svg"
                  width="40"
                />
              </a>
              <a
                href="https://www.youtube.com/@smarterbotcl"
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
                <a href="/precios">Tarifas por hora</a>
              </li>
              <li>
                <a href="/politicas-de-privacidad">Política de Privacidad</a>
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
  );
}
export default Footer;
