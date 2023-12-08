import Link from "next/link";
function Nav(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <img
              className="margin-top img-fluid"
              src="/images/smarterbotv2.svg"
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
            <a className="btn btn-secondary mx-2 btn-header" href="/auth/login">
              Login
            </a>
            <a className="btn btn-primary btn-header mx-2 btn-sub" href="/subscribe"
            >Inscríbete gratis</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Nav;
