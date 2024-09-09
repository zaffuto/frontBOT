function Footer(props) {
  return (
    <footer className="footer mt-auto py-5">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <a className="footer-brand d-block" href="#">
              <img
                className="margin-top img-fluid"
                src="/images/smarterbot-white.svg"
                alt="Smarterbot logo"
              />
            </a>
            <p className="d-block mt-4">
              SmartBot 2023 –{" "}
              <a href="mailto:hola@smarterbot.cl">hola@smarterbot.cl</a>
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
                  alt="Instagram"
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
                  alt="Facebook"
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
                  alt="TikTok"
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
                  alt="YouTube"
                />
              </a>
              {/* Enlace a WhatsApp con icono personalizado */}
              <a
                href="https://wa.me/5492615571367?text=Hola,%20quiero%20saber%20más%20sobre%20Smarterbot..."
                className="whatsapp-icon"
                target="_blank"
              >
                <img
                  className="icon-follow-us align-middle img-fluid"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
                  width="40"
                  alt="WhatsApp"
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
                <a href="/precios">Tabla de precios</a>
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
